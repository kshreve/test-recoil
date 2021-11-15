import { useSetRecoilState } from 'recoil';

import todoListState from 'appState/todo-list/todoListState';

// utility for creating unique Id
let id = 0;
function getId() {
  return id++;
}

function TodoItemCreator() {
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: '',
        isComplete: false,
      },
    ]);
  };

  return (
    <div>
      <button onClick={addItem}>Add</button>
    </div>
  );
}

export default TodoItemCreator;
