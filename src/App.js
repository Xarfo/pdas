import  ProfileCard  from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
  return (
    <div className="App">
      <div className="bg-slate-400 rounded-xl p-8 border-solid border-stone-300">
        <h1> Personal Data Aggregation System</h1>
      </div>
      <div className="bg-slate-400 rounded-xl p-8 border-solid border-stone-300">
        <ProfileCard title='Alexa' handle='@alexa99' image={AlexaImage}/>
        <ProfileCard title='Cortana' handle='@cortana32' image={CortanaImage}/>
        <ProfileCard title='Siri' handle='@siri01' image={SiriImage}/>
      </div>
    </div>
  );
}

export default App;
