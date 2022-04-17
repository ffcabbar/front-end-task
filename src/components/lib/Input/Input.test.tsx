import { fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { useState } from 'react';
import { Input } from './Input';

function TestInput() {
  const [value, setValue] = useState('');

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  return <Input value={value} aria-label="test-input" onChange={handleChange} />;
}

const setup = () => {
  const utils = render(<TestInput />);
  const input = utils.getByLabelText('test-input');
  return {
    input,
    ...utils
  };
};

test('handles onChange', () => {
  const { input } = setup();
  fireEvent.change(input, { target: { value: 'Kuehne Nagel' } });
  expect((input as HTMLInputElement).value).toBe('Kuehne Nagel');
});

test('renders input', () => {
  render(<Input />);
  const inputElement = screen.getByRole('searchbox');
  expect(inputElement).toBeInTheDocument();
});

test('renders inputs icon', () => {
  render(
    <Input
      icon={
        <svg
          width="16"
          height="16"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.7871 22.7761L17.9548 16.9437C19.5193 15.145 20.4665 12.7982 20.4665 10.2333C20.4665 4.58714 15.8741 0 10.2333 0C4.58714 0 0 4.59246 0 10.2333C0 15.8741 4.59246 20.4665 10.2333 20.4665C12.7982 20.4665 15.145 19.5193 16.9437 17.9548L22.7761 23.7871C22.9144 23.9255 23.1007 24 23.2816 24C23.4625 24 23.6488 23.9308 23.7871 23.7871C24.0639 23.5104 24.0639 23.0528 23.7871 22.7761ZM1.43149 10.2333C1.43149 5.38004 5.38004 1.43681 10.2279 1.43681C15.0812 1.43681 19.0244 5.38537 19.0244 10.2333C19.0244 15.0812 15.0812 19.035 10.2279 19.035C5.38004 19.035 1.43149 15.0865 1.43149 10.2333Z"
            fill="#A4A4A4"
          />
        </svg>
      }
    />
  );
  const inputElement = screen.getByRole('figure');
  expect(inputElement).toBeInTheDocument();
});

test('matches snapshot', () => {
  const tree = renderer
    .create(
      <Input
        icon={
          <svg
            width="16"
            height="16"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.7871 22.7761L17.9548 16.9437C19.5193 15.145 20.4665 12.7982 20.4665 10.2333C20.4665 4.58714 15.8741 0 10.2333 0C4.58714 0 0 4.59246 0 10.2333C0 15.8741 4.59246 20.4665 10.2333 20.4665C12.7982 20.4665 15.145 19.5193 16.9437 17.9548L22.7761 23.7871C22.9144 23.9255 23.1007 24 23.2816 24C23.4625 24 23.6488 23.9308 23.7871 23.7871C24.0639 23.5104 24.0639 23.0528 23.7871 22.7761ZM1.43149 10.2333C1.43149 5.38004 5.38004 1.43681 10.2279 1.43681C15.0812 1.43681 19.0244 5.38537 19.0244 10.2333C19.0244 15.0812 15.0812 19.035 10.2279 19.035C5.38004 19.035 1.43149 15.0865 1.43149 10.2333Z"
              fill="#A4A4A4"
            />
          </svg>
        }
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('matches snapshot correctly when there are no props', () => {
  const tree = renderer.create(<Input />).toJSON();
  expect(tree).toMatchSnapshot();
});
