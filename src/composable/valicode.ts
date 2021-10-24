import { ref, inject } from "vue";
import { useI18n } from "vue-i18n";

export default function useValiCode() {
  const { t } = useI18n();
  const sendStr = t("account.sendValiCode");
  const valicode = ref("");
  const validesc = ref(sendStr);
  const inSendingInterval = ref(false);
  const sendValiCode = function (): void {
    if (inSendingInterval.value) {
      return;
    } else {
      inSendingInterval.value = true;
      let remain = 60;
      count();
      function count() {
        remain--;
        if (remain == 0) {
          clearInterval(interval);
          validesc.value = sendStr;
          inSendingInterval.value = false;
          return;
        }
        validesc.value = `(${remain})`;
      }

      let interval = setInterval(count, 1000);
    }
  };
  return {
    valicode,
    validesc,
    inSendingInterval,
    sendValiCode,
  };
}
