<template>
    <div class="flex mx-auto">
        <div class="w-full">
            <h2 class="dark:text-gray-100 transition duration-150">Hey!</h2>
            <hr>
            <p class="py-1">Welcome to my website! I'm Morgan Dean, a {{ yearsOld }} year old developer from the Big
                Island of
                Hawaii.</p>
            <p class="py-1">I enjoy biking, camping, backpacking, reading,
                and
                <router-link to="/projects">programming</router-link>
                .
            </p>
            <p class="py-1">I'm currently in a gap year, but I will be attending the University of British Columbia in
                Vancouver this fall, majoring in Computer Science.</p>
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
