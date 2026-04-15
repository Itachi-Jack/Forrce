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
import useProfile from "../hooks/useProfile";

import { styles } from "../components/sections/PersonalInfoStyles";
import StepperHeader from "../components/sections/StepperHeader";
import Step1Personal from "../steps/Step1Personal";
import Step2Fulfillment from "../steps/Step2Fulfillment";
const steps = ["Personal", "Fulfillment", "Delivery", "Payment"];

export default function EditProfileScreen() {
  const { profile, loading, updateProfile, loadProfile } = useProfile();
  const [currentStep, setCurrentStep] = useState(0);
  // const [isInitialized, setIsInitialized] = useState(false);

  // const [name, setName] = useState("");
  // const [contactNumber, setContactNumber] = useState("");
  // const [selfPickup, setSelfPickup] = useState(null);
  // const [isCourier, setIsCourier] = useState(null);

  const [form, setForm] = useState({
    seller_name: "",
    is_delivery: null,
    delivery_charges: "",
    deliver_in: "",
    mobile_no: "",
    seller_code: "",
    is_minimum_order_value: null,
    minimum_order_value: "",
    is_minimum_order_value_for_delivery: null,
    minimum_order_value_for_delivery: "",
    is_free_delivery: null,
    minimum_order_value_for_free_delivery: "",
    is_courier: null,
    is_self_pickup: null,
    serviceable_radius: "",
    delivery_info: "",


  })


  useEffect(() => {
    loadProfile();
  }, []);

 useEffect(() => {
  if (profile) {
    setForm({
      seller_name: profile.name || "",
      mobile_no: profile.contactNumber || "",
      seller_code: profile.sellerCode || "",

      is_delivery: profile.isDelivery,
      is_courier: profile.isCourier,
      is_self_pickup: profile.selfPickup,

      serviceable_radius: profile.serviceableRadius?.toString() || "",
      deliver_in: profile.deliveryIn?.toString() || "",

      is_minimum_order_value: profile.isPurchaseMinOrder,
      minimum_order_value: profile.purchaseMinOrderVal?.toString() || "",

      is_minimum_order_value_for_delivery: profile.isMinOrder,
      minimum_order_value_for_delivery: profile.minOrderValue?.toString() || "",

      is_free_delivery: profile.isFreeDelivery,
      delivery_charges: profile.deliveryCharges?.toString() || "",

      is_minimum_order_value_for_free_delivery: profile.isMinOrderFree,
      minimum_order_value_for_free_delivery: profile.minOrderFreeValue?.toString() || "",

      delivery_info: profile.deliveryInfo || "",
    });
    //setIsInitialized(true);
  }
}, [profile]);


  const validateStep = () => {
    if (currentStep === 0 && !form.seller_name) {
      Alert.alert("Name required");
      return false;
    }
    return true;
  };
  const next = () => {
    if (!validateStep()) return;

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const back = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };


 const handleSubmit = () => {
  console.log("Submit data ", form);
  updateProfile(form);  // just pass form directly — useProfile handles conversion
};

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
         <Step1Personal form={form} setForm={setForm} />
        );

      case 1:
        return (
          <Step2Fulfillment form={form} setForm={setForm} />
        );

      case 2:
        return <Text>Delivery Step</Text>;

      case 3:
        return <Text>Payment Step</Text>;

      default:
        return null;
    }
  };

  return (
    <ScrollView style={styles.screen} contentContainerStyle={{ paddingTop: 24 }}>
      <View style={styles.body}>

        {/* STEPPER */}
        <StepperHeader steps={steps} currentStep={currentStep} />

        {/* ARROW NAV ROW */}
        <View style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 20,
          marginBottom: 16,
          paddingHorizontal: 4,
        }}>
          {/* Back arrow — hidden on step 0 */}
          {currentStep > 0 ? (
            <TouchableOpacity
              onPress={back}
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                borderWidth: 1.5,
                borderColor: "#1D9E75",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 18, color: "#1D9E75" }}>←</Text>
            </TouchableOpacity>
          ) : (
            <View style={{ width: 40 }} />
          )}

          {/* Step label in the middle */}
          <Text style={{ fontSize: 13, color: "#888888", fontWeight: "500" }}>
            Step {currentStep + 1} of {steps.length}
          </Text>

          {/* Next arrow — hidden on last step, shows Submit instead */}
          {currentStep < steps.length - 1 ? (
            <TouchableOpacity
              onPress={next}
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: "#1D9E75",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 18, color: "#fff" }}>→</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={next}
              style={{
                paddingHorizontal: 16,
                height: 40,
                borderRadius: 20,
                backgroundColor: "#1D9E75",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 13, color: "#fff", fontWeight: "500" }}>Submit</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* STEP CONTENT */}
        <View>{renderStep()}</View>

      </View>
    </ScrollView>
  );
}