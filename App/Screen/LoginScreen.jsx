import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function LoginScreen() {
  const onPress = async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  };
  return (
    <View
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
      }}
    >
      <Image
        source={require("./../../assets/images/logo.png")}
        style={styles.logoImage}
      />
      <Image
        source={require("./../../assets/images/bg-logo.png")}
        style={styles.bgImage}
      />
      <View style={{ padding: 20 }}>
        <Text style={styles.heading}>EV 충전소를 찾는 APP</Text>
        <Text style={styles.desc}>
          여러분 근처의 충전소를 빠르게 찾을 수 있습니다.
        </Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={{ color: "white", textAlign: "center" }}>
            Login With Google
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logoImage: {
    width: "70%",
    height: 60,
    objectFit: "contain",
  },
  bgImage: {
    width: "100%",
    height: 260,
    marginTop: 20,
    objectFit: "cover",
  },
  heading: {
    fontSize: 25,
    fontFamily: "Pretend-SemiBold",
    textAlign: "center",
    marginTop: 20,
  },
  desc: {
    fontSize: 17,
    fontFamily: "Pretend-Medium",
    marginTop: 15,
    textAlign: "center",
    color: "#000",
    color: Colors,
  },
  button: {
    backgroundColor: "#4ECB71",
    padding: 16,
    display: "flex",
    borderRadius: 99,
    marginTop: 100,
  },
});
