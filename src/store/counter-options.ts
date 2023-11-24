import { defineStore } from 'pinia';

interface ICounterOptionsState {
  count: number;
  lastChange?: Date;
}

export const useCounterOptionsStore = defineStore('counterOptions', {
  state: () => ({
    count: 0,
    lastChange: undefined,
  } as ICounterOptionsState ),
  getters: {
    squareCount: (state) => state.count * state.count,
  },
  actions: {
    incrementBy( value: number ) {
      this.count += value;
      this.lastChange = new Date();
    },
    increment() {
      this.incrementBy(1);
    },
  },
});