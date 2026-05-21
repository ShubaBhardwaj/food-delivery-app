import { api } from "./api";
import { tokenStore } from "./tokenStorage";

type RegisterData = {
    username: string;
    email: string;
    password: string;
}

type LoginData = { 
    email: string, 
    password: string 
}

type ChangePasswordData = {
    oldPassword: string;
    newPassword: string;
}


export const authService = {
    register: async ({ username, email, password }: RegisterData) => {
       const response = await api.post('/users/register',{ username, email, password } )
       console.log(response)
       return response.data
    },
    login: async ({ email, password }: LoginData) => {
        const response = await api.post('/users/login', { email, password })
        console.log(response)
        await tokenStore.set(response.data.data)
        return response.data
    },

    getprofile: async () => {
        const response = await api.get('/users/current-user')
        console.log(response)
        return response.data
    },

    logout: async () => {
        await api.post('/users/logout')
        tokenStore.clear()
    },

    changePassword: async ({oldPassword, newPassword}: ChangePasswordData) => {
        const response = await api.post('/users/change-password', { newPassword: newPassword, oldPassword: oldPassword })
        console.log(response)
        return response.data
    }

}