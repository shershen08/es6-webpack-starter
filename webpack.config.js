var webpack = require( 'webpack' );
var ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

var plugins = [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin( {
        '__DEV__': process.env.NODE_ENV === 'production' ? false : true,
        'process.env': {
            NODE_ENV: JSON.stringify( process.env.NODE_ENV || 'dev' )
        }
    }),
          new ExtractTextPlugin('[name].css', {
            allChunks: true
        })
];
if ( process.env.NODE_ENV === 'production' ) {
    plugins.push( new webpack.optimize.UglifyJsPlugin( {
        compressor: {
            screw_ie8: true,
            warnings: false
        }
    }) );
} else {
    plugins.push( new webpack.HotModuleReplacementPlugin() );
    plugins.push( new webpack.NoErrorsPlugin() );
}



module.exports = {
    output: {
        path: './dist/',
        publicPath: '/dist/',
        filename: 'app.js',
        library: 'MyCoolApp',
        libraryTarget: 'umd'
    },
    devServer: {
        contentBase: './',
    },
    entry: [
        './src/index.js', './less/components.less'
    ],
    resolve: {
        extensions: [ '', '.js', '.jsx', 'es6', '.css', '.less', '.json']
    },
    module: {
        loaders: [
            {
                test: /\.js|\.jsx|\.es6$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            { test: /\.html$/, loader: 'html' },
            { test: /\.css$/, loader: ExtractTextPlugin.extract( 'css' ) },
            {test: /\.json$/, loader: 'json'},
            {test: /\.less$/,loader: "style!css!less"},
            {test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader : 'file-loader'}

        ]
    },
    plugins: plugins
};
