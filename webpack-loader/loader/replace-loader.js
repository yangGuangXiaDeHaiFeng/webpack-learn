/**
 * webpack官方推荐通过loader-utils来读取配置选项
 *    eg：前一个字符串替换的例子中，可以将替换结果放在配置中
 */
const loaderUtils=require("loader-utils");
module.exports=function (source) {
    // 从配置中拿参数
    const options=loaderUtils.getOptions(this);
    // 使用
    return source.replace(/World/g,options.text);
}
