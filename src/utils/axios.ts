import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";



const axiosClient: AxiosInstance = axios.create({
    baseURL: '/',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
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
        if (error.response.status === 401) {
            // handle unauthorized error
        } else if (error.response.status === 404) {
            //handle not found error
        } else {
            //handle other error
        }
    }
)

export default axiosClient


