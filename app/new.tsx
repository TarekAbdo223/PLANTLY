import { PlantlyButton } from "@/components/PlantlyButton";
import { PlantlyImage } from "@/components/PlantlyImage";
import { usePlantStore } from "@/store/plantsStore";
import { Theme } from "@/theme";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  ScrollView,
  TouchableOpacity,
  Platform,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as ImagePicker from "expo-image-picker";

export default function NewScreen() {
  const [name, setName] = useState<string>();
  const [days, setDays] = useState<string>();
  const [imageUri, setImageUri] = useState<string>();

  const addPlant = usePlantStore((state) => state.addPlant);
  const router = useRouter();

  const handleSubmit = () => {
    if (!name) {
      return Alert.alert("Validation Error", "Give your plant a name");
    }

    if (!days) {
      return Alert.alert(
        "Validation Error",
        `How often does ${name} need to be watered?`
      );
    }

    if (Number.isNaN(Number(days))) {
      return Alert.alert(
        "Validation Error",
        "Watering frequency must be a be a number"
      );
    }
    addPlant(name, Number(days), imageUri);
    router.back();
  };

  const handleChooseImage = async () => {
    if (Platform.OS === "web") {
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }

    console.log(JSON.stringify(result, null, " "));
  };

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      keyboardShouldPersistTaps="handled"
    >
      <TouchableOpacity
        onPress={handleChooseImage}
        style={styles.centered}
        activeOpacity={0.8}
      >
        <PlantlyImage imageUri={imageUri} />
      </TouchableOpacity>
      <Text style={styles.label}>Name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        style={styles.input}
        placeholder="E.g. Casper the Cactus"
        autoCapitalize="words"
      />
      <Text style={styles.label}>Watering Frequency (every x days)</Text>
      <TextInput
        value={days}
        onChangeText={setDays}
        style={styles.input}
        placeholder="E.g. 6"
        keyboardType="number-pad"
      />
      <PlantlyButton title="Add plant" onPress={handleSubmit} />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colorWhite,
  },
  contentContainer: {
    paddingTop: 24,
    paddingHorizontal: 24,
    paddingBottom: 100,
  },

  label: {
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
    // backgroundColor: Theme.colorLightGrey,
  },
  centered: {
    alignItems: "center",
    marginBottom: 24,
    // marginVertical: 12,
  },
});
