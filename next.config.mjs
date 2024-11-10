/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
  
	images: {
	  remotePatterns: [
		{
		  protocol: 'https',
		  hostname: '**'
		}
	  ]
	},
  
	// Extend Webpack configuration to handle audio files
	// webpack: (config, { isServer }) => {
	//   config.module.rules.push({
	// 	test: /\.(mp3|wav|ogg)$/, // Regex to match audio file extensions
	// 	use: {
	// 	  loader: 'file-loader',
	// 	  options: {
	// 		name: '[name].[hash].[ext]', // Naming convention for the output file
	// 		outputPath: 'static/assets/audio/', // Output directory inside `.next/static`
	// 		publicPath: '/_next/static/assets/audio/', // Public path to access the files
	// 	  },
	// 	},
	//   });
  
	//   return config; // Return the modified configuration
	// },
  };
  
  export default nextConfig;
  