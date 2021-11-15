import { useRecoilState } from 'recoil';

import { todoListFilterState } from 'appState/todo-list/todoListState';

function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">Show All</option>
        <option value="Show Completed">Show Completed</option>
        <option value="Show Uncompleted">Show Uncompleted</option>
      </select>
    </>
  );
}

export default TodoListFilters;
