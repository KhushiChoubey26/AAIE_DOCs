// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'AAIE Documentation',
      description: 'Artificial Assessment Intelligence for Educators - Technical Documentation',
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', link: '/docs/getting-started/' },
          ],
        },
        {
          label: 'Technical',
          items: [
            { label: 'Architecture', link: '/docs/technical/architecture/' },
          ],
        },
        {
          label: 'Team',
          items: [
            { label: 'Sprint Planning', link: '/docs/team/sprint-planning/' },
          ],
        },
      ],
    }),
  ],
});
