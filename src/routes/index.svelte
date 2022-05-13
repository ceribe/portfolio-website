<script lang="ts">
	import Divider from '$lib/Divide.svelte';
	import Section from '$lib/Section.svelte';
	import TechnologyCard from '$lib/TechnologyCar.svelte';
	import TechnologyContainer from '$lib/TechnologyContaine.svelte';
</script>

<Section title={'O mnie'}>
	<Divider>Wykształcenie</Divider>
	<p class="text-lg">Inżynier - Politechnika Poznańska (2022)</p>
	<Divider>Doświadczenie</Divider>
	<p class="text-lg">
		[16/07/2019 - Teraz] Programista C++ | CAD&nbsp;Projekt&nbsp;K&A&nbsp;Sp.&nbsp;z&nbsp;o.o.
	</p>
	<p class="text-lg pt-2">
		[19/07/2019 - Teraz] Prowadzenie sklepu wysyłkowego przez platformę
		<a href="https://www.cardmarket.com/en/Magic/Users/Ceribe" class="text-blue-600">CardMarket</a>
	</p>
	<Divider>Kontakt</Divider>
	<a href="mailto:szymon.opielewicz@gmail.com" class="text-blue-600 text-lg">
		szymon.opielewicz@gmail.com
	</a>
	<Divider>Profile</Divider>
	<TechnologyContainer>
		<TechnologyCard name="github" />
		<TechnologyCard name="stack_overflow" />
		<TechnologyCard name="codewars" />
	</TechnologyContainer>
</Section>
