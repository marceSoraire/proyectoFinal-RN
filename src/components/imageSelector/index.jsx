// import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialIcons } from "@expo/vector-icons";
import { requestCameraPermissionsAsync, launchCameraAsync } from "expo-image-picker";
import { useState } from "react";
import { View, Image, Alert, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import { colorsTheme } from "../../constants";

const ImageSelector = ({ onImage }) => {
  const [pickedUrl, setPikedUrl] = useState(null);

  const verifyPermissions = async () => {
    const { status } = await requestCameraPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("Permiso denegado", "Necesitamos permisos para la camara", [{ text: "OK" }]);
      return false;
    }

    return true;
  };

  const onHandlerTakeImage = async () => {
    const isCamaraPermission = await verifyPermissions();
    if (!isCamaraPermission) return;

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.7,
    });

    setPikedUrl(image.assets[0].uri);
    onImage(image.assets[0].uri);
  };

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {!pickedUrl ? (
          <Image
            style={styles.noImage}
            source={{
              uri: "https://static.vecteezy.com/system/resources/thumbnails/007/319/933/small_2x/black-avatar-person-icons-user-profile-icon-vector.jpg",
            }}
          />
        ) : (
          <Image
            style={styles.image}
            source={{ uri: pickedUrl }}
          />
        )}
        <TouchableOpacity
          style={styles.cam}
          onPress={onHandlerTakeImage}>
          <MaterialIcons
            name="add-a-photo"
            size={45}
            color={colorsTheme.background}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ImageSelector;
