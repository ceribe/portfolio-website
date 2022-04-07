<script>
	import Divider from '$lib/divider.svelte';
	import Section from '$lib/section.svelte';
	import TechnologyCard from '$lib/technologyCard.svelte';
</script>

<Section title={'Ta strona'}>
	<div class="text-lg mb-12">
		Statyczna strona internetowa dzięki, której informacje o mnie są zebrane w jednym łatwo
		dostępnym miejscu. Głownym powodem stworzenia tej strony była chęć nauczenia się Svelte oraz
		rozszerzenia swoich umiejętności o podstawy webdev-u. Wybrałem Svelte ze względu na prostotę
		użycia oraz fakt, że możliwe jest generowanie z jego pomocą statycznych stron.
	</div>

	<Divider>Użyte techonologie</Divider>
	<div class="w-full flex flex-wrap">
		<TechnologyCard name="typescript" />
		<TechnologyCard name="svelte" />
		<TechnologyCard name="svelte_kit" />
		<TechnologyCard name="tailwind_css" />
		<TechnologyCard name="vscode" />
		<TechnologyCard name="gitkraken" />
		<TechnologyCard name="git" />
		<TechnologyCard name="github" />
	</div>
</Section>
