import { Slot, Stack } from "expo-router";
import First from "./first";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <Slot /> {}
    </Stack>
  );
}
