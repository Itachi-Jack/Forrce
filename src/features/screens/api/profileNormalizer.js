export const normalizeProfile = (data) => {
  const profile = data?.message?.seller_profile;

  const yesNoToBool = (val) => val === "Yes";

  return {
    sellerCode: profile?.seller_code ?? "",
    name: profile?.seller_name ?? "",
    contactNumber: profile?.mobile_no ?? "",

    isPurchaseMinOrder: yesNoToBool(profile?.is_minimum_order_value),
    purchaseMinOrderVal: profile?.minimum_order_value ?? "",


    // DELIVERY
    isDelivery: yesNoToBool(profile?.is_delivery),
    serviceableRadius: profile?.serviceable_radius ?? "",
    deliveryIn: profile?.deliver_in ?? "",

    // MIN ORDER
    isMinOrder: yesNoToBool(profile?.is_minimum_order_value_for_delivery),
    minOrderValue: profile?.minimum_order_value_for_delivery ?? "",

    // FREE DELIVERY
    isFreeDelivery: yesNoToBool(profile?.is_free_delivery),
    deliveryCharges: profile?.delivery_charges ?? "",

    // MIN ORDER FREE DELIVERY
    isMinOrderFree: yesNoToBool(profile?.is_minimum_order_value_for_free_delivery),
    minOrderFreeValue:
      profile?.minimum_order_value_for_free_delivery ?? "",

    // OPTIONS
    selfPickup: yesNoToBool(profile?.is_self_pickup),
    isCourier: yesNoToBool(profile?.is_courier),

    // EXTRA
    deliveryInfo: profile?.delivery_info ?? "",


  };
};