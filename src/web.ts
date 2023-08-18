import { WebPlugin } from '@capacitor/core';
import type { PluginListenerHandle } from '@capacitor/core';

import type { GamePlugin, CustomEventData } from './definitions';

export class GameWeb extends WebPlugin implements GamePlugin {
  private gameEventCallback?: (event: Event) => void;

  constructor() {
    super({
      name: 'Game',
      platforms: ['web'],
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  addListener(
    eventName: string,
    callback: (info: CustomEventData) => void,
  ): Promise<PluginListenerHandle> & PluginListenerHandle {
    if (eventName === 'gameEvent') {
      this.gameEventCallback = (event: Event) => {
        if (event && event.type === 'gameEvent') {
          callback((event as CustomEvent<CustomEventData>).detail);
        }
      };

      window.addEventListener('gameEvent', this.gameEventCallback);
    }

    const handle: PluginListenerHandle = {
      remove: async () => {
        if (eventName === 'gameEvent' && this.gameEventCallback) {
          window.removeEventListener('gameEvent', this.gameEventCallback);
          this.gameEventCallback = undefined;
        }
      },
    };

    const handlePromise: Promise<PluginListenerHandle> =
      Promise.resolve(handle);

    return Object.assign(handlePromise, handle);
  }

  removeGameEventListener(listener: PluginListenerHandle): void {
    listener.remove();
  }
}
