import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'; 
const TaskItem = ({ task, toggleTask, editTask }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => toggleTask(task.id)}>
        <Icon
          name={task.completed ? "check-box" : "check-box-outline-blank"}
          size={24}
          color="#4CAF50"
        />
      </TouchableOpacity>
      
      <Text style={[styles.text, task.completed && styles.completed]}>
        {task.text}
      </Text>
      
      <TouchableOpacity onPress={() => editTask(task.id)}>
        <Icon name="edit" size={24} color="#FF6347" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F1F1F1",
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  text: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },
  completed: {
    textDecorationLine: "line-through",
    color: "#aaa",
  },
});

export default TaskItem;
