export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9')
];

export const server_loads = [];

export const dictionary = {
		"/image/[width]x[height]": [5],
		"/media/[...file]/[width]/[height]": [6],
		"/posts": [7,[2]],
		"/posts/create": [9,[2],[,3]],
		"/posts/[slug=slug]": [8,[2]],
		"/[[lang]]": [4]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';