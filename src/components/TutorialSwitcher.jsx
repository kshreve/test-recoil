import { useRecoilState } from 'recoil';

import tutorialState from 'appState/tutorialState';
import CharacterCounter from 'components/intro/CharacterCounter';
import TodoList from 'components/todo-list/TodoList';

const TutorialSwitcher = () => {
  const tutorials = [<CharacterCounter />, <TodoList />];

  const [pageState] = useRecoilState(tutorialState);

  return (
    <>
      <h2>Current Tutorial Page {pageState + 1}</h2>
      <div>{tutorials[pageState]}</div>
      <br />
      <hr />
      <br />

      {tutorials
        .map((tutorial, index) => (
          <>
            <h2>Tutorial {index + 1}</h2>
            {tutorial}

            <br />
            <hr />
          </>
        ))
        .reverse()}
    </>
  );
};

export default TutorialSwitcher;
