const { default: merge } = require("webpack-merge");
const common = require("../config/webpack.common");


module.exports = merge(common, {
    mode : "production",
    optimization: {
        splitChunks : {
            chunks : "all",
            name: (module, chunks, cacheGroupKey) => {
                return `${cacheGroupKey}-${chunks[0].name}`;
            }
        }
    }
})