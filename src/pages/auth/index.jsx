import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { View, Text, Image, TextInput, Button, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";

import { styles } from "./styles";
import { colorsTheme, ESCUDO } from "../../constants";
import { signIn, signUp } from "../../store/actions";

const Auth = () => {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const [eye, setEye] = useState(true);
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
  const onHandlerEyes = () => setEye(!eye);
  const SetEye = () =>
    eye ? (
      <Feather
        name="eye-off"
        size={24}
        color={colorsTheme.black}
      />
    ) : (
      <Feather
        name="eye"
        size={24}
        color={colorsTheme.black}
      />
    );

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textInit}>Club Atletico Nueva Era</Text>
        <Image
          source={{
            uri: ESCUDO,
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
        <View style={styles.eye}>
          <TextInput
            styles={styles.input}
            placeholder="**********"
            placeholderTextColor={colorsTheme.text}
            secureTextEntry={eye}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <TouchableOpacity onPress={onHandlerEyes}>
            <SetEye />
          </TouchableOpacity>
        </View>
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
