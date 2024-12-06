import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    token: null,
  }),
  actions: {
    setUserData(userData) {
      this.user = userData;
      this.token = userData.token;
    },
    clearUserData() {
      this.user = null;
      this.token = null;
    },
  },
});
