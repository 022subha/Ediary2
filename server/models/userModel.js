import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
    },
    googleId: {
      type: String,
    },
    accountType: {
      type: String,
      enum: ["Admin", "Student", "Instructor"],
      default: "Student",
    },
    active: {
      type: Boolean,
      default: true,
    },
    additionalDetails: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Profile",
    },
    courses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
    token: {
      type: String,
    },
    resetPasswordExpires: {
      type: Date,
    },
    image: {
      type: String,
      default: function () {
        return `https://api.dicebear.com/5.x/initials/svg?seed=${this.firstName} ${this.lastName}`;
      },
    },
    courseProgress: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "courseProgress",
      },
    ],
  },
  { timestamps: true }
);

userSchema.path("password").validate(function (value) {
  return value || this.googleId;
});

userSchema.path("googleId").validate(function (value) {
  return value || this.password;
});

export const User = mongoose.model("User", userSchema);
