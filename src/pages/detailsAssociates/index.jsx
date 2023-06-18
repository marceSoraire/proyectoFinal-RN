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
      <Image
        source={{ uri: associates.image }}
        style={styles.image}
      />
      <View style={styles.location}>
        <View style={styles.datesContainer}>
          <Text style={styles.name}>{`Nombre: ${associates.name}`}</Text>
          <Text style={styles.lastName}>{`Apellido: ${associates.lastName}`}</Text>
          <Text style={styles.age}>{`Edad: ${associates.age}`}</Text>
          <Text style={styles.num}>{`N° Socio: ${associates.id}`}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailsAssociate;
