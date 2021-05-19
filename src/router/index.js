import {
	createRouter,
	createWebHistory
} from 'vue-router'
import Main from '../views/main/Main.vue'
import Home from '../views/main/home/Home.vue'
import Project from '../views/main/project/Project.vue'
import Tree from '../views/main/tree/Tree.vue'
import Nav from '../views/main/nav/Nav.vue'
import Chapter from '../views/main/chapter/Chapter.vue'

const routes = [{
	path: '/',
	name: 'Main',
	component: Main,
	redirect: {
		name: 'Home'
	},
	children: [{
			path: '/home',
			name: 'Home',
			component: Home,
		},
		{
			path: '/project',
			name: 'Project',
			component: Project,
		},
		{
			path: '/tree',
			name: 'Tree',
			component: Tree,
		},
		{
			path: '/nav',
			name: 'Nav',
			component: Nav,
		},
		{
			path: '/chapter',
			name: 'Chapter',
			component: Chapter,
		}
	]
}]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
