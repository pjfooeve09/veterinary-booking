export const STEPS = {
   PET_INFORMATION: 'PET_INFORMATION-STEP',
   SERVICE_APPOINTMENT: 'SERVICEAPPOINTMENT-STEP',
   REVIEW: 'REVIEW_STEP',
   ERROR: 'ERROR_STEP',
   SUCCESS: 'SUCCESS_STEP',
}

export const FIELDS = {
  PET_INFORMATION: 'pet_information',
  SERVICE_APPOINTMENT: 'service_appointment',
}

export const defaultFields = {
  contact: {
    firstName: '',
    lastName: '',
  },
  petName: '',
  email: '',
  mobile: ''
}