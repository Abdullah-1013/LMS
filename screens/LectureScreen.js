import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';

const LectureScreen = () => {
  const route = useRoute();
  const { course } = route.params;

  const categorizeLectures = (category) => {
    return course.lectures.filter((lecture) => lecture.category === category);
  };

  return (
    <View>
      <Text>Lectures for {course.name}</Text>

      <Text>Best Lectures</Text>
      <FlatList
        data={categorizeLectures('Best')}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <TouchableOpacity onPress={() => Linking.openURL(item.youtubeLink)}>
              <Text>Watch on YouTube</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />

      <Text>Middle Lectures</Text>
      <FlatList
        data={categorizeLectures('Middle')}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <TouchableOpacity onPress={() => Linking.openURL(item.youtubeLink)}>
              <Text>Watch on YouTube</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />

      <Text>Worst Lectures</Text>
      <FlatList
        data={categorizeLectures('Worst')}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <TouchableOpacity onPress={() => Linking.openURL(item.youtubeLink)}>
              <Text>Watch on YouTube</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default LectureScreen;
