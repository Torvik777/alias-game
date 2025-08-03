import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

export const MyPreset = definePreset(Aura, {
      name: 'my-dark-theme',
  baseTheme: Aura, // або LaraDark, залежно від того, яку базову тему використовуєш
        darkMode: "true",  // <<< ВАЖЛИВО: це увімкне темний режим за замовчуванням
        scale: 14,
    semantic: {
        primary: {
            50: '{violet.200}',
            100: '{violet.300}',
            200: '{violet.400}',
            300: '{violet.500}',
            400: '{violet.600}',
            500: '{violet.700}',
            600: '{violet.800}',
            700: '{violet.850}',
            800: '{violet.900}',
            900: '{violet.950}',
            950: '{violet.950}'
        }
    }
});

// export MyPreset;