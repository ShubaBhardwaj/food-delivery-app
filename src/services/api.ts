import axios from "axios";
import { tokenStore } from "./tokenStorage";

export const api = axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_URL || 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(async (config)=>{
    const token: string | null = await tokenStore.getAccessKey()
    if (token) {
        config.headers.set('Authorization', `Bearer ${token}`)
    }
    return config
});