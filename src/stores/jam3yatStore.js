import { makeAutoObservable } from "mobx";
import api from "./api";
import authStore from "./authStore";

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

  joinJam3ya = async (jam3yaId) => {
    try {
      await api.post(`/jam3ya/join/${jam3yaId}`);
      const foundJam3ya = this.jam3yat.find(
        (jam3ya) => jam3ya._id === jam3yaId
      );
      foundJam3ya.users.push(authStore.user);
    } catch (error) {
      console.log(error);
    }
  };
  /*
  deleteJam3ya = async () => {
    try {
      const res = await axios.post(
        `https://coded-miniproject-jam3ya-be.herokuapp.com/jam3ya/${jam3yaId}}`
      );
      this.jam3yat = this.jam3yat.filter(
        (jam3ya) => jam3ya.author !== jam3ya.username
      );
    } catch (error) {
      console.log(error);
    }
  };
  */
}
const jam3yatStore = new Jam3yatStore();
jam3yatStore.fetchjam3yat();
export default jam3yatStore;
