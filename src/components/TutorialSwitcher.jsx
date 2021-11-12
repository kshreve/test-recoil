import { useRecoilState } from 'recoil'

import tutorialState from 'appState/tutorialState'
import CharacterCounter from 'components/intro/CharacterCounter'
import TodoList from 'components/todo-list/TodoList'


function TutorialSwitcher() {
  const tutorials = [<CharacterCounter />,  <TodoList />]

  const [pageState, setPageState] = useRecoilState(tutorialState);

  return (
    <div>
      {tutorials[pageState]}
    </div>
  );
}

export default TutorialSwitcher;
