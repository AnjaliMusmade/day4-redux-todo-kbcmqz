export function addToDo(text: string) {
  return {
    type: "ADD_TODO",
    text: text
  };
}
