import { ApplicationRootStyles } from './utils/styles';
import { getCurrentForm } from './utils/helpers';
import { FormStepContext } from './utils/FormStepContext';
import { STEPS } from './utils/constants';
import { useState } from 'react';

function App() {

  const [step, setStep] = useState(STEPS.PET_INFORMATION)
  return (
    <FormStepContext.Provider value={{step, setStep}}>
      <ApplicationRootStyles>
        {getCurrentForm(step)}
      </ApplicationRootStyles>
    </FormStepContext.Provider>
  );
}

export default App;
