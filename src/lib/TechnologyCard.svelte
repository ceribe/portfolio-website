<script lang="ts">
	import { technologies } from './consts';

	export let name: string;
	const technology = technologies.get(name);
</script>

<a
	class="bg-[#36384a] rounded-2xl w-28 h-36 flex justify-center items-center flex-col gap-3 m-2 hover:shadow-xl drop-shadow-xl hover:text-white"
	href={technology.link}
>
	<img src={technology.filename} alt={technology.name} class="w-24 h-24 mt-2" />
	<div
		class="font-bold text-xs border-t-2 border-[#a7b1c1] w-full h-full flex justify-center items-center"
	>
		{technology.name}
	</div>
</a>
