<script lang="ts">
	import Divider from '$lib/Divide.svelte';
	import ProjectCard from '$lib/ProjectCar.svelte';
	import Section from '$lib/Section.svelte';
</script>

<Section title={'Projekty'}>
	<Divider>Wykonane w celu samorozwoju</Divider>
	<div class="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
		<ProjectCard name="Cookit" filename="/cookit.png" link="/projects/cookit" />
		<ProjectCard
			name="Advent of Code"
			filename="/advent_of_code.png"
			link="/projects/advent-of-code"
		/>
		<ProjectCard
			name="Ta strona"
			filename="/portfolio_website.png"
			link="/projects/portfolio-website"
		/>
	</div>
</Section>
