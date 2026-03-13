// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'Docs with Tailwind',
            social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
            sidebar: [
                {
                    label: 'Getting Started',
                    autogenerate: { directory: 'fundamentals' },
                },
                {
                    label: 'HTML Elements',
                    autogenerate: { directory: 'semantic-foundation' },
                },
                {
                    label: 'CSS Styling',
                    autogenerate: { directory: 'visual-design' },
                },
                {
                    label: 'JavaScript & ARIA',
                    autogenerate: { directory: 'dynamic-interactions' },
                },
                {
                    label: 'Components & Patterns',
                    autogenerate: { directory: 'component-library' },
                },
                {
                    label: 'Testing & Auditing',
                    autogenerate: { directory: 'testing-validation' },
                },
                {
                    label: 'Reference',
                    autogenerate: { directory: 'wcag-reference' },
                },
            ],
            customCss: ['./src/styles/global.css'],
        }),
    ],
    vite: {
        plugins: [tailwindcss()],
    },
});
