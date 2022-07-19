<script lang="ts">
	import Divider from '$lib/Divider.svelte';
	import Section from '$lib/Section.svelte';
	import TechnologyCard from '$lib/TechnologyCard.svelte';
	import TechnologyContainer from '$lib/TechnologyContainer.svelte';
</script>

<Section title={'Skills'}>
	<!-- <Divider>Ogólne</Divider>
	<TechnologyContainer>
		<p class="text-lg font-semibold">Angielski B2, REST, SOLID, DRY</p>
	</TechnologyContainer> -->

	<Divider>Programming languages</Divider>
	<TechnologyContainer>
		<TechnologyCard name="kotlin" />
		<TechnologyCard name="ruby" />
		<TechnologyCard name="dart" />
		<TechnologyCard name="javascript" />
		<TechnologyCard name="typescript" />
		<TechnologyCard name="go" />
		<TechnologyCard name="python" />
		<TechnologyCard name="c++" />
	</TechnologyContainer>
	<div class="p-4">
		Langauges listed above are the ones that I used the most and the ones I am most familiar with.
		For the full list of languages that I used check my <a
			href="https://github.com/Ceribe"
			class="text-blue-400 text-lg"
		>
			Github profile
		</a>.
	</div>

	<Divider>Other languages</Divider>
	<TechnologyContainer>
		<TechnologyCard name="html" />
		<TechnologyCard name="css" />
		<TechnologyCard name="sql" />
		<TechnologyCard name="markdown" />
		<TechnologyCard name="latex" />
		<TechnologyCard name="makefile" />
	</TechnologyContainer>

	<Divider>Frameworks & Libraries</Divider>
	<TechnologyContainer>
		<TechnologyCard name="jetpack_compose" />
		<TechnologyCard name="tailwind_css" />
		<TechnologyCard name="svelte" />
		<TechnologyCard name="svelte_kit" />
		<TechnologyCard name="svelte_cubed" />
		<TechnologyCard name="three_js" />
		<TechnologyCard name="opengl" />
		<TechnologyCard name="ktor" />
		<TechnologyCard name="zeromq" />
		<TechnologyCard name="protobuf" />
		<TechnologyCard name="bogue" />
	</TechnologyContainer>

	<Divider>IDEs</Divider>
	<TechnologyContainer>
		<TechnologyCard name="vscode" />
		<TechnologyCard name="intellij_idea" />
		<TechnologyCard name="android_studio" />
		<TechnologyCard name="goland" />
		<TechnologyCard name="visual_studio" />
		<TechnologyCard name="c++builder" />
	</TechnologyContainer>

	<Divider>Tools & Other</Divider>
	<TechnologyContainer>
		<TechnologyCard name="linux" />
		<TechnologyCard name="gitkraken" />
		<TechnologyCard name="sourcetree" />
		<TechnologyCard name="git" />
		<TechnologyCard name="github" />
		<TechnologyCard name="bitbucket" />
		<TechnologyCard name="stack_overflow" />
		<TechnologyCard name="surge" />
		<TechnologyCard name="obs" />
		<TechnologyCard name="gimp" />
		<TechnologyCard name="mantisbt" />
	</TechnologyContainer>
</Section>
