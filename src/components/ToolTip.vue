<template>
    <div class="tooltip">
        <slot/>
        <div class="tooltip-text" :style="{left}">
            {{ text }}
            <span class="tooltip-arrow" :style="{left: arrowLeft}"></span>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ToolTip',
    props: {
        text: {
            type: String,
            default: ''
        },
        left: {
            type: String,
            default: '50%'
        },
        arrowLeft: {
            type: String,
            default: '50%'
        }
    }
});
</script>

<style lang="scss" scoped>
.tooltip {
    position: relative;
    user-select: none;
    display: inline-block;
}

.tooltip .tooltip-text {
    transition: all .3s;
    white-space: nowrap;
    opacity: 0;
    z-index: -1;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 8px;
    position: absolute;
    bottom: 150%;
    margin-left: -60px;
}

.tooltip .tooltip-arrow {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
}

.tooltip:hover .tooltip-text {
    opacity: .85;
    z-index: 1;
}
</style>
