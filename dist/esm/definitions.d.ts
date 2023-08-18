import type { PluginListenerHandle } from '@capacitor/core';
export interface CustomEventData {
    gameId: string;
}
export interface GamePlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    addListener(eventName: string, callback: (info: CustomEventData) => void): PluginListenerHandle;
    removeGameEventListener(listener: PluginListenerHandle): void;
}
