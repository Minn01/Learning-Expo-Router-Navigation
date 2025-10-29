import { Text, View } from 'react-native'
import { Link } from 'expo-router'

export default function First() {
    return (
    <View>
      <Text>This is the second screen</Text>
      <Link href={"/first"}>
        <Text>Travel to First</Text>
      </Link>
      <Link href={"/third"}>
        <Text>Travel to Third</Text>
      </Link>
    </View>
    )
}