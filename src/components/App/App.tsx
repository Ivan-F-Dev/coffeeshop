import React from 'react';
import s from './App.module.scss';
import {useAppDispatch, useAppSelector} from "../../utils/hooks/storeHooks";
import {addCount} from "../../store/slices/emulationSlice";

function App() {
    const data = useAppSelector(state => state.emulationSlice.count)
    const dispatch = useAppDispatch()
    const handler = () => {
        dispatch(addCount(1))
    }

  return (
    <div className={s.App}>
        <button onClick={handler}>add</button>
        app{data}
    </div>
  );
}

export default App;
