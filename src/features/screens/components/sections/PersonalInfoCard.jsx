import React from "react";
import { TouchableOpacity, Text, View, TextInput } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { styles, pickerStyles } from "./PersonalInfoStyles";
import useLocation from "../../../location/hooks/useLocation";
export default function PersonalInfoCard({
  name,
  setName,
  contactNumber,
  selfPickup,
  setSelfPickup,
  isCourier,
  setIsCourier,
}) {

  const { location, loading, getLocation } = useLocation();
  
  return (
    <View style={styles.card}>
      {/* HEADER */}
      <View style={styles.cardHeader}>
        <View style={[styles.iconPill, { backgroundColor: "#f0f0f0" }]}>
          <Text style={{ fontSize: 16 }}>👤</Text>
        </View>

        <Text style={[styles.cardTitle]}>
          Personal info
        </Text>
      </View>

      {/* NAME + CONTACT */}
      <View style={styles.row}>
        <View style={{ flex: 1 }}>
          <Text style={styles.lbl}>Full name</Text>
          <TextInput
            value={name}
            onChangeText={setName}
            style={styles.inp}
            placeholder="Enter name"
          />
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.lbl}>Contact number</Text>
          <TextInput
            value={contactNumber}
            style={[styles.inp, styles.inpDisabled]}
            editable={false}
          />
        </View>
      </View>

      {/* SELF PICKUP */}
      <Text style={[styles.lbl, { color: "#1D9E75" }]}>
        Is self-pickup available?
      </Text>

      <View style={[styles.pickerWrap]}>
        <RNPickerSelect
          onValueChange={setSelfPickup}
          value={selfPickup}
          placeholder={{ label: "Select an option", value: null }}
          items={[
            { label: "Yes", value: true },
            { label: "No", value: false },
          ]}
          style={pickerStyles}
        />
      </View>

      {/* COURIER */}
      <Text style={[styles.lbl, { color: "#1D9E75" }]}>
        Is courier available?
      </Text>

      <View style={styles.pickerWrap}>
        <RNPickerSelect
          onValueChange={setIsCourier}
          value={isCourier}
          placeholder={{ label: "Select an option", value: null }}
          items={[
            { label: "Yes", value: true },
            { label: "No", value: false },
          ]}
          style={pickerStyles}
        />
      </View>
      <Text style={[styles.lbl, { color: "#1D9E75" }]}>Live Location</Text>
      <TouchableOpacity onPress={() => {
        console.log("BUTTON CLICKED");
        getLocation();
      }} style={{
        backgroundColor: "#1D9E75",
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 10,
      }}>
        <Text style={{ color: "white" }}>
          {loading ? "Fetching..." : "Get Live Location"}
        </Text>
      </TouchableOpacity>

      {location && (
        <Text style={{ marginTop: 10, color: "#1D9E75" }}>
          Location captured ✅
        </Text>
      )}
       

    </View>
  );
}