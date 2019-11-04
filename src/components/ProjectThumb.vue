<template>
    <div class="thumbnail" :style="{backgroundImage: project.img}" @click="goto(project.id)" >
        <img :src="project.img" :alt="`${project.title} Image`">
        <div class="content">
            <p class="center">{{project.desc}}</p>
        </div>

    </div>
</template>

<script>
	export default {
		name: "ProjectThumb",
        props: ['id'],
		methods: {
			goto(id) {
				this.$router.push(`/project?id=` + id);
            }
        },
        beforeMount() {
		    this.project = this.$store.getters.project(this.id);
            console.log(this.project);
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import "../scss/defaults.scss";

    .thumbnail {
        border-radius: 25px;
        cursor: pointer;
        height: 200px;
        transition: box-shadow 0.3s ease-in-out;
        .content {
            background-color: white;
            position: absolute;
            max-width: 80%;
            margin: auto;
            p {
                color: black;
            }
            a {
                color: black;
            }
        }
        img {
            height: 200px;
            border-radius: 25px;
        }
    }

    .thumbnail:hover {
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }
</style>
