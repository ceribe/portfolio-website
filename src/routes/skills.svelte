<script lang="ts">
	import Section from '$lib/section.svelte';
	import { technologies } from '$lib/stores';
	import TechnologyCard from '$lib/technologyCard.svelte';
</script>

<Section title={'Umiejętności'}>
	<h1 class="text-2xl border-b-[1px] border-[#aaaaaa] font-semibold mb-4">Języki programowania</h1>
	<div class="w-full flex flex-wrap">
		<TechnologyCard name="kotlin" />
		<TechnologyCard name="ruby" />
		<TechnologyCard name="dart" />
		<TechnologyCard name="javascript" />
		<TechnologyCard name="typescript" />
		<TechnologyCard name="go" />
		<TechnologyCard name="python" />
		<TechnologyCard name="c++" />
	</div>

	<h1 class="text-2xl border-b-[1px] border-[#aaaaaa] font-semibold mb-4 mt-4">
		Frameworki i biblioteki
	</h1>
	<div class="w-full flex flex-wrap">
		<TechnologyCard name="jetpack_compose" />
		<TechnologyCard name="svelte" />
		<TechnologyCard name="svelte_kit" />
		<TechnologyCard name="tailwind_css" />
		<TechnologyCard name="three_js" />
		<TechnologyCard name="opengl" />
		<TechnologyCard name="svelte_cubed" />
	</div>

	<h1 class="text-2xl border-b-[1px] border-[#aaaaaa] font-semibold mb-4 mt-4">Narzędzia i inne</h1>
	<div class="w-full flex flex-wrap">
		<TechnologyCard name="vscode" />
		<TechnologyCard name="intellij_idea" />
		<TechnologyCard name="android_studio" />
		<TechnologyCard name="visual_studio" />
		<TechnologyCard name="c++builder" />
		<TechnologyCard name="gitkraken" />
		<TechnologyCard name="sourcetree" />
		<TechnologyCard name="git" />
		<TechnologyCard name="github" />
		<TechnologyCard name="markdown" />
		<TechnologyCard name="latex" />
		<TechnologyCard name="html" />
		<TechnologyCard name="css" />
		<TechnologyCard name="obs" />
		<TechnologyCard name="gimp" />
		<TechnologyCard name="stack_overflow" />
	</div>
</Section>
