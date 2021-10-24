# DogeAdmin

Vite2 + Vue3 + TypeScript + Vuex + VueRouter + Ant Design Vue

# 创建项目

```bash
npm init vite@latest DogeAdmin -- --template vue-ts
cd DogeAdmin
npm install
npm run dev
```

# 安装 TypeScript 的 Node 类型定义

创建项目后，发现使用 node 自带的模块和变量时都找不到。比如找不到模块`path`。

```bash
npm i @types/node -D
```

如果不知道`@types`的工作原理，可以参考[types 和 @types 是什么？](https://zhuanlan.zhihu.com/p/194196536)、[深入理解 TypeScript-@types](https://jkchao.github.io/typescript-book-chinese/typings/types.html#%E4%BD%BF%E7%94%A8-types)

# 创建别名

在项目中，我们经常有相互引用的资源，比如我们要在一个组件中引入另一个组件，通常会写

```js
import Card from "./components/Card.vue";
```

引入一张图片时

```js
import Card from "../assets/imgs/01.png";
```

我们总需要考虑层级关系并找到对应的资源，配置别名后这些问题就可以得到解决。

```ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@components": resolve(__dirname, "src/components"),
      "@assets": resolve(__dirname, "src/assets"),
      "@router": resolve(__dirname, "src/router"),
      "@store": resolve(__dirname, "src/store"),
      "@composable": resolve(__dirname, "src/composable"),
    },
  },
});
```

然后在代码中，我们就可以通过如下方式来导入了。

```ts
import HelloWorld from "@components/HelloWorld.vue";
```

# 安装 VueRouter

```bash
npm install vue-router@4
```

## 定义 router

创建`src/router/router.ts`，作为一个小测试

```ts
import { createWebHashHistory, createRouter } from "vue-router";
import HelloWorld from "@components/HelloWorld.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/helloworld",
    },
    {
      path: "/helloworld",
      component: HelloWorld,
    },
    {
      path: "/test/:msg",
      component: HelloWorld,
    },
  ],
});
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

其实只有你使用 ts 的时候编辑器无法解析，所以像`components`和`assets`这两个路径其实没必要配置，它们从不使用 ts。`allowJs`也不必配置。

## 测试路由

`App.vue`

```vue
<script setup lang="ts"></script>

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

# 安装 Vuex

```bash
npm install vuex@next --save
```

# 安装 AntDV

```bash
npm install ant-design-vue@next --save
```

## 测试

```vue
<script setup lang="ts">
// 导入组件
import { DatePicker } from "ant-design-vue";
// 导入CSS
import "ant-design-vue/dist/antd.css";
</script>

<template>
  <date-picker></date-picker>
</template>
```

## 按需加载样式

之前使用手动导入 css 的办法，麻烦不说，而且会增大我们最终打包应用的体积

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

现在无需再次导入 css 了
`HelloWorld.vue`

```vue
<script setup lang="ts"></script>

<template>
  <h2>{{ $route.params.msg }}</h2>
  <date-picker></date-picker>
</template>
```

> 注意：后期项目选择使用了 AntDV 官方推荐的`vite-plugin-components`进行按需加载

# 国际化

安装 i18n

```bash
npm install vue-i18n@next
```

然后配置

```ts
import { createI18n } from "vue-i18n";
import en from "./languages/en";
import zh from "./languages/zh";

// 创建多语言messages
const messages = {
  en,
  zh,
};

// 创建I18N实例，设置本地语言是zh，失败后的替代语言也是zh，这样我们可以在en中遇到不确定的单词表示时不设置它，默认就会显示中文
const i18n = createI18n({
  locale: "zh",
  fallbackLocale: "zh",
  messages,
});

export default i18n;
```

编写各个语言的文件

```ts
// zh
export default {
  account: {
    login: "登录",
    loginByPhone: "手机登录",
    loginByQRCode: "二维码登录",
    registe: "注册",
    otherLoginMethods: "其他登陆方式",
    rememberMe: "记住我",
    forgetPassword: "忘记密码?",
    sendValiCode: "发送验证码",
    account: "账号",
    password: "密码",
    valicode: "验证码",
    qrCode: "二维码",
    phone: "手机号",
    cannotReceiveValiCode: "无法接收验证码?",
    return: "返回",
  },
};
```

```ts
// en
export default {
  account: {
    login: "Login",
    loginByPhone: "Use Phone",
    loginByQRCode: "QRCode",
    registe: "Sign In",
    otherLoginMethods: "Other Login Methods",
    rememberMe: "Remember Me",
    forgetPassword: "Forgot my password?",
    sendValiCode: "Send",
    account: "Account",
    password: "Password",
    valicode: "Valicode",
    qrCode: "QR Code",
    phone: "Phone",
    cannotReceiveValiCode: "Cannot receive valicode?",
    return: "Return",
  },
};
```

在`main.ts`中导入

```ts
import i18n from "@/global/i18n_config";

createApp(App).use(router).use(i18n).mount("#app");
```

接下来可以在 components 中直接使用

```html
<h2>{{ $t("account.login") }}</h2>
```

在 setup 中可以这样用

```ts
import { useI18n } from "vue-i18n";
import "@css/login-form.css";

const { t } = useI18n();

t("account.phone");
```

如果在 setup 中写了上面的代码，那么 t 也被暴露到组件里，在组件中也可以使用`t`了。

```html
<h2>{{ t("account.loginByQRCode") }}</h2>
```

推荐使用`useI18n`的写法。

还有，如果你想让 AntDV 的组件也支持多语言，那么可以参考[国际化](https://2x.antdv.com/docs/vue/i18n-cn)、[ConfigProvider](https://2x.antdv.com/components/config-provider-cn)

更多有关 I18N 的内容可以参考：[Vue I18n - Guide](https://vue-i18n.intlify.dev/guide/#javascript)

推荐的 VSCode 插件：[vue-swift-i18n](https://marketplace.visualstudio.com/items?itemName=RichieChoo.vue-swift-i18n)
