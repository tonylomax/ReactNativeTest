import React, { Component } from "react";
import { Text, View } from "react-native";

export default function NewPage({ test }) {
  console.log(test);
  return (
    <View>
      <Text>This is a test {test}</Text>
    </View>
  );
}
