const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  assetsDir: 'static',
  productionSourceMap: false,
  publicPath: './',
  devServer: {
    port: '9800'
    // 如果使用mockjs,就不能使用代理,否则报404错误
    // proxy: {
    //   '^/api/*': {
    //     target: 'http://localhost:9800/mock', // 要代理的域名
    //     changeOrigin: true//允许跨域
    //   }
    // }
  },
  chainWebpack: config => {
    // 设置路径名的别名引用
    config.resolve.alias.set('components', resolve('src/components'))
  },
  pages: {
    index: {
      entry: [
        resolve('src/main.js')
      ],
      title: 'Clothingshop'
    }
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/style/color.scss";`
      }
    },
    extract: true
  }
}
