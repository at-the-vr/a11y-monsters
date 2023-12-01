import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'A11y Monsters',
			social: {
				github: 'https://github.com/GrahamTheDevRel/a11y-monsters/',
			},
			sidebar: [
				{
					label: 'Community',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '29th Nov 2023', link: '/community/2023-11-29-office-hours' },
					],
				},
				{
					label: 'Community-Profiles',
					collapsed: true,
					autogenerate: { directory: 'community-profiles' },
				},
				{
					label: 'Examples',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Aria', link: '/examples/aria' },
					],
				},
				{
					label: 'Instructions',
					collapsed: true,
					autogenerate: { directory: 'instructions' },
				},
			],
		}),
	],
});
