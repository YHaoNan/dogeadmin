# DogeAdmin

Vite2 + Vue3 + TypeScript + Vuex + VueRouter + Ant Design Vue

# 创建项目
```bash
npm init vite@latest DogeAdmin -- --template vue-ts
cd DogeAdmin
npm install
npm run dev
```

# 安装TypeScript的Node类型定义
创建项目后，发现使用node自带的模块和变量时都找不到。比如找不到模块`path`。

```bash
npm i @types/node -D
```
如果不知道`@types`的工作原理，可以参考[types 和 @types 是什么？](https://zhuanlan.zhihu.com/p/194196536)、[深入理解TypeScript-@types](https://jkchao.github.io/typescript-book-chinese/typings/types.html#%E4%BD%BF%E7%94%A8-types)

# 创建别名
在项目中，我们经常有相互引用的资源，比如我们要在一个组件中引入另一个组件，通常会写

```js
import Card from './components/Card.vue'
```

引入一张图片时
```js
import Card from '../assets/imgs/01.png'
```

我们总需要考虑层级关系并找到对应的资源，配置别名后这些问题就可以得到解决。

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@router': resolve(__dirname, 'src/router'),
      '@store': resolve(__dirname, 'src/store'),
      '@composable': resolve(__dirname, 'src/composable')
    }
  }
})
```

然后在代码中，我们就可以通过如下方式来导入了。
```ts
import HelloWorld from '@components/HelloWorld.vue'
```

# 安装VueRouter
```bash
npm install vue-router@4
```
## 定义router
创建`src/router/router.ts`，作为一个小测试

```ts
import { createWebHashHistory, createRouter } from 'vue-router'
import HelloWorld from '@components/HelloWorld.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/helloworld'
    }, {
      path: '/helloworld',
      component: HelloWorld
    }, {
      path: '/test/:msg',
      component: HelloWorld
    }
  ]
})
```
## 应用路由
`src/main.ts`
```diff
import { createApp } from 'vue'
import App from './App.vue'
+import router from '@router/router'

-createApp(App).mount('#app')
+createApp(App).use(router).mount('#app')
```

`import router from '@router/router`会报错，修改`tsconfig.json`

```diff
{
  "compilerOptions": {
    ...省略一些...
+    "baseUrl": "./",
+    "allowJs": true,
+    "paths": {
+      "@/*": ["src/*"],
+      "@components/*": ["src/components/*"],
+      "@composable/*": ["src/composable/*"],
+      "@router/*": ["src/router/*"],
+      "@store/*": ["src/store/*"],
+      "@assets/*": ["src/assets/*"],
+    }
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"]
}
```

其实只有你使用ts的时候编辑器无法解析，所以像`components`和`assets`这两个路径其实没必要配置，它们从不使用ts。`allowJs`也不必配置。

## 测试路由
`App.vue`
```vue
<script setup lang="ts">

</script>

<template>
  <router-link to="/helloworld">Hello</router-link>
  <router-link to="/test/TestMessage">Test</router-link>
  <router-view></router-view>
</template>

```

`HelloWorld.vue`
```vue
<template>
  <!--省略-->
  <h2>{{ $route.params.msg }}</h2>
  <!--省略-->
</template>
```

