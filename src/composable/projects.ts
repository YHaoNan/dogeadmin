import GithubSVG from "@assets/svg/github-fill.svg";
import GoogleSVG from "@assets/svg/google-circle-fill.svg";
import WechatSVG from "@assets/svg/wechat-fill.svg";

export default function useProjects() {
  const projects = [
    {
      icon: GithubSVG,
      name: "Github",
      description: "不要等待机会，而要创造机会。",
      group: "开源组",
      createTime: "2021-04-01",
    },
    {
      icon: GoogleSVG,
      name: "Google",
      description: "现在的你决定将来的你。",
      group: "开源组",
      createTime: "2021-04-01",
    },
    {
      icon: WechatSVG,
      name: "Wechat",
      description: "不要等待机会，而要创造机会。",
      group: "开源组",
      createTime: "2021-04-01",
    },
    {
      icon: GithubSVG,
      name: "Github",
      description: "不要等待机会，而要创造机会。",
      group: "开源组",
      createTime: "2021-04-01",
    },
    {
      icon: WechatSVG,
      name: "Wechat",
      description: "不要等待机会，而要创造机会。",
      group: "开源组",
      createTime: "2021-04-01",
    },
    {
      icon: GoogleSVG,
      name: "Google",
      description: "不要等待机会，而要创造机会。",
      group: "开源组",
      createTime: "2021-04-01",
    },
  ];
  return { projects };
}
