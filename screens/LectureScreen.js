import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { useRoute } from '@react-navigation/native';

const LectureScreen = () => {
  const route = useRoute();
  const { course } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lectures in {course.name}</Text>
      <FlatList
        data={course.lectures}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => Linking.openURL(item.youtubeLink)}
          >
            <Text style={styles.cardText}>{item.title}</Text>
            <Text style={styles.category}>{item.category}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  card: {
    backgroundColor: '#FFC107',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  cardText: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
  },
  category: {
    fontSize: 14,
    color: '#555',
  },
});

export default LectureScreen;
