## Available Scripts

### `yarn start`

Runs your app in development mode.

#### `yarn test:js`

Runs the [jest](https://github.com/facebook/jest) test runner on your tests.

#### `yarn lint:js`

Runs esLint.

#### `yarn test`

Runs jest test and esLint all together.
#### `yarn run ios`

Like `yarn start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

#### `yarn run android`

Like `yarn start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup). We also recommend installing Genymotion as your Android emulator. Once you've finished setting up the native build environment, there are two options for making the right copy of `adb` available to Create React Native App:

## Start Local Development

### Testing on real devices

After the expo dev server boots up with `yarn start`, you can start the local development. Download the Expo Client app from the Apple Store or Google Play Store, it can be used to view your project while developing. You can view your project within the Expo Client app in two ways: scanning the QR code or typing the URL to the Expo app's search bar. With IOS, you would need to open your camera app, then scan the QR code until a notification badge pops up.

### Testing on simulators/emulators 

Expo Client app can also be used on IOS simulators and Android emulators. To view your app, run `yarn run ios` or `yarn run android`, you app will be opened automatically within the Expo Client app on the simulator.

## Sharing and Deployment

### Viewing an Expo app from your device (without running a server locally)

Publishing your app to Expo will make it available at a persistent URL, you can open it on your own device (ios or Android phone). Note that due to the Apple Review Guidelines, you cannot preview projects published by other Expo accounts besides your own. This app is published under Vermonster's Expo account. On Android devices though, you can view other's Expo projects.

You wil need to :
- Install Expo Client on your phone
- Log in into the Expo client app (with Vermonster's expo account)

View project on the `master` branch:
- Open https://exp.host/@vermonster/Agilikey in the Expo Client app.

View project on a feature branch:
- Open https://exp.host/@vermonster/Agilikey?release-channel=[branch-name] in the Expo Client app.

What if you have iPhone, but you want to view the project on an Android device?

You would need to use an Android emulator on your computer. Follow the installation steps on the [Expo website](https://docs.expo.io/versions/latest/workflow/android-studio-emulator/), then type the parameterized URL in the Expo app's search bar to view a feature branch.

Luckily, Appetize.io has also provided a platform for users to view the mobile app in an Android emulator in the browser, go to [Vermonster's expo page](https://expo.io/@vermonster/Agilikey), and click "Open project in the browser" button on the right side of the page, this will open the app in an Android emulator in your browser without authentication.

## Troubleshooting

### Networking

If you're unable to load your app on your phone due to a network timeout or a refused connection, a good first step is to verify that your phone and computer are on the same network and that they can reach each other. Create React Native App needs access to ports 19000 and 19001 so ensure that your network and firewall settings allow access from your device to your computer on both of these ports.

Try opening a web browser on your phone and opening the URL that the packager script prints, replacing `exp://` with `http://`. So, for example, if underneath the QR code in your terminal you see:

```
exp://192.168.0.1:19000
```

Try opening Safari or Chrome on your phone and loading

```
http://192.168.0.1:19000
```

and

```
http://192.168.0.1:19001
```

If this works, but you're still unable to load your app by scanning the QR code, please open an issue on the [Create React Native App repository](https://github.com/react-community/create-react-native-app) with details about these steps and any other error messages you may have received.

If you're not able to load the `http` URL in your phone's web browser, try using the tethering/mobile hotspot feature on your phone (beware of data usage, though), connecting your computer to that WiFi network, and restarting the packager. If you are using a VPN you may need to disable it.

### iOS Simulator won't open

If you're on a Mac, there are a few errors that users sometimes see when attempting to `npm run ios`:

* "non-zero exit code: 107"
* "You may need to install Xcode" but it is already installed
* and others

There are a few steps you may want to take to troubleshoot these kinds of errors:

1. Make sure Xcode is installed and open it to accept the license agreement if it prompts you. You can install it from the Mac App Store.
2. Open Xcode's Preferences, the Locations tab, and make sure that the `Command Line Tools` menu option is set to something. Sometimes when the CLI tools are first installed by Homebrew this option is left blank, which can prevent Apple utilities from finding the simulator. Make sure to re-run `npm/yarn run ios` after doing so.
3. If that doesn't work, open the Simulator, and under the app menu select `Reset Contents and Settings...`. After that has finished, quit the Simulator, and re-run `npm/yarn run ios`.

### QR Code does not scan

If you're not able to scan the QR code, make sure your phone's camera is focusing correctly, and also make sure that the contrast on the two colors in your terminal is high enough. For example, WebStorm's default themes may [not have enough contrast](https://github.com/react-community/create-react-native-app/issues/49) for terminal QR codes to be scannable with the system barcode scanners that the Expo app uses.

If this causes problems for you, you may want to try changing your terminal's color theme to have more contrast, or running Create React Native App from a different terminal. You can also manually enter the URL printed by the packager script in the Expo app's search bar to load it manually.
