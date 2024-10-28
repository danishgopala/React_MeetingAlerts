import './App.css';
import Header from "./Header.js"
import MeetingList from './MeetingList.js';
function App() {
  const headingTitle = "Purdue Meetings"
  return (
    <div className="App">
        <Header headingText = {headingTitle}/>
        <MeetingList/>
    </div>
  );
}

export default App;
