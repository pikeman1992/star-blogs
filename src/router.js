import Home from './components/Home.vue'

import ListBlogs from './components/blogs/ListBlogs.vue'
import SingleBlog from './components/blogs/SingleBlog.vue'

import CV from './components/CV.vue'

import ListVideos from './components/musicVideos/ListVideos.vue'
import SingleVideo from './components/musicVideos/SingleVideo.vue'

import Shopping from './components/shopping/Shopping.vue'

export default [
  { path: '/', component: Home },
  { path: '/blogs', component: ListBlogs },
  { path: '/blogs/:id', component: SingleBlog },
  { path: '/curriculumVitae', component: CV },
  { path: '/videos', component: ListVideos },
  { path: '/videos/:id', component: SingleVideo },
  { path: '/shopping', component: Shopping }
]