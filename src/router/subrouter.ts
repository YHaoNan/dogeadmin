import DashBoard from "@components/subui/DashBoard.vue";

export default [
  {
    path: "/main/dashboard",
    name: "Dashboard",
    // redirect: "/main/dashboard/analyse",
    component: DashBoard,
    children: [
      {
        path: "/main/dashboard/analyse",
        name: "分析页",
        component: DashBoard,
      },
      {
        path: "/main/dashboard/workbench",
        name: "工作台",
        component: DashBoard,
      },
    ],
  },
  {
    path: "/main/docs",
    name: "外部页面",
    // redirect: "/main/docs/project-doc",
    component: DashBoard,
    children: [
      {
        path: "/main/docs/project-doc",
        name: "项目文档(内嵌)",
        component: DashBoard,
      },
      {
        path: "/main/docs/antvue-doc",
        name: "antVue文档(内嵌)",
        component: DashBoard,
      },
      {
        path: "/main/docs/project-doc-outlink",
        name: "项目文档(外链)",
        component: DashBoard,
      },
    ],
  },
];
