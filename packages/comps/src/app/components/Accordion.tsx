import { useState } from 'react';

export type AccordionItem = {
  title: string;
  content: string;
};

export type AccordionProps = {
  items: AccordionItem[];
};

export default function Accordion({ items }: AccordionProps) {
  const [visibleItem, setVisibleItem] = useState<number>();

  const renderedItems = items.map((item, index) => {
    const isContentVisible = index === visibleItem;
    const onClick = () => {
      setVisibleItem(index);
    };

    return (
      <div key={item.title}>
        <h3 onClick={onClick}>{item.title}</h3>
        {isContentVisible && <p>{item.content}</p>}
      </div>
    );
  });
  return <div>{renderedItems}</div>;
}
