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
		[16/07/2019 - Teraz] Programista C++ | CAD&nbsp;Projekt&nbsp;K&A&nbsp;Sp.&nbsp;z&nbsp;o.o.
	</p>
	<p class="text-base pt-2">
		[19/07/2019 - Teraz] Prowadzenie sklepu wysyłkowego przez platformę
		<a href="https://www.cardmarket.com/en/Magic/Users/Ceribe" class="text-blue-600">CardMarket</a>
	</p>
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
