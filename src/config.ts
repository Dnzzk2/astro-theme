import type { GithubConfig, Link, PostConfig, Site, SocialLink, TagsConfig } from '~/types'

/**
 * 站点基础配置 / Site basic configuration
 * @type {Site}
 */
export const SITE: Site = {
  title: 'Litos',
  description: 'Litos is a blog theme built with Astro.js and Dnzzk2.',
  author: 'Dnzzk2',
}

/**
 * 文章相关配置 / Posts configuration
 * @type {PostConfig}
 * @property {string} title - 文章标题 / Post title
 * @property {string} description - 文章描述 / Post description
 * @property {string} author - 作者名称 / Author name
 * @property {number} homePageSize - 首页显示文章数量 / Number of posts on home page
 * @property {number} postsPageSize - 文章列表页每页数量 / Posts per page on posts list
 * @property {boolean} enableImage - 是否启用文章图片 / Whether to enable post images
 * @property {string} defaultHeroImage - 默认文章封面图 / Default hero image for posts
 * @property {string} defaultHeroImageAspectRatio - 默认图片宽高比 / Default image aspect ratio
 */
export const POSTS_CONFIG: PostConfig = {
  title: 'Posts',
  description: 'Posts by Dnzzk2',
  author: 'Dnzzk2',
  homePageSize: 5,
  postsPageSize: 10,
  enableImage: true,
  defaultHeroImage: 'og-image.png',
  defaultHeroImageAspectRatio: '16/9',
}

/**
 * 标签页相关配置 / Tags configuration
 * @type {TagsConfig}
 * @property {string} title - 标签页标题 / Tags page title
 * @property {string} description - 标签页描述 / Tags page description
 */
export const TAGS_CONFIG: TagsConfig = {
  title: 'Tags',
  description: 'All tags of Posts',
}

/**
 * GitHub 功能配置 / GitHub feature configuration
 * @type {GithubConfig}
 * @property {boolean} ENABLED - 是否启用GitHub功能 / Whether to enable GitHub features
 * @property {number} CACHE_DURATION - 缓存持续时间(秒) / Cache duration in seconds
 * @property {boolean} USE_MOCK_DATA_FOR_DEVELOPMENT - 开发时使用模拟数据 / Use mock data in development
 */
export const GITHUB_CONFIG: GithubConfig = {
  ENABLED: true,
  CACHE_DURATION: 60 * 60 * 1.5 + 60 * 5, // 1.5小时 + 5分钟的缓存时间 / 1.5 hours + 5 minutes cache time
  USE_MOCK_DATA_FOR_DEVELOPMENT: true,
}

/**
 * 导航栏链接配置 / Header navigation links
 * @type {Link[]}
 */
export const HEADER_LINKS: Link[] = [
  {
    name: 'Posts',
    url: '/posts',
  },
  {
    name: 'Projects',
    url: '/projects',
  },
]

/**
 * 页脚链接配置 / Footer links
 * @type {Link[]}
 */
export const FOOTER_LINKS: Link[] = [
  {
    name: 'Readme',
    url: '/',
  },
  {
    name: 'Posts',
    url: '/posts',
  },
  {
    name: 'Projects',
    url: '/projects',
  },
  {
    name: 'Tags',
    url: '/tags',
  },
]

/**
 * 社交媒体链接配置 / Social media links
 * @type {SocialLink[]}
 */
export const SOLUTION_LINKS: SocialLink[] = [
  {
    name: 'github',
    url: 'https://github.com/yourname',
    icon: 'icon-[ri--github-fill]',
  },
  {
    name: 'twitter',
    url: 'https://x.com/yourname',
    icon: 'icon-[ri--twitter-x-fill]',
  },
  {
    name: 'bilibili',
    url: 'https://space.bilibili.com/yourSpaceId',
    icon: 'icon-[ri--bilibili-fill]',
  },
]
