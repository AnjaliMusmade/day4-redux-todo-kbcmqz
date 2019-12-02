export function addToDo(text: string) {
  return {
    type: "ADD_TODO",
    text: text
  };
}

export function toggleToDO(text: string) {
  return {
    type: "TOGGLE_TODO",
    text: text
  };
}

export function setFilter(visibility: string) {
  return {
    type: "SET_FILTER",
    visibility: visibility
  };
}

export function setColor(color: string) {
  return {
    type: "SET_COLOR",
    color: color
  };
}

