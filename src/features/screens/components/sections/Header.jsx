import { StyleSheet, Text, View } from "react-native";

export default function Header() {

    return (
        <View style={styles.hero}>
                <View style={styles.heroBubble1} />
                <View style={styles.heroBubble2} />
                {/* //<Text style = {styles.sellerCode}>{sellerCode}</Text> */}
        
                <Text style={styles.heroTitle}>Edit profile</Text>
                <Text style={styles.heroSub}>
                  Manage your personal details
                </Text>
              </View>
    )
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#f0f4ff" },

  hero: {
    backgroundColor: "#534AB7",
    padding: 32,
    paddingBottom: 48,
    overflow: "hidden",
  },

  heroBubble1: {
    position: "absolute",
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: "#7F77DD",
    opacity: 0.35,
    top: -40,
    right: -40,
  },

  heroBubble2: {
    position: "absolute",
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#AFA9EC",
    opacity: 0.25,
    bottom: -20,
    left: 10,
  },

  heroTitle: {
    fontSize: 22,
    fontWeight: "500",
    color: "#fff",
    marginBottom: 2,
  },

  heroSub: { fontSize: 13, color: "#CECBF6" },

});