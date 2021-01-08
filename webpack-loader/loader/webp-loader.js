const CWebP = require("cwebp").CWebp;
const schema=require('./options');

const loaderUtils = require("loader-utils");
const schemaUtils = require("schema-utils");

/**
 * 普通图片 转 .webp图片
 * @param img 图片绝对路径 或 二进制流
 * @param quality 生成webp图片的质量，默认75
 * @returns   .webp文件流
 */
async function convertToWebP(img, quality = 75) {
    let encoder = new CWebP(img);
    encoder.quality = quality;
    let buffer = await encoder.toBuffer();
    return buffer;
}

module.exports=async function loader(content) {
    // 异步模式
    let callback = this.async();

    // 获取options
    const options = loaderUtils.getOptions(this) || {};

    // 验证options
    schemaUtils.validate(schema, options, {
        name: "webp loader",
        baseDataPath: "options"
    });

    // 普通图片转 .webp
    try {
        let buffer = await convertToWebP(content, options.quality);
        callback(null, buffer);
    } catch (e) {
        console.log('报错了******');
        callback(e);
    }


}
// 通过exports.raw 属性告诉webpack该loader是否需要二进制数据
module.exports.raw = true;
