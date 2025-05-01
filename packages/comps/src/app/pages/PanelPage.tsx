import Panel from '../components/Panel';

function PanelPage() {
  return (
    <div>
      <h1>Panel Component</h1>
      <Panel>
        <h2>Example Title</h2>
        <button>Click here!</button>
      </Panel>
      <footer>Footer</footer>
    </div>
  );
}

export default PanelPage;
