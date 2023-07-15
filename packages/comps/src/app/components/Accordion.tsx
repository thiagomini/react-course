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
      <span className="text-2xl">
        {isContentVisible ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    return (
      <div key={item.title}>
        <div
          className="flex justify-between pg-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleClickForItem(index)}
        >
          {item.title}
          {icon}
        </div>
        {isContentVisible && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });
  return <div className="border-x border-t rounded">{renderedItems}</div>;
}
