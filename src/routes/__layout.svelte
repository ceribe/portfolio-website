<script lang="ts">
	import '../app.css';
	import NavBar from '$lib/navBar.svelte';
	import { page } from '$app/stores';
</script>

<NavBar selectedCategory={$page.url.pathname} />

<div class="flex pt-12">
	<slot />
</div>
