import {
  View,
  Text,
  StyleSheet,
} from "react-native";
//import { removeToken } from "../services/authStorage";


export default function FeedScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HomeScreen</Text>
      <Text style={styles.label}>Mobile Number</Text>
    </View>
  );





}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 32,
    textAlign: "center",
    color: "#222",
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
    color: "#555",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    backgroundColor: "#fff",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#6b2323",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

