import cloudinary from 'cloudinary'
import ImageSubmission from '../models/imageSubmissionModel.js';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY
});

  const submitImage = async(req, res) => {
      try {
          const {name, size, phone, description} = req.body;
          if(!req.file){
              return res.json({success: false, message:'Please Upload an image'});
          }
          if (!name || !size) {
            return res.status(400).json({ error: 'Fill all the parts' });
          }
          const result = await cloudinary.uploader.upload(req.file.path);
          const newImageSubmission = new ImageSubmission({
            imageUrl: result.secure_url,
            description,
            name,
            phone,
            size 
          });
          await newImageSubmission.save();
          res.json({success:true,  message: 'Image has submitted Successfully',data: newImageSubmission});

      } catch (error) {
          res.json({ success: false, message: error.message });
      }
  };

  const getImageSubmissions = async (req, res) => {
    try {
      const submissions = await ImageSubmission.find().populate('imageUrl name phone');
      res.json({ success: true, submissions });
    } catch (error) {
      console.log(error);
      res.json({ success: false, message: error.message });
    }
  };

  const updateSubmissionStatus = async (req, res) => {
    try {
      const {submissionId, status } = req.body;
      const submission = await ImageSubmission.findById(submissionId);
  
      if (!submission) {
        return res.json({ success: false, message: 'Submission not found' });
      }
  
      submission.status = status;
      await submission.save();
      res.json({ success: true, message: 'Submission status updated', submission });
    } catch (error) {
      console.log(error);
      res.json({ success: false, message: error.message });
    }
  };
 export {submitImage, getImageSubmissions,updateSubmissionStatus};