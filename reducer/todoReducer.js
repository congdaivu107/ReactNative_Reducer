const initialState = {
  tasks: [
    { id: 1, text: "To check email", completed: true },
    { id: 2, text: "UI task web page", completed: false },
    { id: 3, text: "Learn javascript basic", completed: false },
    { id: 4, text: "Learn HTML Advance", completed: false },
    { id: 5, text: "Medical App UI", completed: false },
    { id: 6, text: "Learn Java", completed: false },
  ],
};

function todoReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    case "ADD_TASK":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { id: Date.now(), text: action.payload, completed: false },
        ],
      };
    case "EDIT_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, text: action.payload.text }
            : task
        ),
      };
    default:
      return state;
  }
}

export { todoReducer, initialState };
