import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

const CourseScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { department } = route.params;

  return (
    <View>
      <Text>Select a Course in {department.name}</Text>
      <FlatList
        data={department.courses}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('LectureScreen', { course: item })}
          >
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default CourseScreen;
