import { Image, useWindowDimensions } from "react-native";

export function PlantlyImage() {
  const { width } = useWindowDimensions();

  const imageSize = Math.min(width / 1.5, 400); // this will insure that the iamge will not be bigger than 400

  return (
    <Image
      source={require("../assets/plantly.png")}
      style={{ width: imageSize, height: imageSize }}
    />
  );
}
