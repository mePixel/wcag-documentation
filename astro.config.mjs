// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'WCAG Documentation',
            social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
            sidebar: [
                {
                    label: 'Getting Started',
                    autogenerate: { directory: 'fundamentals' },
                    collapsed: true,
                },
                {
                    label: 'HTML Elements',
                    autogenerate: { directory: 'semantic-foundation' },
                    collapsed: true,
                },
                {
                    label: 'CSS Styling',
                    autogenerate: { directory: 'visual-design' },
                    collapsed: true,
                },
                {
                    label: 'JavaScript',
                    autogenerate: { directory: 'dynamic-interactions' },
                    collapsed: true,
                },
                {
                    label: 'ARIA',
                    autogenerate: { directory: 'aria' },
                    collapsed: true,
                },
                {
                    label: 'Components & Patterns',
                    autogenerate: { directory: 'component-library' },
                    collapsed: true,
                },
                {
                    label: 'Testing & Auditing',
                    autogenerate: { directory: 'testing-validation' },
                    collapsed: true,
                },
                {
                    label: 'Reference',
                    autogenerate: { directory: 'wcag-reference' },
                    collapsed: true,
                },
            ],
            customCss: ['./src/styles/global.css'],
        }),
    ],
    vite: {
        plugins: [tailwindcss()],
    },
});
