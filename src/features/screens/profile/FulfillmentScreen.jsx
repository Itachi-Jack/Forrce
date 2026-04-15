import React from "react";
import { ScrollView, View, Text, TextInput , TouchableOpacity } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { styles, pickerStyles } from "../components/sections/PersonalInfoStyles";
import Header from "../components/sections/Header";
import { useProfileContext } from "../../../context/profileContext";
import useProfile from "../hooks/useProfile";


export default function FulfillmentScreenForm() {
  const { fulfillment, setFulfillment } = useProfileContext();
  const { updateProfile } = useProfile();
  const handleSubmit = () => {
    updateProfile({
      ...fulfillment,
    })
  };

  // { isPurchaseMinOrder,
  // setPurchaseMinOrder,
  // purchaseMinOrderVal,
  // setPurchaseMinOrderVal,
  // isDelivery,
  // setIsDelivery,
  // serviceableRadius,
  // setServiceableRadius,
  // deliveryIn,
  // setDeliveryIn,
  // isMinOrder,
  // setIsMinOrder,
  // minOrderValue,
  // setMinOrderValue,
  // isFreeDelivery,
  // setIsFreeDelivery,
  // deliveryCharges,
  // setDeliveryCharges,
  // isMinOrderFree,
  // setIsMinOrderFree,
  // minOrderFreeValue,
  // setMinOrderFreeValue,
  // deliveryInfo,
  // setDeliveryInfo, }) {

  return (
    <ScrollView style={styles.screen}>
      <Header
        title="Fulfillment settings"
        subtitle="Delivery rules"
      />
      <View style={styles.body}>
        <View style={styles.card}>

          {/* Delivery Card */}
          <View style={styles.cardHeader}>

            <Text style={[styles.cardTitle, { color: "#085041" }]}
            >
              Fulfillment
            </Text>
          </View>
          <Text style={[styles.lbl, { color: "#1D9E75" }]}>
            Is there Minimum Order Value ?
          </Text>


          <View style={[styles.pickerWrap, { borderColor: "#9FE1CB" },
          ]}>
            <RNPickerSelect
              onValueChange={(val) =>
                setFulfillment(prev => ({
                  ...prev,
                  isPurchaseMinOrder: val,
                }))
              }
              value={fulfillment.isPurchaseMinOrder}
              placeholder={{ label: "Select an option", value: null }}
              items={[
                { label: "Yes", value: true },
                { label: "No", value: false },
              ]}
              style={pickerStyles}
            />

          </View>
          {fulfillment.isPurchaseMinOrder && (
            <>
              <Text style={[styles.lbl, { color: "#1D9E75" }]}>
                Minimum Order Value
              </Text>

              <TextInput
                style={[styles.pickerWrap, { borderColor: "#9FE1CB" }]}
                placeholder="Enter amount"
                keyboardType="numeric"
                value={fulfillment.purchaseMinOrderVal}
                onChangeText={(val) =>
                  setFulfillment(prev => ({
                    ...prev,
                    purchaseMinOrderVal: val,
                  }))
                }
              />
            </>
          )}



          <Text style={[styles.lbl, { color: "#1D9E75" }]}>
            Delivery available?
          </Text>

          <View
            style={[
              styles.pickerWrap,
              { borderColor: "#9FE1CB" },
            ]}
          >
            <RNPickerSelect
              onValueChange={(val) => {
                setFulfillment(prev => ({
                  ...prev,
                  isDelivery: val,
                  ...(val === false && {
                    serviceableRadius: "0",
                    deliveryIn: "0",
                  }),
                }))
              }}
              value={fulfillment.isDelivery}
              placeholder={{ label: "Select an option", value: null }}
              items={[
                { label: "Yes", value: true },
                { label: "No", value: false },
              ]}
              style={pickerStyles}
            />
          </View>

          {fulfillment.isDelivery === true && (
            <>
              <View style={styles.dividerGreen} />

              <View style={styles.tag}>
                <View style={styles.tagDot} />
                <Text style={styles.tagText}>
                  Delivery enabled
                </Text>
              </View>

              <View style={styles.row}>
                <View style={{ flex: 1.2 }}>
                  <Text
                    style={[styles.lbl, { color: "#1D9E75" }]}
                  >
                    Serviceable radius (kms)
                  </Text>
                  <TextInput
                    value={fulfillment.serviceableRadius}
                    onChangeText={(val) =>
                      setFulfillment(prev => ({
                        ...prev,
                        serviceableRadius: val,
                      }))
                    }

                    style={[
                      styles.inp,
                      { borderColor: "#9FE1CB" },
                    ]}
                    placeholder="e.g. 10"
                    placeholderTextColor="#9FE1CB"
                    keyboardType="numeric"
                  />
                </View>

                <View style={{ flex: 0.8 }}>
                  <Text
                    style={[styles.lbl, { color: "#1D9E75" }]}
                  >
                    Delivery in (days)
                  </Text>
                  <TextInput
                    value={fulfillment.deliveryIn}
                    onChangeText={(val) => {
                      setFulfillment(prev => ({
                        ...prev,
                        deliveryIn: val,
                      }))
                    }}
                    style={[
                      styles.inp,
                      { borderColor: "#9FE1CB" },
                    ]}
                    placeholder="e.g. 30"
                    placeholderTextColor="#9FE1CB"
                    keyboardType="numeric"
                  />
                </View>
              </View>
              <Text style={[styles.lbl, { color: "#1D9E75" }]}>
                Minimum order required
              </Text>

              <View style={[styles.pickerWrap, { borderColor: "#9FE1CB" }]}>
                <RNPickerSelect
                  onValueChange={(val) => {
                    setFulfillment(prev => ({
                      ...prev,
                      isMinOrder: val,
                    }))
                  }}
                  value={fulfillment.isMinOrder}
                  placeholder={{ label: "Select an option", value: null }}
                  items={[
                    { label: "Yes", value: true },
                    { label: "No", value: false },
                  ]}
                  style={pickerStyles} />
              </View>

              {fulfillment.isMinOrder && (
                <>
                  <Text style={[styles.lbl, { color: "#1D9E75" }]}>
                    Minimum Order Value for Delivery
                  </Text>

                  <TextInput
                    style={[styles.pickerWrap, { borderColor: "#9FE1CB" }]}
                    placeholder="Enter amount"
                    keyboardType="numeric"
                    value={fulfillment.minOrderValue}
                    onChangeText={(val) =>
                      setFulfillment(prev => ({
                        ...prev,
                        minOrderValue: val,
                      }))
                    }
                  />
                </>
              )}
              {/* FREE DELIVERY */}
              <Text style={[styles.lbl, { color: "#1D9E75" }]}>
                Free delivery available
              </Text>

              <View style={[styles.pickerWrap, { borderColor: "#9FE1CB" }]}>
                <RNPickerSelect
                  onValueChange={(val) => {
                    setFulfillment(prev => ({
                      ...prev,
                      isFreeDelivery: val,
                      ...(val === true && {
                        deliveryCharges: "0",
                      })
                    }))



                  }}
                  value={fulfillment.isFreeDelivery}
                  placeholder={{ label: "Select an option", value: null }}
                  items={[
                    { label: "Yes", value: true },
                    { label: "No", value: false },
                  ]}
                  style={pickerStyles}
                />
              </View>
              <Text style={[styles.lbl, { color: "#1D9E75" }]}>
                Delivery Charges
              </Text>

              <TextInput
                style={[styles.inp, { borderColor: "#9FE1CB" }]}
                placeholder="Enter delivery charges"
                keyboardType="numeric"
                value={fulfillment.deliveryCharges}
                onChangeText={(val) =>
                  setFulfillment(prev => ({
                    ...prev,
                    deliveryCharges: val,
                  }))
                }
              />



              {fulfillment.isFreeDelivery === false && (
                <>

                  <Text style={[styles.lbl, { color: "#1D9E75" }]} >
                    Is there a minimum order value for free delivery?
                  </Text>

                  <View style={[styles.pickerWrap, { borderColor: "#9FE1CB" }]}>
                    <RNPickerSelect
                      onValueChange={(val) => {
                        setFulfillment(prev => ({
                          ...prev,
                          isMinOrderFree: val
                        }))
                      }}
                      value={fulfillment.isMinOrderFree}
                      placeholder={{ label: "Select an option", value: null }}
                      items={[
                        { label: "Yes", value: true },
                        { label: "No", value: false },
                      ]}
                      style={pickerStyles}
                    />
                  </View>

                  {fulfillment.isMinOrderFree === true && (
                    <>
                      <Text style={[styles.lbl, { color: "#1D9E75" }]}>
                        Enter Minimum Order Value for Free Delivery
                      </Text>
                      <TextInput
                        style={[styles.inp, { borderColor: "#9FE1CB" }]}
                        placeholder="Enter amount"
                        keyboardType="numeric"
                        value={fulfillment.minOrderFreeValue}
                        onChangeText={(val) =>
                          setFulfillment(prev => ({
                            ...prev,
                            minOrderFreeValue: val,
                          }))
                        }

                      />
                    </>
                  )}
                </>
              )}



              <Text style={[styles.lbl, { color: "#1D9E75" }]}>
                Delivery information
              </Text>
              <TextInput
                style={[styles.inp, { borderColor: "#9FE1CB", height: 100, paddingTop: 10, paddingHorizontal: 10, textAlignVertical: "top" }]}
                placeholder="Enter delivery information"
                multiline
                value={fulfillment.deliveryInfo}
                onChangeText={(val) =>
                  setFulfillment(prev => ({
                    ...prev,
                    deliveryInfo: val,
                  }))
                }
              />

            </>
          )}
          <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
            <Text style={styles.btnText}>Save Fulfillment</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}