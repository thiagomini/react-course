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

  const handleClickForItem = (itemIndex: number) => setVisibleItem(itemIndex);

  const renderedItems = items.map((item, index) => {
    const isContentVisible = index === visibleItem;

    return (
      <div key={item.title}>
        <h3 onClick={() => handleClickForItem(index)}>{item.title}</h3>
        {isContentVisible && <p>{item.content}</p>}
      </div>
    );
  });
  return <div>{renderedItems}</div>;
}
