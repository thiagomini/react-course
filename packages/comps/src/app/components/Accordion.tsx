import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

export type AccordionItem = {
  title: string;
  content: string;
};

export type AccordionProps = {
  items: AccordionItem[];
};

export default function Accordion({ items }: AccordionProps) {
  const [visibleItem, setVisibleItem] = useState<number>();

  const handleClickForItem = (itemIndex: number) => {
    const newVisibleItem = visibleItem === itemIndex ? undefined : itemIndex;
    setVisibleItem(newVisibleItem);
  };

  const renderedItems = items.map((item, index) => {
    const isContentVisible = index === visibleItem;
    const icon = (
      <span>{isContentVisible ? <GoChevronDown /> : <GoChevronLeft />}</span>
    );

    return (
      <div key={item.title}>
        <div onClick={() => handleClickForItem(index)}>
          {item.title}
          {icon}
        </div>
        {isContentVisible && <p>{item.content}</p>}
      </div>
    );
  });
  return <div>{renderedItems}</div>;
}
