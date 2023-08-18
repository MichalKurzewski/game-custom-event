declare module 'game-custom-event' {
  export interface CustomEventData {
    gameId: string;
  }

  export type RemoveFunction = () => void;

  export interface ListenerHandle {
    remove: RemoveFunction;
  }

  export class Game {
    static addListener(
      eventName: string,
      callback: (info: CustomEventData) => void,
    ): ListenerHandle;
  }
}
