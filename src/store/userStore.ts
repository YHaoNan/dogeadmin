import { User } from "@/global/global";
import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";

interface State {
  user: User | undefined;
}

const userStateKey: InjectionKey<Store<State>> = Symbol();
const userState = createStore<State>({
  state() {
    return {
      user: undefined,
    };
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
});
export { userState, userStateKey };
