import Img1 from "@assets/imgs/6.png";
import Img2 from "@assets/imgs/11.png";

export default function useQuickNav() {
  const quickNav = [
    {
      icon: Img1,
      title: "首页",
    },
    {
      icon: Img2,
      title: "仪表盘",
    },
    {
      icon: Img1,
      title: "组件",
    },
    {
      icon: Img2,
      title: "系统管理",
    },
    {
      icon: Img1,
      title: "权限管理",
    },
    {
      icon: Img2,
      title: "图表",
    },
  ];
  return { quickNav };
}
