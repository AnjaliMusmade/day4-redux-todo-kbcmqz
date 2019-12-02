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

export function setFilter(text: string) {
  return {
    type: "SET_FILTER",
    text: text
  };
}

export function setColor(color: string) {
  return {
    type: "SET_COLOR",
    text: color
  };
}

