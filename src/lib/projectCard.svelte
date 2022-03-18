<script lang="ts">
	import { goto } from '$app/navigation';

	export let name: string;
	export let filename: string;
	export let link: string;
	export let shortDescription: string;
</script>

<button
	class="bg-[#e3e3e3] hover:bg-[#bbbbbb] rounded-2xl w-[360px] h-[260px] flex justify-center items-center flex-col m-2"
	on:click={() => goto(link)}
>
	<img src={filename} alt={name} class="w-full h-full rounded-t-2xl" />
	<div
		class="text-[#252526] font-bold text-xs border-t-2 border-[#252526] w-full h-full flex justify-center items-center p-2"
	>
		{shortDescription}
	</div>
</button>
