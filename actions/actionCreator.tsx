export function addToDo(text: string) {
  return {
    type: "ADD_TODO",
    text: text
  };
}

export function TOGGLE_TODO(text: string) {
  return {
    type: "TOGGLE_TODO",
    text: text
  };
}

export function SET_FILTER(text: string) {
  return {
    type: "SET_FILTER",
    text: text
  };
}

export function SET_COLOR(color: string) {
  return {
    type: "SET_COLOR",
    text: color
  };
}

