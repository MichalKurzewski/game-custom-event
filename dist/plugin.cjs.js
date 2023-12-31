'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

class GameWeb extends core.WebPlugin {
    constructor() {
        super({
            name: 'Game',
            platforms: ['web'],
        });
    }
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
    addListener(eventName, callback) {
        if (eventName === 'gameEvent') {
            this.gameEventCallback = (event) => {
                if (event && event.type === 'gameEvent') {
                    callback(event.detail);
                }
            };
            window.addEventListener('gameEvent', this.gameEventCallback);
        }
        const handle = {
            remove: async () => {
                if (eventName === 'gameEvent' && this.gameEventCallback) {
                    window.removeEventListener('gameEvent', this.gameEventCallback);
                    this.gameEventCallback = undefined;
                }
            },
        };
        const handlePromise = Promise.resolve(handle);
        return Object.assign(handlePromise, handle);
    }
    removeGameEventListener(listener) {
        listener.remove();
    }
}

const Game = core.registerPlugin('Game');

exports.Game = Game;
exports.GameWeb = GameWeb;
//# sourceMappingURL=plugin.cjs.js.map
