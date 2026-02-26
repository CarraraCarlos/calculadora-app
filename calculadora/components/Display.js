import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { setStatusBarBackgroundColor } from 'expo-status-bar'
import { themes } from '../theme/token.js'

export default function Display() {
  return (
    <View
    styles={[
        styles.wrap,
        {
            BackgroundColor: themes.card,
            borderColor: themes.stroke,
            shadowColor: themes.shadowDark,
        }
    ]}
  >
      <Text
      numberOfLines={1}
      style={[styles.expression, { color: themes.textDim }]}
      >
        {expression}
      </Text>
      
      <Text
      numberOfLines={1}
      style={[styles.value, { color: themes.text }]}
      >
        {value}
      
      
      </Text>
    </View>
    
  )
}

const styles = StyleSheet.create({
    wrap: {
        borderWidth: 1,
        borderRadius: 26,
        paddingHorizontal: 18,
        paddingTop: 18,
        paddingBottom: 14,
        marginBottom: 18,
        shadowOpacity: 0.35,
        shadowRadius: 22,
        shadowOffset: { width: 0, heigt: 14},
        elevation: 9,

    }
})