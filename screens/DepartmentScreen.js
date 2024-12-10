import React from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import data from './data.json'; // Import your data file

const DepartmentScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Select a Department</Text>
      <FlatList
        data={data.departments}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('CourseScreen', { department: item })}
          >
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default DepartmentScreen;
