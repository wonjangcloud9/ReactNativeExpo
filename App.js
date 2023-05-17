import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState(0);

  useEffect(() => {
    console.log("did mount");
  }, []);

  useEffect(() => {
    console.log("did update");
  }, [data]);

  const click = () => {
    console.log("Hi");
    setData(data + 1);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          width: "100%",
          backgroundColor: "black",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "white",
          }}
        >
          {data}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button title="Hi" onPress={click} />
      </View>
      <View
        style={{
          flex: 1,
          width: "100%",
          backgroundColor: "red",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          stlye={{
            backgroundColor: "black",
          }}
          onPress={click}
        >
          <Text>Hello world</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
});
