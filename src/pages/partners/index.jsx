import { View, Button, Image, ScrollView } from "react-native";

import { styles } from "./styles";
import { colorsTheme } from "../../constants";

const Partners = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Image
          source={{
            uri: "https://media.istockphoto.com/id/1331595142/es/foto/retrato-de-un-feliz-profesor-de-educaci%C3%B3n-f%C3%ADsica-durante-una-clase-en-el-gimnasio-de-la-escuela.jpg?s=612x612&w=0&k=20&c=U3fGCy791deqksWtvGEWEcNPSLRiJ7C4tlRIShttPp4=",
          }}
          style={styles.image}
        />
        <Button
          title="Teachers"
          color={colorsTheme.text}
          onPress={() => navigation.navigate("Teachers")}
        />
      </View>
      <View style={styles.content}>
        <Image
          source={{
            uri: "https://ichef.bbci.co.uk/news/640/cpsprodpb/2ACE/production/_95185901_gettyimages-514734540.jpg",
          }}
          style={styles.image}
        />
        <Button
          title="Associates"
          color={colorsTheme.text}
          onPress={() => navigation.navigate("Associates")}
        />
      </View>
    </ScrollView>
  );
};

export default Partners;
