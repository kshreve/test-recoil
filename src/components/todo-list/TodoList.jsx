import { useRecoilValue } from 'recoil';

import { filteredTodoListState } from 'appState/todo-list/todoListState';
import TodoItem from 'components/todo-list/TodoItem';
import TodoItemCreator from 'components/todo-list/TodoItemCreator';
import TodoListFilters from 'components/todo-list/TodoListFilters';
import TodoListStats from 'components/todo-list/TodoListStats';

function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.length
        ? todoList.map((todoItem) => <TodoItem key={todoItem.id} item={todoItem} />)
        : 'Nothing in the list'}
    </>
  );
}

export default TodoList;
