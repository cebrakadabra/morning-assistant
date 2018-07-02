import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
const isProd = process.env.NODE_ENV === 'production';

const UglifyJsPluginConfig = isProd ? new UglifyJsPlugin({
    test: /\.js($|\?)/i,
    cache: true,
    parallel: true,
    sourceMap: true
}) : null;

export default UglifyJsPluginConfig;
