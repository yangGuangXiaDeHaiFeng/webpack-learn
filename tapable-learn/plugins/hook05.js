/**
 * @author jiaowang
 * @version 1.0.0
 * @since 2021
 * 异步钩子
 * 异步串行  AsyncSeriesHook
 * 1、串行执行的异步钩子，当注册的所有异步回调都依次执行完毕之后再执行 callAsync 或者 promise 中的函数
 * 2、使用 tapAsync或者tapPromise 注册回调，再调用 callAsync或者promise 来触发
 */

const{AsyncSeriesHook}=require('tapable');
const hook=new AsyncSeriesHook(['name']);
console.time('cost');
hook.tapAsync('hello', (name, cb) => {
    setTimeout(() => {
        console.log(`hello ${name}`);
        cb();
    }, 2000);
});
hook.tapPromise('hello again',(name)=>{
  return new Promise(resolve => {
      setTimeout(()=>{
          console.log(`hello ${name},again`);
          },1000)
  });
});




module.exports=hook;
