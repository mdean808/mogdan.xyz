<script lang="ts">
  import type { Snippet } from 'svelte';
  import { fade } from 'svelte/transition';

  interface Props {
    text: string;
    /**
     * Which edge of the bubble is pinned to the trigger. `center` is right for
     * most cases; use `end` (or `start`) when the trigger sits near a viewport
     * edge and a centered bubble would overflow it.
     */
    align?: 'center' | 'start' | 'end';
    /**
     * Spacing belongs here rather than on the trigger inside: margins on the
     * child count toward this wrapper's shrink-to-fit width and would push the
     * arrow off the trigger's centre.
     */
    class?: string;
    children: Snippet;
  }

  let { text, align = 'center', class: className = '', children }: Props = $props();

  let visible = $state(false);

  const alignment = {
    center: 'left-1/2 -translate-x-1/2',
    start: 'left-0',
    end: 'right-0'
  };
</script>

<!-- The wrapper is a hover/focus shell around an already-interactive trigger,
     so it has no role of its own. -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<span
  class="relative inline-block {className}"
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
      class="pointer-events-none absolute bottom-full z-50 mb-2 w-max rounded-md bg-gray-800 px-2 py-1 text-xs whitespace-nowrap text-white transition duration-150 dark:bg-gray-200 dark:text-gray-800 {alignment[
        align
      ]}"
    >
      {text}
    </span>
    <!-- Sibling of the bubble, not a child, so it centres on the trigger
         instead of on the (variable-width) bubble. -->
    <span
      aria-hidden="true"
      transition:fade={{ duration: 100 }}
      class="pointer-events-none absolute bottom-full left-1/2 z-50 -translate-x-1/2 border-4 border-transparent border-t-gray-800 transition duration-150 dark:border-t-gray-200"
    ></span>
  {/if}
</span>
