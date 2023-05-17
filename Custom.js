import React, { useState } from "react";
import { Text, TextInput, View, Button } from "react-native";

const InputBox = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      <TextInput
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChangeText}
        style={{
          borderBottomWidth: 1,
          width: 200,
        }}
      />
      <Button title="초기화" onPress={props.onReset} />
    </View>
  );
};

export default () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  return (
    <View>
      <InputBox
        value={name}
        onChangeText={setName}
        placeholder="Name"
        onReset={() => setName("")}
      />
      <InputBox
        value={age}
        onChangeText={setAge}
        placeholder="Age"
        onReset={() => setAge("")}
      />
      <InputBox
        value={city}
        onChangeText={setCity}
        placeholder="City"
        onReset={() => setCity("")}
      />
    </View>
  );
};
