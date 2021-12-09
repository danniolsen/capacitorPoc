## Capacitor/next Poc

## 🌱 Prerequisites for setup

- [Node](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/en/docs/install#mac-stable)
- [xcode](https://developer.apple.com/xcode/)
- [Android studio](https://developer.android.com/studio?gclid=Cj0KCQiAkZKNBhDiARIsAPsk0WgjwUj5f4F6G9wo2XlnlipKVdYhmV7InPWqUXv0ojltpM_OyL2QHv4aAsteEALw_wcB&gclsrc=aw.ds#downloads)

## 🧰 Project initiation

1. Clone repository
2. Change directory to the project
3. Run `yarn` to install dependencies

## Run the app

1. Run `yarn dev` to run the app in the browser
2. Run `yarn build-mobile` to build for devices
3. Run `npx cap open ios` or `npx cap open android` to open xcode or android studio
4. Run `npx cap run ios` or `npx run android` to run the app in a simulator

## 👏 Gotchas

Every time you change the project code and wants to run it on a device, you have to make a new build `yarn build-mobile`
Get the `Apple signing certificate` from our last pass. (Not in last pass yet)
Get the `keystore file` from our last pass. (Dosen't exists yet)

If a new dependency has been added or removed, run `npx cap sync` to add or remove the dependency

## 👨‍💻 Developers

- Danni Olsen - dro@dwarf.dk

## 📘 About the project

This a next js / capacitor poc used to test what we can achieve with a wrapped solution.

## 🚀 Deployment

### ios

1. Open the project in xcode `npx cap open ios`
2. Select team `Dwarf A/S`
3. Select `Any IOS device` from the device omni bar
4. Navigate to `product` and click `Archive`
5. Go to [Appstoreconnect](https://appstoreconnect.apple.com/). Make sure the user is `Dwarf A/S` `Dwarf A/S`
6. navigate to test flight and click the `Build id` and then deploy to testflight.

### Android

Coming soon.

<p align="center">
Developed with ❤️ by ▽ <b>DWARF A/S 2021</b>
</p>

---
