// eslint-disable-next-line @nx/enforce-module-boundaries
import tailwindBase from '../../libs/shared/config/tailwind.config';
import type { Config } from 'tailwindcss';

export default {
  presets: [tailwindBase],
  content: [
    'libs/shared/ui/src/components/**/*!(*.stories|*.spec).{ts,tsx,html}',
  ],
} satisfies Config;
