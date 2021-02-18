<template>
    <div>
        <div class="py-3">
            <h2>Programming</h2>
            <hr>
            <ul class="list-disc list-inside text-gray-500 ml-2 transition duration-150">
                <li>
                    <a href="https://studentcorner.io" target="_blank">Student Corner</a>
                    <div class="pl-10 text-gray-700 transition duration-150"><p>An award winning service dedicated to improving the project-based learning process.  Has over 6 thousand registered users and over four thousand projects created.</p>
                        <span class="uppercase text-gray-500 dark:text-gray-400 text-xs font-bold tracking-wider transition duration-150">Vue.js, Node.js, MongoDb, devops, design</span>
                    </div>
                </li>
                <li>
                    <a href="https://github.com/mdean808/braindash-app" target="_blank">Media Manager</a>
                    <div class="pl-10 text-gray-700 transition duration-150"><p>A cross-platform desktop application for organizing music libraries. Supports recursive organization, duplicate detection, and more.</p>
                        <span class="uppercase text-gray-500 dark:text-gray-400 text-xs font-bold tracking-wider transition duration-150">electron, node.js, materialize.css</span></div>
                </li>
                <li>
                    <a href="https://repo.mogdan.xyz/web/xyz.mogdan.tweakmanager/" target="_blank">Tweak Manager</a>
                    <div class="pl-10 text-gray-700 transition duration-150"><p>An iOS app built to help users manage <a href="https://en.wikipedia.org/wiki/IOS_jailbreaking" target="_blank"> jailbreak tweaks</a> by enabling and disabling them using system calls..</p>
                        <span class="uppercase text-gray-500 dark:text-gray-400 text-xs font-bold tracking-wider transition duration-150">Objective C Logos</span>
                    </div>
                </li>
                <li>
                    <a href="https://tutorialdb.mogdan.xyz/" target="_blank">TutorialDB</a>
                    <div class="pl-10 text-gray-700 transition duration-150"><p>A website for submitting and browsing useful tutorials. (May take a few seconds to load)</p>
                        <span class="uppercase text-gray-500 dark:text-gray-400 text-xs font-bold tracking-wider transition duration-150">MongoDB materialize.css heroku Node.js</span>
                    </div>
                </li>
                <li>
                    <a href="https://github.com/mdean808/braindash-app" target="_blank">Braindash</a>
                    <div class="pl-10 text-gray-700 transition duration-150"><p>An iOS companion app to the board game <a
                        href="https://en.wikipedia.org/wiki/Balderdash" target="_blank">balderdash</a>. Designed to make it easy to keep track of score and game state.</p>
                        <span class="uppercase text-gray-500 dark:text-gray-400 text-xs font-bold tracking-wider transition duration-150">Swift Websockets Node.js</span>
                    </div>
                </li>
                <li class="mt-3">
                    <span class="text-gray-700 italic dark:text-white">Looking for more? Visit my <a target="_blank" href="https://github.com/mdean808">Github</a>.</span>
                </li>
            </ul>
            <div class="absolute bottom-16 text-gray-500 text-sm transition duration-150 hidden lg:block">
                <p>(this website was made using vue.js, tailwindcss, and hosted on <a target="" href="https://github.com/mdean808/mogdan.xyz">github</a>)</p>
            </div>
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
