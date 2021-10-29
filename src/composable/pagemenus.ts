import { RouteRecordName } from "vue-router";
import { useI18n } from "vue-i18n";
import subrouter from "@router/subrouter";
import { useRouter } from "vue-router";

interface PageItem {
  title: string;
  key: string;
  icon?: string;
  children?: PageItem[];
}

interface Route {
  name: RouteRecordName | null | undefined;
  path: string;
  children?: Route[];
  [propName: string]: any;
}
function getRouteName(route: Route): string {
  return route.name ? route.name.toString() : "";
}

export default function usePageMenus() {
  const { t } = useI18n();
  const router = useRouter();

  function createPageItemByRoute(r: Route): PageItem {
    const item: PageItem = {
      title: t(getRouteName(r)),
      key: r.path,
    };

    if (r.icon) {
      item.icon = r.icon;
    }
    if (r.children) {
      item.children = r.children.map((subRoute) =>
        createPageItemByRoute(subRoute)
      );
    }
    return item;
  }

  const pageItems: PageItem[] = subrouter.map((r) => createPageItemByRoute(r));
  const onPageSelected = (selectedItem) => {
    router.push(selectedItem.key);
  };

  return { onPageSelected, pageItems };
}
