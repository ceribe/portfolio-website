<script lang="ts">
	import Divider from '$lib/Divider.svelte';
	import Section from '$lib/Section.svelte';
	import TechnologyCard from '$lib/TechnologyCard.svelte';
	import TechnologyContainer from '$lib/TechnologyContainer.svelte';
</script>

<Section title={'About me'}>
	<Divider>Education</Divider>
	<p class="text-lg">Engineer - Poznań University of Technology (2022)</p>
	<Divider>Experience</Divider>
	<p class="text-lg">
		[16/07/2019 - Now] C++ Programmer | CAD&nbsp;Projekt&nbsp;K&A&nbsp;Sp.&nbsp;z&nbsp;o.o.
	</p>
	<p class="text-lg pt-2">
		[19/07/2019 - Now] Running an online shop via
		<a href="https://www.cardmarket.com/en/Magic/Users/Ceribe" class="text-blue-400">CardMarket</a>
	</p>
	<Divider>Contact</Divider>
	<a href="mailto:szymon.opielewicz@gmail.com" class="text-blue-400 text-lg">
		szymon.opielewicz@gmail.com
	</a>
	<Divider>Profiles</Divider>
	<TechnologyContainer>
		<TechnologyCard name="github" />
		<TechnologyCard name="stack_overflow" />
		<TechnologyCard name="codewars" />
	</TechnologyContainer>
</Section>
