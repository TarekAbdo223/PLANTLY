import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function PlantScreen() {
  const params = useLocalSearchParams();

  console.log(params); // this logs the id

  return (
    <View>
      <Text>Plant Screen</Text>
    </View>
  );
}
