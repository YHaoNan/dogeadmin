import { shallowRef } from "vue";
import AccountLoginForm from "@/components/loginform/AccountLoginForm.vue";
import PhoneLoginForm from "@/components/loginform/PhoneLoginForm.vue";
import QRCodeLoginForm from "@/components/loginform/QRCodeLoginForm.vue";
import RegisterForm from "@/components/loginform/RegisterForm.vue";
import { LoginFormComponents } from "@/global/global";

export default function useLoginForm() {
  const currentComponent = shallowRef(AccountLoginForm);

  const onComponentChange = function (component: LoginFormComponents) {
    switch (component) {
      case LoginFormComponents.AccountLoginForm:
        currentComponent.value = AccountLoginForm;
        break;
      case LoginFormComponents.PhoneLoginForm:
        currentComponent.value = PhoneLoginForm;
        break;
      case LoginFormComponents.QRCodeLoginForm:
        currentComponent.value = QRCodeLoginForm;
        break;
      case LoginFormComponents.RegisterForm:
        currentComponent.value = RegisterForm;
        break;
    }
  };

  return {
    currentComponent,
    onComponentChange,
  };
}
