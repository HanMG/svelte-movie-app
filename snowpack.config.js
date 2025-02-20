const production = process.env.NODE_ENV === 'production'

function babelOptions(){
    return {       
        plugins: production 
            ? ['transform-remove-console'] 
            : []        
    }
}

module.exports = {
    mount: {
        public: '/',
        src: '/_dist_'
    },    
    plugins: [
        '@snowpack/plugin-svelte',
        ['@snowpack/plugin-babel',{
            transformOptions: babelOptions()
        }],
        '@snowpack/plugin-dotenv',
        '@snowpack/plugin-optimize'
    ],
    alias: {
        '~': './src'
    },
    devOptions: {
        port: 8079
    }    
}