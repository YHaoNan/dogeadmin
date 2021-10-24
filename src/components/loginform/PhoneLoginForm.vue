<template>
  <div>
    <h2>{{ $t("account.loginByPhone") }}</h2>
    <a-input
      class="form-input"
      v-model:value="phoneNumber"
      type="number"
      :placeholder="$t('account.phone')"
    />
    <a-row type="flex" :wrap="false" justify="center">
      <a-col flex="auto">
        <a-input
          class="form-input"
          v-model:value="valicode"
          :maxlength="6"
          type="number"
          :placeholder="$t('account.valicode')"
        />
      </a-col>
      <a-col flex="10px">
        <a-button
          class="form-input"
          type="primary"
          @click="sendValiCode"
          :disabled="inSendingInterval"
        >
          {{ validesc }}
        </a-button>
      </a-col>
    </a-row>

    <div style="text-align: right">
      <a-button type="link">{{ $t("account.cannotReceiveValiCode") }}</a-button>
    </div>

    <ButtonGroup class="form-btn-group" direction="column">
      <a-button class="form-btn" type="primary" @click="callLogin">{{
        $t("account.login")
      }}</a-button>
      <a-button
        class="form-btn"
        @click="emit('component-change', LoginFormComponents.AccountLoginForm)"
        >{{ $t("account.return") }}</a-button
      >
    </ButtonGroup>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ButtonGroup from "@components/ButtonGroup.vue";
import { LoginFormComponents } from "@/global/global";
import useLogin from "@composable/login";
import "@css/login-form.css";
import useValiCode from "@composable/valicode";

const phoneNumber = ref("");
const { valicode, validesc, inSendingInterval, sendValiCode } = useValiCode();
const { loginByPhone } = useLogin();

const callLogin = () => {
  loginByPhone(phoneNumber.value, valicode.value).then(
    (user) => {
      emit("login-successed", user);
    },
    (err) => {
      emit("login-failed", err);
    }
  );
};

const emit = defineEmits([
  "component-change",
  "login-successed",
  "login-failed",
]);
</script>

<style scoped></style>
