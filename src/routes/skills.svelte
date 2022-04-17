<script lang="ts">
	import Divider from '$lib/divider.svelte';
	import Section from '$lib/section.svelte';
	import TechnologyCard from '$lib/technologyCard.svelte';
	import TechnologyContainer from '$lib/technologyContainer.svelte';
</script>

<Section title={'Umiejętności'}>
	<Divider>Języki programowania</Divider>
	<TechnologyContainer>
		<TechnologyCard name="kotlin" />
		<TechnologyCard name="ruby" />
		<TechnologyCard name="dart" />
		<TechnologyCard name="javascript" />
		<TechnologyCard name="typescript" />
		<TechnologyCard name="go" />
		<TechnologyCard name="python" />
		<TechnologyCard name="c++" />
		<TechnologyCard name="ocaml" />
	</TechnologyContainer>
	<Divider>Frameworki i biblioteki</Divider>
	<TechnologyContainer>
		<TechnologyCard name="jetpack_compose" />
		<TechnologyCard name="svelte" />
		<TechnologyCard name="svelte_kit" />
		<TechnologyCard name="tailwind_css" />
		<TechnologyCard name="three_js" />
		<TechnologyCard name="opengl" />
		<TechnologyCard name="svelte_cubed" />
	</TechnologyContainer>

	<Divider>Narzędzia i inne</Divider>
	<TechnologyContainer>
		<TechnologyCard name="vscode" />
		<TechnologyCard name="intellij_idea" />
		<TechnologyCard name="android_studio" />
		<TechnologyCard name="visual_studio" />
		<TechnologyCard name="c++builder" />
		<TechnologyCard name="gitkraken" />
		<TechnologyCard name="sourcetree" />
		<TechnologyCard name="git" />
		<TechnologyCard name="github" />
		<TechnologyCard name="stack_overflow" />
		<TechnologyCard name="markdown" />
		<TechnologyCard name="latex" />
		<TechnologyCard name="html" />
		<TechnologyCard name="css" />
		<TechnologyCard name="sql" />
		<TechnologyCard name="obs" />
		<TechnologyCard name="gimp" />
	</TechnologyContainer>
</Section>
