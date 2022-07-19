<script>
	import Divider from '$lib/Divider.svelte';
	import Section from '$lib/Section.svelte';
	import TechnologyCard from '$lib/TechnologyCard.svelte';
	import TechnologyContainer from '$lib/TechnologyContainer.svelte';
</script>

<Section title={'Advent of Code'}>
	<div class="flex justify-center items-center flex-col">
		<img src="/advent_of_code.png" alt="advent of code" class="w-[26rem] rounded-2xl" />
		<a href="https://adventofcode.com/" class="mt-2 text-lg font-semibold underline">Check out</a>
	</div>
	<div class="text-lg mt-12 mb-12">
		Advent of Code is an annual event in December since 2015. Every year since then, with the first
		day of December, a programming puzzles contest is published every day for twenty-four days. A
		set of Christmas-oriented challenges provide any input you have to use to answer using the
		language of your choice. I solve each year using a different language to learn them. All my
		solutions are <a href="https://github.com/ceribe/advent-of-code" class="text-blue-400">here</a>.
	</div>

	<Divider>Tools used for this project</Divider>
	<TechnologyContainer>
		<TechnologyCard name="javascript" />
		<TechnologyCard name="go" />
		<TechnologyCard name="ruby" />
		<TechnologyCard name="dart" />
		<TechnologyCard name="kotlin" />
	</TechnologyContainer>
</Section>
