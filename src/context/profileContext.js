import React, { createContext, useContext, useState } from "react";

const profileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [fulfillment, setFulfillment] = useState({
    isPurchaseMinOrder: false,
    purchaseMinOrderVal: "",
    isDelivery: null,
    serviceableRadius: "",
    deliveryIn: "",
    isMinOrder: false,
    minOrderValue: "",
    isFreeDelivery: null,
    deliveryCharges: "",
    isMinOrderFree: false,
    minOrderFreeValue: "",
    deliveryInfo: "",
  });

  return (
    <profileContext.Provider value={{ fulfillment, setFulfillment }}>
      {children}
    </profileContext.Provider>
  );
};

export const useProfileContext = () => useContext(profileContext);