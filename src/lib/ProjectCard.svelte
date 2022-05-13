<script lang="ts">
	import { goto } from '$app/navigation';

	export let name: string;
	export let filename: string;
	export let link: string;
</script>

<a class="rounded-2xl mr-2 ml-2 mb-6 hover:shadow-2xl drop-shadow-xl overflow-clip" href={link}>
	<img src={filename} alt={name} />
</a>
