import { AxiosError } from "axios";
import toast from "react-hot-toast";

const handleRequestError = (error: AxiosError) => {
  if (error.response) {
    const { data, status } = error.response;

    if (status < 500) {
      if (status === 422) {
        toast.error((data as any).errors[0].message);
      } else {
        toast.error((data as any).detail);
      }
    } else {
      toast.error("Server error occurred, try again");
    }
  } else {
    console.log("Error", error.message);
  }
};

export default handleRequestError;
