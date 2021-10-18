import { makeAutoObservable } from "mobx";
import api from "./api";
import decode from "jwt-decode";

class AuthStore {
  user = null;

  constructor() {
    makeAutoObservable(this);
  }

  setUser = (token) => {
    localStorage.setItem("myToken", token);
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
  };

  signUp = async (userData) => {
    try {
      const res = await api.post("/signup", userData);
      localStorage.setItem("myToken", res.data.token);
      this.setUser(res.data.token);
    } catch (error) {
      alert(error);
    }
  };

  signIn = async (userData) => {
    try {
      const res = await api.post("/signin", userData);
      localStorage.setItem("myToken", res.data.token);
      this.setUser(res.data.token);
    } catch (error) {
      alert(error);
    }
  };

  logOut = () => {
    delete api.defaults.headers.common.Authorization;
    localStorage.removeItem("myToken");
    this.user = null;
  };

  checkForToken = () => {
    this.user = null;
    const token = localStorage.getItem("myToken");
    if (token) {
      const currentTime = Date.now(); // give us the current time
      let tempUser = decode(token);
      if (tempUser.exp >= currentTime) {
        this.setUser(token);
      } else {
        this.logOut();
      }
    }
  };
}
const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
