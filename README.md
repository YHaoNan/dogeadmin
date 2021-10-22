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

# 安装Vuex
```bash
npm install vuex@next --save
```

# 安装AntDV
```bash
npm install ant-design-vue@next --save
```

## 测试
```vue
<script setup lang="ts">
// 导入组件
import { DatePicker } from 'ant-design-vue'
// 导入CSS
import 'ant-design-vue/dist/antd.css'
</script>

<template>
  <date-picker></date-picker>
</template>
```

## 按需加载样式
之前使用手动导入css的办法，麻烦不说，而且会增大我们最终打包应用的体积

```
➜  DogeAdmin git:(master) ✗ npm run build

> dogeadmin@0.0.0 build
> vue-tsc --noEmit && vite build

vite v2.6.10 building for production...
✓ 990 modules transformed.
dist/index.html                  0.48 KiB
dist/assets/index.bd8fb172.js    1.43 KiB / gzip: 0.79 KiB
dist/assets/index.3be3a084.css   548.48 KiB / gzip: 64.96 KiB
dist/assets/vendor.18cab0ca.js   349.05 KiB / gzip: 113.47 KiB
```

使用[vite-plugin-style-import](https://www.npmjs.com/package/vite-plugin-style-import)实现按需加载。

```bash
npm i vite-plugin-style-import
```

```diff
 import { defineConfig } from 'vite'
 import vue from '@vitejs/plugin-vue'
 import { resolve } from 'path'
+import styleImport from 'vite-plugin-style-import'
 
 // https://vitejs.dev/config/
 export default defineConfig({
-  plugins: [vue()],
+  plugins: [
+    vue(),
+    styleImport({
+      libs: [{
+        libraryName: 'ant-design-vue',
+        esModule: true,
+        resolveStyle: (name) => `ant-design-vue/es/${name}/style/css`
+      }]
+    })
+  ],
...
```

现在无需再次导入css了
`HelloWorld.vue`
```vue
<script setup lang="ts">
import { DatePicker } from 'ant-design-vue'
</script>

<template>
  <h2>{{ $route.params.msg }}</h2>
  <date-picker></date-picker>
</template>
```
