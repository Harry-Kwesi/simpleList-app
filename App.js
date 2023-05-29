import React from "react";
import { FlatList, View } from "react-native";
import { Card, Text } from "react-native-paper";

const renderItem = ({ item, index }) => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Text>Item:{item}</Text>
        <Text>Index: {index}</Text>
      </Card.Content>
    </Card>
  );
};

const App = () => {
  const data = [];
  for (let index = 0; index < 1000; index++) {
    data.push(index);
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
  },
  card: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 8,
    marginHorizontal: 16,
    fontSize: 14,
  },
};

export default App;
