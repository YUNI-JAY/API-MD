# 新增权限操作

## 新增权限

> 注意前后操作，在页面创建完成且路由配置完成后。
>
> 需要打开网页登录超管账号，找到控制台管理中的权限管理去配置页面级权限根据后端返回权限点自动筛选渲染左侧菜单栏，开发可不用操作。
>
> 注意 ⚠️：需要配置按钮级权限需要注意最后一点

:::tip

配置跟页面路由流程：

:::

登录超级管理员账号之后，打开控制台管理，找到权限管理

> 点击 新增权限

会出现一个弹层：（⚠️：该按钮只添加根路由点，若需要添加子路由权限或者按钮权限需要`在当前行点击新增子权限，不支持扩展三级路由`）

- 填入权限点 `xxx` (中文名称便于辨别该权限点用于什么)

- 填入权限点 `xxx` ，路由的完整路径（请避免命名上级目录重复） `/channel/channel_mtc/*` 此路由则为该页面下，子路由页面及操作按钮权限都 🈶️。

- 描述 用于填写该点位描述

:::tip

配置子页面路由流程：

:::

登录超级管理员账号之后，打开控制台管理，找到权限管理

> ⚠️ 点击当前行 新增子权限

会出现一个弹层：（⚠️：该按钮只添加子路由点`在当前行点击新增子权限，不支持扩展三级路由`）

- 填入权限点 `xxx` (中文名称便于辨别该权限点用于什么)

- 填入权限点 `xxx` ，路由的完整路径（请避免命名上级目录重复） eg:`/channel/channel_mtc/create` 渠道新增页面权限，亦可作为按钮控制权限。

- 描述 用于填写该点位描述

:::tip

配置按钮级权限流程：

:::

登录超级管理员账号之后，打开控制台管理，找到权限管理

> ⚠️ 点击当前行 新增子权限

会出现一个弹层：（⚠️：该按钮只添加子路由点`在当前行点击新增子权限，不支持扩展三级路由`）

- 填入权限点 `xxx` (中文名称便于辨别该权限点用于什么)

- 填入权限点 `xxx` ，路由的完整路径（请避免命名上级目录重复） eg:`/channel/channel_mtc/create` 渠道新增页面权限，亦可作为按钮控制权限。

- 描述 用于填写该点位描述

同第二点操作没多大区别，需要注意的是：

操作按钮时需要使用以下方法：举个例子 🌰

```js
// 如果是某个页面的发布功能
publish(row){
  let per = ['/api/api_mtc/publish','/api/api_mtc/*'] //声明一个数组，数组里包含该权限点及该路由下所有权限
  let perList = JSON.parse(localStorage.getItem('PERMISSIONLIST')) // 取出后端返回的权限点列表
  if(this.buttonControl(per,perList)) { // buttonControl 在main.js 已经全局挂载到vue实例上了
    // 拥有权限的逻辑处理
  } else {
    this.$message.error('没有权限')
  }
}
```