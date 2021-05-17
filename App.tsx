import AppLoading from "expo-app-loading";
import React, { useState } from "react";

export default function App() {
  const [loading, setLoading] = useState(true);
  const preload = async () => {};
  const onFinish = () => setLoading(false);

  if (loading) {
    return (
      <AppLoading
        startAsync={preload}
        onError={console.warn}
        onFinish={onFinish}
      />
    );
  }
}
