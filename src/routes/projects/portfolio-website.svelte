<script>
	import Divider from '$lib/Divider.svelte';
	import Section from '$lib/Section.svelte';
	import TechnologyCard from '$lib/TechnologyCard.svelte';
	import TechnologyContainer from '$lib/TechnologyContainer.svelte';
</script>

<Section title={'This website'}>
	<div class="text-lg mb-12">
		Static website on which my projects and skills are showcased. The reason for creating this
		website was the desire to learn Svelte and webdev. I chose Svelte because of its simplicity and
		the fact that it is possible to generate static websites using it. The source code is available
		<a href="https://github.com/ceribe/portfolio-website" class="text-blue-400">here</a>.
	</div>

	<Divider>Tools used for this project</Divider>
	<TechnologyContainer>
		<TechnologyCard name="typescript" />
		<TechnologyCard name="svelte" />
		<TechnologyCard name="svelte_kit" />
		<TechnologyCard name="tailwind_css" />
		<TechnologyCard name="vscode" />
		<TechnologyCard name="gitkraken" />
		<TechnologyCard name="git" />
		<TechnologyCard name="github" />
		<TechnologyCard name="surge" />
	</TechnologyContainer>
</Section>
