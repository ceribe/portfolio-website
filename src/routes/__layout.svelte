<script lang="ts">
	import '../app.css';
	import NavBar from '$lib/NavBar.svelte';
	import { page } from '$app/stores';
</script>

<NavBar selectedCategory={$page.url.pathname} />

<div class="flex pt-24">
	<slot />
</div>
