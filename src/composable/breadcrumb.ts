import { computed } from "vue";
import { useRoute } from "vue-router";

export default function useBreadCrumbWithRoute() {
  const route = useRoute();

  interface AntDVRoutes {
    path: string;
    breadcrumbName: string | (() => string);
    children?: Array<{
      path: string;
      breadcrumbName: string | (() => string);
    }>;
  }

  const currRoutes = computed<AntDVRoutes[]>(() => {
    let antDvRoutes: AntDVRoutes[] = [];
    route.matched.forEach((r, index) => {
      // 过滤掉`/main`这一层
      if (index == 0) return;
      // 先将一层中主要的那个路由拿出来
      antDvRoutes[index - 1] = {
        path: r.path,
        breadcrumbName: r.name ? r.name.toString() : "UnknownPage",
      };
      // 处理子路由，如果有子路由就将子路由添加进去
      if (r.children) {
        antDvRoutes[index - 1].children = r.children.map((c) => {
          return {
            path: c.path,
            breadcrumbName: c.name ? c.name.toString() : "UnknownPage",
          };
        });
      }
    });
    return antDvRoutes;
  });

  return { currentRoutes: currRoutes };
}
