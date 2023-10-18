import { toast } from "react-toastify";
import { setActivationToken, setLoading } from "../../redux/slices/authSlice";
import { authEndpoints } from "../api";
import { apiConnector } from "../apiConnector";

const { SIGN_UP, VERIFY_EMAIL } = authEndpoints;

export function register(data, navigate) {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await apiConnector(`POST`, SIGN_UP, data);
      dispatch(setLoading(false));

      toast.success("Otp Sent Successfully", {
        position: toast.POSITION.TOP_CENTER,
      });
      dispatch(setActivationToken(response?.data?.activationToken));
      navigate("/verify-email");
    } catch (error) {
      dispatch(setLoading(false));
      if (error?.response) {
        toast.error(error?.response?.data?.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        return;
      }
      console.log(error);
      toast.error("Unable to Send Otp", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
}

export function verifyEmail(data, navigate) {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await apiConnector(`POST`, VERIFY_EMAIL, data);
      dispatch(setLoading(false));
      if (!response?.data?.success) {
        throw new Error(response?.data?.message);
      }
      toast.success("User Verified Successfully", {
        position: toast.POSITION.TOP_CENTER,
      });
      navigate("/login");
    } catch (error) {
      dispatch(setLoading(false));
      console.log(error);
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
}
