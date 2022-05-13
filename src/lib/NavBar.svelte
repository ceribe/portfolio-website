<script lang="ts">
	import { categories } from './consts';

	export let selectedCategory: string;
</script>

<div
	class="fixed border-b-gray-300 border-[1px] bg-white h-14 w-full flex items-center justify-center gap-10 flex-row z-10"
>
	{#each categories as category}
		<div class="group flex flex-col">
			<a
				href={category.route}
				class="font-semibold text-sm  h-12 pt-4 w-full
					{category.route == selectedCategory ? 'text-black' : 'hover:text-gray-400'}"
			>
				{category.name}
			</a>
			<div
				class="h-1 rounded-t mt-1
					{category.route == selectedCategory ? 'bg-sky-400/75' : 'group-hover:bg-gray-400'}"
			/>
		</div>
	{/each}
</div>
