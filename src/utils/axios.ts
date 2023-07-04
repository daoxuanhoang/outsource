import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";



const axiosClient: AxiosInstance = axios.create({
    baseURL: '/',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    }
})


//Define a request interceptor to add authorization token to requests
//Xác định một bộ chặn reuqest để thêm mã thông báo ủy quyền cho các request
axiosClient.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = localStorage.getItem('authToken')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

//define a response interceptor to handle error
// xác định một bộ chặn phản hồi để xử lý lỗi
axiosClient.interceptors.response.use(
    (response: AxiosResponse) => {
        return response.data
    },
    (error) => {
        // console.log(`test`,error.request);
        const originalRequest = error.config;
        console.log('err.response.status', error.response.status, error.config.__isRetryRequest);
        if (error.response.status === 401) {
            // handle unauthorized error
        } else if (error.response.status === 404) {
            //handle not found error
        } else {
            console.log(`test`,error);
            //handle other error
        }
        return Promise.reject(((error || {}).response || {}).data);
        // const originalRequest = error?.config
        // if (error.response && originalRequest.url.indexOf('/register') === -1 && error.response.status === 401 && !originalRequest._retry) {
        //     originalRequest._retry = true
        //     const refresh = localStorage.getItem('authToken')
        //     // if (!refresh) return Promise.reject(error?.response?.data)
        //     try {
        //     //   const res = await authAPI.refresh(refresh)
        //       if (res.status === 201) {
        //         // 1) put token to Cookies
        //         const {user, accessToken, refreshToken} = res.data
        //         // setCookieUser({user, accessToken, refreshToken})
        //         // 3) return originalRequest object with Axios.
        //         originalRequest.headers = {
        //           ...originalRequest.headers,
        //           authorization: `Bearer ${accessToken}`
        //         }
        //         return axios(originalRequest)
        //       }
        //     } catch (_error) {
        //       return Promise.reject(_error)
        //     }
        //   }
    }
)

export default axiosClient


