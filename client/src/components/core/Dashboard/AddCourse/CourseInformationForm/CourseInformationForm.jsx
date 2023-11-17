import { useEffect, useState } from "react";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { MdNavigateNext } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setCourse, setStep } from "../../../../../redux/slices/courseSlice";
import {
  addCourseDetails,
  fetchCourseCategories,
} from "../../../../../services/operations/courseDetailsAPI";

export default function CourseInformationForm() {
  const dispatch = useDispatch();
  const { course, editCourse } = useSelector((state) => state.course);

  const [courseCategories, setCourseCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    courseName: "",
    courseDescription: "",
    coursePrice: 0,
    courseCategory: " ",
    courseTags: [" "],
    courseThumbnails: " ",
    courseBenifits: " ",
    courseRequirements: " ",
  });

  const [error, setError] = useState({
    courseName: false,
    courseDescription: false,
    coursePrice: false,
    courseCategory: false,
    courseTags: false,
    courseThumbnails: false,
    courseBenifits: false,
    courseRequirements: false,
  });

  const isFormUpdated = () => {
    const currentValues = formData;
    if (
      currentValues.courseTitle !== course.courseName ||
      currentValues.courseShortDesc !== course.courseDescription ||
      currentValues.coursePrice !== course.price ||
      currentValues.courseTags.toString() !== course.tag.toString() ||
      currentValues.courseBenefits !== course.whatYouWillLearn ||
      currentValues.courseCategory._id !== course.category._id ||
      currentValues.courseRequirements.toString() !==
        course.instructions.toString() ||
      currentValues.courseImage !== course.thumbnail
    ) {
      return true;
    }
    return false;
  };

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = formData;

    if (
      data.courseName === "" ||
      data.courseDescription === "" ||
      data.coursePrice === 0 ||
      data.courseCategory === "" ||
      data.courseTags.length === 0 ||
      data.courseThumbnails === "" ||
      data.courseBenifits === "" ||
      data.courseRequirements === ""
    ) {
      setError({
        courseName: data.courseName === "",
        courseDescription: data.courseDescription === "",
        coursePrice: data.coursePrice === 0,
        courseCategory: data.courseCategory === "",
        courseTags: data.courseTags.length === 0,
        courseThumbnails: data.courseThumbnails === "",
        courseBenifits: data.courseBenifits === "",
        courseRequirements: data.courseRequirements === "",
      });
      return;
    }

    if (editCourse) {
      if (isFormUpdated()) {
        const currentValues = formData;
        const formInfo = new FormData();

        formInfo.append("courseId", course._id);
        if (currentValues.courseTitle !== course.courseName) {
          formInfo.append("courseName", data.courseTitle);
        }
        if (currentValues.courseShortDesc !== course.courseDescription) {
          formInfo.append("courseDescription", data.courseShortDesc);
        }
        if (currentValues.coursePrice !== course.price) {
          formInfo.append("price", data.coursePrice);
        }
        if (currentValues.courseTags.toString() !== course.tag.toString()) {
          formInfo.append("tag", JSON.stringify(data.courseTags));
        }
        if (currentValues.courseBenefits !== course.whatYouWillLearn) {
          formInfo.append("whatYouWillLearn", data.courseBenefits);
        }
        if (currentValues.courseCategory._id !== course.category._id) {
          formInfo.append("category", data.courseCategory);
        }
        if (
          currentValues.courseRequirements.toString() !==
          course.instructions.toString()
        ) {
          formInfo.append(
            "instructions",
            JSON.stringify(data.courseRequirements)
          );
        }
        if (currentValues.courseImage !== course.thumbnail) {
          formInfo.append("thumbnailImage", data.courseImage);
        }
        setLoading(true);
        const result = "await editCourseDetails(formData, token)";
        setLoading(false);
        if (result) {
          dispatch(setStep(2));
          dispatch(setCourse(result));
        }
      } else {
        toast.error("No changes made to the form", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
      return;
    }

    const formInfo = new FormData();
    formInfo.append("courseName", data.courseName);
    formInfo.append("courseDescription", data.courseDescription);
    formInfo.append("price", data.coursePrice);
    formInfo.append("tag", JSON.stringify(data.courseTags));
    formInfo.append("whatYouWillLearn", data.courseBenifits);
    formInfo.append("category", data.courseCategory);
    formInfo.append("status", "Draft");
    formInfo.append("instructions", JSON.stringify(data.courseRequirements));
    formInfo.append("thumbnailImage", data.courseImage);

    setLoading(true);
    const result = await addCourseDetails(formInfo);
    if (result) {
      dispatch(setStep(2));
      dispatch(setCourse(result));
    }
    setLoading(false);
  };

  useEffect(() => {
    const getCategories = async () => {
      setLoading(true);
      const categories = await fetchCourseCategories(dispatch);
      if (categories.length > 0) {
        setCourseCategories(categories);
      }
      setLoading(false);
    };

    if (editCourse) {
      setFormData({
        courseName: course.courseName,
        courseDescription: course.courseDescription,
        coursePrice: course.price,
        courseCategory: course.category,
        courseTags: course.tag,
        courseThumbnails: course.thumbnail,
        courseBenifits: course.whatYouWillLearn,
        courseRequirements: course.instructions,
      });
    }

    getCategories();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <form
      className="space-y-8 rounded-md border-[1px] border-gray-700 p-6"
      onSubmit={handleSubmit}
    >
      {/* Course Title */}
      <div className="flex flex-col space-y-2">
        <label
          className="text-sm text-black after:content-['*'] after:text-[#f00]"
          htmlFor="courseTitle"
        >
          Course Title
        </label>
        <input
          id="courseName"
          name="courseName"
          value={formData.courseName}
          onChange={handleOnChange}
          placeholder="Enter Course Title"
          className="w-full bg-slate-300 h-[44px] rounded-md px-4 outline-none"
        />
        {error.courseName && (
          <span className="ml-2 text-xs tracking-wide text-[#f00]">
            Course title is required
          </span>
        )}
      </div>
      {/* Course Short Description */}
      <div className="flex flex-col space-y-2">
        <label
          className="text-sm text-black after:content-['*'] after:text-[#f00]"
          htmlFor="courseDescription"
        >
          Course Short Description
        </label>
        <textarea
          id="courseDescription"
          name="courseDescription"
          value={formData.courseDescription}
          onChange={handleOnChange}
          placeholder="Enter Description"
          className="w-full bg-slate-300 h-[44px] rounded-md p-4 outline-none resize-x-none min-h-[130px]"
        />
        {error.courseDescription && (
          <span className="ml-2 text-xs tracking-wide text-[#f00]">
            Course Description is required
          </span>
        )}
      </div>
      {/* Course Price */}
      <div className="flex flex-col space-y-2">
        <label
          className="text-sm text-black after:content-['*'] after:text-[#f00]"
          htmlFor="coursePrice"
        >
          Course Price
        </label>
        <div className="relative">
          <input
            id="coursePrice"
            name="coursePrice"
            value={formData.coursePrice}
            onChange={handleOnChange}
            placeholder="Enter Course Price"
            className="w-full bg-slate-300 h-[44px] rounded-md p-4 outline-none !pl-12"
          />
          <HiOutlineCurrencyRupee className="absolute left-3 top-1/2 inline-block -translate-y-1/2 text-2xl text-gray-400" />
        </div>
        {error.coursePrice && (
          <span className="ml-2 text-xs tracking-wide text-[#f00]">
            Course Price is required
          </span>
        )}
      </div>
      {/* Course Category */}
      <div className="flex flex-col space-y-2">
        <label
          className="text-sm text-black after:content-['*'] after:text-[#f00]"
          htmlFor="courseCategory"
        >
          Course Category
        </label>
        <select
          defaultValue=""
          id="courseCategory"
          name="courseCategory"
          value={formData.courseCategory}
          onChange={handleOnChange}
          className="w-full bg-slate-300 h-[44px] rounded-md px-4 outline-none"
        >
          <option value="" disabled>
            Choose a Category
          </option>
          {!loading &&
            courseCategories?.map((category, indx) => (
              <option key={indx} value={category?._id}>
                {category?.name}
              </option>
            ))}
        </select>
        {error.courseCategory && (
          <span className="ml-2 text-xs tracking-wide text-[#f00]">
            Course Category is required
          </span>
        )}
      </div>
      {/* Course Tags */}
      {/* <ChipInput
        label="Tags"
        name="courseTags"
        placeholder="Enter Tags and press Enter"
        register={register}
        errors={errors}
        setValue={setValue}
        getValues={getValues}
      /> */}
      {/* Course Thumbnail Image */}
      {/* <Upload
        name="courseImage"
        label="Course Thumbnail"
        register={register}
        setValue={setValue}
        errors={errors}
        editData={editCourse ? course?.thumbnail : null}
      /> */}
      {/* Benefits of the course */}
      <div className="flex flex-col space-y-2">
        <label
          className="text-sm text-black after:content-['*'] after:text-[#f00]"
          htmlFor="courseBenefits"
        >
          Benefits of the course
        </label>
        <textarea
          id="courseBenifits"
          name="courseBenifits"
          value={formData.courseBenifits}
          onChange={handleOnChange}
          placeholder="Enter benefits of the course"
          className="w-full bg-slate-300 h-[44px] rounded-md p-4 outline-none resize-x-none min-h-[130px]"
        />
        {error.courseBenifits && (
          <span className="ml-2 text-xs tracking-wide text-[#f00]">
            Benefits of the course is required
          </span>
        )}
      </div>
      {/* Requirements/Instructions */}
      {/* <RequirementsField
        name="courseRequirements"
        label="Requirements/Instructions"
        register={register}
        setValue={setValue}
        errors={errors}
        getValues={getValues}
      /> */}
      {/* Next Button */}
      <div className="flex justify-end gap-x-2">
        {editCourse && (
          <button
            onClick={() => dispatch(setStep(2))}
            disabled={loading}
            className={`flex cursor-pointer items-center gap-x-2 rounded-md bg-gray-300 py-[8px] px-[20px] font-semibold text-gray-900`}
          >
            Continue Without Saving
          </button>
        )}
        <button
          className={`flex items-center bg-custom-gradient cursor-pointer gap-x-2 rounded-md py-2 px-5 font-semibold text-white`}
          disabled={loading}
        >
          <span>{!editCourse ? "Next" : "Save Changes"}</span>
          <MdNavigateNext />
        </button>
      </div>
    </form>
  );
}
