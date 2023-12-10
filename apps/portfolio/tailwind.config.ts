// eslint-disable-next-line @nx/enforce-module-boundaries
import tailwindBase from '../../libs/shared/config/tailwind.config';
import { createGlobPatternsForDependencies } from '@nx/react/tailwind';
import { join } from 'path';
import type { Config } from 'tailwindcss';

export default {
  presets: [tailwindBase],
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}',
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
} satisfies Config;
