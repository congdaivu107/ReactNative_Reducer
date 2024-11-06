import React, { useReducer, useState } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { todoReducer, initialState } from "./reducer/todoReducer";
import TaskItem from "./components/TaskItem";

export default function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [newTask, setNewTask] = useState("");

  const toggleTask = (id) => {
    dispatch({ type: "TOGGLE_TASK", payload: id });
  };

  const addTask = () => {
    if (newTask.trim()) {
      dispatch({ type: "ADD_TASK", payload: newTask });
      setNewTask("");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Hi Twinkle, Have a great day ahead!</Text>
      <TextInput
        style={styles.input}
        placeholder="Add a new task"
        value={newTask}
        onChangeText={setNewTask}
      />
      
      <FlatList
        data={state.tasks}
        renderItem={({ item }) => (
          <TaskItem task={item} toggleTask={toggleTask} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <TouchableOpacity style={styles.addButton} onPress={addTask}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#00BDD6",
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: "#00BDD6",
    marginLeft:145,
    width: 50,
    height: 50,
    borderRadius: 50,
    padding: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
  },
});
