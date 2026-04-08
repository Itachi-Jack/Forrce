// import React, { useState, useEffect } from "react";
// import {
//   View,
//   TextInput,
//   Button,
//   Text,
//   Alert,
//   ActivityIndicator,
// } from "react-native";
// import { StyleSheet } from "react-native";
// import RNPickerSelect from "react-native-picker-select";
// import useProfile from "../hooks/useProfile";
// export default function ProfileScreen({navigation}) {
//   const {profile , loading , updateProfile , loadProfile} = useProfile();

//   const [name, setName] = useState("");
//   const [businessName, setBusinessName] = useState("");
//   const [contactNumber, setContactNumber] = useState("");
//   const [isGstRegistered, setIsGstRegistered] = useState(null);
//   const [gstNumber, setGstNumber] = useState("");
  

//   //  Fetch saved data on load
//   useEffect(() => {
//     if(profile) {
//       setName(profile.name || "");
//       setBusinessName(profile.businessName || "");
//       setContactNumber(profile.contactNumber || "");
//       setIsGstRegistered(profile.isGstRegistered);
//       setGstNumber(profile.gstNumber || "");
//     }
//   } , [profile]);



//   //  Save or Update
//   const handleSubmit =  () => {
//     updateProfile({
//       name,
//       businessName,
//       contactNumber,
//       isGstRegistered,
//       gstNumber,
//     });
//   };

//   if (loading) return <ActivityIndicator />;

//    return (
//   <View style={styles.container}>
    
//     <Text style={styles.title}>Edit Profile</Text>

//     <View style={styles.card}>
      
//       <Text style={styles.label}>Name</Text>
//       <TextInput
//         value={name}
//         onChangeText={setName}
//         style={styles.input}
//         placeholder="Enter your name"
//       />

//       <Text style={styles.label}>Business Name</Text>
//       <TextInput
//         value={businessName}
//         onChangeText={setBusinessName}
//         style={styles.input}
//         placeholder="Enter business name"
//       />

//       <Text style={styles.label}>Contact Number</Text>
//       <TextInput
//         value={contactNumber}
//         onChangeText={setContactNumber}
//         keyboardType="phone-pad"
//         style={styles.input}
//         placeholder="Enter contact number"
//       />

//       <Text style={styles.label}>GST Registered</Text>
//       <View style={styles.pickerWrapper}>
//         <RNPickerSelect
//           onValueChange={(value) => setIsGstRegistered(value)}
//           value={isGstRegistered}
//           items={[
//             { label: "Yes", value: true },
//             { label: "No", value: false },
//           ]}
//         />
//       </View>

//       {isGstRegistered === true && (
//         <>
//           <Text style={styles.label}>GST Number</Text>
//           <TextInput
//             value={gstNumber}
//             onChangeText={setGstNumber}
//             style={styles.input}
//             placeholder="Enter GST number"
//           />
//         </>
//       )}
//       <View style = {styles.buttonContainer}>
//         <Button title = "Save Profile" onPress = {handleSubmit} />
//       </View>


//       <View style={styles.buttonContainer}>
//         <Button title="Update Profile" onPress={() => navigation.navigate("EditProfile")} />
//       </View>

//     </View>
//   </View>
// );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f5f6fa",
//     padding: 20,
//   },

//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 20,
//   },

//   card: {
//     backgroundColor: "#fff",
//     padding: 20,
//     borderRadius: 12,
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowRadius: 10,
//     elevation: 5,
//   },

//   label: {
//     fontSize: 14,
//     marginBottom: 5,
//     color: "#555",
//   },

//   input: {
//     borderWidth: 1,
//     borderColor: "#ddd",
//     borderRadius: 8,
//     padding: 12,
//     marginBottom: 15,
//     backgroundColor: "#fafafa",
//   },

//   pickerWrapper: {
//     borderWidth: 1,
//     borderColor: "#ddd",
//     borderRadius: 8,
//     marginBottom: 15,
//     paddingHorizontal: 10,
//   },

//   buttonContainer: {
//     marginTop: 10,
//   },
// });
