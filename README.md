react-native-typescript-hello-world
=====================================

## Install Dependencies

1. [Install Java JDK and Set ``JAVA_HOME`` Env](https://facebook.github.io/react-native/docs/getting-started.html#java-development-kit)

2. [Install Android Studio](https://facebook.github.io/react-native/docs/getting-started.html#1-install-android-studio)
   
   - Android SDK
   - Android SDK Platform
   - Android Virtual Device

3. [Install Android SDK via Android Studio](https://facebook.github.io/react-native/docs/getting-started.html#2-install-the-android-sdk)

   - Google APIs
   - Android SDK Platform {n}
   - Intel x86 Atom_64 System Image
   - Google APIs Intel x86 Atom_64 System Image
   - ...

4. [Configure the ANDROID_HOME Environment Variable](https://facebook.github.io/react-native/docs/getting-started.html#3-configure-the-android-home-environment-variable)

   ```sh
   export ANDROID_HOME=$HOME/Android/Sdk
   export PATH=$PATH:$ANDROID_HOME/tools
   export PATH=$PATH:$ANDROID_HOME/platform-tools
   ```

5. [Install React Native CLI](https://facebook.github.io/react-native/docs/getting-started.html#the-react-native-cli)

   ```sh
   $ npm install -g react-native-cli
   ```

## Run in Android Virtual Device 

```sh
$ npm install
$ npm run watch
$ npm run start
$ react-native run-android
```