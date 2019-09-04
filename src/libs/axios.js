import axios from 'axios'
import store from '@/store'
import { getToken } from '@/libs/util'
// import { Spin } from 'iview'

/**
 * @description 添加到错误日志
 * @param errorInfo
 */
const addErrorLog = errorInfo => {
  const { statusText, status, request: { responseURL } } = errorInfo
  let info = {
    type: 'ajax',
    code: status,
    mes: statusText,
    url: responseURL
  }
  if (!responseURL.includes('save_error_logger')) store.dispatch('addErrorLog', info)
}

class HttpRequest {
  /**
   * @description class的构造函数,使用方式 var obj=new HttpRequest(baseUrl);
   * @param baseUrl
   */
  constructor (baseUrl = baseURL) {
    // debugger
    this.baseUrl = baseUrl
    this.queue = {}
  }
  
  /**
   * @description 设置通用配置
   * @returns {{baseURL: *, headers: {}}}
   */
  getInsideConfig () {
    // debugger
    const config = {
      baseURL: this.baseUrl,
      headers: {
        //
        'Authorization': getToken(),
        'language':'cn'
      },
      timeout: 1000*60*10
    }
    return config
  }
  destroy (url) {
    delete this.queue[url]
    if (!Object.keys(this.queue).length) {
      // Spin.hide()
    }
  }
  /**
   * @description 周期函数 拦截器
   * @param instance  axios实例
   * @param url 请求地址
   */
  interceptors (instance, url) {
    // 请求拦截
    instance.interceptors.request.use(
      config => {
        // 添加全局的loading...
        if (!Object.keys(this.queue).length) {
          // Spin.show() // 不建议开启，因为界面不友好
        }
        this.queue[url] = true
        return config
      },
      error => {
        return Promise.reject(error)
      }
    );
    // 响应拦截
    instance.interceptors.response.use(
      res => {
        this.destroy(url)
        const { data, status } = res
        return { data, status }
      },
      error => {
        this.destroy(url)
        let errorInfo = error.response;
        if (!errorInfo) {
          const { request: { statusText, status }, config } = JSON.parse(JSON.stringify(error))
          errorInfo = {
            statusText,
            status,
            request: { responseURL: config.url }
          }
        }
        addErrorLog(errorInfo)
        return Promise.reject(error)
      }
    );
  }
  
  /**
   * @description 请求调用时 会走这个函数,会响应走对应 周期函数
   * @param options
   * @returns {AxiosPromise}
   */
  request (options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    console.log(options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}
export default HttpRequest
