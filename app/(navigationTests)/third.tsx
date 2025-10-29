import { Text, View } from 'react-native'
import { Link } from 'expo-router'

export default function First() {
    return (
    <View>
      <Text>This is the third screen</Text>
      <Link href={"/second"}>
        <Text>Travel to Second</Text>
      </Link>
      <Link href={"/first"} dismissTo>
        <Text>Travel to First</Text>
      </Link>
    </View>
    )
}