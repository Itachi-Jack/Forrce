import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useRoute} from "@react-navigation/native";
import { verifyOtp } from "../api/authApi";
import { useAuthStore } from "../store/authStore";
export default function OtpScreen({navigation}){
    const[otp , setOtp] = useState('');
    const route = useRoute();
    

    const { mobile } = route.params;
    const [loading, setLoading] = useState(false);
    

   const verifyOtpHandler = async () => {
    if(otp.length !== 4){
        Alert.alert("Invalid Otp");
        return;
    }
    try{
        setLoading(true);
        console.log("Verifying : " , mobile , otp);
        const res = await verifyOtp(mobile , otp);
        console.log(res);
        Alert.alert("Success", "Login successful");
        navigation.replace("Profile");

    }catch (err) {
      console.log("ERROR:", err?.response?.data);

      Alert.alert(
        "Verification Failed",
        err?.response?.data?.message || "Invalid OTP"
      );
    } finally {
      setLoading(false);
    }
   };
     return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>

      <Text style={styles.subtitle}>
        Sent to {mobile}
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter OTP"
        keyboardType="number-pad"
        value={otp}
        onChangeText={setOtp}
        maxLength={4}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={verifyOtpHandler}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Verify OTP</Text>
        )}
      </TouchableOpacity>
    </View>
  );

    
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    textAlign: "center",
    marginBottom: 30,
    color: "#666",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    backgroundColor: "#fff",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#6b2323",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});