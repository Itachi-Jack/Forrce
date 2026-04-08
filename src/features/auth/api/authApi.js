import apiClient from '../../../services/apiClient';

import qs from "qs";

export const requestOtp = async (mobile) => {
  const res = await apiClient.post(
    '/api/method/fis_cart.api.v1.seller.auth.login.index',

    qs.stringify({
      phone: String(mobile),
    }),

    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      authRequired: false,
    }
  );

  return res.data;
};
export const verifyOtp = async (mobile, otp) => {
  try {
    const response = await apiClient.post(
      '/api/method/fis_cart.api.v1.seller.auth.validate_by_mobile_otp.index',
      {
        phone: mobile,
        otp: otp,
      },
      {
        authRequired: false,
      }
    );

    console.log(" RAW RESPONSE:", response);

    return response.message; // ✅ FIXED

  } catch (error) {
    console.log("FULL ERROR:", error);
    console.log("RESPONSE:", error?.response?.data);
    throw error;
  }
};


