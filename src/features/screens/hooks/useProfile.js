import {  useState } from "react";
import { Alert } from "react-native";
import { getProfile, updateProfile as updateProfileApi } from "../api/profileApi";
import { normalizeProfile } from "../api/profileNormalizer";

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
  }catch(err){
    console.log(err);
  }finally{
    setLoading(false);
  }
};
const updateProfile = async (formData) => {
  setLoading(true);
  try {
    await updateProfileApi(formData);

    const updated = await getProfile();

    console.log("UPDATED PROFILE:", updated);

    const normalized = normalizeProfile(updated);

    console.log("NORMALIZED UPDATED PROFILE:", normalized);

    setProfile(normalized);

    Alert.alert("Profile Updated");
  } catch (err) {
    console.log(err);
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