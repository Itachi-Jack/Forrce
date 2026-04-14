import apiClient from '../../../services/apiClient';


export const requestOtp = async (mobile) => {
  const res = await apiClient.post(
    '/api/method/fis_cart.api.v1.seller_app.auth.login.index',
    {
      phone: String(mobile),
    },
    {
      authRequired: false,
    }
  );

  return res;
};
export const verifyOtp = async (mobile, otp) => {
  try {
    const response = await apiClient.post(
      '/api/method/fis_cart.api.v1.seller_app.auth.validate_by_mobile_otp.index',
      {
        phone: mobile,
        otp: otp,
      },
      {
        authRequired: false,
      }
    );

    console.log(" RAW RESPONSE:", response);

    return response;

  } catch (error) {
    console.log("FULL ERROR:", error);
    console.log("RESPONSE:", error?.response?.data);
    throw error;
  }
};


