import { toast } from "react-toastify";
import { setActivationToken, setLoading } from "../../redux/slices/authSlice";
import { setUser } from "../../redux/slices/profileSlice.js";
import { authEndpoints } from "../api";
import { apiConnector } from "../apiConnector";

const { SIGN_UP, VERIFY_EMAIL, LOGIN, USER_INFO, LOGOUT, GOOGLE_CALLBACK } =
  authEndpoints;

export function register(data, navigate) {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await apiConnector(`POST`, SIGN_UP, data);
      dispatch(setLoading(false));

      toast.info(response?.data?.message, {
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

      toast.success(response?.data?.message, {
        position: toast.POSITION.TOP_CENTER,
      });
      navigate("/login");
    } catch (error) {
      dispatch(setLoading(false));
      if (error?.response) {
        toast.error(error?.response?.data?.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        return;
      }
      console.log(error);
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
}

export function login(data, navigate) {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await apiConnector(`POST`, LOGIN, data);
      dispatch(setLoading(false));

      toast.success(response?.data?.message, {
        position: toast.POSITION.TOP_CENTER,
      });
      dispatch(setUser(response?.data?.user));
      navigate("/dashboard/my-profile");
    } catch (error) {
      dispatch(setLoading(false));
      if (error?.response) {
        toast.error(error?.response?.data?.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        return;
      }
      console.log(error);
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
}

export function getUserInfo() {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await apiConnector(`GET`, USER_INFO);
      dispatch(setLoading(false));
      dispatch(setUser(response?.data?.user));
    } catch (error) {
      dispatch(setLoading(false));
      console.log(error);
    }
  };
}

export function logout(navigate) {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      await apiConnector(`DELETE`, LOGOUT);
      dispatch(setLoading(false));
      dispatch(setUser(null));
      navigate("/");
    } catch (error) {
      dispatch(setLoading(false));
      console.log(error);
    }
  };
}

export function googleCallback() {
  return async () => {
    window.open(GOOGLE_CALLBACK, "_self");
  };
}
