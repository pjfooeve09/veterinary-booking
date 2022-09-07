import { ApplicationRootStyles } from './utils/styles';
import { getCurrentForm } from './utils/helpers';
import { STEPS } from './utils/constants';

function App() {
  return (
    <ApplicationRootStyles>
      {getCurrentForm(STEPS.PET_INFORMATION)}
    </ApplicationRootStyles>
  );
}

export default App;
