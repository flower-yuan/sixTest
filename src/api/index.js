import axios from 'axios'

axios.defaults.baseURL="http://localhost:8888/api/private/v1/"

//拦截设置  添加token
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // return config;
    const token = localStorage.getItem('mytoken');
    if(token){
        config.headers['Authorization'] = token;
    }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});



//登陆验证
export const loginStatus = params =>{
    return axios.post('login',params).then(res=>res.data)
}

//获取用户数据列表
export const userList = params=>{
    return axios.get('users',params).then(res=>res.data)
}