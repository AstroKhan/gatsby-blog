module.exports = {
  siteTitle: 'Agarbati-Beat',
  siteDescription: 'Благовония и духи из солнечного Раджастана',
  authorName: 'Astro Khan',
  twitterUsername: '_maxpou',
  authorAvatar: 'avatar.jpeg', // file in content/images
  defaultLang: 'en', // show flag if lang is not default. Leave empty to enable flags in post lists
  authorDescription: `
  Наша компания является одним из первых поставщиком Пушкарских пыльцовых 
  благовоний ручной работы и духов на основе эфирных масел в России,
   наши товары отличаются натуральным составом и приятными,
    невероятно глубокими и насыщенными ароматами.😎 <br>
  Хотите узнать больше? <a href="https://vk.com/agarbatibeat" rel="noopener" target="_blank">Посетите нашу группу!</a>
  `,
  siteUrl: 'https://maxpou.github.io/',
  disqusSiteUrl: 'https://www.maxpou.fr/',
  // Prefixes all links. For cases when deployed to maxpou.fr/gatsby-starter-morning-dew/
  pathPrefix: '/agarbati-beat', // Note: it must *not* have a trailing slash.
  siteCover: 'cover-logo.jpeg', // file in content/images
  background_color: '#ffffff',
  theme_color: '#222222',
  display: 'standalone',
  icon: 'content/images/avatar-logo.png',
  postsPerPage: 6,
  disqusShortname: 'maxpou',
  headerTitle: 'Agarbati-Beat',
  headerLinksIcon: 'avatar-logo.png', //  (leave empty to disable: '')
  headerLinks: [
    {
      label: 'Our Shop',
      url: '/',
    },
    {
      label: 'About',
      url: '/about-agarbati-beat',
    },
    {
      label: 'Installation',
      url: '/how-to-install',
    },
  ],
  // Footer information (ex: Github, Netlify...)
  websiteHost: {
    name: 'GitHub',
    url: 'https://github.com',
  },
  footerLinks: [
    {
      sectionName: 'Explore',
      links: [
        {
          label: 'Blog',
          url: '/',
        },
        {
          label: 'About',
          url: '/about-agarbati-beat',
        },
        {
          label: 'Installation',
          url: '/how-to-install',
        },
      ],
    },
    {
      sectionName: 'Follow the author',
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/maxpou/gatsby-starter-morning-dew',
          rel: 'external',
        },
        {
          label: 'Website',
          url: 'https://www.maxpou.fr',
          rel: 'external',
        },
        {
          label: 'Twitter',
          url: 'https://twitter.com/_maxpou',
          rel: 'external',
        },
      ],
    },
  ],
}
