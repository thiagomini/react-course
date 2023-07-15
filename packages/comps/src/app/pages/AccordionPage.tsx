import Accordion from '../components/Accordion';

function AccordionPage() {
  const items = [
    {
      title: 'Title 1',
      content: 'Content 1',
    },
    {
      title: 'Title 2',
      content: 'Content 2',
    },
  ];
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default AccordionPage;
