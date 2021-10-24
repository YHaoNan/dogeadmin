<template>
  <div id="login-ui-container">
    <a-alert
      class="alert"
      v-if="isAlertShow"
      type="error"
      :message="t('errors.userNotFound')"
      banner
    />
    <SimpleTopBar></SimpleTopBar>
    <a-card id="login-card" :bordered="false">
      <transition name="fade" mode="out-in">
        <keep-alive>
          <component
            :is="currentComponent"
            @componentChange="onComponentChange"
            @loginSuccessed="onLoginSuccessed"
            @loginFailed="onLoginFailed"
          ></component>
        </keep-alive>
      </transition>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { delaySetRef } from "@/global/utils";

import SimpleTopBar from "@components/SimpleTopBar.vue";
import useFormLogin from "@composable/loginform";
import { useI18n } from "vue-i18n";
import { User } from "@/global/global";

const { currentComponent, onComponentChange } = useFormLogin();

const { t } = useI18n();
const isAlertShow = ref(false);

const onLoginSuccessed = (user: User) => {
  console.log("登录成功", user);
};

const onLoginFailed = (err: string) => {
  console.log("登陆失败", err);
  isAlertShow.value = true;
  delaySetRef(isAlertShow, false, 3000);
};
</script>

<style scoped>
#login-ui-container {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #293146;
  padding: 1em;
}
#login-card {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  transform: translateY(-50%) translateX(-50%);

  font-size: 0.8em;
  text-align: center;
  border-radius: 0.5em;
  box-shadow: 10px 10px 40px -15px rgba(0, 0, 0, 0.75);
}
.fade-enter-from {
  opacity: 0;
  transform: translateX(20px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.1s cubic-bezier(0.3, 0.44, 0.34, 0.69);
}
</style>
