<template>
    <div class="header">
        <div class="center">
            <div class="container">
                <h1>Projects</h1>
                <div class="thumbnail-wrapper">
                    <ProjectThumb v-for="(project, i) of projects" :key="i"  :title="project.title" :desc="project.desc" :url="project.url" :image="project.image"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	// @ is an alias to /src
	import ProjectThumb from "../components/ProjectThumb.vue";
	import SC from '../assets/sc.png'

	export default {
		name: "Work",
		components: {
			ProjectThumb,
		},
		data() {
			return {
				projects: [
                    {
                    	title: 'Student Corner',
                        desc: 'The ultimate project based learning toolkit.',
                        url: 'https://studentcorner.io',
                        image: '/assets/sc.png'
                    },
                    {
                        title: 'TutorialDB',
                        desc: 'Tutorials created by volunteers for people who need tutorials.',
                        url: 'https://tutorialdb.mogdan.xyz',
                        image: '/assets/logo.png'
                    }
                ]
            }
		}
	};
</script>

<style scoped lang="scss">
    @import '../scss/defaults.scss';

    .thumbnail-wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }


    @media screen and (max-width: $small_screen) {
        .thumbnail-wrapper {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
    }
</style>
