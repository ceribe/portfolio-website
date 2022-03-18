<script lang="ts">
	import { goto } from '$app/navigation';
	import { technologies, type Technology } from './stores';

	export let name: string;
	const technology = technologies.get(name);
</script>

<button
	class="bg-[#e3e3e3] hover:bg-[#bbbbbb] rounded-2xl w-28 h-36 flex justify-center items-center flex-col gap-3 m-2"
	on:click={() => goto(technology.link)}
>
	<img src={technology.filename} alt={technology.name} class="w-24 h-24 mt-2" />
	<div
		class="text-[#252526] font-bold text-xs border-t-2 border-[#252526] w-full h-full flex justify-center items-center"
	>
		{technology.name}
	</div>
</button>
