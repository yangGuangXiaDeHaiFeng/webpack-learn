
/**
 * @author jiaowang
 * @version 1.0.0
 * @since 2021
 * 异步钩子
 * 异步并行熔断  AsyncParallelBailHook
 * 1、执行过程中注册的回调返回非 undefined 时就会直接执行 callAsync 或者 promise 中的函数（由于并行执行的原因，注册的其他回调依然会执行）
 * 2、使用 tapAsync或者tapPromise 注册回调，再调用 callAsync或者promise 来触发
 */
const {AsyncParallelBailHook}=require('tapable');
const hook=new AsyncParallelBailHook(['name']);
hook.tapAsync('hello',(name,cb)=>{
    console.log(`hello ${name}`);
    cb();
});
hook.tapAsync('hello',(name,cb)=>{
    console.log(`hello ${name},返回值不为undefined`);
    cb();
    return name;
});
hook.tapAsync('hello',(name,cb)=>{
    console.log(`hello ${name}`);
    cb();
});
hook.tapAsync('hello',(name,cb)=>{
    console.log(`hello ${name}`);
    cb();
});
module.exports=hook;
