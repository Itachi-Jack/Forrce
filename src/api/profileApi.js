import AsyncStorage from "@react-native-async-storage/async-storage";

export const getProfile = async () => {
  const data = await AsyncStorage.getItem("profile");
  return data ? JSON.parse(data) : null;
};

export const saveProfile = async (profile) => {
  await AsyncStorage.setItem("profile", JSON.stringify(profile));
};

export const getUserId = async () => {
  return await AsyncStorage.getItem("userId");
};

export const setUserId = async () => {
  await AsyncStorage.setItem("userId", "user123");
};