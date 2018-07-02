import HtmlWebpackPlugin from 'html-webpack-plugin';

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body',
    hash: true,
    chunksSortMode: (chunk1, chunk2) => {
        var orders = ['main'];
        var order1 = orders.indexOf(chunk1.names[0]);
        var order2 = orders.indexOf(chunk2.names[0]);
        if (order1 > order2) {
            return 1;
        } else if (order1 < order2) {
            return -1;
        } else {
            return 0;
        }
    }
});

export default HtmlWebpackPluginConfig;
