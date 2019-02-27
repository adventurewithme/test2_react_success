const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');//导入在内存中自动生成index页面的插件
//创建一个插件的实例对象
const htmlPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "/src/index.html"),
    filename: 'index.html'
})

module.exports = {
    mode: "development",
    plugins: [
        htmlPlugin
    ],
    module: {
        rules: [
            { test: /\.js|jsx?$/, use: 'babel-loader', exclude: /node_modules/ },
            // 自己规定，第三方的样式表都是.css结尾，自己的样式表以.scss /.less结尾，
            //只为.scss / .less文件启用模块化
            {test:/\.css$/,use:['style-loader','css-loader']},//打包处理css样式表的第三方loader
            {test:/\.ttf|woff|woff2|eot|svg$/,use:'url-loader'},//打包处理,字体文件的loader
            { test: /\.scss$/, use: ['style-loader','css-loader?modules&localIdentName=[path][name]-[local]-[hash:5]','sass-loader']}
        ]
    },
    resolve:{
        extensions:['.js','.jsx','.json'],//表示这几个文件名会自动补全
        alias:{//别名
            "@":path.join(__dirname,'./src')//这行表示，@符号表示项目根目录中的src这一层路径
        }
    }
}
