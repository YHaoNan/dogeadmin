import SubPage from "@/components/subui/SubPage.vue";
import AnalysePage from "@components/subui/dashboard/AnalysePage.vue";
import WorkBench from "@components/subui/dashboard/WorkBench.vue";
import NotImplementYet from "@components/subui/NotImplementYet.vue";

export default [
  {
    path: "/main/dashboard",
    name: "routes.dashboard",
    redirect: "/main/dashboard/analyse",
    component: SubPage,
    children: [
      {
        path: "/main/dashboard/analyse",
        name: "routes.analyse",
        component: AnalysePage,
      },
      {
        path: "/main/dashboard/workbench",
        name: "routes.workbench",
        component: WorkBench,
      },
    ],
  },
  {
    path: "/main/docs",
    name: "外部页面",
    // redirect: "/main/docs/project-doc",
    component: SubPage,
    children: [
      {
        path: "/main/docs/project-doc",
        name: "项目文档(内嵌)",
        component: NotImplementYet,
      },
      {
        path: "/main/docs/antvue-doc",
        name: "antVue文档(内嵌)",
        component: NotImplementYet,
      },
      {
        path: "/main/docs/project-doc-outlink",
        name: "项目文档(外链)",
        component: NotImplementYet,
      },
    ],
  },
];
