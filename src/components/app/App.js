import { Sidebar } from '../sidebar/Sidebar';
import { Header } from '../header/Header'
import { Rightside } from '../rightside/Rightside'
import { ProjectEdit } from '../projectEdit/ProjectEdit';

import './app.scss';

const App = () => (
  <div className="App">
    <Sidebar/>
    <div className="contentWrapper">
      <Header />
      <ProjectEdit/>
    </div>
      <Rightside/>
  </div>
);

export default App;
