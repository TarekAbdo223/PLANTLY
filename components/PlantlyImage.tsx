import { Image, useWindowDimensions } from "react-native";

type Props = {
  size?: number;
  imageUri?: string;
};
export function PlantlyImage({ size, imageUri }: Props) {
  const { width } = useWindowDimensions();

  const imageSize = size ?? Math.min(width / 1.5, 400); // this will insure that the iamge will not be bigger than 400

  return (
    <Image
      source={imageUri ? { uri: imageUri } : require("../assets/plantly.png")}
      style={{ width: imageSize, height: imageSize, borderRadius: 6 }}
    />
  );
}
