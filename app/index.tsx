import StartScreen from "@/screens/StartScreen"
import { useRouter } from "expo-router";
import { Button, View, Text } from "react-native";

export default function Index() {
  const router = useRouter();
  return (
    <View>
      <Text>Home</Text>
      <Button title="Go to First Screen" onPress={() => router.push("/first")} />
    </View>
  );
}
