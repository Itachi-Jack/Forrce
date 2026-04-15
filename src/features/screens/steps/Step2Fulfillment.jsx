import React from "react";
import { Alert, View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { styles, pickerStyles } from "../components/sections/PersonalInfoStyles";
import Header from "../components/sections/Header";

export default function Step2Fulfillment({ form, setForm }) {
    const handleupdate = () => {
        Alert.alert("Profile ,Updated");

    }
    return (
        <>
            {/* <Header
        title="Fulfillment settings"
        subtitle="Delivery rules"
      /> */}
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
                                setForm(prev => ({
                                    ...prev,
                                    is_minimum_order_value: val,
                                }))
                            }
                            value={form.is_minimum_order_value}
                            placeholder={{ label: "Select an option", value: null }}
                            items={[
                                { label: "Yes", value: true },
                                { label: "No", value: false },
                            ]}
                            style={pickerStyles}
                        />

                    </View>
                    {form.is_minimum_order_value && (
                        <>
                            <Text style={[styles.lbl, { color: "#1D9E75" }]}>
                                Minimum Order Value
                            </Text>

                            <TextInput
                                style={[styles.pickerWrap, { borderColor: "#9FE1CB" }]}
                                placeholder="Enter amount"
                                keyboardType="numeric"
                                value={form.minimum_order_value}
                                onChangeText={(val) =>
                                    setForm(prev => ({
                                        ...prev,
                                        minimum_order_value: val,
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
                                setForm(prev => ({
                                    ...prev,
                                    is_delivery: val,
                                }));
                            }}
                            value={form.is_delivery}
                            placeholder={{ label: "Select an option", value: null }}
                            items={[
                                { label: "Yes", value: true },
                                { label: "No", value: false },
                            ]}
                            style={pickerStyles}
                        />
                    </View>

                    {form.is_delivery === true && (
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
                                        value={form.serviceable_radius}
                                        onChangeText={(val) =>
                                            setForm(prev => ({
                                                ...prev,
                                                serviceable_radius: val,
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
                                        value={form.deliver_in}
                                        onChangeText={(val) => {
                                            setForm(prev => ({
                                                ...prev,
                                                deliver_in: val,
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
                                        setForm(prev => ({
                                            ...prev,
                                            is_minimum_order_value: val,
                                        }))
                                    }}
                                    value={form.is_minimum_order_value}
                                    placeholder={{ label: "Select an option", value: null }}
                                    items={[
                                        { label: "Yes", value: true },
                                        { label: "No", value: false },
                                    ]}
                                    style={pickerStyles} />
                            </View>

                            {form.is_minimum_order_value === true && (
                                <>
                                    <Text style={[styles.lbl, { color: "#1D9E75" }]}>
                                        Minimum Order Value for Delivery
                                    </Text>

                                    <TextInput
                                        style={[styles.pickerWrap, { borderColor: "#9FE1CB" }]}
                                        placeholder="Enter amount"
                                        keyboardType="numeric"
                                        value={form.minimum_order_value_for_delivery}
                                        onChangeText={(val) =>
                                            setForm(prev => ({
                                                ...prev,
                                                minimum_order_value_for_delivery: val,
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
                                        setForm(prev => ({
                                            ...prev,
                                            is_free_delivery: val,
                                        }));
                                    }}

                                value={form.is_free_delivery}
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
                                value={form.delivery_charges}
                                onChangeText={(val) =>
                                    setForm(prev => ({
                                        ...prev,
                                        delivery_charges: val,
                                    }))
                                }
                            />



                            {form.is_free_delivery === false && (
                                <>

                                    <Text style={[styles.lbl, { color: "#1D9E75" }]} >
                                        Is there a minimum order value for free delivery?
                                    </Text>

                                    <View style={[styles.pickerWrap, { borderColor: "#9FE1CB" }]}>
                                        <RNPickerSelect
                                            onValueChange={(val) => {
                                                setForm(prev => ({
                                                    ...prev,
                                                    is_minimum_order_value: val
                                                }))
                                            }}
                                            value={form.is_minimum_order_value}
                                            placeholder={{ label: "Select an option", value: null }}
                                            items={[
                                                { label: "Yes", value: true },
                                                { label: "No", value: false },
                                            ]}
                                            style={pickerStyles}
                                        />
                                    </View>

                                    {form.is_minimum_order_value === true && (
                                        <>
                                            <Text style={[styles.lbl, { color: "#1D9E75" }]}>
                                                Enter Minimum Order Value for Free Delivery
                                            </Text>
                                            <TextInput
                                                style={[styles.inp, { borderColor: "#9FE1CB" }]}
                                                placeholder="Enter amount"
                                                keyboardType="numeric"
                                                value={form.minimum_order_value_for_delivery}
                                                onChangeText={(val) =>
                                                    setForm(prev => ({
                                                        ...prev,
                                                        minimum_order_value_for_delivery: val,
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
                                value={form.delivery_info}
                                onChangeText={(val) =>
                                    setForm(prev => ({
                                        ...prev,
                                        delivery_info: val,
                                    }))
                                }
                            />

                        </>


                    )}



                </View>
                <TouchableOpacity style={styles.btn} onPress={handleupdate}>
                    <Text style={styles.btnText}>Save</Text>

                </TouchableOpacity>
            </View>
            </>
        
    );

}