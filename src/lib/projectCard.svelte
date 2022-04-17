<script lang="ts">
	import { goto } from '$app/navigation';

	export let name: string;
	export let filename: string;
	export let link: string;
	export let shortDescription: string;
</script>

<button
	class="bg-[#f7f7f7] hover:bg-[#dddddd] rounded-2xl w-[26rem] h-[280px] flex justify-center items-center flex-col mr-2 ml-2 mb-6 hover:shadow-xl drop-shadow-xl"
	on:click={() => goto(link)}
>
	<img src={filename} alt={name} class="w-[450px] h-[300px] rounded-t-2xl" />
	<div
		class="font-bold text-xs border-t-2 border-[#bbbbbb] w-full h-full flex justify-center items-center p-2"
	>
		{shortDescription}
	</div>
</button>
