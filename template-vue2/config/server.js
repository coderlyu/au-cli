const WebpackDevServer = require('webpack-dev-server')
const portfinder = require('portfinder')
const chalk = require('chalk')
const webpack = require('webpack')

const config = require('./dev.conf.js')
const options = {
  proxy: {
    '/api': 'http://localhost:3000'
  },
  port: 3000,
  contentBase: path.resolve(__dirname, '../public'),
  compress: true,
  historyApiFallback: true,
  hot: true,
  https: false,
  noInfo: false,
};

portfinder.getPort({ port: options.port }, (err, port) => {
  if (err) {
    console.log('可用端口号查找失败...')
    return
  }
  options.port = port
  process.env.BASE_PORT = port
  WebpackDevServer.addDevServerEntrypoints(config, options)
  const compiler = webpack(config)
  const server = new WebpackDevServer(compiler, options)

  server.listen(port, 'localhost', () => {
    console.log(`\nProject is running at ${chalk.blue(chalk.underline(`http://${options.host}:${port}/`))}\n`)
  })
})
