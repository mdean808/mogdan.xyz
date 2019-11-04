import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		projects: [
			{
				id: '0',
				title: 'Vast Storytelling',
				url: 'https://vaststorytelling.com',
				desc: 'A collection of student storytelling content.',
				img: 'https://vaststorytelling.com/img/vast.png',
				notable: true
			}
		]
	},
	getters: {
		projects: (state) => () => {
			return state.projects
		},
		notableProjects: (state) => () => {
			return state.projects.filter(project => project.notable === true)
		},
		project: (state) => (id) => {
			console.log(id);
			return state.projects.find(project => project.id === id)
		}
	},
	mutations: {},
	actions: {}
});
