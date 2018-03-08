import * as React from 'react'
import { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

export class App extends Component<{}> {
  private static STYLES = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  })

  private static TEXT_INSTRUCTIONS = Platform.select({
    ios: 
`Press Cmd+R to reload,
Cmd+D or shake for dev menu`,

    android: 
`Double tap R on your keyboard to reload,
Shake or press menu button for dev menu`
})

  public render(): JSX.Element {
    return (
      <View style={App.STYLES.container}>
        <Text style={App.STYLES.welcome}>
          Welcome to React Native!
        </Text>

        <Text style={App.STYLES.instructions}>
          To get started, edit App.js
        </Text>

        <Text style={App.STYLES.instructions}>
          {App.TEXT_INSTRUCTIONS}
        </Text>
      </View>
    )
  }
}