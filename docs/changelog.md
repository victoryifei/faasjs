# 更新日志

注：可点击版本名查看完整代码变更记录。

## Beta

[`v0.0.2-beta.26 (2020-03-01)`](https://github.com/faasjs/faasjs/compare/v0.0.2-beta.25...v0.0.2-beta.26)

- [新增] `@faasjs/cos-secrets`，一个基于 COS 的密钥解决方案。
- [优化] 将文档移入 `docs` 文件夹。
- [优化] 将示例移入 `examples` 文件夹。

[`v0.0.2-beta.25 (2020-02-27)`](https://github.com/faasjs/faasjs/compare/v0.0.2-beta.24...v0.0.2-beta.25)

- [优化] `@faasjs/tencentcloud` 腾讯云故障，禁用别名功能。

[`v0.0.2-beta.24 (2020-02-25)`](https://github.com/faasjs/faasjs/compare/v0.0.2-beta.22...v0.0.2-beta.24)

- [优化] `@faasjs/graphql-server` 允许 `schemas` 参数为函数，且支持异步函数。
- [优化] `@faasjs/graphql-server` 导出变量新增 `GraphQLSchemaModule`。

[`v0.0.2-beta.22 (2020-02-24)`](https://github.com/faasjs/faasjs/compare/v0.0.2-beta.20...v0.0.2-beta.22)

- [修复] `@faasjs/typeorm` 修复配置项错误。
- [修复] `@faasjs/tencentcloud` 修复部署时打包依赖项的错误。

[`v0.0.2-beta.20 (2020-02-23)`](https://github.com/faasjs/faasjs/compare/v0.0.2-beta.18...v0.0.2-beta.20)

- [新增] 新增 `@faasjs/typeorm`。
- [优化] `@faasjs/sql` 单元测试新增 mysql 和 postgresql 的测试。

[`v0.0.2-beta.18 (2020-02-22)`](https://github.com/faasjs/faasjs/compare/v0.0.2-beta.16...v0.0.2-beta.18)

- [优化] `@faasjs/tencentcloud` 云函数新增层和死信队列接口，COS 增加文件夹名。
- [优化] `@faasjs/load` 关闭 rollup 的警告信息。

[`v0.0.2-beta.16 (2020-02-21)`](https://github.com/faasjs/faasjs/compare/v0.0.2-beta.13...v0.0.2-beta.16)

- [优化] `@faasjs/graphql-server` 内置 `@faasjs/http`。
- [优化] `@faasjs/tencentcloud` 云函数环境变量新增 `FaasLog=debug`。

[`v0.0.2-beta.13 (2020-02-20)`](https://github.com/faasjs/faasjs/compare/v0.0.2-beta.10...v0.0.2-beta.13)

- [优化] `@faasjs/tencentcloud` 新增单元测试。
- [优化] `@faasjs/request` 新增 `file` 和 `downloadStream` 参数。
- [优化] `@faasjs/graphql-server` 规范化配置项，并将 `invokeData` 作为 context。

[`v0.0.2-beta.10 (2020-02-16)`](https://github.com/faasjs/faasjs/compare/v0.0.2-beta.9...v0.0.2-beta.10)

- [优化] `@faasjs/eslint-config-recommended` 更新 eslint rules。

[`v0.0.2-beta.9 (2020-02-15)`](https://github.com/faasjs/faasjs/compare/v0.0.2-beta.8...v0.0.2-beta.9)

- [优化] 恢复腾讯云的别名功能。
- [优化] 修复和优化 travis-ci。

[`v0.0.2-beta.8 (2020-02-14)`](https://github.com/faasjs/faasjs/compare/v0.0.2-beta.7...v0.0.2-beta.8)

- [优化] `faasjs` 不再内置 `@faasjs/graphql-server`，需手动添加使用。

[`v0.0.2-beta.7 (2020-02-13)`](https://github.com/faasjs/faasjs/compare/v0.0.2-beta.5...v0.0.2-beta.7)

- [修复] `@faasjs/load` 修复打包时遇到内置模块报错的问题。
- [优化] `@faasjs/eslint-config-recommended` 更新 eslint rules。

[`v0.0.2-beta.5 (2020-02-10)`](https://github.com/faasjs/faasjs/compare/v0.0.2-beta.4...v0.0.2-beta.5)

- [优化] `@faasjs/test` 将 `jest` 添加为依赖项。

[`v0.0.2-beta.4 (2020-02-09)`](https://github.com/faasjs/faasjs/compare/v0.0.2-beta.2...v0.0.2-beta.4)

- [优化] `@faasjs/func` handler 参数改为可选项。
- [新增] `@faasjs/graphql-server` 试验性支持 graphQL。

[`v0.0.2-beta.2 (2020-02-08)`](https://github.com/faasjs/faasjs/compare/v0.0.2-beta.1...v0.0.2-beta.2)

- [优化] `@faasjs/tencentcloud` 优化了部署云函数时的日志输出。

[`v0.0.2-beta.1 (2020-02-07)`](https://github.com/faasjs/faasjs/compare/v0.0.1-beta.31...v0.0.2-beta.1)

- [优化] `@faasjs/tencentcloud` 补全已正式发布的云函数配置项。

[`v0.0.1-beta.31 (2020-02-06)`](https://github.com/faasjs/faasjs/compare/v0.0.1-beta.29...v0.0.1-beta.31)

- [优化] `faasjs` 将 Sql 适配包从 `faasjs` 中移除。
- [优化] `@faasjs/eslint-config-recommended` 更新 eslint rules。

[`v0.0.1-beta.29 (2020-02-04)`](https://github.com/faasjs/faasjs/compare/v0.0.1-beta.27...v0.0.1-beta.29)

- [修复] `@faasjs/tencentcloud` 修复由于禁用别名功能造成的 BUG。

[`v0.0.1-beta.27 (2020-02-03)`](https://github.com/faasjs/faasjs/compare/v0.0.1-beta.25...v0.0.1-beta.27)

- [优化] `@faasjs/tencentcloud` 由于腾讯云故障，暂时禁用别名功能。

[`v0.0.1-beta.25 (2020-02-02)`](https://github.com/faasjs/faasjs/compare/v0.0.1-beta.23...v0.0.1-beta.25)

- [修复] `@faasjs/tencentcloud` 修复腾讯云部署 BUG。
- [优化] `@faasjs/tencentcloud` 腾讯云云函数内存默认从 128 降低为 64。
- [优化] `@faasjs/tencentcloud` 默认环境变量新增 NODE_ENV，值为部署环境的名字。

[`v0.0.1-beta.23 (2020-02-01)`](https://github.com/faasjs/faasjs/compare/v0.0.1-beta.21...v0.0.1-beta.23)

- [修复] 修复错误的版本号。
- [优化] `@faasjs/load` 移除 loadNpmVersion。

[`v0.0.1-beta.21 (2020-01-27)`](https://github.com/faasjs/faasjs/compare/v0.0.1-beta.20...v0.0.1-beta.21)

- [修复] `@faasjs/tencentcloud` API 网关 BUG。
- [优化] `@faasjs/func` 云函数支持 callback。

[`v0.0.1-beta.20 (2020-01-26)`](https://github.com/faasjs/faasjs/compare/v0.0.1-beta.18...v0.0.1-beta.20)

- [修复] `@faasjs/tencentcloud` API 网关 BUG。
- [优化] `@faasjs/tencentcloud` 提升打包速度。

[`v0.0.1-beta.18 (2020-01-25)`](https://github.com/faasjs/faasjs/compare/v0.0.1-beta.16...v0.0.1-beta.18)

- [修复] `@faasjs/tencentcloud` 修复云函数命名错误。
- [优化] `@faasjs/server` 本地请求入参 method 改名为 httpMethod，增加 path 参数。

[`v0.0.1-beta.16 (2020-01-13)`](https://github.com/faasjs/faasjs/compare/v0.0.1-beta.14...v0.0.1-beta.16)

- [修复] `@faasjs/load` 修复 rollup 配置。
- [修复] 修复 FaasJS 项目自动化测试配置。

[`v0.0.1-beta.14 (2020-01-04)`](https://github.com/faasjs/faasjs/compare/v0.0.1-beta.12...v0.0.1-beta.14)

- [优化] `@faasjs/http` 移除无用的依赖项。
- [优化] `@faasjs/tencentcloud` 优化打包配置。

[`v0.0.1-beta.12 (2020-01-02)`](https://github.com/faasjs/faasjs/compare/v0.0.1-beta.11...v0.0.1-beta.12)

- [修复] 在 `faasjs` 中补上依赖项 `@faasjs/http`。

[`v0.0.1-beta.11 (2020-01-01)`](https://github.com/faasjs/faasjs/compare/v0.0.1-beta.10...v0.0.1-beta.11)

- [优化] 优化 FaasJS 项目打包配置。

[`v0.0.1-beta.10 (2019-12-30)`](https://github.com/faasjs/faasjs/compare/v0.0.1-beta.8...v0.0.1-beta.10)

- [优化] 优化 FaasJS 项目的代码规范测试和自动化测试。
- [修复] `@faasjs/tencentcloud` 修复云函数部署时未完成部署就删除了 COS 代码包的问题。

[`v0.0.1-beta.8 (2019-12-26)`](https://github.com/faasjs/faasjs/compare/v0.0.1-beta.7...v0.0.1-beta.8)

- [优化] 更新 VS Code 配置项以适应新版 ESlint。
- [优化] `@faasjs/tencentcloud` 更新云函数时会等待其更新生效后才进行后续步骤。
- [优化] `@faasjs/tencentcloud` 使用本地 node_modules 文件加速部署。

[`v0.0.1-beta.7 (2019-11-05)`](https://github.com/faasjs/faasjs/compare/v0.0.1-beta.6...v0.0.1-beta.7)

- [优化] `@faasjs/logger` 性能优化，并移除测试用的 lastOuput 属性。
- [优化] `@faasjs/server` 移除 response 的日志输出以优化性能。
- [优化] `@faasjs/http` 直接使用 request_id 作为响应头 X-Request-Id 的值。
- [修复] `@faasjs/http` 使用 = 作为路径前缀避免模糊匹配。
- [删除] 移除周刊。

[`v0.0.1-beta.6 (2019-10-25)`](https://github.com/faasjs/faasjs/compare/v0.0.1-beta.5...v0.0.1-beta.6)

- [修复] `@faasjs/logger` timeEnd 出错时的错误信息从 error 降级为 warn。

[`v0.0.1-beta.5 (2019-10-25)`](https://github.com/faasjs/faasjs/compare/v0.0.1-beta.4...v0.0.1-beta.5)

- [优化] 新增性能测试用例。
- [修复] `@faasjs/logger` timeEnd 的 key 重复或未知时，报错信息从 error 降级为 warn。

[`v0.0.1-beta.4 (2019-10-22)`](https://github.com/faasjs/faasjs/compare/v0.0.1-beta.2...v0.0.1-beta.4)

- [新增] `@faasjs/http` cookie 新增 `sameSite` 选项。
- [优化] FaasJS 项目新增代码测试覆盖率。

`2019-10-21`

- [优化] 使用 lerna 管理 FaasJS 核心库。
- [优化] `@faasjs/request` 新增 timeout 和 auth 选项。
- [修复] 修正 `@faasjs/http` 遇到返回值为 null 时的错误。

`2019-10-16`

- [新增] 示例项目新增 [knex](https://github.com/faasjs/examples/tree/master/knex)。

`2019-10-15`

- [优化] 将 FaasJS 所有库都并入了 [faasjs/faasjs](https://github.com/faasjs/faasjs/tree/master/packages) 项目中，便于统一管理和更新。

`2019-10-13`

- [新增] [FaasJS 周刊](https://faasjs.com/weekly/) 开始试运行。

`2019-10-11`

- [优化] 教程中添加新加入的命令行指令。
- [新增] 官网新增 [支持 FaasJS](https://faasjs.com/contribute.html)。
- [修复] `@faasjs/func` 当 handler 没有返回时出现的一个判断异常。

`2019-10-09`

- [新增] 命令行工具新增 `yarn new func` 指令，用于快速创建云函数文件及其测试脚本，具体用法可见 `yarn new -h`。
- [优化] `create-faas-app` 创建的项目中加入 `.vscode/settings.json` 文件，用于优化 VS Code 下的编程体验。

`2019-10-08`

- [新增] 命令行工具 `create-faas-app` 用于快速创建 FaasJS 项目，可直接通过 `npx create-faas-app` 使用。

`2019-09-30`

- [发布] 结束 `Alpha` 阶段，开始 `Beta` 公测阶段。

## Alpha

`2019-04-13`

- [发布] FaasJS `Alpha` 阶段开发开始。
