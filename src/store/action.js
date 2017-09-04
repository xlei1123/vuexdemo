export default {
	addCount({ commit, state }) {
		//点击下一题，记录答案id，判断是否是最后一题，如果不是则跳转下一题
		commit('ADD_COUNT');
		
	},
	//初始化信息
	initializeData({ commit }) {
		console.log('init');
		commit('INITIALIZE_DATA');
	}
}