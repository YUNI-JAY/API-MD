# 创建页面

## 新增页面

::: tip

注意 ⚠️：配置页面一定要记得配置路由反之亦然。

由于 `children` 下面只声明了一个路由所以不会有展开箭头，如果`children`下面的路由个数大于 1 就会有展开箭头，如下面所示。
如果你想忽视这个自动判断可以使用 `alwaysShow: true`，这样它就会忽略之前定义的规则，一直显示根路由。

[更多配置路由方法参考 🫱](https://panjiachen.github.io/vue-element-admin-site/zh/guide/essentials/router-and-nav.html#%E8%B7%AF%E7%94%B1Ï)

:::

新建页面是在项目中创建新的视图组件，以展示不同的内容或功能。以下是创建新页面的一般步骤：

1. **在 `views` 目录下创建新的视图组件文件**：首先，你需要在 `views` 目录中创建一个新的 `.vue` 文件，以定义新的视图组件。你可以使用 Vue CLI 创建视图组件模板，也可以手动创建一个新的文件。

   例如，你可以在 `views` 目录下创建一个名为 `NewPage.vue` 的文件：

   ```vue
   <!-- src/views/NewPage.vue -->

   <template>
     <div>
       <h1>New Page</h1>
       <!-- 页面内容 -->
     </div>
   </template>

   <script>
   export default {
     name: "NewPage",
     // 可以在这里添加组件逻辑
   };
   </script>

   <style scoped>
   /* 页面样式可以放在这里 */
   </style>
   ```

2. **配置路由**：一旦创建了新的视图组件，你需要将其与应用程序的路由相关联，以便用户可以通过访问特定 URL 来访问新页面。

   - 使用 Vue Router，你需要在路由配置文件中添加一个新的路由记录，将新的视图组件与一个路径相关联。
   - 参考项目中`@/router/modules`中其他路由怎么配置的。

   ```javascript
   // src/router/modules/NewPage.js

   import Layout from "@/layout";
   import NewPage from "@/views/NewPage.vue";

   export default {
     path: "/new-page",
     component: Layout,
     name: "NewPage",
     alwaysShow: true,
     meta: {
       title: "新页面",
       icon: "（在ioncs文件下svg目录下添加svg样式图，在此处引入即可）",
       noCache: true, // 不缓存
     },
   };
   ```

## 新增组件

**请记住拆分组件最大的好处不是公用而是可维护性！**

- 在全局的 `@/components` 只会写一些全局的组件，如富文本，各种搜索组件，封装的日期组件等等能被公用的组件。

- 全局的业务组件统一维护在`plugins`中，每个页面或者模块特定的业务组件则会写在当前 views 下面。如：`@/views/article/components/xxx.vue`。这样拆分大大减轻了维护成本。

## 新增样式

页面的样式和组件是一个道理，全局的 `@/style` 放置一下全局公用的样式，每一个页面的样式就写在当前 `views`下面，请记住加上`scoped` 或者命名空间，避免造成全局的样式污染。

```css
<style>
/* global styles */
</style>

<style scoped>
/* local styles */
.xxx-container{
  /* name scoped */
  xxx
}
</style>
```
