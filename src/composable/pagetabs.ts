import { reactive, ref, watch } from "vue";
import { RouteRecordName, useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import router from "@/router/router";
interface Pane {
  title: string;
  key: string;
  // route: string;
  closable: boolean;
}

interface Route {
  name: RouteRecordName | null | undefined;
  path: string;
}

function createPaneByRoute(
  t: (name: string) => string,
  route: Route,
  closable: boolean = true
): Pane {
  return {
    title: t(getRouteName(route)),
    key: route.path,
    closable: closable,
  };
}
function getRouteName(route: Route): string {
  return route.name ? route.name.toString() : "";
}
export default function usePageTabs() {
  const route = reactive(useRoute());
  const { t } = useI18n();

  // 初始化，以当前的路由初始化一个Pane
  const activePaneKey = ref(route.path);
  const panes: Pane[] = reactive<Pane[]>([createPaneByRoute(t, route, false)]);

  // 监听路由改变
  watch(route, (newValue) => {
    activePaneKey.value = route.path;
    // 如果当前页已存在，直接返回
    if (panes.filter((p) => p.key == route.path).length > 0) return;
    // 否则将新增一个Pane
    const newPane = createPaneByRoute(t, route);
    panes.push(newPane);
  });

  // 监听活动Pane改变，更新router
  const onPaneChanged = function (activePaneKey: string) {
    router.push(activePaneKey);
  };

  // 监听Pane被操作
  const onPaneEdit = function (editPaneKey: string, action: string) {
    // 如果操作是移除Pane
    if (action == "remove") {
      // 遍历 找到移除的Pane实例
      for (let index = 0; index < panes.length; index++) {
        let pane = panes[index];
        // 命中
        if (pane.key == editPaneKey) {
          panes.splice(index, 1);
          // 如果当前编辑的Pane是当前活动的Pane，那么重置当前活动Pane为第一个不可关闭的Pane
          if (editPaneKey == activePaneKey.value) {
            activePaneKey.value = panes[0].key;
            // 更新路由
            onPaneChanged(activePaneKey.value);
          }
        }
      }
    }
  };
  return { activePaneKey, panes, onPaneChanged, onPaneEdit };
}
