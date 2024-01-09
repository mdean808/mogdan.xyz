<template>
    <div class="overflow-y-hidden">
        <a href="/Morgan_Dean_Resume_Jan_2024.pdf">(download)</a>
        <object
            type="application/pdf"
            class="w-full h-11/12 pr-2"
            data="/Morgan_Dean_Resume_Jan_2024.pdf"
        >
            <p>Your browser doesn't support PDF viewers. Please download above.</p>
        </object>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Resume'
});
</script>

<style scoped></style>
