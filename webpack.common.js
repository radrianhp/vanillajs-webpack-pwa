const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
// const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const { InjectManifest } = require('workbox-webpack-plugin')

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default
const ImageminMozjpeg = require('imagemin-mozjpeg')
const ImageminPngQuant = require('imagemin-pngquant')

const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin')

const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader',
        options: {
          name: 'img/[name].[ext]',
          publicPath: '/'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
      favicon: path.resolve(__dirname, 'src/public/icon.png')
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
          globOptions: {
            ignore: ['**/images/**'] // CopyWebpackPlugin mengabaikan berkas yang berada di dalam folder images
          }
        }
      ]
    }),
    new FaviconsWebpackPlugin('./src/public/icon.png'),
    // new ServiceWorkerWebpackPlugin({
    //   entry: path.resolve(__dirname, 'src/scripts/sw.js')
    // }),
    new WebpackPwaManifest({
      from: path.resolve(__dirname, 'src/public/manifest.json')
    }),
    new ImageminWebpackPlugin({
      plugins: [
        ImageminMozjpeg({
          quality: 50,
          progressive: true
        }),
        ImageminPngQuant({
          quality: [0.3, 0.5]
        })
      ]
    }),
    new ImageminWebpWebpackPlugin({
      config: [
        {
          test: /\.(jpe?g|png)/,
          options: {
            quality: 50
          }
        }
      ],
      overrideExtension: true
    }),
    new BundleAnalyzerPlugin(),
    new InjectManifest({
      swSrc: path.resolve(__dirname, 'src/scripts/sw.js'),
      swDest: './sw.js'
    })
  ]
}
