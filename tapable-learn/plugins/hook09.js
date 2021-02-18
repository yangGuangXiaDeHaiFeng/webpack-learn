/**
 * @author jiaowang
 * @version 1.0.0
 * @since 2021
 * 异步钩子
 * 异步串行值传递【瀑布】  AsyncSeriesWaterfallHook
 * 1、上一个注册的异步回调执行之后的返回值会传递给下一个注册的回调
 * 2、使用 tapAsync或者tapPromise 注册回调，再调用 callAsync或者promise 来触发
 */

const {AsyncSeriesWaterfallHook}=require('tapable');
const hook=new AsyncSeriesWaterfallHook(['name']);
hook.tapAsync('hello',(name,cb)=>{
    console.log(`hello ${name}`);
    cb();
});
hook.tapAsync('hello',(name,cb)=>{
    console.log(`hello ${name}`);
    cb();
    return name+'01';
});
hook.tapAsync('hello',(name,cb)=>{
    console.log(`hello ${name}`);
    cb();
});
module.exports=hook;

