//import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        // hydrate the <div id="svelte"> element in src/app.html
        adapter: adapter({
            // default options are shown
            pages: 'build',
            assets: 'build',
            fallback: null
        }),
	prerender: { default: true},  
        /*
        If you need to serve your file from a sub directory
        paths: {
            base: '/your-sub-dir',
        },
        */
    },
    preprocess: [preprocess({
        postcss: true
    })]
};


export default config;
