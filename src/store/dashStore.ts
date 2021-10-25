import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";

interface State {
  visitCount: number;
  totalVisitCount: number;
  dealAmout: number;
  totalDealAmout: number;
  downloadCount: number;
  totalDownloadCount: number;
  dealCount: number;
  totalDealCount: number;
  visitCountByMonth: number[];
  visitAmountByHours1: number[];
  visitAmountByHours2: number[];
}

const dashStateKey: InjectionKey<Store<State>> = Symbol();
const visitData1 = [
  23, 24, 135, 5231, 1345, 2341, 2523, 142, 535, 645, 523, 1352, 6325, 2434,
  1242, 1324, 534, 134,
];
const dashState = createStore<State>({
  state() {
    return {
      visitCount: 2000,
      totalVisitCount: 120000,
      dealAmout: 20000,
      totalDealAmout: 500000,
      downloadCount: 8000,
      totalDownloadCount: 120000,
      dealCount: 5000,
      totalDealCount: 50000,
      visitCountByMonth: [
        2000, 4124, 5351, 23123, 5253, 1233, 5225, 556, 5123, 6661, 1235, 6421,
      ],
      visitAmountByHours1: visitData1,
      visitAmountByHours2: visitData1.map((n) => n * 6),
    };
  },
});

export { dashState, dashStateKey };
