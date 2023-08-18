import { WebPlugin } from '@capacitor/core';

import type { GamePlugin } from './definitions';

export class GameWeb extends WebPlugin implements GamePlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
