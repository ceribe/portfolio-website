<script>
	import Divider from '$lib/divider.svelte';
	import Section from '$lib/section.svelte';
	import TechnologyCard from '$lib/technologyCard.svelte';
	import TechnologyContainer from '$lib/technologyContainer.svelte';
</script>

<Section title={'Advent of Code'}>
	<div class="flex justify-center items-center flex-col">
		<img src="/advent_of_code.png" alt="advent of code" class="w-[26rem] rounded-2xl" />
		<a href="https://adventofcode.com/" class="mt-2 text-lg font-semibold underline">Zobacz</a>
	</div>
	<div class="text-lg mt-12 mb-12">
		Advent of Code to coroczne wydarzenie programistyczne w którym biorę udział od 2021 roku.
		Każdego roku od 1 do 25 grudnia o 6:00 publikowane są zadania programistyczne o rosnącym
		poziomie trudności. Zadania z poprzednich lat są dostępne na stronie więc można nad nimi
		pracować nawet po zakończeniu wydarzenia. Zadania z każdego roku rozwiązuję z użyciem innego
		języka programowania aby poznać ich składnie i możliwości. Wszystkie moje rozwiązania dostępne
		<a href="https://github.com/ceribe/advent-of-code-2021" class="underline">tutaj</a>.
	</div>

	<Divider>Użyte techonologie</Divider>
	<TechnologyContainer>
		<TechnologyCard name="javascript" />
		<TechnologyCard name="go" />
		<TechnologyCard name="ruby" />
		<TechnologyCard name="dart" />
		<TechnologyCard name="kotlin" />
	</TechnologyContainer>
</Section>
