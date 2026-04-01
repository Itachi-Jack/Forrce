import React,{useState} from "react";
import {View , Text , Button,TextInput} from "react-native";
export default function OtpScreen({navigation}){
    const [otp , setOtp] = useState("");
    const verifyOtp = () =>{
        if( otp === "1234"){
            alert("OTP Verified Successfully");
            navigation.navigate('Feed');
        } else {
            alert("Invalid OTP. Please try again.");
        }
    };
    return(
        <View>
            <Text>Otp Screen </Text>
            <TextInput
                placeholder="Enter OTP"
                value={otp}
                onChangeText={setOtp}
                keyboardType="numeric"
                style={{
                    borderWidth: 1,
                    borderColor: "#ccc",
                    padding: 10,
                    margin: 10
                }}
            />
            <Button title="Verify OTP" onPress={verifyOtp} />
        </View>
    );
}