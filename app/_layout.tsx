import { Stack } from "expo-router";

export default function RootLayout() {
  return (
      <Stack>
        <Stack.Screen name="index" options={{ title: "Rick and Morty Character Search" }} />
        <Stack.Screen name="character/[id]/index" />
      </Stack>
  );
}
