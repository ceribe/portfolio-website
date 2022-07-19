<script>
	import Divider from '$lib/Divider.svelte';
	import Section from '$lib/Section.svelte';
	import TechnologyCard from '$lib/TechnologyCard.svelte';
	import TechnologyContainer from '$lib/TechnologyContainer.svelte';
</script>

<Section title={'Cookit - Recipe Manager'}>
	<div class="flex justify-center items-center flex-col">
		<img src="/cookit.png" alt="cookit" class="w-[26rem] rounded-2xl" />
		<a
			href="https://play.google.com/store/apps/details?id=com.the_recipe_box"
			class="mt-2 text-lg font-semibold underline">Check out</a
		>
	</div>
	<div class="text-lg mt-12 mb-12">
		Cookit is a mobile app for Android which allows you to manage your recipes. Beside the basic
		functionalities like creating, deleting and editing recipes, the app also has the ability to
		download recipes from websites, create shopping lists and contains an advanced search engine.
		The main reason to write the app was to learn Jetpack Compose and Kotlin. During the process I
		learned several libraries: Room, Google Play Billing Library and jsoup.
	</div>

	<Divider>Tools used for this project</Divider>
	<TechnologyContainer>
		<TechnologyCard name="kotlin" />
		<TechnologyCard name="jetpack_compose" />
		<TechnologyCard name="android_studio" />
		<TechnologyCard name="gitkraken" />
		<TechnologyCard name="git" />
		<TechnologyCard name="github" />
	</TechnologyContainer>
</Section>
