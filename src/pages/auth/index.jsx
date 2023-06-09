import { useState } from "react";
import { View, Text, Image, TextInput, Button, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";

import { styles } from "./styles";
import { colorsTheme } from "../../constants";
import { signIn, signUp } from "../../store/actions";

const Auth = () => {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const title = isLogin ? "Login" : "Register";
  const buttonTitle = isLogin ? "Login" : "Register";
  const messageText = isLogin ? "Don´t have an account?" : "Already have an account?";

  const onHandleChangeAuth = () => {
    setIsLogin(!isLogin);
  };

  const onHandleAuth = () => {
    dispatch(isLogin ? signIn({ email, password }) : signUp({ email, password }));
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textInit}>Club Atletico Nueva Era</Text>
        <Image
          source={{
            uri: "https://arofusa.com/wp-content/uploads/2019/09/nuevonuevaera.png",
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.label}>Email</Text>
        <TextInput
          styles={styles.input}
          placeholder="email@gmail.com"
          placeholderTextColor={colorsTheme.text}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          styles={styles.input}
          placeholder="**********"
          placeholderTextColor={colorsTheme.text}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <TouchableOpacity
          styles={styles.link}
          onPress={onHandleChangeAuth}>
          <Text style={styles.linkText}>{messageText}</Text>
        </TouchableOpacity>
        <View styles={styles.submit}>
          <Button
            title={buttonTitle}
            color={colorsTheme.background}
            onPress={onHandleAuth}
          />
        </View>
      </View>
    </View>
  );
};

export default Auth;
