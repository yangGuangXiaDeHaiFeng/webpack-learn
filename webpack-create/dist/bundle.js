(
      function(graph){
        function require(moduleId){
          function localRequire(relativePath){
            return require(graph[moduleId].dependencies[relativePath])
          }
          const exports={};
          (function(require,exports,code){
            eval(code)
          })(localRequire,exports,graph[moduleId].code)
          return exports;
        }
      require('./src/index.js')
    })({"./src/index.js":{"dependencies":{"./export.js":"./src/export.js"},"code":"\"use strict\";\n\nvar _export = require(\"./export.js\");\n\n(0, _export.sayHi)('webpack');\nconsole.log('hello webpack index');"},"./src/export.js":{"dependencies":{},"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.sayHi = void 0;\n\n/**\n * 模拟外部倒入的依赖\n */\nvar sayHi = function sayHi(params) {\n  console.log(\"欢迎来到 ~\" + params);\n};\n\nexports.sayHi = sayHi;"}})