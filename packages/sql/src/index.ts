import { Plugin, MountData, Next, DeployData } from '@faasjs/func';
import Logger from '@faasjs/logger';
import deepMerge from '@faasjs/deep_merge';
import { Sqlite, SqliteConfig } from './sqlite';
import { Postgresql, PostgresqlConfig } from './postgresql';
import { Mysql, MysqlConfig } from './mysql';

export interface Adapter {
  pool: any;
  query: (sql: string, values?: any) => Promise<any[]>;
}

export interface SqlConfig extends SqliteConfig, PostgresqlConfig, MysqlConfig {
  pool?: any;
  ssl?: any;
}

/**
 * 数据库插件
 */
export class Sql implements Plugin {
  public type: string;
  public name: string;
  public config: SqlConfig;
  public adapterType?: string;
  public adapter?: Adapter;
  public logger: Logger;

  /**
   * 创建插件实例
   * @param config {object} 配置
   * @param config.name {string} 配置名
   * @param config.adapterType {string} 适配类型
   * @param config.config {object} 数据库配置
   * @param config.config.pool {Database} 数据库连接实例
   */
  constructor (config?: {
    name?: string;
    adapterType?: string;
    config?: SqlConfig;
  }) {
    this.type = 'sql';

    if (config) {
      this.name = config.name || 'sql';
      this.adapterType = config.adapterType;
      this.config = config.config || Object.create(null);
    } else {
      this.name = 'sql';
      this.config = Object.create(null);
    }
    this.logger = new Logger('Sql');
  }

  public async onDeploy (data: DeployData, next: Next): Promise<void> {
    switch (this.adapterType || data.config.plugins[this.name || this.type].adapter) {
      case 'sqlite':
        data.dependencies['sqlite3'] = '*';
        break;
      case 'postgresql':
        data.dependencies['pg'] = '*';
        break;
      case 'mysql':
        data.dependencies['mysql'] = '*';
        break;
      default:
        throw Error(`[Sql] Unsupport type: ${this.adapterType || data.config.plugins[this.name || this.type].type}`);
    }
    await next();
  }

  public async onMount (data: MountData, next: Next): Promise<void> {
    this.logger.debug('[Mount] begin');
    this.logger.time('sql');
    if (data.config.plugins[this.name]) 
      this.config = deepMerge(data.config.plugins[this.name || this.type].config, this.config);
    

    this.logger.debug('conncet: %o', this.config);

    if (!this.adapterType) 
      this.adapterType = data.config.plugins[this.name || this.type].adapter;
    

    switch (this.adapterType) {
      case 'sqlite':
        this.adapter = new Sqlite(this.config);
        break;
      case 'postgresql':
        this.adapter = new Postgresql(this.config);
        break;
      case 'mysql':
        this.adapter = new Mysql(this.config);
        break;
      default:
        throw Error(`[Sql] Unsupport type: ${this.type}`);
    }

    this.logger.timeEnd('sql', '[Mount] end');

    await next();
  }

  /**
   * 执行 SQL
   * @param sql {string} SQL 语句
   * @param values {any} 参数值
   */
  public async query (sql: string, values?: any): Promise<any[]> {
    this.logger.debug('query begin: %s %o', sql, values);
    this.logger.time(sql);
    try {
      const res = await this.adapter.query(sql, values);
      this.logger.timeEnd(sql, 'query end: %s %o', sql, res);
      return res;
    } catch (error) {
      this.logger.timeEnd(sql, 'query end: %s', sql);
      throw error;
    }
  }

  /**
   * 执行多条 SQL
   * @param sqls {string[]} SQL 语句
   */
  public async queryMulti (sqls: string[]): Promise<any[]> {
    const results = [];
    for (const sql of sqls) 
      results.push(await this.query(sql));
    
    return results;
  }

  /**
   * 执行 SQL 并只返回第一条结果
   * @param sql {string} SQL 语句
   * @param values {any} 参数值
   */
  public async queryFirst (sql: string, values?: any): Promise<any> {
    return this.query(sql, values).then((res: any[]) => res[0]);
  }
}
