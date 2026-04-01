import React from "react";
import {View , Text , Button} from "react-native";

export default function LoginScreen({navigation}){
    return(
        <View>
            <Text style ={{
                fontSize : 30,
                fontWeight : "bold",
                textAlign : "center",
                marginTop : 50
            }}>
                Login Screen
            </Text>

            <Button title="Go to Home" onPress={() => navigation.navigate('Otp')} />
        </View>
    );
}