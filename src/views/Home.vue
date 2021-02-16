<template>
    <div class="mx-auto px-5 lg:px-0">
        <h2 class="dark:text-gray-100">Hey!</h2>
        <p class="py-1">Welcome to my website! I'm Morgan Dean, a {{ yearsOld }} year old developer from the Big Island of
            Hawaii.</p>
        <p class="py-1">I enjoy biking, camping, backpacking, reading,
            and
            <router-link to="/projects">programming</router-link>
            .
        </p>
        <p class="py-1">I'm currently in a gap year, but I will be attending the University of British Columbia in
            Vancouver this fall, majoring in Computer Science.</p>
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
