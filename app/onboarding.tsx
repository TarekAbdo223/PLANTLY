import { Text, View, StyleSheet } from "react-native";
import { Theme, theme } from "@/theme";

export default function OnboardingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Onboarding</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Theme.colorWhite,
  },
  text: {
    fontSize: 24,
  },
});
