import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

const CourseScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { department } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Courses in {department.name}</Text>
      <FlatList
        data={department.courses}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('LectureScreen', { course: item })}
          >
            <Text style={styles.cardText}>{item.name}</Text>
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
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  cardText: {
    color: 'white',
    fontSize: 18,
  },
});

export default CourseScreen;
