import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { getProfile, saveProfile, getUserId } from "../api/profileApi";
import { normalizeProfile } from "../api/apiNormalizer/profileNormalizer";

export default function useProfile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);

  // LOAD PROFILE
const loadProfile = async () => {
  try {
    console.log("CALLING API...");
    const data = await getProfile();
    console.log("RAW DATA:", data);

    const normalized = normalizeProfile(data);
    console.log("NORMALIZED:", normalized);

    setProfile(normalized);
  } catch (error) {
    console.log("ERROR:", error);
  } finally {
    console.log("SETTING LOADING FALSE");
    setLoading(false);
  }
};

  

  const updateProfile = async (formData) => {
    const { name, businessName, contactNumber, isGstRegistered, gstNumber } =
      formData;

    if (!name || !businessName || !contactNumber) {
      Alert.alert("Error", "All fields are required");
      return;
    }

    if (isGstRegistered === null) {
      Alert.alert("Error", "Please select GST option");
      return;
    }

    if (isGstRegistered && !gstNumber) {
      Alert.alert("Error", "Enter GST number");
      return;
    }

    try {
      const userId = await getUserId();
      const finalData = {
        userId,
        name,
        businessName,
        contactNumber,
        isGstRegistered,
        gstNumber: isGstRegistered ? gstNumber : null,
      };

      await saveProfile(finalData);

      setProfile(normalizeProfile(finalData));
      console.log("UPDATED PROFILE:", normalizeProfile(finalData));

      Alert.alert("Success", "Profile updated!");
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Failed to update profile");
    }
  };

  return {
    profile,
    loading,
    updateProfile,
    loadProfile,
  };
}