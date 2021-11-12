import { useRecoilValue } from 'recoil'

import todoListState from 'appState/todo-list/todoListState'
import TodoItem from 'components/todo-list/TodoItem'
import TodoItemCreator from 'components/todo-list/TodoItemCreator'

function TodoList() {
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      {/* <TodoListStats /> */}
      {/* <TodoListFilters /> */}
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}

export default TodoList;
