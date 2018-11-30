const path=require('path')

const webpack=require('webpack')

const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports={
	mode:'development',

	entry:'./src/main.js',

	output:{
		path:path.resolve(__dirname,'dist'),
		filename:'app.js',
		publicPath:'/dist'
	},
	resolve: {
	    extensions: ['.js', '.vue', '.json'],
	    alias: {
	      '@': path.resolve(__dirname,'src'),
	    }
  	},
	module:{
		rules:[
			{
		        test:/\.scss$/,
		        use: ['style-loader','css-loader','sass-loader']
      		},
			{
				test:/\.css$/,
				use:['style-loader','css-loader']
			},
			{
				test:/\.vue$/,
				use:['vue-loader']
			},
			{
				test:/\.(jpg|png|svg|gif)$/,
				use:['file-loader']
			},
			{
		        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
		        loader: 'url-loader'
        	}
		]
	},
	plugins:[
		new webpack.NamedModulesPlugin(),
	    new webpack.HotModuleReplacementPlugin(),
	    new VueLoaderPlugin()
	],
	devServer:{
		contentBase:'./',
		hot:true,
		open:true,
		// proxy: {
		// 	 '/test/*': {
		// 	 target: 'http://localhost',
		// 	 changeOrigin: true,
		// 	 secure: false
		// 	 }
 	// 	}
	}
}