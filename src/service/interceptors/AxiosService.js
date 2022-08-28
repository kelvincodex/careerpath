import axios from "axios";
import {useAuth} from "../../stores/auth";



export class AxiosService{
    static client = () => {
    let token = '';
        const service = axios.create({
            baseURL: __env.api.baseUrl,

            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
            }
        })

        // Add a request interceptor
        service.interceptors.request.use(function (config) {
            const authStore = useAuth()
            // console.log(authStore.getToken)

            token = authStore.getToken === '' ? '' : authStore.getToken;
            if (token != '') config.headers.Authorization = token === null ? '' :`TOKEN ${token}`;
            // console.log(token)
            return config;

        }, function (error) {
            // Do something with request error
            return Promise.reject(error);
        });

        // service.interceptors.response.use(function (response) {
        //     const authStore = useAuth()
        //     // console.log(authStore.getToken)
        //
        //     token = authStore.getToken === '' ? '' : authStore.getToken;
        //     if (token != '') config.headers.Authorization = token;
        //     return config;
        //
        // }, function (error) {
        //     // Do something with request error
        //     return Promise.reject(error);
        // });
        return service

    };
}

