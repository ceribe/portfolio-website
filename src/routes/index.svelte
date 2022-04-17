<script lang="ts">
	import Divider from '$lib/divider.svelte';
	import Section from '$lib/section.svelte';
	import TechnologyCard from '$lib/technologyCard.svelte';
	import TechnologyContainer from '$lib/technologyContainer.svelte';
</script>

<Section title={'O mnie'}>
	<Divider>Wykształcenie</Divider>
	<p class="text-base">Inżynier - Politechnika Poznańska (2022)</p>
	<Divider>Doświadczenie</Divider>
	<p class="text-base">
		[2019 - Teraz] Prowadzenie sklepu wysyłkowego przez platformę
		<a href="https://www.cardmarket.com/en/Magic/Users/Ceribe" class="text-blue-600">CardMarket</a>
	</p>
	<p class="text-base">[2019 - Teraz] Programista C++ | CAD Projekt K&A Sp. z o.o.</p>
	<Divider>Kontakt</Divider>
	<a href="mailto:szymon.opielewicz@gmail.com" class="text-blue-600 text-base">
		szymon.opielewicz@gmail.com
	</a>
	<Divider>Profile</Divider>
	<TechnologyContainer>
		<TechnologyCard name="github" />
		<TechnologyCard name="stack_overflow" />
		<TechnologyCard name="codewars" />
	</TechnologyContainer>
</Section>
