import Banner from './banner';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import ProfileCard from './profile-card';

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
