import apiClient from "../../../services/apiClient";

export const getProfile = async () => {
  const res = await apiClient.get('/api/method/fis_cart.api.v1.seller.profile.seller_profile.index');
  console.log("PROFILE RESPONSE:", res);
  return res;
}

export const updateProfile = async (data) => {
  const res = await apiClient.put('/api/method/fis_cart.api.v1.seller.profile.update_seller_profile.index',data);
  console.log("UPDATE PROFILE RESPONSE:", res);
  return res;
}