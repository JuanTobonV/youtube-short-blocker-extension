## Description

This Google Chrome extension is designed to help you stay focused by eliminating distractions from YouTube Shorts. It hides Shorts-related elements in the YouTube interface and redirects you to the main page if you try to access a Short directly.

It includes an easy-to-use toggle in the popup window to enable or disable blocking based on your needs.

## Features

* **Visual Stripping:** Hides Shorts videos, Shorts shelves, and Shorts links in the YouTube interface.
* **Automatic Redirect:** If you navigate to a YouTube Shorts URL (`/shorts/`), you will be automatically redirected to the YouTube main page (`https://www.youtube.com`).
* **Toggle Control:** Allows you to easily enable and disable the blocking functionality via a button in the extension's popup window.
* **State Persistence:** Saves your preference (on/off) so that it persists between browsing sessions.

## Installation

### Option 1: From the Chrome Web Store (Coming Soon)

Once the extension is published, you can install it directly from the Chrome Web Store. (You can add the link here when available.)

### Option 2: Manual Installation (Development)

1. Download or clone this repository to your local machine.
2. Open Google Chrome.
3. Go to chrome://extensions.
4. Make sure "Developer Mode" is enabled (switch in the top right corner).
5. Click the "Upload Unzipped" button.
6. Navigate to the folder where you downloaded/cloned the project and select it.
7. The extension should now appear in your extensions list and be active!

## Usage

1. Once installed, the extension will automatically start working on YouTube.
2. To enable or disable blocking:
* Click the extension icon (the icon you defined in `img/icon.png`) in the Chrome toolbar.
* A small pop-up window will appear.
* Click the "Disable Blocking" or "Enable Blocking" button depending on the current state. The state will be saved, and the YouTube page will reload if you are on it.

## Project Files

* `manifest.json`: Extension configuration file.
* `popup.html`: HTML structure of the pop-up window.
* `js/popup.js`: Logic for the toggle in the pop-up window.
* `js/background.js`: Service worker that handles URL redirection.
* `js/content.js`: Script injected into YouTube to hide Shorts.
* `styles/popup.css`: CSS file to style the pop-up window.
* `img/icon.png`: Extension icon.

## Contributions

If you'd like to contribute, please open an issue or submit a pull request. (Optional: You can add more details about how you'd like people to contribute.)
