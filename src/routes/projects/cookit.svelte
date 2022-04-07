<script>
	import Section from '$lib/section.svelte';
	import TechnologyCard from '$lib/technologyCard.svelte';
</script>

<Section title={'Cookit - Recipe Manager'}>
	<div class="flex justify-center items-center flex-col">
		<img src="/cookit.png" alt="cookit" class="w-[26rem] rounded-2xl" />
		<a
			href="https://play.google.com/store/apps/details?id=com.the_recipe_box"
			class="mt-2 text-lg font-semibold underline">Zobacz</a
		>
	</div>
	<div class="text-lg mt-12 mb-12">
		Cookit to aplikacja mobilna na Androida służąca do zarządzania kolekcją przepisów. Poza
		podstawowymi funckjonalnościami takimi jak tworzenie, usuwanie i edycja przepisów, aplikacja
		posiada także możliwość pobierania przepisów ze stron internetowych, tworzenia list zakupów oraz
		zaawansowaną wyszukiwarkę przepisów. Głownym powodem do napisania aplikacji była chęć nauczenia
		się Jetpack Compose-a oraz poznanie lepiej jezyka Kotlin. Przy okazji tworzenia aplikacji
		zapoznałem się z wieloma bibliotekami m.in. Room, Google Play Billing Library i jsoup.
	</div>

	<h1 class="text-2xl border-b-[1px] border-[#aaaaaa] font-semibold mb-4">Użyte techonologie</h1>
	<div class="w-full flex flex-wrap">
		<TechnologyCard name="kotlin" />
		<TechnologyCard name="jetpack_compose" />
		<TechnologyCard name="android_studio" />
		<TechnologyCard name="gitkraken" />
		<TechnologyCard name="git" />
		<TechnologyCard name="github" />
	</div>
</Section>
