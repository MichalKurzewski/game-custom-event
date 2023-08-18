package com.biscuit.biscuit;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "Game")
public class GamePlugin extends Plugin {

    private Game implementation = new Game();

    @PluginMethod
    public void echo(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", implementation.echo(value));
        
        // Fire the custom gameEvent after echoing the value
        fireGameEvent(value);

        call.resolve(ret);
    }

    // Example method to fire the custom event
    private void fireGameEvent(String gameId) {
        JSObject data = new JSObject();
        data.put("gameId", gameId);
        notifyListeners("gameEvent", data);
    }
}
