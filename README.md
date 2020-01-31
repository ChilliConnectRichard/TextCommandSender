# Text Command Sender

Text Command Sender provides a wrapper to setup a session on the ChilliConnect service and then issue text commands to a Cloud Code Script. It was created for the University of Dundee's Quackathon 2020.

## Installation

1. Sign up to [ChilliConnect](https://www.chilliconnect.com)
2. Create a game
3. Create a Cloud Code Script with the Key: `PING`, and one Param `command` of type `STRING`.
4. Copy the script `ping.js` to the editor window and Publish.

## Run
1. Open `index.html`
2. Click `Set Game Token` and enter your ChilliConnect GameToken from your account.
3. Click `Start Session` and provide a DeviceID.
4. Enter a command in the input box and press `Submit`.
5. A response will appear in the message pane.

## Notes

Once a session is created all of the [ChilliConnect Scripting SDK](https://docs.chilliconnect.com/api/?system=script) is available. **Cloud Data** for persisting game data between sessions. **Catalog** and *Economy* where the game economy can be defined for gamification and inventory management. **Leaderboards** for um, leaderboards. **Messaging** for player to player messaging and gifting. **Async Multiplayer** for a simple turn-based multiplayer structure and API.

If the same DeviceID is used the same Player account will be loaded. Using this it is possible to play as different players, or pick up a game on another device for the same player. This login method piggybacks ChilliConnect mobile device login flow. Authentication is not covered here but details are available in the ChilliConnect documentation.

Debugging Cloud Code Scripts - there is a test runner in the ChilliConnect dashboard, and see the [logging](https://docs.chilliconnect.com/guide/cloudcode/#logging) section in the documentation.

## Useful Links
ChilliConnect Dashboard [https://dashboard.chilliconnect.com/](https://dashboard.chilliconnect.com/)

Cloud Code Script Guide [https://docs.chilliconnect.com/guide/cloudcode/](https://docs.chilliconnect.com/guide/cloudcode/)

Cloud Code Script API [https://docs.chilliconnect.com/api/?system=script](https://docs.chilliconnect.com/api/?system=http)

API Explorer [https://docs.chilliconnect.com/guide/explorer/](https://docs.chilliconnect.com/guide/explorer/)

Teams Tutorial (some more advanced script examples) [https://docs.chilliconnect.com/guide/tutorial-teams/](https://docs.chilliconnect.com/guide/tutorial-teams/)
