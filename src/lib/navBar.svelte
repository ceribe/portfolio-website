<script lang="ts">
	import { goto } from '$app/navigation';
	import { categories } from './stores';

	export let selectedCategory: string;
</script>

<div
	class="fixed border-b-gray-300 border-2 h-14 bg-[#f7f7f7] w-full flex items-center justify-center gap-8 flex-row z-10"
>
	{#each categories as category}
		<div class="group flex flex-col">
			<button
				class="font-semibold text-sm  h-12 pt-2 w-full
					{category.route == selectedCategory ? 'text-sky-400' : 'hover:text-gray-400'}"
				on:click={() => goto(category.route)}>{category.name}</button
			>
			<div
				class="h-2 rounded-t-lg
					{category.route == selectedCategory ? 'bg-sky-400/75' : 'group-hover:bg-gray-400'}"
			/>
		</div>
	{/each}
</div>
