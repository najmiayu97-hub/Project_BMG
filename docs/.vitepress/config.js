import { defineConfig } from 'vitepress'

export default defineConfig({
  locales: {
    root: {
      label: 'Bahasa Indonesia',
      lang: 'id',
      title: 'BMG Docs',
      description: 'Dokumentasi proyek website Berkah Media Gemilang (BMG)',
      themeConfig: {
        nav: [
          { text: 'Beranda', link: '/' },
          { text: 'Pengantar', link: '/introduction' },
          { text: 'Memulai', link: '/getting-started' },
          { text: 'Struktur', link: '/project-structure' },
        ],
        sidebar: [
          {
            text: 'Pengantar',
            items: [
              { text: 'Introduction', link: '/introduction' },
              { text: 'Getting Started', link: '/getting-started' },
            ]
          },
          {
            text: 'Proyek',
            items: [
              { text: 'Project Structure', link: '/project-structure' },
              { text: 'Architecture', link: '/architecture' },
              { text: 'Configuration', link: '/configuration' },
              { text: 'Styling', link: '/styling' },
              { text: 'Deployment', link: '/deployment' },
            ]
          },
          {
            text: 'Halaman',
            items: [
              { text: 'Beranda', link: '/pages/home' },
              { text: 'Tentang Kami', link: '/pages/about-us' },
              { text: 'Layanan', link: '/pages/services' },
              { text: 'Portofolio', link: '/pages/portfolio' },
              { text: 'Kontak', link: '/pages/contact' },
            ]
          },
          {
            text: 'Fitur',
            items: [
              { text: 'Multi-Bahasa', link: '/features/multilanguage' },
              { text: 'Scroll Reveal', link: '/features/scroll-reveal' },
            ]
          },
          {
            text: 'Contoh',
            items: [
              { text: 'Markdown Examples', link: '/markdown-examples' },
              { text: 'Runtime API Examples', link: '/api-examples' },
            ]
          }
        ]
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      title: 'BMG Docs',
      description: 'Documentation for the Berkah Media Gemilang (BMG) website project',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Introduction', link: '/en/introduction' },
          { text: 'Getting Started', link: '/en/getting-started' },
          { text: 'Structure', link: '/en/project-structure' },
        ],
        sidebar: [
          {
            text: 'Introduction',
            items: [
              { text: 'Introduction', link: '/en/introduction' },
              { text: 'Getting Started', link: '/en/getting-started' },
            ]
          },
          {
            text: 'Project',
            items: [
              { text: 'Project Structure', link: '/en/project-structure' },
              { text: 'Architecture', link: '/en/architecture' },
              { text: 'Configuration', link: '/en/configuration' },
              { text: 'Styling', link: '/en/styling' },
              { text: 'Deployment', link: '/en/deployment' },
            ]
          },
          {
            text: 'Pages',
            items: [
              { text: 'Home', link: '/en/pages/home' },
              { text: 'About Us', link: '/en/pages/about-us' },
              { text: 'Services', link: '/en/pages/services' },
              { text: 'Portfolio', link: '/en/pages/portfolio' },
              { text: 'Contact', link: '/en/pages/contact' },
            ]
          },
          {
            text: 'Features',
            items: [
              { text: 'Multi-Language', link: '/en/features/multilanguage' },
              { text: 'Scroll Reveal', link: '/en/features/scroll-reveal' },
            ]
          },
          {
            text: 'Examples',
            items: [
              { text: 'Markdown Examples', link: '/en/markdown-examples' },
              { text: 'Runtime API Examples', link: '/en/api-examples' },
            ]
          }
        ]
      }
    }
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ]
  }
})