import { useState } from "react";
import { Alert } from "react-native";
import { getProfile, updateProfile as updateProfileApi } from "../api/profileApi";
import { normalizeProfile } from "../api/profileNormalizer";
const toYesNo = (val) => (val ? "Yes" : "No");

export default function useProfile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);


  // LOAD PROFILE
  const loadProfile = async () => {
    setLoading(true);
    try {
      const data = await getProfile();
      console.log("Profile Data : ", data);
      console.log("Normalized Profile : ", normalizeProfile(data));
      setProfile(normalizeProfile(data));
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  const updateProfile = async (formData) => {
    setLoading(true);
    try {
      const payload = {
        seller_name: formData.name,
        mobile_no: formData.contactNumber,
        is_minimum_order_value: toYesNo(formData.isPurchaseMinOrder),

        minimum_order_value : formData.isPurchaseMinOrder
          ? String(Number(formData.purchaseMinOrderVal) || 0) : "0",

        is_delivery: toYesNo(formData.isDelivery),

        serviceable_radius: formData.isDelivery
          ? String(Number(formData.serviceableRadius) || 0)
          : "0",

        deliver_in: formData.isDelivery
          ? String(Number(formData.deliveryIn) || 0)
          : "0",

        is_minimum_order_value_for_delivery: toYesNo(formData.isMinOrder),

        minimum_order_value_for_delivery: formData.isMinOrder
          ? String(Number(formData.minOrderValue) || 0)
          : "0",

        is_free_delivery: toYesNo(formData.isFreeDelivery),

        delivery_charges: formData.isFreeDelivery
          ? "0"
          : String(Number(formData.deliveryCharges) || 0),

        is_minimum_order_value_for_free_delivery: toYesNo(formData.isMinOrderFree),

        minimum_order_value_for_free_delivery: formData.isMinOrderFree
          ? String(Number(formData.minOrderFreeValue) || 0)
          : "0",

        is_self_pickup: toYesNo(formData.selfPickup),

        is_courier: toYesNo(formData.isCourier),

        delivery_info: (formData.deliveryInfo || "").trim(),

      };
      console.log("PAYLOAD:", payload);
      
      await updateProfileApi(payload);

      const updated = await getProfile();

      console.log("UPDATED PROFILE:", updated);

      const normalized = normalizeProfile(updated);

      console.log("NORMALIZED UPDATED PROFILE:", normalized);

      setProfile(normalized);

      Alert.alert("Profile Updated");
    } catch (err) {
      console.log(err.response?.data);
      Alert.alert("Failed please try after some time");
    } finally {
      setLoading(false);
    }
  };
  return {
    profile,
    loading,
    updateProfile,
    loadProfile,
  };
}