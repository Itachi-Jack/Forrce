import { StyleSheet, Text, View } from "react-native";

export default function Header({ title, subtitle }) {
  return (
    <View style={styles.hero}>
      <View style={styles.heroBubble1} />
      <View style={styles.heroBubble2} />
      <Text style={styles.heroTitle}>{title}</Text>
      <Text style={styles.heroSub}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: {
    backgroundColor: "#1D9E75",   // ✅ was #534AB7 (purple), now green
    padding: 32,
    paddingBottom: 48,
    overflow: "hidden",
  },

  heroBubble1: {
    position: "absolute",
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: "#5DCAA5",   // ✅ was #7F77DD (purple), now light green
    opacity: 0.35,
    top: -40,
    right: -40,
  },

  heroBubble2: {
    position: "absolute",
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#9FE1CB",   // ✅ was #AFA9EC (purple), now mint green
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

  heroSub: { fontSize: 13, color: "#E1F5EE" },  // ✅ was #CECBF6 (purple tint)
});