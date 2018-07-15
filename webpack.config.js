const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
    const isProduction = env ==="production";
    const CSSExtract = new ExtractTextPlugin('styles.css');
    return {
            entry: './src/app.js',
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
            CSSExtract
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