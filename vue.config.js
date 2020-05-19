module.exports = {
    configureWebpack: {
        resolve:{
            alias:{
                '@':'src',
                'assects':'@/assects',
                'common':'@/common',
                'components':'@/components',
                'network':'@/network',
                'views':'@/views'
            }
        }
    }
}

