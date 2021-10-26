import defaultIcon from "@assets/imgs/g.jfif?url";
export default function useNews() {
  const news = [
    {
      avater: defaultIcon,
      action: "威廉 在 开源组 创建了项目 Vue",
      time: "刚刚",
    },
    {
      avater: defaultIcon,
      action: "艾文 关注了 威廉",
      time: "一个小时前",
    },
    {
      avater: defaultIcon,
      action: "克里斯 发布了 个人动态",
      time: "一周前",
    },
    {
      avater: defaultIcon,
      action: "威廉 在 开源组 创建了项目 Vue",
      time: "一周前",
    },
    {
      avater: defaultIcon,
      action: "威廉 在 开源组 创建了项目 Vue",
      time: "一周前",
    },
  ];
  return { news };
}
