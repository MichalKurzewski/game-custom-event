import { registerPlugin } from '@capacitor/core';

import type { GamePlugin } from './definitions';
import { GameWeb } from './web';

export { GameWeb };

const Game = registerPlugin<GamePlugin>('Game');

export * from './definitions';
export * from './web';
export { Game };
