<template>
    <v-container style="height: 100%">
        <v-row no-gutters style="height: 100%;">
          <v-spacer v-if="screenWidth > 500"/>
          <v-col :cols="col" align-self="center">
            <v-sheet class="pa-2">
              <v-form fast-fail @submit.prevent>
                <v-text-field
                  v-model="login"
                  :rules="inputRolesEmail"
                  label="Ваша почта"
                  name="email"
                  role="email"
                  type="email"
                  variant="solo-filled"
                  color="primary"
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  :rules="inputRolesPassword"
                  label="Ваш пароль"
                  name="password"
                  role="password"
                  type="password"
                  variant="solo-filled"
                  color="primary"
                ></v-text-field>
                <v-btn :loading="loading" color="primary" class="mt-2" type="submit" block @click="authorization(login, password)">Авторизироваться</v-btn>
              </v-form>
            </v-sheet>
          </v-col>
          <v-spacer v-if="screenWidth > 500"/>
        </v-row>
      </v-container>
  </template>
  
<style lang="scss" scoped>

</style>
  
<script lang="ts">
  import { authStore } from "../stores/auth";
  
  export default {
    data: () => ({
        store: authStore(),
        login: 'admin@admin.admin',
        password: 'admin@admin.admin',
        inputRolesEmail: [
          value => {
            if (/^[a-z.0-9-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true
  
            return 'Введите корректную почту'
          },
        ],
        inputRolesPassword: [
          value => {
            if (value?.length >= 8) return true
  
            return 'Длина пароля должна быть больше 8 символов'
          },
        ],
        loading: false,
        screenWidth: null,
        col: 6,
    }),
    components: {},
    mounted() {
      this.screenWidth = window.screen.width;
      if(this.screenWidth > 500) this.col = 6;
      else this.col = 12;
    },
    computed: {},
    methods: {
      async authorization(login: string, password:string){
        this.loading = true;
        await this.store.authorization(login, password)
            .then(()=>{ 
                this.$router.push('/')
                this.loading = false;
            })
      }
    },
  };
  </script>