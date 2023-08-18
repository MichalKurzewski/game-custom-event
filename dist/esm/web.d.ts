import { WebPlugin } from '@capacitor/core';
import type { PluginListenerHandle } from '@capacitor/core';
import type { GamePlugin, CustomEventData } from './definitions';
export declare class GameWeb extends WebPlugin implements GamePlugin {
    private gameEventCallback?;
    constructor();
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    addListener(eventName: string, callback: (info: CustomEventData) => void): Promise<PluginListenerHandle> & PluginListenerHandle;
    removeGameEventListener(listener: PluginListenerHandle): void;
}
