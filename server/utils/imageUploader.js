import cloudinary from "cloudinary";

export const uploadImageToCloudinary = async (file, folder) => {
  try {
    const options = { folder, resource_type: "auto" };

    return await cloudinary.v2.uploader.upload(file, options);
  } catch (error) {
    console.log(error);
  }
};
