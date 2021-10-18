import { makeAutoObservable } from "mobx";
import api from "./api";

class Jam3yatStore {
  jam3yat = [];
  constructor() {
    makeAutoObservable(this, {});
  }

  fetchjam3yat = async () => {
    try {
      const res = await api.get("/jam3ya");
      this.jam3yat = res.data;
    } catch (error) {
      console.error("jam3yatStore -> fetchjam3yat -> error", error);
    }
  };
  createjam3ya = async (jam3ya) => {
    try {
      const res = await api.post("/jam3ya", jam3ya);
      this.jam3yat.push(res.data);
    } catch (error) {
      console.log("jam3yatStore -> createjam3ya -> error", error);
    }
  };
}
const jam3yatStore = new Jam3yatStore();
jam3yatStore.fetchjam3yat();
export default jam3yatStore;
