<template>
    <div>
        <div class="center section">
            <div class="top">
                <h1>I'm Morgan Dean</h1>
                <h2>I'm a programmer. Most of my work is on GitHub, if you go there.</h2>
                <a class="btn" href="https://github.com/mdean808" target="_blank">
                    <svg class="github" style="width: 25px; margin-bottom: -7px; margin-right: 10px;"
                         viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <title>GitHub icon</title>
                        <path color="white"
                              d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                    </svg>
                    GitHub</a>
                <h2>Check out some of my completed projects below.</h2>
            </div>
            <div class="next">
                <div data-aos="fade">
                    <h1>Student Corner</h1>
                    <p>Student Corner makes project based learning easy.</p>
                    <img class="screenshot" src="../assets/sc.png" alt="sc-screenshot">
                    <br>
                    <br>
                    <a href="https://studentcorner.io" target="_blank" class="btn">Visit</a>
                </div>
                <div data-aos="fade">
                    <h1>Media Manager</h1>
                    <p>Media Manager organizes your music library.</p>
                    <img class="screenshot" src="../assets/mm.png" alt="sc-screenshot">
                    <br>
                    <br>
                    <a href="https://github.com/mdean808/media-manager" target="_blank" class="btn">Download</a>
                </div>
            </div>
            <div class="bottom">
                <a class="btn">Contact</a>
            </div>
        </div>
    </div>
</template>

<script>
	// @ is an alias to /src
	import AOS from 'aos'
	import 'aos/dist/aos.css'


	export default {
		name: "Home",
		beforeMount() {
			this.projects = this.$store.getters.notableProjects()
		},
		mounted() {
			AOS.init()
		}
	};
</script>

<style lang="scss" scoped>
    @import "../scss/defaults.scss";

    svg {
        transition: .4s all;
    }


    .bottom {
        bottom: 30px;
        position: absolute;
        width: 100%;
    }

    .next {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .letter {
        font-size: 200px;
        user-select: none;
    }

    img.screenshot {
        width: 300px;
        height: 200px;
        margin: 10px;
    }
</style>
