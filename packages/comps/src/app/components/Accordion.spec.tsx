import { render } from '@testing-library/react';
import Accordion, { AccordionProps } from './Accordion';

describe('Accordion', () => {
  test('displays the given item title', () => {
    const { queryByText } = createComponent({
      items: [
        {
          title: 'Title 1',
          content: 'Content 1',
        },
      ],
    });

    expect(queryByText('Title 1')).toBeInTheDocument();
    expect(queryByText('Content 1')).not.toBeInTheDocument();
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
