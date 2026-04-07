import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from "react-native";

import { useState } from "react";
import { requestOtp } from "../api/authApi";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen(){
    

    const navigation = useNavigation();
    const [mobile, setMobile] = useState('');
    //const [otp , setOtp] = useState('');
   // const [step , setStep] = useState('MOBILE');
    const [loading , setLoading ] = useState(false);


    const sendOtp = async () => {
        if (mobile.length !== 10) {
            Alert.alert('Invalid Mobile Number');
            return;
        }

        try{
            console.log("Sending Otp");
            setLoading(true);
            const res = await requestOtp(mobile);
            console.log("Otp Sent : ",res);
            navigation.navigate("Otp" , {mobile });
            setLoading(false);
        }catch(err){
            Alert.alert("Error Sending OTP");
            setLoading(false);
        }

    };

     return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>

      <Text style={styles.label}>Mobile Number</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter 10 digit number"
        keyboardType="phone-pad"
        value={mobile}
        onChangeText={setMobile}
        maxLength={10}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={sendOtp}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Send OTP</Text>
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
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 32,
    textAlign: "center",
    color: "#222",
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
    color: "#555",
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
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

