import '../assets/InputScreen.css';

const InputScreen = () => (
  <div id="calc-screen">
    <input id="operations-displayer" type="text" placeholder="0 + 0" title="Display calculations: |1 + 1 + 1      |" disabled />
    <input id="result-displayer" type="text" placeholder="0" title="Display preview or result: |              3|" disabled />
  </div>
);

export default InputScreen;
