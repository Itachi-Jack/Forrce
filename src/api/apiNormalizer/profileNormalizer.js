export const normalizeProfile = (data) => {
  return {
    userId: data?.userId || "",
    name: data?.name || "",
    businessName: data?.businessName || "",
    contactNumber: data?.contactNumber || "",
    isGstRegistered: data?.isGstRegistered ?? null,
    gstNumber: data?.gstNumber || "",
  };
};