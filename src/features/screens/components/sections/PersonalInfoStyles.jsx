import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#f5f5f5" },

  body: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    marginBottom: 14,
    borderWidth: 0.5,
    borderColor: "#e8e8e8",
  },

  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 18,
  },

  iconPill: {
    width: 34,
    height: 34,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  cardTitle: { fontSize: 14, fontWeight: "500", color: "#1a1a1a" },

  // ✅ CHANGED: was purple #7F77DD, now gray
  lbl: {
    fontSize: 12,
    color: "#888888",
    fontWeight: "500",
    marginBottom: 5,
  },

  // ✅ CHANGED: was purple border, now light gray like the image
  inp: {
    height: 46,
    borderWidth: 1,
    borderColor: "#e8e8e8",
    borderRadius: 10,
    paddingHorizontal: 14,
    fontSize: 15,
    color: "#1a1a1a",
    backgroundColor: "#fafafa",
    marginBottom: 14,
  },

  inpDisabled: {
    backgroundColor: "#f5f5f5",
    color: "#aaaaaa",
  },

  hint: {
    fontSize: 11,
    color: "#aaaaaa",
    marginTop: -10,
    marginBottom: 14,
  },

  pickerWrap: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#e8e8e8",
    justifyContent: "center",
    height: 46,
    paddingHorizontal: 4,
    marginBottom: 14,
    backgroundColor: "#fafafa",
  },

  dividerGreen: {
    height: 1,
    backgroundColor: "#9FE1CB",
    marginBottom: 14,
  },

  tag: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#E1F5EE",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
    alignSelf: "flex-start",
    marginBottom: 14,
  },

  tagDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: "#1D9E75",
  },

  tagText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#0F6E56",
  },

  row: {
    flexDirection: "row",
    gap: 12,
  },

  // ✅ CHANGED: was purple #534AB7, now teal green like the image
  btn: {
    height: 52,
    backgroundColor: "#1D9E75",
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4,
  },

  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },

  sectionLabel: {
    fontSize: 11,
    color: "#888780",
    fontWeight: "500",
    textTransform: "uppercase",
    letterSpacing: 0.6,
    marginBottom: 10,
    marginTop: 4,
    paddingHorizontal: 4,
  },

  navCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 10,
    borderWidth: 0.5,
    borderColor: "#e8e8e8",
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },

  navIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  navTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#1a1a1a",
    marginBottom: 2,
  },

  navDesc: {
    fontSize: 12,
    color: "#888780",
  },

  chevron: {
    paddingLeft: 4,
  },
});

export const pickerStyles = {
  inputIOS: {
    fontSize: 15,
    paddingHorizontal: 10,
    color: "#1a1a1a",
    height: 44,
  },
  inputAndroid: {
    fontSize: 15,
    paddingHorizontal: 10,
    color: "#1a1a1a",
    height: 44,
  },
};