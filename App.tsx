import React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export const App = () => {
  return (
    <NavigationContainer>
      <View style={ styles.container} >
        <Text>App</Text> 
      </View>
    </NavigationContainer>
  )
}

  const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#8ecad7',
   }
 });
export default App;
