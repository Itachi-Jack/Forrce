import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function StepperHeader({ steps, currentStep }) {
  return (
    <View style={styles.container}>
      {steps.map((step, index) => {
        const isActive = index === currentStep;
        const isDone = index < currentStep;

        return (
          <React.Fragment key={index}>
            {/* Step circle + label */}
            <View style={styles.stepItem}>
              <View
                style={[
                  styles.circle,
                  isActive && styles.circleActive,
                  isDone && styles.circleDone,
                ]}
              >
                {isDone ? (
                  <Text style={styles.checkmark}>✓</Text>
                ) : (
                  <Text
                    style={[
                      styles.circleText,
                      (isActive || isDone) && styles.circleTextActive,
                    ]}
                  >
                    {index + 1}
                  </Text>
                )}
              </View>
              <Text
                style={[
                  styles.label,
                  isActive && styles.labelActive,
                ]}
              >
                {step}
              </Text>
            </View>

            {/* Connector line between steps */}
            {index !== steps.length - 1 && (
              <View
                style={[
                  styles.line,
                  isDone && styles.lineDone,
                ]}
              />
            )}
          </React.Fragment>
        );
      })}
    </View>
  );
}

const GREEN = "#22c55e";
const GRAY = "#cccccc";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  stepItem: {
    alignItems: "center",
  },
  circle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: GRAY,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },
  circleActive: {
    borderColor: GREEN,
    backgroundColor: "#ffffff",
  },
  circleDone: {
    borderColor: GREEN,
    backgroundColor: GREEN,
  },
  circleText: {
    fontSize: 13,
    fontWeight: "500",
    color: GRAY,
  },
  circleTextActive: {
    color: GREEN,
  },
  checkmark: {
    fontSize: 14,
    color: "#ffffff",
    fontWeight: "bold",
  },
  label: {
    fontSize: 11,
    marginTop: 5,
    color: "#888888",
  },
  labelActive: {
    color: GREEN,
    fontWeight: "500",
  },
  line: {
    flex: 1,
    height: 2,
    backgroundColor: GRAY,
    marginBottom: 18, // pushes line up to align with circle centers
  },
  lineDone: {
    backgroundColor: GREEN,
  },
});