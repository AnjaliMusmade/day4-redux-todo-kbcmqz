export default function colorrReducer(
  color: string = "red",
  action: any) {

  switch (action.type) {
    case 'SET_COLOR':
      return action.color;
    default:
     return color;
  }
}