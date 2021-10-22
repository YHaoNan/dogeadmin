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

