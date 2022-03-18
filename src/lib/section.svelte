<script lang="ts">
	export let title: string;
</script>

<div class="justify-center flex ml-0 md:ml-32 w-full">
	<div class="w-4/5 md:w-3/5">
		<h1 class="text-center text-4xl pb-10 font-semibold">{title}</h1>
		<slot />
	</div>
</div>
