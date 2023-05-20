import Banner from './banner';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import ProfileCard from './profile-card';

export function App() {
  return (
    <div>
      <Banner />
      <ProfileCard title="Alexa" handle="@alexa99" />
      <ProfileCard title="Cortana" handle="@cortana32" />
      <ProfileCard title="Siri" handle="@siri01" />
    </div>
  );
}

export default App;
