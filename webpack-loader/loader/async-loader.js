/**
 * 利用setTimeout 模拟异步请求
 */
const loaderUtils=require("loader-utils");
module.exports=function (source) {
    const callback=this.async();
    setTimeout(()=>{
       const output=source.replace(/World/g,loaderUtils.getOptions(this).text);
       callback(null,output);
    },1000)
}

