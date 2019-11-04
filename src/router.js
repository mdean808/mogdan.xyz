import Vue from "vue";
import Router from "vue-router";

// Views
import Home from "./views/Home.vue";
import Projects from "./views/Projects.vue";
import Project from "./views/Project.vue";

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/",
			name: "home",
			component: Home
		},
		{
			path: "/projects",
			name: "projects",
			component: Projects
		},
		{
			path: '/project',
			name: 'project',
			component: Project,
		}
	]
});
