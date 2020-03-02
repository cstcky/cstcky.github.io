// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteUrl: 'https://cstcky.github.io',
  siteDescription: 'Personal blog/resume hosting website',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogEntry',
	      path: 'src/blogPosts/*.md'
      }
    }
  ],
  templates: {  
    BlogEntry: '/:year/:month/:date/:title' 
  }
}
