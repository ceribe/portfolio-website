<script>
	import Divider from '$lib/Divider.svelte';
	import Section from '$lib/Section.svelte';
	import TechnologyCard from '$lib/TechnologyCard.svelte';
	import TechnologyContainer from '$lib/TechnologyContainer.svelte';
</script>

<Section title={'Ta strona'}>
	<div class="text-lg mb-12">
		Statyczna strona internetowa dzięki, której informacje o mnie są zebrane w jednym łatwo
		dostępnym miejscu. Głownym powodem stworzenia tej strony była chęć nauczenia się Svelte oraz
		rozszerzenia swoich umiejętności o podstawy webdev-u. Wybrałem Svelte ze względu na prostotę
		użycia oraz fakt, że możliwe jest generowanie z jego pomocą statycznych stron. Kod źródłowy
		znajduje się <a href="https://github.com/ceribe/portfolio-website" class="underline">tutaj</a>.
	</div>

	<Divider>Użyte techonologie</Divider>
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
