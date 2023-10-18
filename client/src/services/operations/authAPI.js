import { toast } from "react-toastify";
import { setLoading } from "../../redux/slices/authSlice";
import { authEndpoints } from "../api";
import { apiConnector } from "../apiConnector";

const { SIGN_UP } = authEndpoints;

export function register(data, navigate) {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await apiConnector(`POST`, SIGN_UP, data);
      dispatch(setLoading(false));
      if (!response?.data?.success) {
        throw new Error(response?.data?.message);
      }
      toast.success("Otp Sent Successfully", {
        position: toast.POSITION.TOP_CENTER,
      });
      navigate("/verify-email");
    } catch (error) {
      dispatch(setLoading(false));
      console.log(error);
      toast.error("Unable to Send Otp", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
}
