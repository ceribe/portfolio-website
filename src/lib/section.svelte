<script lang="ts">
	export let title: string;
</script>

<div class="justify-center flex ml-0 md:ml-32 w-full">
	<div class="w-5/6 md:w-4/6 ">
		<h1 class="text-4xl pb-14 font-bold">{title}</h1>
		<slot />
	</div>
</div>
