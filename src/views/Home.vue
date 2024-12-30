<template>
    <div class="flex mx-auto">
        <div class="w-full text-left">
            <!--            <h2 class="dark:text-gray-100 transition duration-150">Hey!</h2>
                        <hr>-->
            <p class="py-1">I'm Morgan Dean, a software developer attending the University of British Columbia.</p>
            <p class="py-1">I'm currently working on <a href="https://friendsfm.app">Friends FM</a>, <a href="https://viralmind.ai">viralmind.ai</a>, and various
                <router-link to="/projects">programming projects</router-link>.
            </p>
            <p class="py-1">Want more? Check out my <a href="https://github.com/mdean808">GitHub</a>.
            </p>
            <!--            <p class="py-1">When I'm not learning about new tech or diving into a <a
                href="https://www.youtube.com/user/enyay" target="_blank">Tom Scott video</a> rabbit hole, I'm outside
                mountain biking and camping. You might find me three days into a backpacking trip in Waimanu Valley or
                halfway up Kohala Mountain, biking through misty forests.</p>-->
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Home',
    data() {
        return { yearsOld: new Date().getFullYear() - 2002 - (new Date().getMonth() < 0 || (new Date().getMonth() === 0 && new Date().getDate() < 15) ? 1 : 0) };
    }
});
</script>
