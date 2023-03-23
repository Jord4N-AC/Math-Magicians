import Button from './Button';

const calcButtons = [
  'AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4',
  '5', '6', '-', '1', '2', '3', '+', '0', '.', '=',
];

const Buttons = () => (
  <div>
    {
      calcButtons.map((button) => (
        <Button key={button} content={button} />))
    }
  </div>
);

export default Buttons;
