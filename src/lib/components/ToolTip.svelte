<script lang="ts">
  import type { Snippet } from 'svelte';
  import { fade } from 'svelte/transition';

  interface Props {
    text: string;
    left?: string;
    arrowLeft?: string;
    children: Snippet;
  }

  let { text, left = '0%', arrowLeft = '50%', children }: Props = $props();

  let visible = $state(false);
</script>

<span
  role="tooltip"
  class="relative inline-block"
  onmouseenter={() => (visible = true)}
  onmouseleave={() => (visible = false)}
  onfocusin={() => (visible = true)}
  onfocusout={() => (visible = false)}
>
  {@render children()}

  {#if visible}
    <span
      role="tooltip"
      transition:fade={{ duration: 100 }}
      style="left: {left}"
      class="pointer-events-none absolute bottom-full z-50 mb-2 w-max rounded-md bg-gray-800 px-2 py-1 text-xs whitespace-nowrap text-white transition duration-150 dark:bg-gray-200 dark:text-gray-800"
    >
      {text}
      <span
        style="left: {arrowLeft}"
        class="absolute top-full -ml-1 border-4 border-transparent border-t-gray-800 dark:border-t-gray-200"
      ></span>
    </span>
  {/if}
</span>
