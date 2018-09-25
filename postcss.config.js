// required by PostCSS
module.exports = {  
  ident: 'sugarss',
  plugins: [
    require('cssnano')({
      autoprefixer: {
        add: true,
        remove: true,
        browsers: ['last 2 versions']
      },
      discardComments: {
        removeAll: true
      },
      safe: false,
      sourcemap: true
    })
  ]
}
