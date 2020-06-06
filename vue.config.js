const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  assetsDir: 'static',
  productionSourceMap: false,
  publicPath: './',
  devServer: {
    port: '9800',
    proxy: {
      '^/api/*': {
        target: 'http://localhost:9800/mock', // 要代理的域名
        changeOrigin: true,//允许跨域
        pathRewrite: {
          // '^/api': '/cms/h5/api' // 其实我觉得这个就是把访问的路径某些地址进行替换而已,使用正则
          //然后把开发地址替换成接口要的地址
        }
      }
    }
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
