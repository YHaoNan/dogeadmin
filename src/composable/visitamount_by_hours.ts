import { dashStateKey } from "@/store/dashStore";
import { useStore } from "vuex";
import { Chart } from "@antv/g2";

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
    });

    chart.tooltip({
      showMarkers: false,
    });
    chart.interaction("active-region");

    chart
      .area()
      .adjust("stack")
      .position("hours*visitCount")
      .color("time_slot");

    chart.render();
  };
  return { initVisitamountByHoursChart };
}
