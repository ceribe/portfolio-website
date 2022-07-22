export const categories = [
	{ name: 'About', route: '/' },
	{ name: 'Skills', route: '/skills' },
	{ name: 'Projects', route: '/projects' }
];

export interface Technology {
	name: string;
	filename: string;
	link: string;
}

export const technologies = new Map<string, Technology>([
	['kotlin', { name: 'Kotlin', filename: '/kotlin.png', link: 'https://kotlinlang.org/' }],
	['ruby', { name: 'Ruby', filename: '/ruby.png', link: 'https://www.ruby-lang.org/en/' }],
	[
		'javascript',
		{
			name: 'JavaScript',
			filename: '/js.png',
			link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
		}
	],
	[
		'typescript',
		{ name: 'TypeScript', filename: '/ts.png', link: 'https://www.typescriptlang.org/' }
	],
	['go', { name: 'Go', filename: '/go.png', link: 'https://go.dev/' }],
	['python', { name: 'Python', filename: '/python.png', link: 'https://www.python.org/' }],
	['c++', { name: 'C++', filename: '/c++.png', link: 'https://isocpp.org/' }],
	['dart', { name: 'Dart', filename: '/dart.png', link: 'https://dart.dev/' }],
	['ocaml', { name: 'OCaml', filename: '/ocaml.png', link: 'https://ocaml.org/' }],
	[
		'jetpack_compose',
		{
			name: 'Jetpack Compose',
			filename: '/jetpack_compose.png',
			link: 'https://developer.android.com/jetpack/compose'
		}
	],
	['svelte', { name: 'Svelte', filename: '/svelte.png', link: 'https://svelte.dev/' }],
	['svelte_kit', { name: 'SvelteKit', filename: '/svelte.png', link: 'https://kit.svelte.dev/' }],
	[
		'svelte_cubed',
		{ name: 'Svelte Cubed', filename: '/svelte.png', link: 'https://svelte-cubed.vercel.app/' }
	],
	[
		'tailwind_css',
		{ name: 'Tailwind CSS', filename: '/tailwind_css.png', link: 'https://tailwindcss.com/' }
	],
	['three_js', { name: 'Three.js', filename: '/three_js.png', link: 'https://threejs.org/' }],
	['opengl', { name: 'OpenGL', filename: '/opengl.png', link: 'https://www.opengl.org/' }],
	[
		'gitkraken',
		{ name: 'Gitkraken', filename: '/gitkraken.png', link: 'https://www.gitkraken.com/' }
	],
	['ktor', { name: 'Ktor', filename: '/ktor.png', link: 'https://ktor.io/' }],
	['zeromq', { name: 'ZeroMQ', filename: '/zeromq.png', link: 'https://zeromq.org/' }],
	['bogue', { name: 'Bogue', filename: '/bogue.png', link: 'https://github.com/sanette/bogue' }],
	['vscode', { name: 'VSCode', filename: '/vscode.png', link: 'https://code.visualstudio.com/' }],
	[
		'intellij_idea',
		{
			name: 'IntelliJ IDEA',
			filename: '/intellij_idea.png',
			link: 'https://www.jetbrains.com/idea/'
		}
	],
	[
		'android_studio',
		{
			name: 'Android Studio',
			filename: '/android_studio.png',
			link: 'https://developer.android.com/studio'
		}
	],
	['goland', { name: 'GoLand', filename: '/goland.png', link: 'https://www.jetbrains.com/go/' }],
	[
		'visual_studio',
		{
			name: 'Visual Studio',
			filename: '/visual_studio.png',
			link: 'https://visualstudio.microsoft.com/'
		}
	],
	[
		'c++builder',
		{
			name: 'C++Builder',
			filename: '/c++builder.png',
			link: 'https://www.embarcadero.com/products/cbuilder'
		}
	],
	[
		'sourcetree',
		{ name: 'Sourcetree', filename: '/sourcetree.png', link: 'https://www.sourcetreeapp.com/' }
	],
	['obs', { name: 'OBS Studio', filename: '/obs.png', link: 'https://obsproject.com/' }],
	['gimp', { name: 'GIMP', filename: '/gimp.png', link: 'https://www.gimp.org/' }],
	['git', { name: 'Git', filename: '/git.png', link: 'https://git-scm.com/' }],
	['latex', { name: 'LaTeX', filename: '/latex.png', link: 'https://www.latex-project.org/' }],
	[
		'markdown',
		{ name: 'Markdown', filename: '/markdown.png', link: 'https://en.wikipedia.org/wiki/Markdown' }
	],
	['html', { name: 'HTML', filename: '/html.png', link: 'https://en.wikipedia.org/wiki/HTML' }],
	['css', { name: 'CSS', filename: '/css.png', link: 'https://en.wikipedia.org/wiki/CSS' }],
	['sql', { name: 'SQL', filename: '/sql.png', link: 'https://en.wikipedia.org/wiki/SQL' }],
	[
		'stack_overflow',
		{
			name: 'Stack Overflow',
			filename: '/stack_overflow.png',
			link: 'https://stackoverflow.com/users/13512978/ceribe'
		}
	],
	[
		'makefile',
		{ name: 'Makefile', filename: '/makefile.png', link: 'https://www.gnu.org/software/make/' }
	],
	['github', { name: 'Github', filename: '/github.png', link: 'https://github.com/Ceribe' }],
	[
		'codewars',
		{ name: 'Codewars', filename: '/codewars.png', link: 'https://www.codewars.com/users/ceribe' }
	],
	['bitbucket', { name: 'Bitbucket', filename: '/bitbucket.png', link: 'https://bitbucket.org' }],
	['surge', { name: 'Surge', filename: '/surge.png', link: 'https://surge.sh' }],
	['linux', { name: 'Linux', filename: '/linux.png', link: 'https://www.linux.org/' }],
	['mantisbt', { name: 'MantisBT', filename: '/mantisbt.png', link: 'https://www.mantisbt.org/' }],
	[
		'protobuf',
		{
			name: 'Protocol Buffers',
			filename: '/protobuf.png',
			link: 'https://developers.google.com/protocol-buffers'
		}
	]
]);

export const skills = {
	programmingLanguages: [
		'kotlin',
		'ruby',
		'dart',
		'javascript',
		'typescript',
		'go',
		'python',
		'c++'
	],
	otherLanguages: ['html', 'css', 'sql', 'markdown', 'latex', 'makefile'],
	frameworksAndLibraries: [
		'jetpack_compose',
		'tailwind_css',
		'svelte',
		'svelte_kit',
		'svelte_cubed',
		'three_js',
		'opengl',
		'ktor',
		'zeromq',
		'protobuf',
		'bogue'
	],
	ides: ['vscode', 'intellij_idea', 'android_studio', 'goland', 'visual_studio', 'c++builder'],
	toolsAndOther: [
		'linux',
		'gitkraken',
		'sourcetree',
		'git',
		'github',
		'bitbucket',
		'stack_overflow',
		'surge',
		'obs',
		'gimp',
		'mantisbt'
	]
};
