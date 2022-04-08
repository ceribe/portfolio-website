<script lang="ts">
	export let title: string;
</script>

<div class="justify-center flex ml-0 mr-0 md:ml-32 md:mr-32 pt-5 w-full">
	<div
		class="w-5/6 md:w-9/12 pr-6 pl-6 pt-5 pb-6 md:pr-12 md:pl-14 md:pt-10 md:pb-14 bg-[#f7f7f7] border-2"
	>
		<h1 class="text-4xl pb-14 font-bold">{title}</h1>
		<slot />
	</div>
</div>
