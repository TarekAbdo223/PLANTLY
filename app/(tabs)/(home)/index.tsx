import { PlantCard } from "@/components/PlantCard";
import { PlantlyButton } from "@/components/PlantlyButton";
import { usePlantStore } from "@/store/plantsStore";
import { Theme } from "@/theme";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";

//

export default function App() {
  const plants = usePlantStore((state) => state.plants);
  console.log(plants);
  const router = useRouter();

  return (
    <FlatList
      contentContainerStyle={styles.contentContainer}
      style={styles.container}
      data={plants}
      renderItem={({ item }) => <PlantCard plant={item} />}
      keyExtractor={(item) => item.id}
      ListEmptyComponent={
        <PlantlyButton
          title="Add your first plant"
          onPress={() => router.navigate("/new")}
        />
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colorWhite,
  },
  contentContainer: {
    padding: 12,
  },
});
