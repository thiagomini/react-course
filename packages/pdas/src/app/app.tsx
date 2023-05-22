import Banner from './banner';
import ProfileCard from './profile-card';
import 'bulma/css/bulma.css';

import AlexaImage from '../assets/alexa.png';
import CortanaImage from '../assets/cortana.png';
import SiriImage from '../assets/siri.png';

export function App() {
  return (
    <div>
      <Banner />
      <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImage} />
      <ProfileCard title="Cortana" handle="@cortana32" image={CortanaImage} />
      <ProfileCard title="Siri" handle="@siri01" image={SiriImage} />
    </div>
  );
}

export default App;
