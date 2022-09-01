function passSetTodo(inputText, todos) {
    return([
        ...todos,
        {
          text: inputText,
          completed: false,
          id: Date.now(),
        },
      ])
}
export default passSetTodo