/**
 * @author jiaowang
 * @version 1.0.0
 * @since 2021
 * 异步钩子
 * 异步并行 AsyncParallelHook
 * 1、并行执行的异步钩子，当注册的所有异步回调都并行执行完毕之后再执行 callAsync 或者 promise 中的函数
 * 2、使用 tapAsync或者tapPromise 注册回调，再调用 callAsync或者promise 来触发
 */
const {AsyncParallelHook}=require('tapable');
const hook=new AsyncParallelHook(['name']);
console.time('cost02');
hook.tapAsync('hello',(name,cb)=>{
setTimeout(()=>{
console.log(`hello ${name}`);
cb();
},1000)
});
hook.tapPromise('hello-02',(name)=>{
    return new Promise((resolve => {
        console.log(`hello-02 ${name}`);
resolve();
    }))
});
module.exports=hook;
