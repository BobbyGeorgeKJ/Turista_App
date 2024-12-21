import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

const ActivityLifestyle = ({ route, navigation }: any) => {
  // Uncomment the following line when you want to use the backend parameters
  // const { username, phone_number, password, DOB, gender, height, weight, diet, email } = route.params;

  const [activity, setActivity] = useState('Moderate');

  const activityLevels = ['Sedentary', 'Moderate', 'Active'];

  const navigateNext = async () => {
    navigation.navigate('StepCounterPage', {
      // Uncomment these lines when backend integration is required
      // username: username,
      // phone_number: phone_number,
      // email: email,
      // password: password,
      // gender: gender,
      // DOB: DOB,
      // height: height,
      // weight: weight,
      // diet: diet,
      experience: activity, // Keep this for the activity level
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>How active are you in your daily lifestyle?</Text>
      <View style={styles.buttonContainer}>
        {activityLevels.map((level) => (
          <TouchableOpacity
            key={level}
            style={[styles.optionButton, activity === level && styles.selectedOption]}
            onPress={() => setActivity(level)}
          >
            <Text style={[styles.buttonText, activity === level && styles.selectedText]}>{level}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 10, marginTop: 100 }}>
        <TouchableOpacity style={styles.nextButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#FFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButton} onPress={navigateNext}>
          <Icon name="arrow-right" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ActivityLifestyle;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 20 },
  title: { fontSize: 20, color: '#FFF', textAlign: 'center', marginVertical: 20 },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-around' },
  optionButton: { backgroundColor: '#333', padding: 15, borderRadius: 8, width: '30%', alignItems: 'center' },
  selectedOption: { backgroundColor: '#F0A500' },
  buttonText: { color: '#FFF' },
  selectedText: { color: '#000', fontWeight: 'bold' },
  nextButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#FF8C00",
    justifyContent: "center",
    alignItems: "center",
  },
});
