import { createContext, useReducer } from "react";
import { initialState } from "../store/initialState";

export const stateContext = createContext(null);

export const dispatchContext = createContext(null);

export function StateProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <stateContext.Provider value={state}>
      <dispatchContext.Provider value={dispatch}>
        {children}
      </dispatchContext.Provider>
    </stateContext.Provider>
  );
}

// function reducer(state, action) {
//   switch (action.type) {
//     case "added": {
//       return {
//         ...state,
//         tasks: [
//           ...state.tasks,
//           {
//             id: action.id,
//             text: action.text,
//           },
//         ],
//         nextId: state.nextId+1,
//       };
//     }

//     case "deleted": {
//       return {
//         ...state,
//         tasks: state.tasks.filter((t) => t.id !== action.id),
//       };
//     }
//     default: {
//       throw Error("Unknown action: " + action.type);
//     }
//   }
// }

function reducer(state, action) {
  const actions = {
    added: {
      ...state,
      tasks: [
        ...state.tasks,
        {
          id: action.id,
          text: action.text,
        },
      ],
      nextId: state.nextId+1,
    },
    deleted: {
      ...state,
      tasks: state.tasks.filter((t) => t.id !== action.id),
    },
  };
  // nullish coalescing
  return actions[action.type.toLowerCase()] ?? "Unknown action";
}
