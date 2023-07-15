import { useState } from 'react';

export type AccordionItem = {
  title: string;
  content: string;
};

export type AccordionProps = {
  items: AccordionItem[];
};

export default function Accordion({ items }: AccordionProps) {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  const renderedItems = items.map((item, index) => {
    const isContentVisible = visibleItems.includes(index);

    return (
      <div key={item.title}>
        <h3>{item.title}</h3>
        {isContentVisible && <p>{item.content}</p>}
      </div>
    );
  });
  return <div>{renderedItems}</div>;
}
