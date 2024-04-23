import axios from "axios";
import axiosApiMain from "../../../scripts/api";
import { authStore } from "../stores/auth";
import router from "../../../router";
import { createToast } from "../../toast/script/actionToast";
import { typeToast } from "../../toast/script/typeToast";

const apiKey = import.meta.env.VITE_API_KEY;
const signInWithPassword=`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;


axiosApiMain.interceptors.request.use((config)=>{
    const url = config.url;
    if(!url?.includes('signInWithPassword') && !url?.includes('signUp')){
        const params = new URLSearchParams();
        params.append('auth', authStore().user.token);
        config.params = params;
    }
    return config;
})

const getNewToken = async() =>{
    const newTokens = await axios.post(
        `https://securetoken.googleapis.com/v1/token?key=${apiKey}`,{
        grant_type: 'refresh_token',
        refresh_token: JSON.parse(localStorage.getItem('userTokens')).refreshToken
        }
    )
    console.log('newTokens');
    authStore().user.token = newTokens.data.access_token;
    authStore().user.refreshToken = newTokens.data.refresh_token;
    localStorage.setItem('userTokens', JSON.stringify({
        token: newTokens.data.access_token,
        refreshToken: newTokens.data.refresh_token, 
    }))
}

axiosApiMain.interceptors.response.use ((response) => {
    return response;
}, async (error) => {
    const originalRequet = error.config;
    if(error.response.status === 401 && !originalRequet._retry){
        originalRequet._retry = true;
        try{
            getNewToken();
        }catch(e){
            console.log(e);
            createToast(typeToast.error, 'Ошибка');
            localStorage.removeItem('userTokens');
            router.push('/authorization');
            authStore().user.token = '';
            authStore().user.refreshToken = '';
        }
    }
    console.log(error)
    createToast(typeToast.error, 'Ошибка, повторите запрос');
})




export const authorization = async (email, password)=>{
    const response = await axiosApiMain.post(signInWithPassword, {
        email: email,
        password: password,
        returnSecureToken: true,
    })
    return response;
}

export const logout = async () => {
    localStorage.removeItem('userTokens');
    authStore().user.token = '';
    authStore().user.refreshToken = '';
    authStore().user.auth = false;
    router.push('/authorization');
}