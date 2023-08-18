import { registerPlugin } from '@capacitor/core';

import type { GamePlugin } from './definitions';

const Game = registerPlugin<GamePlugin>('Game', {
  web: () => import('./web').then(m => new m.GameWeb()),
});

export * from './definitions';
export { Game };
