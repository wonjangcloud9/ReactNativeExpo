import { StyleSheet, View } from "react-native";
import Custom from "./Custom";

export default function App() {
  return (
    <View style={styles.container}>
      <Custom />
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
