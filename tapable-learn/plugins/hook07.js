
/**
 * @author jiaowang
 * @version 1.0.0
 * @since 2021
 * 异步钩子
 * 异步串行熔断  AsyncSeriesBailHook
 * 1、执行过程中注册的回调返回非 undefined 时就会直接执行 callAsync 或者 promise 中的函数，并且注册的后续回调都不会执行
 * 2、使用 tapAsync或者tapPromise 注册回调，再调用 callAsync或者promise 来触发
 */
const {AsyncSeriesBailHook}=require('tapable');
const hook=new AsyncSeriesBailHook(['name']);
hook.tapAsync('hello',(name,cb)=>{
    setTimeout(()=>{
        console.log(`hello ${name},无返回值，默认为undefined`);
        cb();
    },1000)
});

hook.tapAsync('hello-02',(name,cb)=>{
    setTimeout(()=>{
        console.log(`hello-02 ${name},有返回值`);
        cb();
        return name;
    },1000)
});
hook.tapAsync('hello',(name,cb)=>{
    setTimeout(()=>{
        console.log(`hello ${name},无返回值-位于又返回值回掉的后一个，默认为undefined`);
        cb();
    },1000)
});
module.exports=hook;
