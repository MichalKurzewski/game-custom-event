# game-custom-event

custom event handler

## Install

```bash
npm install game-custom-event
npx cap sync
```

## API

<docgen-index>

* [`echo(...)`](#echo)
* [`addListener(string, ...)`](#addlistenerstring)
* [`removeGameEventListener(...)`](#removegameeventlistener)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### addListener(string, ...)

```typescript
addListener(eventName: string, callback: (info: CustomEventData) => void) => PluginListenerHandle
```

| Param           | Type                                                                           |
| --------------- | ------------------------------------------------------------------------------ |
| **`eventName`** | <code>string</code>                                                            |
| **`callback`**  | <code>(info: <a href="#customeventdata">CustomEventData</a>) =&gt; void</code> |

**Returns:** <code><a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### removeGameEventListener(...)

```typescript
removeGameEventListener(listener: PluginListenerHandle) => void
```

| Param          | Type                                                                  |
| -------------- | --------------------------------------------------------------------- |
| **`listener`** | <code><a href="#pluginlistenerhandle">PluginListenerHandle</a></code> |

--------------------


### Interfaces


#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |


#### CustomEventData

| Prop         | Type                |
| ------------ | ------------------- |
| **`gameId`** | <code>string</code> |

</docgen-api>
