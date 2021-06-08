import http from './../../../base/api/public'
import querystring from 'querystring'
let sysConfig = require('@/../config/sysConfig')
let apiUrl = sysConfig.xcApiUrlPre;

//定义方法,请求服务端页面查询接口    export导出
export const page_list = (page,size,params)=>{
  return http.requestGet(apiUrl+'/cms/list/'+page+'/'+size)
}


