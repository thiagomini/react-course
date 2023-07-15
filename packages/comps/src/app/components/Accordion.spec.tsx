import { render } from '@testing-library/react';
import Accordion, { AccordionProps } from './Accordion';
import userEvent from '@testing-library/user-event';

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

  test('displays many items', () => {
    const { queryByText } = createComponent({
      items: [
        {
          title: 'Title 1',
          content: 'Content 1',
        },
        {
          title: 'Title 2',
          content: 'Content 2',
        },
      ],
    });

    expect(queryByText('Title 1')).toBeInTheDocument();
    expect(queryByText('Title 2')).toBeInTheDocument();
  });

  test('displays an item content on click', async () => {
    // Arrange
    const { queryByText, getByText } = createComponent({
      items: [
        {
          title: 'Title 1',
          content: 'Content 1',
        },
      ],
    });
    const title = getByText('Title 1');

    // Act
    await userEvent.click(title);

    // Assert
    expect(queryByText('Content 1')).toBeInTheDocument();
  });

  test('hides an item content on double click', async () => {
    // Arrange
    const { queryByText, getByText } = createComponent({
      items: [
        {
          title: 'Title 1',
          content: 'Content 1',
        },
      ],
    });
    const title = getByText('Title 1');

    // Act
    await userEvent.click(title);
    await userEvent.click(title);

    // Assert
    expect(queryByText('Content 1')).not.toBeInTheDocument();
  });

  test('displays only a single item content on click', async () => {
    // Arrange
    const { queryByText, getByText } = createComponent({
      items: [
        {
          title: 'Title 1',
          content: 'Content 1',
        },
        {
          title: 'Title 2',
          content: 'Content 2',
        },
      ],
    });
    const title1 = getByText('Title 1');
    await userEvent.click(title1);
    const title2 = getByText('Title 2');

    // Act
    await userEvent.click(title2);

    // Assert
    expect(queryByText('Content 1')).not.toBeInTheDocument();
    expect(queryByText('Content 2')).toBeInTheDocument();
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
