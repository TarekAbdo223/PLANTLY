import { PlantlyButton } from "@/components/PlantlyButton";
import { PlantlyImage } from "@/components/PlantlyImage";
import { Theme } from "@/theme";
import { View, Text, StyleSheet, TextInput } from "react-native";

export default function NewScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.centered}>
        <PlantlyImage />
      </View>

      <Text style={styles.text}>Name</Text>
      <TextInput style={styles.input} />

      <Text style={styles.text}>Watering Frequency (every x days)</Text>
      <TextInput style={styles.input} />
      <PlantlyButton title="Add Plant" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colorWhite,
  },

  text: {
    fontSize: 18,
    marginVertical: 12,
  },
  input: {
    borderWidth: 2,
    borderColor: Theme.colorLightGrey,
    padding: 12,
    borderRadius: 6,
    marginBottom: 24,
    fontSize: 18,
  },
  centered: {
    alignItems: "center",
  },
});
