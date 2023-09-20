# 快速上手

::: tip
参考如下网址

[更多配置方法参考 🫱](https://panjiachen.github.io/vue-element-admin-site/zh/guide/essentials/router-and-nav.html#%E8%B7%AF%E7%94%B1Ï)

:::

**API-Gateway 需要 [Node.js (opens new window)](https://nodejs.org/en/)>= 8.9 npm >=3.0.0**

本文会帮助你检查并启动前端项目。如果你了解 Vue 直接看 packge.json 中的配置即可。

1. 先拉取项目 （首先你得有 api 网关的 GitLab 权限）

   - 需要 [访问行内 GitLab (opens new window)](http://version.pub.cqrcb.com)
   - 登录账号及密码
   - 找到 `Projects` => `Your Projects` => `esb/gateway-console`
   - 点击拷贝地址，然后打开 `Git` 并克隆该项目
   - 打开你的编辑器 ✍️

2. 使用你喜欢的包管理器进行安装依赖（看你自己在电脑装了`npm`/`yarn`/`pnpm`/`bun`亦或其他，这里演示使用`npm`）

   ```bash
   npm install
   ```

3. 安装好了之后开始尝试运行项目

   ```bash
   npm run dev
   ```

   注意

   如果安装出错建议删除 node_modules 后再重新 `npm install`

4. 项目运行成功后，项目会运行在本地

   -Local ： `http://localhost:9528/`

   -Netword:`http://基于你的电脑的IP地址:9528`

5. 推荐调试时 `F12` 打开浏览器调试器，避免到时候报错后面找不到问题所在。

6. sit 环境部署,运行以下命令产生`dist`文件

```bash
   npm run dev:sit
```

[点击这里查看 sit 运行地址(open new window)](http://10.187.101.130:8211)

其他问题 🙋 请阅读后续文章
