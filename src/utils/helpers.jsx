import { PetInformation } from "../components/PetInformation";
import { ServiceAppointment } from "../components/ServiceAppointment";
import { ReviewForm } from "../components/ReviewForm";
import { STEPS } from "./constants";

export const getCurrentForm = (step) => {
  switch (step) {
    case STEPS.PET_INFORMATION:
      return <PetInformation />;
    case STEPS.SERVICE_APPOINTMENT:
      return <ServiceAppointment />;
    case STEPS.REVIEW:
      return <ReviewForm />;
    case STEPS.ERROR:
      return <h1>Error</h1>;
    case STEPS.SUCCESS:
      return <h1>success</h1>;
    default:
      return <h1>Invalid Step, Please refresh the page</h1>;
  }
};
