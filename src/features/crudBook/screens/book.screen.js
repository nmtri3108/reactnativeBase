import React, { useEffect, useState, useContext } from "react";
import { Text } from "../../../components/typography/text.components";
import { Spacer } from "../../../components/spacer/spacer.component";
import { FlatList, View, StyleSheet, StatusBar } from "react-native";
import { BookContext } from "../../../services/books/book.context";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Searchbar } from "react-native-paper";

const BookScreen = () => {
  const { books, errors } = useContext(BookContext);
  console.log(books);
  console.log(errors);

  const Item = ({ title, pageNumber }) => (
    <View style={styles.item}>
      <Text variant="caption" style={styles.title}>
        {title}
      </Text>
      <Spacer position="left" size="large">
        <Text variant="hint" style={styles.pageNumber}>
          {pageNumber}
        </Text>
      </Spacer>
    </View>
  );

  return (
    <SafeArea>
      <Searchbar style={styles.search} />
      <FlatList
        data={books}
        renderItem={({ item }) => (
          <Item title={item.name} pageNumber={item.pageNumber} />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#5fd980",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  search: {
    marginHorizontal: 18,
    marginTop: 10,
  },
  title: {
    fontSize: 32,
  },
  pageNumber: {
    fontSize: 20,
  },
});

export default BookScreen;
