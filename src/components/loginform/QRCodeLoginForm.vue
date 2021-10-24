<template>
  <div>
    <h2>{{ t("account.loginByQRCode") }}</h2>
    <img class="qr-code" src="@assets/imgs/tmp-qrcode.png" alt="" />

    <ButtonGroup class="form-btn-group" direction="column">
      <a-button
        class="form-btn"
        @click="emit('component-change', LoginFormComponents.AccountLoginForm)"
      >
        {{ t("account.return") }}
      </a-button>
    </ButtonGroup>
  </div>
</template>

<script setup lang="ts">
import { LoginFormComponents } from "@/global/global";
import { useI18n } from "vue-i18n";
import "@css/login-form.css";

const { t } = useI18n();
const emit = defineEmits(["component-change"]);
</script>
<style scoped>
.qr-code {
  display: inline-block;
  width: 80%;
}
.form-btn-group {
  margin-top: 20px;
}
</style>
