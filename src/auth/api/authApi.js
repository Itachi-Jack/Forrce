import apiClient from '../../services/apiClient';

export const requestOtp = async (mobile) => {
    console.log("OTP REQUESTED : " , mobile);
    const res = await apiClient.post('/api/method/fis_cart.api.v1.seller.auth.login.index',
    {
        phone: mobile
    }
    
    );
    return res.data
}

export const verifyOtp = async (mobile , otp) => {
    try {
    const response = await apiClient.post(
      '/api/method/fis_cart.api.v1.seller.auth.validate_by_mobile_otp.index',
      {
        phone: mobile,
        otp: otp,
      }
    );

    console.log(" RAW RESPONSE:", response.data);

    return response.data.message; 

  } catch (error) {
    console.log("FULL ERROR:", error);
    console.log("RESPONSE:", error?.response?.data);
    throw error;
  }
    
}