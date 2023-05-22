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

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImage} />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                handle="@cortana32"
                image={CortanaImage}
              />
            </div>
            <div className="column is-4">
              <ProfileCard title="Siri" handle="@siri01" image={SiriImage} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
