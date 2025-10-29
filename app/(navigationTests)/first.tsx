import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function First() {
  return (
    <View>
      <Text>This is the first screen</Text>
      <Link href={"/second"}>
        <Text>Travel to Second</Text>
      </Link>
      <Link href={"/third"}>
        <Text>Travel to Third</Text>
      </Link>
    </View>
  );
}
