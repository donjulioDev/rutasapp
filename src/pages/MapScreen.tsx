import { StyleSheet, View, Text } from 'react-native'

export const MapScreen = () => {
  return (
    <View style={ styles.container} >
      <Text>MapScreen</Text> 
    </View>
  )
}

  const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#367a9a',
   }
 });