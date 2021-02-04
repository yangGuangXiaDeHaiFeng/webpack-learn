/**
 * @author jiaowang
 * @version 1.0.0
 * @since 2020/09
 * 同步钩子SyncLoopHook
 * 1、从上到下顺序执行，遇到某个不返回undefined的监听函数，就重复执行
 *    ===》如果返回值不是undefined，则一直执行，类似于while
 *       while(returnValue!=undefined){
 *           go on ……
 *       }
 *
 * 2、使用 tap 注册回调，再调用 call 来触发
 */
const{SyncLoopHook}=require('tapable');
//******************************不给任何参数************start
// const hook=new SyncLoopHook();
// hook.tap('hello',()=>{
// console.log('没有任何参数，能执行不？');
// });
// 运行结果 通过
//******************************不给任何参数************end

const hook=new SyncLoopHook(['name']);
hook.tap('hello',(name)=>{
    console.log(`${name}----------:无返回值，即默认为undefined，所以执行一次呢后不再继续`);

});
hook.tap('欢迎',(name)=>{
    console.log(`${name}----------：返回值是undefined，所以执行一次呢后不再继续`);
    return undefined;
});
//************返回值不是undefined，死循环（一直执行）
// hook.tap('欢迎',(name)=>{
//     console.log(`${name}----------：返回指不是undefined，所以一直执行（死循环）`);

//     return name;
// });

module.exports=hook;


