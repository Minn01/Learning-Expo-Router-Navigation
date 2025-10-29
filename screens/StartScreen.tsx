
import { View, Text, Image } from "react-native";
import { useNavigation } from "expo-router";
import { useEffect } from "react";

const StartScreen = () => {
  const nav = useNavigation()

  useEffect(() => {
    nav.setOptions({title: 'Chill Spot'})
  })

  return (
    <View style={{
      flex: 1,
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 25
    }}>
      <Image 
       source={{uri: 'https://media1.tenor.com/m/OjJ_dH3gBwIAAAAd/frog-chill.gif'}}
       style={{width: '75%', height: '50%'}}
      />
      <Text>Probably should work on something soon...</Text>
    </View>
  )
} 

export default StartScreen