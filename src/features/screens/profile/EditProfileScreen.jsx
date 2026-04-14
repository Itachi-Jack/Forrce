import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import useProfile from "../hooks/useProfile";
import Header from "../components/sections/Header";

export default function EditProfileScreen() {
  const { profile, loading, updateProfile, loadProfile } = useProfile();

  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [isPurchaseMinOrder , setPurchaseMinOrder] = useState(false);
  const [purchaseMinOrderVal , setPurchaseMinOrderVal] = useState("");
  const [isDelivery, setIsDelivery] = useState(null);
  const [serviceableRadius, setServiceableRadius] = useState("");
  const [deliveryIn, setDeliveryIn] = useState("");
  const [isMinOrder, setIsMinOrder] = useState(false);
  const [minOrderValue, setMinOrderValue] = useState("");
  const [isFreeDelivery, setIsFreeDelivery] = useState(null);
  const [deliveryCharges, setDeliveryCharges] = useState("");
  const [isMinOrderFree, setIsMinOrderFree] = useState(false);
  const [minOrderFreeValue, setMinOrderFreeValue] = useState("");
  const [selfPickup, setSelfPickup] = useState(null);
  const [isCourier, setIsCourier] = useState(null);
  const [deliveryInfo, setDeliveryInfo] = useState("");

  const sellerCode = profile?.seller_code || "";
  useEffect(() => {
    loadProfile();
  }, []);

  useEffect(() => {
    if (profile) {
      setName(profile.name || "");
      setContactNumber(profile.contactNumber || "");
      setIsDelivery(profile.isDelivery ?? null);
      setServiceableRadius(profile.serviceableRadius?.toString() || "");
      setDeliveryIn(profile.deliveryIn?.toString() || "");
      setIsMinOrder(profile.isMinOrder ?? null);
      setMinOrderValue(profile.minOrderValue?.toString() || "");
      setIsFreeDelivery(profile.isFreeDelivery ?? null);
      setDeliveryCharges(profile.deliveryCharges?.toString() || "");
      setIsMinOrderFree(profile.isMinOrderFree ?? null);
      setMinOrderFreeValue(profile.minOrderFreeValue?.toString() || "");
      setSelfPickup(profile.selfPickup ?? null);
      setIsCourier(profile.isCourier ?? null);
      setDeliveryInfo(profile.deliveryInfo ?.toString() || "");
    }
  }, [profile]);

  const handleSubmit = () => {
    if (!name) {
      Alert.alert("Error", "Name is required");
      return;
    }
    if (isDelivery === null) {
      Alert.alert("Error", "Please select a delivery option");
      return;
    }
    if (isDelivery === true) {
      if (!serviceableRadius) {
        Alert.alert("Error", "Enter serviceable radius");
        return;
      }
      if (!deliveryIn) {
        Alert.alert("Error", "Enter delivery time");
        return;
      }
    }

    updateProfile({
      name,
      contactNumber,
      isPurchaseMinOrder,
      purchaseMinOrderVal,
      isDelivery,
      serviceableRadius,
      deliveryIn,
      isMinOrder,
      minOrderValue,
      isFreeDelivery,
      deliveryCharges,
      isMinOrderFree,
      minOrderFreeValue,
      selfPickup,
      isCourier,
      deliveryInfo,
    });
  };

  if (loading)
    return (
      <ActivityIndicator
        style={{ flex: 1 }}
        size="large"
        color="#534AB7"
      />
    );


  return (

    <ScrollView style={styles.screen} keyboardShouldPersistTaps="handled">
      {/* Hero Header */}
      <Header sellerCode={sellerCode} />

      <View style={styles.body}>
        {/* Personal Info Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View
              style={[
                styles.iconPill,
                { backgroundColor: "#EEEDFE" },
              ]}
            >
              <Text style={{ fontSize: 16 }}>👤</Text>
            </View>
            <Text
              style={[styles.cardTitle, { color: "#26215C" }]}
            >
              Personal info
            </Text>
          </View>

          {/* ✅ SIDE BY SIDE */}
          <View style={styles.row}>
            <View style={{ flex: 1 }}>
              <Text style={styles.lbl}>Full name</Text>
              <TextInput
                value={name}
                onChangeText={setName}
                style={styles.inp}
                placeholder="Enter name"
                placeholderTextColor="#AFA9EC"
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

          {/* <View style={{ alignItems: "flex-end" }}>
            <Text style={styles.hint}>Contact number cannot be changed</Text>
          </View> */}
        </View>

        {/* Delivery Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            {/* <View
              style={[
                styles.iconPill,
                { backgroundColor: "#E1F5EE" },
              ]}
            >
              <Text style={{ fontSize: 16 }}>🚚</Text>
            </View> */}
            <Text
              style={[styles.cardTitle, { color: "#085041" }]}
            >
              Fulfillment
            </Text>
          </View>
           <Text style={[styles.lbl, { color: "#1D9E75" }]}>
             Minimum Order Value For Delivery?
          </Text>

          
          <View style={[styles.pickerWrap, {borderColor: "#9FE1CB"},
          ]}>
            <RNPickerSelect
              onValueChange={(val) => {
                setPurchaseMinOrder(val);
              }
            }
            value = {isPurchaseMinOrder}
            placeholder={{ label: "Select an option", value: null }}
              items={[
                { label: "Yes", value: true },
                { label: "No", value: false },
              ]}
              style={pickerStyles}
            />

          </View>
          {isPurchaseMinOrder && (
                <>
                  <Text style={[styles.lbl, { color: "#1D9E75" }]}>
                    Minimum Order Value for purchase?
                  </Text>

                  <TextInput
                    style={[styles.pickerWrap, { borderColor: "#9FE1CB" }]}
                    placeholder="Enter amount"
                    keyboardType="numeric"
                    value={purchaseMinOrderVal}
                    onChangeText={setPurchaseMinOrderVal}
                  />
                </>
              )}
          


          <Text style={[styles.lbl, { color: "#1D9E75" }]}>
            Delivery available?
          </Text>

          <View
            style={[
              styles.pickerWrap,
              { borderColor: "#9FE1CB" },
            ]}
          >
            <RNPickerSelect
              onValueChange={(val) => {
                setIsDelivery(val);
                if (!val) {
                  setServiceableRadius(0);
                  setDeliveryIn(0);
                }
              }}
              value={isDelivery}
              placeholder={{ label: "Select an option", value: null }}
              items={[
                { label: "Yes", value: true },
                { label: "No", value: false },
              ]}
              style={pickerStyles}
            />
          </View>

          {isDelivery === true && (
            <>
              <View style={styles.dividerGreen} />

              <View style={styles.tag}>
                <View style={styles.tagDot} />
                <Text style={styles.tagText}>
                  Delivery enabled
                </Text>
              </View>

              <View style={styles.row}>
                <View style={{ flex: 1.2 }}>
                  <Text
                    style={[styles.lbl, { color: "#1D9E75" }]}
                  >
                    Serviceable radius (kms)
                  </Text>
                  <TextInput
                    value={serviceableRadius}
                    onChangeText={setServiceableRadius}
                    style={[
                      styles.inp,
                      { borderColor: "#9FE1CB" },
                    ]}
                    placeholder="e.g. 10"
                    placeholderTextColor="#9FE1CB"
                    keyboardType="numeric"
                  />
                </View>

                <View style={{ flex: 0.8 }}>
                  <Text
                    style={[styles.lbl, { color: "#1D9E75" }]}
                  >
                    Delivery in (days)
                  </Text>
                  <TextInput
                    value={deliveryIn}
                    onChangeText={setDeliveryIn}
                    style={[
                      styles.inp,
                      { borderColor: "#9FE1CB" },
                    ]}
                    placeholder="e.g. 30"
                    placeholderTextColor="#9FE1CB"
                    keyboardType="numeric"
                  />
                </View>
              </View>
              <Text style={[styles.lbl, { color: "#1D9E75" }]}>
                Minimum order required
              </Text>

              <View style={[styles.pickerWrap, { borderColor: "#9FE1CB" }]}>
                <RNPickerSelect
                  onValueChange={(val) => {
                    setIsMinOrder(val);
                  }}
                  value={isMinOrder}
                  placeholder={{ label: "Select an option", value: null }}
                  items={[
                    { label: "Yes", value: true },
                    { label: "No", value: false },
                  ]}
                  style={pickerStyles} />
              </View>

              {isMinOrder && (
                <>
                  <Text style={[styles.lbl, { color: "#1D9E75" }]}>
                    Minimum Order Value for Delivery
                  </Text>

                  <TextInput
                    style={[styles.pickerWrap, { borderColor: "#9FE1CB" }]}
                    placeholder="Enter amount"
                    keyboardType="numeric"
                    value={minOrderValue}
                    onChangeText={setMinOrderValue}
                  />
                </>
              )}
              {/* FREE DELIVERY */}
              <Text style={[styles.lbl, { color: "#1D9E75" }]}>
                Free delivery available
              </Text>

              <View style={[styles.pickerWrap, { borderColor: "#9FE1CB" }]}>
                <RNPickerSelect
                  onValueChange={(val) => {
                    setIsFreeDelivery(val);

                    // if free → charges = 0
                    if (val === true) {
                      setDeliveryCharges("0");
                    }
                  }}
                  value={isFreeDelivery}
                  placeholder={{ label: "Select an option", value: null }}
                  items={[
                    { label: "Yes", value: true },
                    { label: "No", value: false },
                  ]}
                  style={pickerStyles}
                />
              </View>
              <Text style={[styles.lbl, { color: "#1D9E75" }]}>
                    Delivery Charges
                  </Text>

                  <TextInput
                    style={[styles.inp, { borderColor: "#9FE1CB" }]}
                    placeholder="Enter delivery charges"
                    keyboardType="numeric"
                    value={deliveryCharges}
                    onChangeText={setDeliveryCharges}
                  />



              {isFreeDelivery === false && (
                <>
                  
                  <Text style={[styles.lbl, { color: "#1D9E75" }]} >
                    Is there a minimum order value for free delivery?
                  </Text>

                  <View style={[styles.pickerWrap, { borderColor: "#9FE1CB" }]}>
                    <RNPickerSelect
                      onValueChange={(val) => {
                        setIsMinOrderFree(val);
                      }}
                      value={isMinOrderFree}
                      placeholder={{ label: "Select an option", value: null }}
                      items={[
                        { label: "Yes", value: true },
                        { label: "No", value: false },
                      ]}
                      style={pickerStyles}
                    />
                  </View>

                  {isMinOrderFree === true && (
                    <>
                      <Text style={[styles.lbl, { color: "#1D9E75" }]}>
                        Enter Minimum Order Value for Free Delivery
                      </Text>
                      <TextInput
                        style={[styles.inp, { borderColor: "#9FE1CB" }]}
                        placeholder="Enter amount"
                        keyboardType="numeric"
                        value={minOrderFreeValue}
                        onChangeText={setMinOrderFreeValue}

                      />
                    </>
                  )}
                </>
              )}

              <Text style={[styles.lbl, { color: "#1D9E75" }]}>
                Is self-pickup available ?

              </Text>
              <View style={[styles.pickerWrap, { borderColor: "#9FE1CB" }]}>
                <RNPickerSelect
                  onValueChange={(val) => {
                    setSelfPickup(val);
                  }}
                  value={selfPickup}
                  placeholder={{ label: "Select an option", value: null }}
                  items={[
                    { label: "Yes", value: true },
                    { label: "No", value: false },
                  ]}
                  style={pickerStyles}
                />
              </View>
              <Text style={[styles.lbl, { color: "#1D9E75" }]}>
                Is courier available ?

              </Text>
              <View style={[styles.pickerWrap, { borderColor: "#9FE1CB" }]}>
                <RNPickerSelect
                  onValueChange={(val) => {
                    setIsCourier(val);
                  }}
                  value={isCourier}
                  placeholder={{ label: "Select an option", value: null }}
                  items={[
                    { label: "Yes", value: true },
                    { label: "No", value: false },
                  ]}
                  style={pickerStyles}
                />
              </View>

              <Text style={[styles.lbl, { color: "#1D9E75" }]}>
                Delivery information
              </Text>
              <TextInput
                style={[styles.inp, { borderColor: "#9FE1CB", height: 100, paddingTop: 10, paddingHorizontal: 10, textAlignVertical: "top" }]}
                placeholder="Enter delivery information"
                multiline
                value={deliveryInfo}
                onChangeText={setDeliveryInfo}
              />




            </>



          )}
        </View>






        <TouchableOpacity
          style={styles.btn}
          onPress={handleSubmit}
          activeOpacity={0.85}
        >
          <Text style={styles.btnText}>Save changes</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#f0f4ff" },


  body: {
    padding: 16,
    paddingBottom: 40,
    marginTop: -20,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    marginBottom: 14,
    borderWidth: 0.5,
    borderColor: "#e0e0ef",
  },

  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 18,
  },

  iconPill: {
    width: 34,
    height: 34,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  cardTitle: { fontSize: 14, fontWeight: "500" },

  lbl: {
    fontSize: 12,
    color: "#7F77DD",
    fontWeight: "500",
    marginBottom: 5,

  },

  inp: {
    height: 46,
    borderWidth: 1.5,
    borderColor: "#e0e0ef",
    borderRadius: 10,
    paddingHorizontal: 14,
    fontSize: 15,
    color: "#26215C",
    backgroundColor: "#fff",
    marginBottom: 14,
  },

  inpDisabled: {
    backgroundColor: "#f7f6fe",
    color: "#AFA9EC",
  },

  hint: {
    fontSize: 11,
    color: "#AFA9EC",
    marginTop: -10,
    marginBottom: 14,
  },

  pickerWrap: {
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: "#e0e0ef",
    justifyContent: "center",
    height: 46,
    paddingHorizontal: 4,
    marginBottom: 14,
  },

  dividerGreen: {
    height: 1,
    backgroundColor: "#9FE1CB",
    marginBottom: 14,
  },

  tag: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#E1F5EE",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
    alignSelf: "flex-start",
    marginBottom: 14,
  },

  tagDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: "#1D9E75",
  },

  tagText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#0F6E56",
  },

  row: {
    flexDirection: "row",
    gap: 12,
  },

  btn: {
    height: 52,
    backgroundColor: "#534AB7",
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4,
  },

  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});

const pickerStyles = {
  inputIOS: {
    fontSize: 15,
    paddingHorizontal: 10,
    color: "#26215C",
    height: 44,
  },
  inputAndroid: {
    fontSize: 15,
    paddingHorizontal: 10,
    color: "#26215C",
    height: 44,
  },

}