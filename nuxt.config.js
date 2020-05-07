// async function getProjectFiles() {
//   const projectFiles = await require.context(
//     '~/assets/content/project/',
//     false,
//     /\.json$/
//   )
//   return projectFiles
// }

// const projectFiles = getProjectFiles()

// console.log('projectFiles', projectFiles)

// const dynamicRoutes = () => {
//   return new Promise((resolve) => {
//     resolve(
//       projectFiles.keys().map((key) => {
//         const slug = key.slice(2, -5)
//         console.log('slug', slug)
//         return '/projects/' + slug
//       })
//     )
//     // resolve(data.map((el) => `product/${el.id}`))
//   })
// }
// console.log('dynamic routes', dynamicRoutes)
export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        href:
          'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Roboto+Mono:wght@300;400;500;700&display=swap',
        rel: 'stylesheet'
      }
    ]
  },
  generate: {
    routes() {
      return ['/projects/johnnyseeds-web-crawler']
    }
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~assets/css/_site.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/markdownit',
    [
      'nuxt-fontawesome',
      {
        component: 'fa',
        imports: [
          // import whole set
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          }
        ]
      }
    ]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  markdownit: {
    injected: true
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
