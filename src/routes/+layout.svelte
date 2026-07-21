<script lang="ts">
  import './layout.css';
  import favicon from '$lib/assets/favicon.ico';
  import ToolTip from '$lib/components/ToolTip.svelte';
  import { page } from '$app/state';
  import { afterNavigate } from '$app/navigation';
  import { browser } from '$app/environment';
  import { fly } from 'svelte/transition';

  let { children } = $props();

  let mobileMenu = $state(false);
  // app.html sets the `dark` class before first paint, so this reads the
  // already-resolved theme rather than recomputing it.
  let darkMode = $state(browser && document.documentElement.classList.contains('dark'));

  const breadcrumbs = $derived([
    { name: 'home', url: '/' },
    ...page.url.pathname
      .split('/')
      .filter(Boolean)
      .map((segment, i, segments) => ({
        name: segment,
        url: '/' + segments.slice(0, i + 1).join('/')
      }))
  ]);

  afterNavigate(() => (mobileMenu = false));

  function changeDarkMode() {
    darkMode = !darkMode;
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <title
    >Morgan Dean | {breadcrumbs[breadcrumbs.length - 1].name.replace(/^./, (c) =>
      c.toUpperCase()
    )}</title
  >
</svelte:head>

<nav
  class="fixed top-0 left-0 h-full w-1/6 justify-between overflow-x-hidden bg-purple-400 px-2 py-2 transition duration-150 dark:bg-[#8973cd]"
>
  <button
    type="button"
    aria-label="Toggle navigation menu"
    aria-expanded={mobileMenu}
    class="mx-auto -mt-2 block h-12 w-full cursor-pointer px-3 text-center text-white lg:hidden dark:text-gray-100"
    onclick={() => (mobileMenu = !mobileMenu)}
  >
    <svg class="h-full w-full" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path
        fill-rule="evenodd"
        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
        clip-rule="evenodd"
      ></path>
    </svg>
  </button>

  <div class="hidden lg:block">
    <a href="/" class="block text-center text-white transition duration-150 dark:text-gray-100">
      <h3 class="transition duration-150 dark:text-gray-100">Morgan Dean</h3>
    </a>
  </div>

  <ul class="mx-auto mt-3 hidden text-center lg:block">
    <li class="p-2">
      <a href="/projects" class="text-white transition duration-150 dark:text-gray-100">projects</a>
    </li>
    <li class="p-2">
      <a href="/resume" class="text-white transition duration-150 dark:text-gray-100">resume</a>
    </li>
  </ul>

  <div class="fixed bottom-6 left-0 hidden w-1/6 lg:block">
    <div class="mx-auto w-full text-center">
      <a
        href="mailto:morgan@mogdan.xyz"
        class="block text-white transition duration-150 dark:text-gray-100">morgan@mogdan.xyz</a
      >
    </div>
  </div>
</nav>

{#if mobileMenu}
  <div
    class="fixed top-12 left-0 z-50 flex h-full w-full justify-between overflow-x-hidden transition duration-150 lg:hidden"
  >
    <div
      transition:fly={{ x: -300, duration: 200 }}
      class="w-2/3 bg-purple-400 py-2 transition duration-150 dark:bg-[#8973cd]"
    >
      <a href="/" class="block text-center text-white transition duration-150 dark:text-gray-100">
        <h3 class="transition duration-150 dark:text-gray-100">Morgan Dean</h3>
      </a>
      <ul class="mx-auto mt-3 flex flex-col text-center">
        <li class="p-2">
          <a href="/projects" class="text-white transition duration-150 dark:text-gray-100"
            >projects</a
          >
        </li>
        <li class="p-2">
          <a href="/resume" class="text-white transition duration-150 dark:text-gray-100">resume</a>
        </li>
        <li class="p-2">
          <a
            href="https://repo.mogdan.xyz"
            target="_blank"
            rel="noopener noreferrer"
            class="text-white transition duration-150 dark:text-gray-100">jailbreak repository</a
          >
        </li>
      </ul>
      <div class="fixed bottom-6 left-0 w-2/3">
        <div class="mx-auto w-full text-center">
          <a
            href="mailto:morgan@mogdan.xyz"
            class="block text-white transition duration-150 dark:text-gray-100">morgan@mogdan.xyz</a
          >
        </div>
      </div>
    </div>
    <button
      type="button"
      aria-label="Close navigation menu"
      class="w-1/3 bg-gray-800 opacity-60 transition duration-150"
      onclick={() => (mobileMenu = false)}
    ></button>
  </div>
{/if}

<div
  class="absolute top-0 left-1/6 flex h-full w-5/6 flex-col flex-nowrap overflow-x-hidden bg-white pt-4 transition duration-150 dark:bg-gray-600"
>
  <div class="shrink-0 pl-2">
    {#each breadcrumbs as crumb, i (crumb.url)}
      <div class="inline">
        <a
          href={crumb.url}
          class={[
            'transition duration-150',
            i === breadcrumbs.length - 1
              ? 'text-purple-500 dark:text-purple-300'
              : 'text-gray-600 dark:text-gray-200'
          ]}>/{crumb.name}</a
        >
      </div>
    {/each}
  </div>

  <div class="h-full w-full grow overflow-auto pl-3">
    {@render children()}
  </div>

  <div
    class="bottom-0 flex w-full shrink-0 bg-gray-200 px-2 pt-1 pb-4 transition duration-150 lg:py-2 dark:bg-gray-700"
  >
    <p class="w-10/12 transition duration-150 lg:pt-5 dark:text-white">
      © 2020 - {new Date().getFullYear()} Morgan Dean
    </p>
    <div class="w-5/6 text-right lg:w-2/12">
      <ToolTip text="github/mdean808" align="end" class="mr-2 -ml-2.5">
        <a
          href="https://github.com/mdean808"
          target="_blank"
          rel="noopener noreferrer"
          title="github/mdean808"
        >
          <svg
            class="inline w-10 cursor-pointer rounded-md border-2 border-purple-500 bg-gray-200 fill-current text-purple-500 transition duration-150 hover:border-gray-800 hover:bg-gray-800 hover:text-white dark:border-white dark:bg-gray-600 dark:text-white dark:hover:border-gray-800 dark:hover:bg-white dark:hover:text-gray-800"
            viewBox="0 0 512 512"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            <path
              d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z"
            ></path>
          </svg>
        </a>
      </ToolTip>

      <ToolTip text="linkedin/morgan-dean" align="end" class="mr-2">
        <a
          href="https://www.linkedin.com/in/morgan-d-251467168/"
          target="_blank"
          rel="noopener noreferrer"
          title="linkedin/morgan-dean"
        >
          <svg
            class="inline w-10 cursor-pointer rounded-md border-2 border-purple-500 bg-gray-200 fill-current text-purple-500 transition duration-150 hover:text-white dark:border-white dark:bg-gray-600 dark:text-white dark:hover:border-blue-800 dark:hover:bg-white dark:hover:text-blue-800"
            viewBox="0 0 512 512"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            <path
              d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z"
            ></path>
          </svg>
        </a>
      </ToolTip>

      <ToolTip text="spotify/morganatic" align="end" class="mr-2">
        <a
          href="https://open.spotify.com/user/unicorn%7C808?si=81T8kSMAQl-Dg2o77zcWmQ"
          target="_blank"
          rel="noopener noreferrer"
          title="spotify/morganatic"
        >
          <svg
            class="inline w-10 cursor-pointer rounded-md border-2 border-purple-500 bg-gray-200 fill-current text-purple-500 transition duration-150 hover:border-green-500 hover:bg-green-500 hover:text-white dark:border-white dark:bg-gray-600 dark:text-white dark:hover:border-green-500 dark:hover:bg-white dark:hover:text-green-500"
            viewBox="0 0 512 512"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            <path
              d="M256 78c-98.3 0-178 79.7-178 178 0 98.31 79.7 178 178 178 98.31 0 178-79.69 178-178 0-98.3-79.69-178-178-178zm81.63 256.73a11.09 11.09 0 0 1-15.26 3.68c-41.8-25.53-94.4-31.31-156.37-17.16a11.1 11.1 0 0 1-4.93-21.64c67.8-15.49 125.96-8.82 172.88 19.86a11.1 11.1 0 0 1 3.68 15.26zm21.79-48.47a13.88 13.88 0 0 1-19.1 4.57c-47.84-29.4-120.77-37.92-177.36-20.74a13.9 13.9 0 0 1-17.32-9.25 13.9 13.9 0 0 1 9.25-17.3c64.65-19.62 145.01-10.12 199.96 23.64a13.87 13.87 0 0 1 4.56 19.08zm1.87-50.47c-57.37-34.07-152.02-37.2-206.8-20.58a16.65 16.65 0 1 1-9.66-31.87c62.88-19.08 167.4-15.4 233.45 23.81a16.63 16.63 0 0 1 5.82 22.82 16.63 16.63 0 0 1-22.8 5.82h-.01z"
            ></path>
          </svg>
        </a>
      </ToolTip>
    </div>
  </div>
</div>

<button
  type="button"
  aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
  class="absolute top-1 right-1 cursor-pointer rounded-md border-2 border-gray-700 text-gray-700 transition duration-150 hover:bg-gray-700 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-gray-700"
  onclick={changeDarkMode}
>
  {#if !darkMode}
    <svg class="h-6 w-6 transition-none" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
    </svg>
  {:else}
    <svg class="h-6 w-6 transition-none" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path
        fill-rule="evenodd"
        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
        clip-rule="evenodd"
      ></path>
    </svg>
  {/if}
</button>
