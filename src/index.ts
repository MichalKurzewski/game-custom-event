import { registerPlugin } from '@capacitor/core';

import type { GamePlugin } from './definitions';

const Game = registerPlugin<GamePlugin>('Game');

export * from './definitions';
export { Game };
