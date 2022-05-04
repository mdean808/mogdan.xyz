<template>
    <div class="flex mx-auto">
        <div class="w-full text-left">
            <!--            <h2 class="dark:text-gray-100 transition duration-150">Hey!</h2>
                        <hr>-->
            <p class="py-1">I'm Morgan Dean, a {{ yearsOld }}-year-old developer from the Big
                Island of
                Hawaii.</p>
            <p class="py-1">I'm currently working on various
                <router-link to="/projects">programming projects</router-link>
                and attending the University of British Columbia in
                Vancouver, majoring in Computer Science.
            </p>
<!--            <p class="py-1">When I'm not learning about new tech or diving into a <a
                href="https://www.youtube.com/user/enyay" target="_blank">Tom Scott video</a> rabbit hole, I'm outside
                mountain biking and camping. You might find me three days into a backpacking trip in Waimanu Valley or
                halfway up Kohala Mountain, biking through misty forests.</p>-->
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Home',
    data() {
        return {
            yearsOld: (new Date().getFullYear()) - 2002
        };
    }
});
</script>
