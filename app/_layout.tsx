import { Ionicons } from "@expo/vector-icons";
import { Stack, Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = "home" as "home" | "settings" | "list";

          if (route.name === "index") {
            iconName = "home";
          } else if (route.name === "accounts/index") {
            iconName = "settings";
          }
          else if (route.name === "records/index") {
            iconName = "list";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="accounts/index"  options={{ title: "Accounts" }} />
      <Tabs.Screen name="records/index" options={{ title: "Records" }} />
    </Tabs>
  );
}
