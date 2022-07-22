<script lang="ts">
	import Divider from '$lib/Divider.svelte';
	import Section from '$lib/Section.svelte';
	import TechnologyCard from '$lib/TechnologyCard.svelte';
	import TechnologyContainer from '$lib/TechnologyContainer.svelte';
	import { skills } from '$lib/consts';
</script>

<Section title={'Skills'}>
	<Divider>Programming languages</Divider>
	<TechnologyContainer>
		{#each skills.programmingLanguages as language}
			<TechnologyCard name={language} />
		{/each}
	</TechnologyContainer>
	<div class="p-4">
		Langauges listed above are the ones that I used the most and the ones I am most familiar with.
		For the full list of languages that I used check my <a
			href="https://github.com/Ceribe"
			class="text-blue-400 text-lg"
		>
			Github profile
		</a>.
	</div>

	<Divider>Other languages</Divider>
	<TechnologyContainer>
		{#each skills.otherLanguages as language}
			<TechnologyCard name={language} />
		{/each}
	</TechnologyContainer>

	<Divider>Frameworks & Libraries</Divider>
	<TechnologyContainer>
		{#each skills.frameworksAndLibraries as name}
			<TechnologyCard {name} />
		{/each}
	</TechnologyContainer>

	<Divider>IDEs</Divider>
	<TechnologyContainer>
		{#each skills.ides as ide}
			<TechnologyCard name={ide} />
		{/each}
	</TechnologyContainer>

	<Divider>Tools & Other</Divider>
	<TechnologyContainer>
		{#each skills.toolsAndOther as name}
			<TechnologyCard {name} />
		{/each}
	</TechnologyContainer>
</Section>
