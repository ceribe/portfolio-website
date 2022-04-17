<script lang="ts">
	import { goto } from '$app/navigation';

	export let name: string;
	export let filename: string;
	export let link: string;
</script>

<button
	class="rounded-2xl mr-2 ml-2 mb-6 hover:shadow-2xl drop-shadow-xl overflow-clip"
	on:click={() => goto(link)}
>
	<img src={filename} alt={name} />
</button>
