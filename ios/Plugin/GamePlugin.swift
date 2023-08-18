import Foundation
import Capacitor

@objc(GamePlugin)
public class GamePlugin: CAPPlugin {
    private let implementation = Game()

    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.resolve([
            "value": implementation.echo(value)
        ])
    }

    @objc func triggerGameEvent(_ call: CAPPluginCall) {
        let gameId = call.getString("gameId") ?? "defaultGameId"
        
        // Emit the event to JavaScript
        notifyListeners("gameEvent", data: ["gameId": gameId])
        
        call.success()
    }
}
