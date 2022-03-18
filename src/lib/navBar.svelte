<script lang="ts">
	import { goto } from '$app/navigation';

	const categories = [
		{ name: 'O mnie', route: '/' },
		{ name: 'Doświadczenie', route: '/experience' },
		{ name: 'Umiejętności', route: '/skills' },
		{ name: 'Projekty', route: '/projects' }
	];
	export let selectedCategory: string;
</script>

<div
	class="fixed border-r-gray-800 w-32 bg-[#333333] h-full flex items-center justify-center gap-6 flex-col"
>
	{#each categories as category}
		<div class="group flex flex-row">
			<button
				class="font-semibold text-sm  h-11 pb-2 pt-2 w-[7.5rem]
					{category.route == selectedCategory ? 'text-[#ebebeb]' : 'hover:text-[#ebebeb] text-[#7a7a7a]'}"
				on:click={() => goto(category.route)}>{category.name}</button
			>
			<div
				class="w-2 rounded-l-lg
					{category.route == selectedCategory ? 'bg-sky-400/75' : 'group-hover:bg-gray-400'}"
			/>
		</div>
	{/each}
</div>
