/**
 * 超级简单的自定义loader——实现字符串替换
 * @param source 传入的字符串
 * @returns {void | string} 返回的字符串
 */

module.exports=function (source) {
    return source.replace(/World/g,"Node");
}
