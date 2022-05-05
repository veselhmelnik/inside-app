import Sidebar from '../sidebar/Sidebar';
import Header from '../header/Header'
import Rightside from '../rightside/Rightside';
import Main from '../main/Main';

import './app.scss';

const App = () => {
  return (
    <div className="App">
        <Sidebar/>
        <Header/>
        <Rightside/>
    </div>
  );
}

export default App;
