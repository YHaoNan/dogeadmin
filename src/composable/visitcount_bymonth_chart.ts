import { dashStateKey } from "@/store/dashStore";
import { useStore } from "vuex";
import { Chart } from "@antv/g2";

export default function useVisitcountByMonthChart(containerName: string) {
  const dashStore = useStore(dashStateKey);
  const initVisitcountByMonthChart = function () {
    const chart = new Chart({
      container: containerName,
      autoFit: true,
      height: 300,
    });
    chart.data(
      dashStore.state.visitCountByMonth.map((count, index) => {
        return {
          month: `${index + 1}月`,
          visitCount: count,
        };
      })
    );
    chart.scale("visitCount", {
      nice: true,
      alias: "访问人数",
    });

    chart.tooltip({
      showMarkers: false,
    });
    chart.interaction("active-region");

    chart.interval().position("month*visitCount");

    chart.render();
  };
  return { initVisitcountByMonthChart };
}
