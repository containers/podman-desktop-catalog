<script lang="ts">
import { onMount } from 'svelte';

let isDarkTheme = $state(window.matchMedia('(prefers-color-scheme: dark)').matches);

$effect(() => {
  const html = document.documentElement;

  // toggle the dark class on the html element
  if (isDarkTheme) {
    html.classList.add('dark');
    html.classList.remove('light');
    html.setAttribute('style', 'color-scheme: dark;');
  } else {
    html.classList.remove('dark');
    html.classList.add('light');
    html.setAttribute('style', 'color-scheme: light;');
  }
});

onMount(async () => {
  // add a listener for the appearance change in case user change setting on the Operating System
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
});
</script>