const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'test') {
    require('dotenv').config({ path: '.env.test' });
} else if (process.env.NODE_ENV === 'development') {
    require('dotenv').config({ path: '.env.development' });
}

//process.env.NODE_ENV heroku automatically sets to production, we can change this in test env

module.exports = (env) => {
    const isProduction = env ==="production";
    const CSSExtract = new ExtractTextPlugin('styles.css');
    return {
            entry: ['babel-polyfill', './src/app.js'],
        output: {
            //the path is the absolute path on your machine, so we use __dirname to get to our current directory
            path: path.join(__dirname, "public", "dist"),
            filename: 'bundle.js'
        },
        // loader: lets you customize the behavior
        module: {
            rules: [{
                loader: 'babel-loader',
                //check if a file ends($) in .js, only use babel-loader if that's true
                test: /\.js$/,
                //don't run babel on the node_modules library
                exclude: /node_modules/
            }, {
                // look for any file that ends with .css or .scss ( the ? makes s optional )
                test: /\.s?css$/,
                //instead of "loader" we use "use" which lets us specify an array of loaders
                use: CSSExtract.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }]
        },
        plugins: [
            CSSExtract,
            new webpack.DefinePlugin({
                'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
                'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
                'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
                'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
                'process.env.STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
                'process.env.MESSAGING_SENDER_ID': JSON.stringify(process.env.MESSAGING_SENDER_ID)
            })
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, "public"),
            historyApiFallback: true,
            publicPath: '/dist/'
        }
    };
};

// where is the entry point? (app.js) *required

//where do we output the final file? *required

//find these details on the webpack website webpack.js.org documentation section