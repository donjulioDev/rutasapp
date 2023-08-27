import { StyleSheet, View, Text } from 'react-native'

export const PermissionsScreen = () => {
  return (
    <View style={ styles.container} >
      <Text>PermissionsScreen</Text> 
    </View>
  )
}

  const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#479a36',
   }
 });