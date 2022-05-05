import Sidebar from '../sidebar/Sidebar';
import { Header } from '../header/Header'
import Rightside from '../rightside/Rightside';
import Main from '../main/Main';

import './app.scss';

const App = () => (
  <div className="App">
    <Sidebar/>
    <div className="contentWrapper">
      <Header />
      <Main />
    </div>
      <Rightside/>
  </div>
);

export default App;
