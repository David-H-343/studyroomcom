import { FC, useEffect } from 'react';
import MainTemplate from './templates/MainTemplate';

import 'antd/dist/antd.css';
import "./MainTheme.css";

const App: FC = () => {

  useEffect(() => {
    document.title = "Study Room";
  }, []);

  return (
    <div className="App">

      <MainTemplate />

    </div>
  );
}

export default App;
