import { toast } from "react-toastify";
import { courseEndPoints } from "../api";
import { apiConnector } from "../apiConnector";

const { COURSE_CATEGORIES_API, CREATE_COURSE_API } = courseEndPoints;

export const fetchCourseCategories = async () => {
  let result = [];
  try {
    const response = await apiConnector("GET", COURSE_CATEGORIES_API);

    result = response?.data?.data;
    return result;
  } catch (error) {
    if (error?.response) {
      toast.error(error?.response?.data?.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      return result;
    }

    console.log(error);
    return result;
  }
};

export const addCourseDetails = async (data) => {
  let result = null;
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector("POST", CREATE_COURSE_API, data, {
      "Content-Type": "multipart/form-data",
    });

    if (!response?.data?.success) {
      throw new Error("Could Not Add Course Details");
    }
    toast.success("Course Details Added Successfully");
    result = response?.data?.data;
  } catch (error) {
    console.log("CREATE COURSE API ERROR............", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};
