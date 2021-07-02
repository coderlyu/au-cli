import baseConfig from './base.conf.js'
import { merge } from 'lodash'
const prodConfig = {
  mode: 'production',
  logLevel: 'info',
  build: {
    target: 'modules',
    polyfillDynamicImport: true, // 自动注入 动态导入 polyfill
    outDir: 'dist',
    assetsDir: 'assets',
    assetsInlineLimit: 8192, // 小于 8kb 的导入或引用资源将内联为 base64 编码
    cssCodeSplit: false, // 在异步 chunk 中导入的 CSS 将内联到异步 chunk 本身，并在其被加载时插入
    sourcemap: false, // 构建后是否生成 source map 文件
    rollupOptions: {
      output: {
        banner: '',
        manualChunks: {
          lodash: ['lodash'],
          // echarts: ['echarts'],
          // axios: ['axios'],
          // nprogress: ['nprogress'],
          // vue: ['vue'],
          // 'element-plus': ['element-plus']
        }
      }
    },
    minify: 'terser',
    chunkSizeWarningLimit: 800, // chunk 大小警告的限制
  }
}

export default function prodConfigFunc() {
  return merge(prodConfig, baseConfig)
}