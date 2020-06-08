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
