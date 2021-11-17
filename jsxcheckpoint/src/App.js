
import './App.css';
import toledopic1 from "./toledopic1.jpg";
import toledov from "./Toledo.mp4";
function App() {
  return (
<div className="App">
     <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

<h1 className="title">Welcome To Toledo </h1>

<br/>

<img className="day"  src={toledopic1} />

<br/>


<img className="night" src="/toledopic2.jpg "/>


      </div>
      <div className="divvid">
      <video className="vid"width="560" height="450" controls>

<source src={toledov} type="video/mp4"/>

     </video>
     </div>


</div>
  );
}

export default App;
