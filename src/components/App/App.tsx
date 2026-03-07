import css from './App.module.css';
import { CafeInfo } from '../CafeInfo/CafeInfo';
import { useState } from "react";
import { Votes } from "../../../types/votes";

const App = () => {
    const [votes, setVotes] = useState<Votes> ({
  good: 0,
  neutral: 0,
  bad: 0
});
    return (
        <div className={css.app}>
            <CafeInfo />
        </div>
    );
}

export default App;
