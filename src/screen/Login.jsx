import {
  View,
  Text,
  TouchableOpacity,
  Button,
  Pressable,
  SafeAreaView,
} from "react-native";
import { TextInput } from "react-native-paper";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { ApiBaseUrl } from "../lib/axios";
import axios from "axios";

const Login = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const navigation = useNavigation();
  const [responseData, setResponseData] = useState(null);
  const handleLogin = async () => {
    try {
      const requestData = {
        email,
        password,
      };
      const response = await axios.post(
        `${ApiBaseUrl}/user/login`,
        requestData
      );
      setResponseData(response?.data);
      navigation.navigate("Home");
    } catch (error) {
      console.log(error?.message);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View style={{ marginVertical: 50 }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              marginVertical: 12,
              color: "black",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            Login Form
          </Text>
        </View>
        <View style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>
          <View style={{ marginBottom: 12 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 400,
                marginVertical: 8,
              }}
            >
              Email address
            </Text>

            <TextInput
              placeholder="Enter your email address"
              placeholderTextColor="black"
              keyboardType="email-address"
              style={{
                width: "100%",
              }}
              onChangeText={(text) => setEmail(text)}
            />
          </View>

          <View style={{ marginBottom: 12 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 400,
                marginVertical: 8,
              }}
            >
              Password
            </Text>

            <TextInput
              placeholder="Enter your password"
              placeholderTextColor="black"
              secureTextEntry={isPasswordShown}
              style={{
                width: "100%",
              }}
              onChangeText={(text) => setPassword(text)}
            ></TextInput>
            <TouchableOpacity
              onPress={() => setIsPasswordShown(!isPasswordShown)}
              style={{
                position: "absolute",
                right: 12,
              }}
            >
              {isPasswordShown == true ? (
                <Ionicons name="eye-off" size={24} color="black" />
              ) : (
                <Ionicons name="eye" size={24} color="black" />
              )}
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              marginVertical: 6,
            }}
          >
            <Checkbox
              style={{ marginRight: 8 }}
              value={isChecked}
              onValueChange={setIsChecked}
              color={isChecked ? "red" : undefined}
            />

            <Text>Remember Me</Text>
          </View>

          <Button
            title="Login"
            filled
            style={{
              marginTop: 18,
              marginBottom: 4,
            }}
            onPress={handleLogin}
          />

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginVertical: 22,
            }}
          >
            <Text style={{ fontSize: 16, color: "black" }}>
              Don't have an account ?{" "}
            </Text>
            <Pressable onPress={() => navigation.navigate("Register")}>
              <Text
                style={{
                  fontSize: 16,
                  color: "black",
                  fontWeight: "bold",
                  marginLeft: 6,
                }}
              >
                Register
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
