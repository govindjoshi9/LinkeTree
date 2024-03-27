// import { v2 as cloudinary } from "cloudinary";
// import uniqid from "uniqid";
// export async function POST(req) {
//     const formData = await req.formData();
//     if (formData.has("file")) {
//         const file = formData.get("File");
//         console.log(file);

//     cloudinary.config({
//       cloud_name: process.env.CLOUD_NAME,
//       api_key: process.env.CLOUD_API_KEY,
//       api_secret: process.env.CLOUD_API_SECRET,
//     });

//     cloudinary.uploader.upload(
//       file,
//       { public_id: `uploads/${uniqid()}` },
//       function (error, result) {
//         console.log(result);
//       }
//     );

//     const rendomId = uniqid();
//     const ext = file.name.split(".").pop();
//     const newFilename = rendomId + "." + ext;
//     console.log(newFilename);

//     return Response.json(true);
//   }
// }
// pages/api/upload.js
// src/app/api/upload/route.js
// src/app/api/upload/route.js



const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const uniqid = require('uniqid');

// Configure multer for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Store uploaded files in the 'uploads' directory
  },
  filename: function (req, file, cb) {
    cb(null, uniqid() + '-' + file.originalname); // Generate a unique filename
  }
});

const upload = multer({ storage: storage });

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
});

// Define the API route handler for the POST method
export async function POST(req, res) {
  try {
    if (!req.file) {
      return res.json({ success: false, error: "No file uploaded" }); // Return JSON directly
    }

    // Upload the file to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'uploads' // Specify the folder in Cloudinary where you want to store the uploaded files
    });

    console.log("File uploaded to Cloudinary:", result);

    // Optionally, you can delete the local file after uploading to Cloudinary
    // fs.unlinkSync(req.file.path);

    return res.json({ success: true, result }); // Return JSON directly
  } catch (error) {
    console.error("Error uploading file:", error);
    return res.json({ success: false, error: "Error uploading file" }); // Return JSON directly
  }
}
