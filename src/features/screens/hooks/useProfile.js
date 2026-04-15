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
  seller_name: formData.seller_name,
  mobile_no: formData.mobile_no,

  is_minimum_order_value: toYesNo(formData.is_minimum_order_value),

  minimum_order_value: formData.is_minimum_order_value
    ? String(Number(formData.minimum_order_value) || 0)
    : "0",

  is_delivery: toYesNo(formData.is_delivery),

  serviceable_radius: formData.is_delivery
    ? String(Number(formData.serviceable_radius) || 0)
    : "0",

  deliver_in: formData.is_delivery
    ? String(Number(formData.deliver_in) || 0)
    : "0",

  is_minimum_order_value_for_delivery: toYesNo(formData.is_minimum_order_value_for_delivery),

  minimum_order_value_for_delivery: formData.is_minimum_order_value_for_delivery
    ? String(Number(formData.minimum_order_value_for_delivery) || 0)
    : "0",

  is_free_delivery: toYesNo(formData.is_free_delivery),

  delivery_charges: formData.is_free_delivery
    ? "0"
    : String(Number(formData.delivery_charges) || 0),

  is_minimum_order_value_for_free_delivery: toYesNo(formData.is_minimum_order_value_for_free_delivery),

  minimum_order_value_for_free_delivery: formData.is_minimum_order_value_for_free_delivery
    ? String(Number(formData.minimum_order_value_for_free_delivery) || 0)
    : "0",

  is_self_pickup: toYesNo(formData.is_self_pickup),

  is_courier: toYesNo(formData.is_courier),

  delivery_info: (formData.delivery_info || "").trim(),
};
      console.log("PAYLOAD:", payload);
      
      await updateProfileApi(payload);

      const updated = await getProfile();

      console.log("UPDATED PROFILE:", updated);

      const normalized = normalizeProfile(updated);

      console.log("NORMALIZED UPDATED PROFILE:", normalized);

      setProfile(normalized);

      Alert.alert("Profile Updated");
      return Promise.resolve();
    } catch (err) {
      console.log(err.response?.data);
      Alert.alert("Failed please try after some time");
      return Promise.reject(err);
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