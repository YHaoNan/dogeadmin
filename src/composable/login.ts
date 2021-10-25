import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { userStateKey } from "@/store/userStore";
import { delaySetRef } from "@/global/utils/reactive-utils";
import { User } from "@/global/global";

export default function useLogin() {
  const router = useRouter();
  const userStore = useStore(userStateKey);
  const isLoginFailedAlertShow = ref(false);
  const onLoginSuccessed = (user: User) => {
    userStore.commit("setUser", user);
    console.log("登录成功", user);
    router.push("/main");
  };

  const onLoginFailed = (err: string) => {
    console.log("登陆失败", err);
    isLoginFailedAlertShow.value = true;
    delaySetRef(isLoginFailedAlertShow, false, 3000);
  };

  return { onLoginSuccessed, onLoginFailed, isLoginFailedAlertShow };
}
