import { dashStateKey } from "@/store/dashStore";
import { useStore } from "vuex";
import { Chart, Geometry } from "@antv/g2";

export default function useVisitamountByHoursChart(containerName: string) {
  const dashStore = useStore(dashStateKey);
  const initVisitamountByHoursChart = function () {
    const chart = new Chart({
      container: containerName,
      autoFit: true,
      height: 300,
    });
    const data = dashStore.state.visitAmountByHours1
      .map((count, index) => {
        return {
          hours: `${index + 6}:00`,
          visitCount: count,
          time_slot: "今天",
        };
      })
      .concat(
        dashStore.state.visitAmountByHours1.map((count, index) => {
          return {
            hours: `${index + 6}:00`,
            visitCount: count,
            time_slot: "本周",
          };
        })
      );

    chart.data(data);
    chart.scale("visitCount", {
      nice: true,
      alias: "访问流量",
    });
    chart.tooltip({
      showCrosshairs: true,
      showMarkers: true,
    });
    chart.interaction("active-region");
    const getColor = (time_slot: string): string => {
      return time_slot == "本周" ? "#5BB1EF" : "#019680";
    };

    const setPublicConfig = function (geo: Geometry) {
      geo
        .adjust("stack")
        .position("hours*visitCount")
        .color("time_slot", getColor);
    };

    setPublicConfig(chart.area().shape("smooth"));
    setPublicConfig(chart.line().shape("smooth").color("time_slot", getColor));
    setPublicConfig(
      chart.point().shape("circle").size(4).style({
        stroke: "#fff",
        lineWidth: 1,
      })
    );

    chart.render();
  };
  return { initVisitamountByHoursChart };
}
