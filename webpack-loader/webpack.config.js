const path=require("path");
module.exports={
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'[name].js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:'replace-loader-simple'
            },
            {
                test:/\.js$/,
                use:[
                    {
                        loader:'replace-loader',
                        options:{
                          text:'Webpack4'
                        }

                    }
                ]
            },
            {
                test:/\.js$/,
                use:[
                    {
                        loader:'async-loader',
                        options:{
                            text:'Async load'
                        }

                    }
                ]
            },
            {
                test:/\.ts$/,
                use:[
                    {
                        loader:'i18n-loader',
                        options:{
                            locale:'zh'
                        }

                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext].webp'
                    }
                }, {
                    loader: path.resolve('./loader/webp-loader.js'),
                    options: {
                        quality: 0.7
                    }
                }]
            },
        ]
    },
    resolveLoader:{
        modules:['./node_modules','./loader'],
    }
}
