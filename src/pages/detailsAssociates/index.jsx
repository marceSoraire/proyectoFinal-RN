import { View, Text, ScrollView, Image } from "react-native";
import { useSelector } from "react-redux";

import { styles } from "./styles";

const DetailsAssociate = ({ route }) => {
  const { associateId } = route.params;
  const associates = useSelector((state) =>
    state.associate.associates.find((as) => as.id === associateId)
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imgPreview}>
        <Image
          source={{ uri: associates.image }}
          style={styles.image}
        />
      </View>
      <View style={styles.location}>
        <View style={styles.datesContainer}>
          <View style={styles.row}>
            <Text style={styles.title}>Nombre: </Text>
            <Text style={styles.name}>{associates.name}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.title}>Apellido: </Text>
            <Text style={styles.lastName}>{associates.lastName}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.title}>Edad: </Text>
            <Text style={styles.age}>{associates.age}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.title}>N° Socio: </Text>
            <Text style={styles.num}>{associates.id}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailsAssociate;
