export function addToList(text) {
  return {
    type: 'ADD_TO_LIST',
    payload: text
  }
}