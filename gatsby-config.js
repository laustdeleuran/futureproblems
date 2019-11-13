module.exports = {
	siteMetadata: {
		author: '@laustdeleuran',
		description:
			'Future Problems is a Portland-based collective of artists, builders and creatives.',
		title: 'Future Problems',
		image: 'src/images/smelborp-og.png',
	},
	plugins: [
		'gatsby-plugin-htaccess',
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/images`,
			},
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				background_color: '#ffffff',
				display: 'minimal-ui',
				icon: 'src/images/smelborp-icon.png', // This path is relative to the root of the site.
				name: 'gatsby-starter-default',
				short_name: 'starter',
				start_url: '/',
				theme_color: '#231f20',
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// 'gatsby-plugin-offline',
	],
};
