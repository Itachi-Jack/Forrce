export const normalizeProfile = (data) => {
  const profile = data?.message?.seller_profile;

  return {
    name: profile?.seller_name || "",          // ✅ FIXED
    businessName: "",                          // (not provided by API yet)
    contactNumber: profile?.mobile_no || "",   // ✅ FIXED
    gstNumber: "",                             // (not provided)
    isGstRegistered: null,                     // (not provided)
    userId: profile?.seller_code || "",        // ✅ FIXED
  };
};