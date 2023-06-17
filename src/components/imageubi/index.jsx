import { requestCameraPermissionsAsync, launchCameraAsync } from "expo-image-picker";
import { useState } from "react";
import { View, Button, Text, Image, Alert } from "react-native";

import { styles } from "./styles";
import { colorsTheme } from "../../constants";

const ImageUbi = ({ onImg }) => {
  const [pickedUbiUrl, setPikedIbiUrl] = useState(null);

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

    const imageUbi = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.7,
    });

    setPikedIbiUrl(imageUbi.assets[0].uri);
    onImg(imageUbi.assets[0].uri);
  };

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {!pickedUbiUrl ? (
          <Text>No hay imagenes seleccionadas</Text>
        ) : (
          <Image
            style={styles.image}
            source={{ uri: pickedUbiUrl }}
          />
        )}
      </View>
      <Button
        title="Obtener foto del club"
        onPress={onHandlerTakeImage}
        color={colorsTheme.background}
      />
    </View>
  );
};

export default ImageUbi;
