// Utilities
import { defineStore } from 'pinia';
import { authorization, logout } from "../scripts/api";

import { createToast } from "../../toast/script/actionToast";
import { typeToast } from "../../toast/script/typeToast";

export const authStore = defineStore('authStore', {
  state: () => ({
    user:{
      auth: false,
      userId: '' as string,
      email: '' as string,
      token: '' as string,
      refreshToken: '' as string,
      expiresIn: '' as string,
    }
  }),
  getters: {

  },
  actions:{
    async authorization(login:string, password: string){
      const self = this;
      try{
        const response = await authorization(login, password);
        self.user.auth = true;
        self.user.userId = response.data.localId;
        self.user.email = response.data.email;
        self.user.token = response.data.idToken;
        self.user.refreshToken = response.data.refreshToken;
        self.user.expiresIn = response.data.expiresIn;
        localStorage.setItem('userTokens', JSON.stringify({
          token: response.data.idToken, 
          refreshToken: response.data.refreshToken,
          expiresIn: response.data.expiresIn,
        }))
        createToast(typeToast.success, 'Успешная авторизация');
      } catch(e){
        console.log(e.response);
        createToast(typeToast.error, 'Ошибка авторизации');
      }

    },
    async logout(){
      try{
        await logout();
        createToast(typeToast.success, 'Вы успешно разлогинились');
      } catch(e){
        console.log(e)
        createToast(typeToast.error, 'Ошибка');
      }
    }
  }
})
