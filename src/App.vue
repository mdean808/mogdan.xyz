<template>
    <div :class="{dark: darkMode}">
        <nav
            class="flex-row justify-between py-2 px-2 bg-purple-400 dark:bg-[#8973cd] transition duration-150 h-full fixed w-1/6 top-0 left-0 overflow-x-hidden">
            <svg
                class=" lg:hidden mx-auto px-3 -mt-2 w-full h-12 text-center dark:text-gray-100 text-white cursor-pointer"
                @click="mobileMenu = !mobileMenu;" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"></path>
            </svg>
            <!--            <div class="lg:block hidden rotate-90 h-20 w-20 bg-no-repeat rounded-full bg-center bg-cover mx-auto"
                             style="background-image: url('/img/me.jpg')"></div>-->
            <div class="lg:block hidden flex flex-row justify-center">
                <router-link to="/"
                             class="text-white dark:text-gray-100 transition duration-150 text-center">
                    <h3
                        class="dark:text-gray-100 transition duration-150">Morgan
                        Dean</h3></router-link>
            </div>

            <ul class="lg:block hidden flex flex-col text-center mx-auto mt-3">
                <li class="p-2">
                    <router-link to="/projects"
                                 class="text-white dark:text-gray-100 transition duration-150">
                        projects
                    </router-link>
                </li>
                <li class="p-2">
                    <router-link to="/resume"
                                 class="text-white dark:text-gray-100 transition duration-150">
                        resume
                    </router-link>
                </li>
                <li class="p-2">
                    <a href="https://repo.mogdan.xyz" target="_blank"
                       class="text-white dark:text-gray-100 transition duration-150">jailbreak
                        repository</a>
                </li>
            </ul>
            <div class="lg:block hidden fixed bottom-6 left-0 w-1/6">
                <div class="text-center mx-auto w-full">
                    <a href="mailto:morgan@mogdan.xyz" target="_blank"
                       class="block text-white dark:text-gray-100 transition duration-150">morgan@mogdan.xyz</a>
                    <!--                    <a href="tel:+18086401099" class="block text-white dark:text-gray-100 transition duration-150">1
                                            (808) 640-1099</a>-->
                </div>
            </div>
        </nav>
        <transition name="slide">
            <div
                class="lg:hidden flex justify-between transition duration-150 h-full fixed w-full top-12 left-0 overflow-x-hidden z-50"
                v-if="mobileMenu">
                <div class=" py-2 w-2/3 bg-purple-400 dark:bg-[#8973cd] transition duration-150">
                    <!--                    <div class="rotate-90 h-20 w-20 bg-no-repeat rounded-full bg-center bg-cover mx-auto block"
                                             style="background-image: url('/img/me.jpg')"></div>-->
                    <router-link to="/"
                                 class="text-white dark:text-gray-100 transition duration-150 block text-center">
                        <h3
                            class="dark:text-gray-100 transition duration-150">Morgan
                            Dean</h3></router-link>
                    <ul class="flex flex-col text-center mx-auto mt-3">
                        <li class="p-2">
                            <router-link to="/projects"
                                         class="text-white dark:text-gray-100 transition duration-150">
                                projects
                            </router-link>
                        </li>
                        <li class="p-2">
                            <router-link to="/resume"
                                         class="text-white dark:text-gray-100 transition duration-150">
                                resume
                            </router-link>
                        </li>
                        <li class="p-2">
                            <a href="https://repo.mogdan.xyz" target="_blank"
                               class="text-white dark:text-gray-100 transition duration-150">jailbreak
                                repository</a>
                        </li>
                    </ul>
                    <div class="fixed bottom-6 left-0 w-2/3">
                        <div class="text-center mx-auto w-full">
                            <a href="mailto:morgan@mogdan.xyz" target="_blank"
                               class="block text-white dark:text-gray-100 transition duration-150">morgan@mogdan.xyz</a>
                            <!--                            <a href="tel:+18086401099"
                                                           class="block text-white dark:text-gray-100 transition duration-150">1
                                                            (808) 640-1099</a>-->
                        </div>
                    </div>
                </div>
                <div class="w-1/3 opacity-60 bg-gray-800 transition duration-150"
                     @click="mobileMenu = false;">
                </div>
            </div>
        </transition>
        <div
            class="bg-white dark:bg-gray-600 pt-4 flex flex-col flex-nowrap h-full w-5/6 absolute top-0 left-1/6 overflow-x-hidden transition duration-150"
            @click="mobileMenu = false">
            <div class="shrink-0 pl-2">
                <div v-for="(crumb, i) of breadcrumbs" class="inline" :key="crumb.url">
                    <router-link
                        class=" transition duration-150"
                        :class="{'text-purple-500 dark:text-purple-300': i === breadcrumbs.length - 1, 'text-gray-600 dark:text-gray-200': i !== breadcrumbs.length - 1}"
                        :to="crumb.url">/{{ crumb.name }}
                    </router-link>
                </div>
            </div>
            <router-view class="h-full w-full overflow-auto pl-3 grow" v-slot="{ Component }">
                <transition
                    name="fade"
                    mode="out-in"
                >
                    <component :is="Component"/>
                </transition>
            </router-view>

            <div
                class="shrink-0 flex left-1/6 w-5/6 pb-4 pt-1 bottom-0 lg:py-2 px-2 w-full bg-gray-200 dark:bg-gray-700 transition duration-150">
                <p class="dark:text-white w-10/12 lg:pt-5 transition duration-150">© 2020 -
                    {{ new Date().getFullYear() }} Morgan Dean</p>
                <div class="lg:w-2/12 w-5/6 text-right">
                    <tool-tip text="github/mdean808" left="-12%">
                        <a href="https://github.com/mdean808" target="_blank"
                           title="github/mdean808">
                            <svg
                                class="-ml-2.5 fill-current inline hover:bg-gray-800 hover:border-gray-800 hover:text-white bg-gray-200 dark:hover:bg-white dark:hover:border-gray-800 dark:hover:text-gray-800 dark:bg-gray-600 text-purple-500 border-2 border-purple-500 dark:text-white dark:border-white rounded-md w-10 mr-2 cursor-pointer transition duration-150"
                                data-donate="true" data-tag="git" data-name="Github"
                                viewBox="0 0 512 512"
                                preserveAspectRatio="xMidYMid meet">
                                <path
                                    d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z"></path>
                            </svg>
                        </a>
                    </tool-tip>
                    <!--                    <tool-tip text="twitter/mdean808" left="10%">
                                        <a href="https://twitter.com/mdean808" target="_blank" title="twitter/mdean808">
                                            <svg
                                                class="fill-current inline hover:bg-blue-500 hover:border-blue-500 hover:text-white bg-white text-purple-500 border-2 border-purple-500 rounded-md w-10 mr-2 cursor-pointer transition duration-150"
                                                data-tag="twi" data-name="Twitter" viewBox="0 0 512 512"
                                                preserveAspectRatio="xMidYMid meet">
                                                <path
                                                    d="M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z"></path>
                                            </svg>
                                        </a>
                                        </tool-tip>-->
                    <!--                    <tool-tip text="instagram/m.dean808" left="-22%">
                                        <a href="https://www.instagram.com/m.dean808/" target="_blank"
                                           class="bg-purple-500 instagram p-0.5 inline-block rounded-md mr-2 instagram cursor-pointer transition duration-150"
                                            title="instagram/m.dean808"
                                        >
                                            <svg style="width: 2.25rem"
                                                 class="mx-auto instagram fill-current inline hover:text-white bg-white rounded text-purple-500 transition duration-150"
                                                 data-tag="ins" data-name="Instagram" viewBox="0 0 512 512"
                                                 preserveAspectRatio="xMidYMid meet">
                                                <path
                                                    d="M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z"></path>
                                                <path
                                                    d="M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z"></path>
                                                <circle cx="351.5" cy="160.5" r="21.5"></circle>
                                            </svg>
                                        </a>
                                        </tool-tip>-->
                    <tool-tip text="linkedin/morgan-dean" left="-45%" arrow-left="56%">
                        <a href="https://www.linkedin.com/in/morgan-dean-251467168/" target="_blank"
                           title="linkedin/morgan-dean">
                            <svg
                                class="linkedin inline fill-current hover:text-white bg-gray-200 dark:hover:bg-white dark:hover:border-blue-800 dark:hover:text-blue-800 dark:bg-gray-600 text-purple-500 border-2 border-purple-500 dark:text-white dark:border-white rounded-md w-10 mr-2 cursor-pointer transition duration-150"
                                data-donate="true" data-tag="lin" data-name="LinkedIn"
                                viewBox="0 0 512 512"
                                preserveAspectRatio="xMidYMid meet">
                                <path
                                    d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z"></path>
                            </svg>
                        </a>
                    </tool-tip>
                    <tool-tip text="spotify/morganatic" left="-100%" arrow-left="80%">
                        <a href="https://open.spotify.com/user/unicorn%7C808?si=81T8kSMAQl-Dg2o77zcWmQ"
                           target="_blank"
                           title="spotify/morganatic">
                            <svg
                                class="fill-current inline hover:bg-green-500 hover:border-green-500 hover:text-white bg-gray-200 dark:hover:bg-white dark:hover:border-green-500 dark:hover:text-green-500 dark:bg-gray-600 text-purple-500 border-2 border-purple-500 dark:text-white dark:border-white rounded-md w-10 mr-2 cursor-pointer transition duration-150"
                                data-donate="true" data-tag="spo" data-name="Spotify"
                                viewBox="0 0 512 512"
                                preserveAspectRatio="xMidYMid meet">
                                <path
                                    d="M256 78c-98.3 0-178 79.7-178 178 0 98.31 79.7 178 178 178 98.31 0 178-79.69 178-178 0-98.3-79.69-178-178-178zm81.63 256.73a11.09 11.09 0 0 1-15.26 3.68c-41.8-25.53-94.4-31.31-156.37-17.16a11.1 11.1 0 0 1-4.93-21.64c67.8-15.49 125.96-8.82 172.88 19.86a11.1 11.1 0 0 1 3.68 15.26zm21.79-48.47a13.88 13.88 0 0 1-19.1 4.57c-47.84-29.4-120.77-37.92-177.36-20.74a13.9 13.9 0 0 1-17.32-9.25 13.9 13.9 0 0 1 9.25-17.3c64.65-19.62 145.01-10.12 199.96 23.64a13.87 13.87 0 0 1 4.56 19.08zm1.87-50.47c-57.37-34.07-152.02-37.2-206.8-20.58a16.65 16.65 0 1 1-9.66-31.87c62.88-19.08 167.4-15.4 233.45 23.81a16.63 16.63 0 0 1 5.82 22.82 16.63 16.63 0 0 1-22.8 5.82h-.01z"></path>
                            </svg>
                        </a>
                    </tool-tip>
                </div>
            </div>
        </div>
        <div
            class="absolute right-1 top-1 hover:bg-gray-700 dark:hover:bg-white dark:hover:text-gray-700 hover:text-white text-gray-700 dark:text-white border-gray-700 dark:border-white border-2 rounded-md cursor-pointer transition duration-150"
            @click="changeDarkMode">
            <svg v-if="!darkMode" class="w-6 h-6 transition-none" fill="currentColor"
                 viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
            <svg v-else class="w-6 h-6 transition-none" fill="currentColor" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clip-rule="evenodd"></path>
            </svg>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ToolTip from '@/components/ToolTip.vue';

export default defineComponent({
    name: 'App',
    components: { ToolTip },
    data() {
        return {
            breadcrumbs: [],
            pageTransition: 'fade',
            darkMode: false,
            mobileMenu: false
        };
    },
    watch: {
        $route() {
            this.breadcrumbs = this.$route.meta.crumbs;
        }
    },
    mounted() {
        this.breadcrumbs = this.$route.meta.crumbs;
        if (localStorage && localStorage.getItem('darkMode')) {
            this.darkMode = localStorage.getItem('darkMode') === 'true';
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) this.darkMode = true;
    },
    methods: {
        changeDarkMode() {
            this.darkMode = !this.darkMode;
            localStorage.setItem('darkMode', this.darkMode.toString());
        }
    },
    created() {
        this.$router.beforeEach((to, from, next) => {
            this.mobileMenu = false;
            if (to.name === 'Home') {
                this.pageTransition = 'slide-left';
            } else if (from.name === 'Home') {
                this.pageTransition = 'slide-right';
            } else if (to.name === 'About') {
                this.pageTransition = 'slide-left';
            } else if (to.name === 'Projects' && from.name === 'About') {
                this.pageTransition = 'slide-right';
            } else if (to.name === 'Projects' && from.name === 'Resume') {
                this.pageTransition = 'slide-left';
            } else if (to.name === 'Resume' && from.name === 'About') {
                this.pageTransition = 'slide-right';
            } else if (to.name === 'Resume' && from.name === 'Projects') {
                this.pageTransition = 'slide-right';
            } else {
                this.pageTransition = 'fade';
            }
            return next();
        });
    }
});
</script>
<style lang="scss">
.fade-enter-active, .fade-leave-active {
    transition: opacity .2s ease;
}

.fade-enter-from, .fade-leave-to {
    opacity: 0;
}

.slide-leave-enter {
    transform: translateX(0);
    transition: all .2s linear;
}

.slide-enter-active {
    transform: translateX(-100%);
}

.slide-leave-to {
    transform: translateX(-100%);
}

.instagram:hover {
    background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%) !important;
}

.linkedin:hover {
    background: #0077b5;
    border-color: #0077b5;
}
</style>
