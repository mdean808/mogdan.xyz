<template>
    <div>
        <div class="pb-3 flex relative flex-col flex-nowrap h-full">
            <h2 class="shrink-0 py-3 border-b-2 dark:border-white border-black">Programming</h2>
            <ul class="list-disc grow list-inside mt-1 text-gray-500 ml-2 transition duration-150">
                <li>
                    <a href="https://github.com/mdean808/friendsfm" target="_blank">FriendsFM</a>
                    <div class="pl-10 text-gray-700 transition duration-150">
                        <p>FriendsFM is my
                            current side project -- an iOS and Android app for sharing your currently
                            playing song. A notification is sent to all users at a random time each day
                            (like <a target="_blank" href="https://bere.al/en">a bereal</a>), prompting users to share
                            what they're listenting to on Spotify or Apple Music. It is available on Android, iOS, and the web. <a target="_blank" href="https://friendsfm.app">Check it out here!</a></p>
                        <span
                            class="uppercase text-gray-500 dark:text-gray-400 text-xs font-bold tracking-wider transition duration-150">svelte,
                            typescript, tailwindcss, firebase, node.js, capacitorjs</span>
                    </div>
                </li>
                <li>
                    <a href="https://studentcorner.io" target="_blank">Student Corner</a>
                    <div class="pl-10 text-gray-700 transition duration-150">
                        <p>An award winning service dedicated to improving the project-based learning process. Has over
                            6 thousand registered users and over four thousand projects created.</p>
                        <span
                            class="uppercase text-gray-500 dark:text-gray-400 text-xs font-bold tracking-wider transition duration-150">Vue.js,
                            Node.js, mongodb, devops, design</span>
                    </div>
                </li>
                <li>
                    <a href="https://github.com/mdean808/audial" target="_blank">audial</a>
                    <div class="pl-10 text-gray-700 transition duration-150">
                        <p>Hopping on the <a href="https://www.nytimes.com/games/wordle/index.html"
                                target="_blank">wordle</a> trend, this is a web app for guessing a daily song from a
                            given spotify playlist.</p>
                        <span
                            class="uppercase text-gray-500 dark:text-gray-400 text-xs font-bold tracking-wider transition duration-150">svelte,
                            typescript, tailwindcss, firebase, node.js</span>
                    </div>
                </li>
                <li>
                    <a href="https://github.com/mdean808/media-manager" target="_blank">Media Manager</a>
                    <div class="pl-10 text-gray-700 transition duration-150">
                        <p>A cross-platform desktop application for organizing music libraries. Supports recursive
                            organization, duplicate detection, and more.</p>
                        <span
                            class="uppercase text-gray-500 dark:text-gray-400 text-xs font-bold tracking-wider transition duration-150">electron,
                            node.js, materialize.css</span>
                    </div>
                </li>
                <li>
                    <a href="https://repo.mogdan.xyz/web/xyz.mogdan.tweakmanager/" target="_blank">Tweak Manager</a>
                    <div class="pl-10 text-gray-700 transition duration-150">
                        <p>An iOS app built to help users manage <a
                                href="https://en.wikipedia.org/wiki/IOS_jailbreaking" target="_blank"> jailbreak
                                tweaks</a> by enabling and disabling them using system calls..</p>
                        <span
                            class="uppercase text-gray-500 dark:text-gray-400 text-xs font-bold tracking-wider transition duration-150">Objective
                            C, Logos</span>
                    </div>
                </li>
                <li>
                    <a href="https://tutorialdb.mogdan.xyz/" target="_blank">TutorialDB</a>
                    <div class="pl-10 text-gray-700 transition duration-150">
                        <p>A website for submitting and browsing useful tutorials. (May take a few seconds to load)</p>
                        <span
                            class="uppercase text-gray-500 dark:text-gray-400 text-xs font-bold tracking-wider transition duration-150">MongoDB,
                            materialize.css, heroku, Node.js</span>
                    </div>
                </li>
                <li>
                    <a href="https://github.com/mdean808/braindash-app" target="_blank">Braindash</a>
                    <div class="pl-10 text-gray-700 transition duration-150">
                        <p>An iOS companion app to the board game <a href="https://en.wikipedia.org/wiki/Balderdash"
                                target="_blank">balderdash</a>. Designed to make it easy to keep track of score and game
                            state.</p>
                        <span
                            class="uppercase text-gray-500 dark:text-gray-400 text-xs font-bold tracking-wider transition duration-150">Swift,
                            Websockets, Node.js</span>
                    </div>
                </li>
                <li>
                    <span class="text-sm text-white">(this website was made using vue.js, tailwindcss, and hosted on <a
                            target="" href="https://github.com/mdean808/mogdan.xyz">github</a>)</span>
                </li>
                <li class="mt-2">
                    <span class="text-gray-700 italic dark:text-white">Looking for more? Visit my <a target="_blank"
                            href="https://github.com/mdean808">Github</a>.</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Projects'
});
</script>

<style scoped>

</style>
