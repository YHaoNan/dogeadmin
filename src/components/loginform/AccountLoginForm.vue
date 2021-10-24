<template>
  <div>
    <h2>{{ $t("account.login") }}</h2>
    <a-input
      class="form-input"
      v-model:value="account"
      :placeholder="$t('account.account')"
    />
    <a-input-password
      class="form-input"
      v-model:value="password"
      :placeholder="$t('account.password')"
    />

    <div class="remember-me-and-forget">
      <a-checkbox v-model:checked="rememberMe">{{
        $t("account.rememberMe")
      }}</a-checkbox>
      <a-button type="link">{{ $t("account.forgetPassword") }}</a-button>
    </div>

    <ButtonGroup class="form-btn-group" direction="column">
      <a-button class="form-btn" type="primary">{{
        $t("account.login")
      }}</a-button>
      <a-button
        class="form-btn"
        @click="emit('component-change', LoginFormComponents.PhoneLoginForm)"
        >{{ $t("account.loginByPhone") }}</a-button
      >
      <a-button
        class="form-btn"
        @click="emit('component-change', LoginFormComponents.QRCodeLoginForm)"
        >{{ $t("account.loginByQRCode") }}</a-button
      >
      <a-button
        class="form-btn"
        @click="emit('component-change', LoginFormComponents.RegisterForm)"
        >{{ $t("account.registe") }}</a-button
      >
    </ButtonGroup>
    <div class="other-login-method">
      <div class="label">{{ $t("account.otherLoginMethods") }}</div>
      <div class="login-methods">
        <img src="@assets/svg/github-fill.svg" alt="" />
        <img src="@assets/svg/wechat-fill.svg" alt="" />
        <img src="@assets/svg/twitter-circle-fill.svg" alt="" />
        <img src="@assets/svg/google-circle-fill.svg" alt="" />
        <img src="@assets/svg/alipay-circle-fill.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ButtonGroup from "@components/ButtonGroup.vue";
import { LoginFormComponents } from "@/global/global";
import "@css/login-form.css";

const account = ref("123456");
const password = ref("123456");
const rememberMe = ref(false);

const emit = defineEmits(["component-change"]);
</script>

<style scoped></style>
