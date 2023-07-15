import { render } from '@testing-library/react';
import Accordion, { AccordionProps } from './Accordion';

describe('Accordion', () => {
  test('displays the given item', () => {
    const { getByText } = createComponent({
      items: [
        {
          title: 'Title 1',
          content: 'Content 1',
        },
      ],
    });

    expect(getByText('Title 1')).toBeInTheDocument();
    expect(getByText('Content 1')).toBeInTheDocument();
  });
});

function createComponent(props: Partial<AccordionProps>) {
  const defaultValues: AccordionProps = {
    items: [],
  };

  const finalValues = {
    ...defaultValues,
    ...props,
  };

  return render(<Accordion {...finalValues} />);
}
