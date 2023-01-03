import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          marginBottom: 20,
          borderWidth: 5,
          borderColor: "red",
          padding: 20,
        }}
      >
        Piece of text
      </Text>
      <Text style={styles.text}>Hello World!</Text>
      <TextInput placeholder="Placeholder..." style={styles.button} />
      <Button
        title="I'm a button"
        onPress={() => Alert.alert("Simple Button pressed")}
        style={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 40,
  },
  button: {
    padding: 25,
    fontSize: 40,
  },
});
