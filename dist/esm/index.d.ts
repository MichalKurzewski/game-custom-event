declare module 'game-custom-event' {
  export interface CustomEventData {
    gameId: string;
  }

  export class Game {
    static addListener(
      eventName: string,
      callback: (info: CustomEventData) => void,
    ): void;
  }
}
