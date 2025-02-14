import { Theme } from "@/theme";
import { View, Text, StyleSheet } from "react-native";

export default function NewScreen() {
  return (
    <View style={styles.container}>
      <Text>New plant</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colorWhite,
    justifyContent: "center",
    alignItems: "center",
  },
});
