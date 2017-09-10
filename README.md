#### ionic

---------

> ionic3 based app using Angular4 TypeScript

> Basic splash, signin, signup, forgot password screens with tabs based template

#### Requirements

- npm
- ionic3
- cordova/phonegap
- Xcode 8.0+
- iOS 8.0+
- Any Browser which supports HTML5
- Text Editors (such as Atom, Sublime, vs code etc.)


#### With the Ionic CLI:

1. run `ionic serve` command and see output on Browser
2. If you want to run output on iOS simulator
   -  if any error related with platform, then do `cordova platform add ios --save`
   - `ionic cordova run ios` => run on default iOS simuator
   - `ionic cordova emulate --target="iPhone-SE, 10.3" --livereload ios` => run on specific simulator, if multiple

#### Build iOS app

1. cordova platform add ios --save
2. cordova requirements ios
3. ionic cordova build ios

#### Build Android app

1. cordova platform add android --save
2. cordova requirements android
3. cordova build android --verbose
4. cordova run android


#### TODO:
* [ ] Client Validation
* [ ] Add API and UI tests.