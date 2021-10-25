<template>
  <div id="login-ui-container">
    <a-alert
      class="alert"
      v-if="isLoginFailedAlertShow"
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
import LanguageSelector from "@components/LanguageSelector.vue";
import SimpleTopBar from "@components/SimpleTopBar.vue";
import useLoginForm from "@composable/loginform";
import useLogin from "@/composable/login";
import { useI18n } from "vue-i18n";

const { currentComponent, onComponentChange } = useLoginForm();

const { onLoginSuccessed, onLoginFailed, isLoginFailedAlertShow } = useLogin();

// I18N
const { t } = useI18n();
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
