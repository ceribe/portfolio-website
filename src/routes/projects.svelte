<script lang="ts">
	import ProjectCard from '$lib/projectCard.svelte';
	import Section from '$lib/section.svelte';
</script>

<Section title={'Projekty'}>
	<div class="w-full flex flex-wrap">
		<ProjectCard
			name="Cookit"
			filename="/cookit.png"
			link="/projects/cookit"
			shortDescription="Aplikacja mobilna na Androida do zarządzania kolekcją przepisów. Umożliwia pobieranie przepisów ze stron internetowych."
		/>
		<ProjectCard
			name="Ta strona"
			filename="/portfolio_website.png"
			link="/projects/portfolio-website"
			shortDescription="Statyczna strona internetowa dzięki, której informacje o mnie są zebrane w jednym łatwo dostępnym miejscu."
		/>
		<ProjectCard
			name="Advent of Code"
			filename="/advent_of_code.png"
			link="/projects/advent-of-code"
			shortDescription="Advent of Code to wydarzenie programistyczne w którym biorę udział. Co roku przez pierwsze 25 dni grudnia publikowane są zadania programistyczne."
		/>
	</div>
</Section>
