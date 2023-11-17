import { Category } from "../models/categoryModel.js";
import { User } from "../models/userModel.js";
import { uploadImageToCloudinary } from "../utils/imageUploader.js";

export const createCourse = async (req, res) => {
  try {
    const userId = req?.user?._id;
    const {
      courseName,
      courseDescription,
      whatYouWillLearn,
      price,
      tag: _tag,
      category,
      status,
      instructions: _instructions,
    } = req.body;

    const thumbnail = req?.files?.thumbnailImage;

    const tag = JSON.parse(_tag);
    const instructions = JSON.parse(_instructions);

    if (
      !(
        courseName &&
        courseDescription &&
        whatYouWillLearn &&
        price &&
        tag.length &&
        thumbnail &&
        category &&
        instructions.length
      )
    ) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required." });
    }

    if (!status || status === undefined) {
      status = "Dreaft";
    }

    const instructorDetails = await User.findById(userId, {
      accountType: "Instructor",
    });

    if (!instructorDetails) {
      return res.status(404).json({
        success: false,
        message: "Instructor Details Not Found",
      });
    }

    const categoryDetails = await Category.findById(category);
    if (!categoryDetails) {
      return res.status(404).json({
        success: false,
        message: "Category Details Not Found",
      });
    }

    const thumbnailImage = await uploadImageToCloudinary(
      thumbnail,
      process.env.CLOUDINARY_FOLDER_NAME
    );

    const newCourse = await Course.create({
      courseName,
      courseDescription,
      instructor: instructorDetails._id,
      whatYouWillLearn: whatYouWillLearn,
      price,
      tag,
      category: categoryDetails._id,
      thumbnail: thumbnailImage.secure_url,
      status: status,
      instructions,
    });

    await User.findByIdAndUpdate(
      {
        _id: instructorDetails._id,
      },
      {
        $push: {
          courses: newCourse._id,
        },
      },
      { new: true }
    );

    await Category.findByIdAndUpdate(
      { _id: category },
      {
        $push: {
          courses: newCourse._id,
        },
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      data: newCourse,
      message: "Course Created Successfully",
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error." });
  }
};
