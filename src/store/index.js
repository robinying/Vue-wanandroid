import {
	createStore
} from 'vuex'

export default createStore({
	state: {
		// 主页选中的tab索引
		mainTabBarActive: 0,
	},
	mutations: {
		updateMainTabBarActive(state, active) {
			state.mainTabBarActive = active;
		}
	},
	actions: {},
	modules: {}
})
