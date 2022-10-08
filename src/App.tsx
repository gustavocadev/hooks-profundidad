import { useState } from 'react';
import CounterApp from './01-useState/CounterApp';
import CounterWithCustomHook from './01-useState/CounterWithCustomHook';
import FormWithCustomHook from './02-useEffect/FormWithCustomHook';
import MultipleCustomHooks from './03-examples/MultipleCustomHooks';
import FocusScreen from './04-useRef/FocusScreen';
import Memorize from './06-memos/Memorize';
import MemoHook from './06-memos/MemoHook';
import CallbackHook from './06-memos/CallbackHook';
import './08-useReducer/intro-reducer';
import { Padre } from './07-tarea-memo/Padre';
import TodoApp from './08-useReducer/TodoApp';
import MainApp from './09-useContext/MainApp';

function App() {
  return (
    <main className="App">
      {/* <CounterApp /> */}
      {/* <CounterWithCustomHook /> */}
      {/* <FormWithCustomHook /> */}
      {/* <MultipleCustomHooks /> */}
      {/* <FocusScreen /> */}
      {/* <Memorize /> */}
      {/* <MemoHook /> */}
      {/* <CallbackHook /> */}
      {/* <Padre /> */}
      {/* <TodoApp /> */}
      <MainApp />
    </main>
  );
}

export default App;
