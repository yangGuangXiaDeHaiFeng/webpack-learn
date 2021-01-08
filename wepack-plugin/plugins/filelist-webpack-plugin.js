/**
 * 生成一个叫做 filelist.md 的新文件；文件内容是所有构建生成的文件的列表
 */
class FileListWebpackPlugin {
    constructor(props) {

    }

    apply(compiler){
        compiler.hooks.emit.tapAsync('ReadmeWebpackPlugin',(compilation,callback)=>{
            //在生成文件中，创建一个头部字符串
            var fileList='In this build:\n\n';
            // 遍历所有编译过的资源文件
            for(var fileName in compilation.assets){
                fileList+='-'+fileName+'\n';
            }
            compilation.assets['fileList.md']={
                source:function () {
                    return fileList;
                },
                size:function () {
                    return fileList.size();
                }
            }
            callback();
        });
    }

}
module.exports=FileListWebpackPlugin;
