const loaderUtils = require("loader-utils");
const path = require("path");

module.exports = function (source) {
    const options = loaderUtils.getOptions(this);
    const locale = options ? options.locale : null;

    // 读取语言配置文件
    let json = null;
    if (locale) {
        const filename = path.resolve(__dirname, '..', 'i18n', `${locale}.json`);
        json = require(filename);
    }
    //读取语言标记
    const matches = source.match(/\{\{\w+\}\}/g);

    for (const match of matches) {
        const name = match.match(/\{\{(\w+)\}\}/)[1].toLowerCase();
        if (json !== null && json[name] !== undefined) {
            source = source.replace(match, json[name]);

        } else {
            source = source.replace(match, name)
        }
    }
    return source;

};
