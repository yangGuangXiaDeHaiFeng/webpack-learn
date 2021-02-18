# tapable
## 引入
Complier对象上提供了很多compiler钩子
那么这些钩子是什么呢？它们其实都是 tapable 的实例。
那么我们怎么调用这些钩子呢？通过编写 webpack Plugin
## 功能
专注于自定义事件的触发和处理；
webpack 通过 tapable 将实现与流程解耦，所有具体实现通过插件的形式存在；

###同步钩子
####SyncHook
从上到下顺序执行
####SyncBailHook
从上到下顺序执行，遇到返回值不是undefined的注册函数时停止执行
####SyncWaterfallHook
接受至少一个参数，上一个注册的回调返回值会作为下一个注册的回调的参数
####SyncLoopHook
从上到下顺序执行，遇到某个不返回undefined的监听函数，就重复执行
####同步钩子比较
SyncHook：顺序依次执行；
SyncBailHook：顺序依次执行，当遇到返回值非undefeated时，停止执行；
SyncWaterfallHook：上一个回掉回作为下一个回掉的参数；
SyncLoopHook：遇到返回值为undefined的回掉时，执行依次，遇到返回值为非undefined的回掉时，一直执行；



###异步钩子
异步串行:AsyncSeriesHook

异步串行熔断:AsyncSeriesBailHook

异步串行值传递【瀑布】:AsyncSeriesWaterfallHook

异步并行:AsyncParallelHook

异步并行熔断:AsyncParallelBailHook

## 调用方式
call()

