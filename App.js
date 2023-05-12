
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Addstudents from './Base/Components/Addstudents';
import Dashboard from './Base/Components/Dashboard';
import data from './Base/Components/Data/data';
import Errorpage from './Base/Components/Errorpage';
import Students from './Base/Components/Students';
import Updatestudents from './Base/Components/Updatestudents';

function App() {
  const [student,setStudent]=useState(data)
  const [editIdx,setEditIdx]= useState();
  return (
    <div className="App">
     <Switch>
      <Route exact path="/">
        <Dashboard/>
        </Route>
        <Route path="/add">
          <Addstudents
          student={student}
          setStudent={setStudent}
          setEditIdx={setEditIdx}
          />
          </Route>
          <Route path="/edit">
          <Updatestudents
          student={student}
          setStudent={setStudent}
          editIdx={editIdx}
          />
          </Route> 
          <Route path="/students">
            <Students
             student={student}
             setStudent={setStudent}
             editIdx={editIdx}
             setEditIdx={setEditIdx}/>
          
            </Route>    
          <Route path="**">
            <Errorpage/>
            </Route> 
        
        </Switch>
    </div>
  );
}

export default App;
