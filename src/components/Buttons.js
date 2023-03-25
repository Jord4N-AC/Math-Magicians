import { calcButtons, calcButtonsTitle } from '../logic/variables';
import handleClassName from '../logic/handle-button-class-name';
import Button from './Button';

const Buttons = () => (
  <div>
    {
      calcButtons.map((button, i) => (
        // eslint-disable-next-line max-len
        <Button key={button} className={handleClassName(button)} title={calcButtonsTitle[i]} content={button} />
      ))
    }
  </div>
);

export default Buttons;
