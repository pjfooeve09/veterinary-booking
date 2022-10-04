import { ApplicationRootStyles } from './utils/styles';
import { getCurrentForm } from './utils/helpers';
import { FormStepContext } from './utils/contexts/FormStepContext';
import { defaultFields, STEPS } from './utils/constants';
import { useState } from 'react';
import { FormFieldsContext } from './utils/contexts/FormFieldsContext';

function App() {

  const [step, setStep] = useState(STEPS.PET_INFORMATION);
  const [fields, setFields] = useState(defaultFields);

  const updateFields = (field, value) => {
    const newFields = {...fields};
    newFields[field] = value;
    setFields(newFields);
  }
  return (
    <FormStepContext.Provider value={{step, setStep}}>
      <FormFieldsContext.Provider value={{fields, updateFields}}>
        <ApplicationRootStyles>
          {getCurrentForm(step)}
        </ApplicationRootStyles>
      </FormFieldsContext.Provider>
    </FormStepContext.Provider>
  );
}

export default App;
