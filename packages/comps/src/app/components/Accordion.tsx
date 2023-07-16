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
  const [expandedIndex, setExpandedIndex] = useState<number>();

  const handleClickForItem = (itemIndex: number) => {
    setExpandedIndex((currentExpandedIndex) => {
      const newExpandedIndex =
        currentExpandedIndex === itemIndex ? undefined : itemIndex;

      return newExpandedIndex;
    });
  };

  const renderedItems = items.map((item, index) => {
    const isContentVisible = index === expandedIndex;
    const icon = (
      <span className="text-2xl">
        {isContentVisible ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    return (
      <section key={item.title}>
        <header
          className="flex justify-between pg-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleClickForItem(index)}
        >
          <h2>{item.title}</h2>
          {icon}
        </header>
        {isContentVisible && (
          <article className="border-b p-5">{item.content}</article>
        )}
      </section>
    );
  });
  return <main className="border-x border-t rounded">{renderedItems}</main>;
}
