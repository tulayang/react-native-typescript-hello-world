react-native-typescript-hello-world
=====================================

## Install Dependencies

1. Install Java JDK and Set ``JAVA_HOME`` Env

2. Install Android Studio
   
   - Android SDK
   - Android SDK Platform
   - Android Virtual Device

3. Install Android SDK via Android Studio

   - Google APIs
   - Android SDK Platform {n}
   - Intel x86 Atom_64 System Image
   - Google APIs Intel x86 Atom_64 System Image
   - ...

4. Configure the ANDROID_HOME Environment Variable

   ```sh
   export ANDROID_HOME=$HOME/Android/Sdk
   export PATH=$PATH:$ANDROID_HOME/tools
   export PATH=$PATH:$ANDROID_HOME/platform-tools
   ```

5. Install React Native CLI

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