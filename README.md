# hashphrase
[![CircleCI](https://circleci.com/gh/Vermonster/hashphrase/tree/master.svg?style=svg)](https://circleci.com/gh/Vermonster/hashphrase/tree/master)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Hashphrase is a password generator. It works by taking two inputs from you -- a master password and an account nickname -- and creates a unique password using a hashing algorithm.

## Get started

#### `yarn install`
Install all necessary dependencies.

#### `yarn start`

Runs your app in development mode.

## Test

#### `yarn test:js`

Runs the [jest](https://github.com/facebook/jest) test runner on your tests.

#### `yarn lint:js`

Runs esLint.

#### `yarn test`

Runs jest test and esLint all together.

## Test on Local Development

### Test on real devices

After the expo dev server boots up with `yarn start`, you can start the local development. Download the Expo Client app from the Apple Store or Google Play Store, it can be used to view your project while developing. You can view your project within the Expo Client app in two ways: scanning the QR code or typing the URL to the Expo app's search bar. With IOS, you would need to open your camera app, then scan the QR code until a notification badge pops up.

### Test on simulators/emulators 

Expo Client app can also be used on IOS simulators and Android emulators. To view your app, run `yarn run ios` or `yarn run android`, you app will be opened automatically within the Expo Client app on the simulator. For Android emulator, make sure you launch your emulator before running the command.

## Share and Deploy

### View an Expo app from your device (without running a server locally)

Publishing your app to Expo will make it available at a persistent URL, you can open it on your own device (ios or Android phone). Note that due to the Apple Review Guidelines, you cannot preview projects published by other Expo accounts besides your own. This app is published under Vermonster's Expo account. On Android devices though, you can view other's Expo projects.

You wil need to :
- Install Expo Client on your phone
- Log in into the Expo client app (with Vermonster's expo account)

View project on the `master` branch:
- Open https://exp.host/@vermonster/hashphrase in the Expo Client app.

View project on a feature branch:
- Open https://exp.host/@vermonster/hashphrase?release-channel=[branch-name] in the Expo Client app.

What if you have iPhone, but you want to view the project on an Android device?

You would need to use an Android emulator on your computer. Follow the installation steps on the [Expo website](https://docs.expo.io/versions/latest/workflow/android-studio-emulator/), then type the parameterized URL in the Expo app's search bar to view a feature branch.

Luckily, Appetize.io has also provided a platform for users to view the mobile app in an Android emulator in the browser, go to [Vermonster's expo page](https://expo.io/@vermonster/hashphrase), and click "Open project in the browser" button on the right side of the page, this will open the app in an Android emulator in your browser without authentication.

## License

MIT

Copyright (c) 2019 Vermonster LLC
