import express from 'express';
import multer from 'multer';
import { submitImage, getImageSubmissions, updateSubmissionStatus } from '../controllers/imageSubmissionController.js';
import adminAuth from '../middleware/adminAuth.js';

const imageRouter = express.Router();

const storage = multer.diskStorage({
    filename: (req, file, callback) => {
      callback(null, Date.now() + '-' + file.originalname);
    },
  });

const upload = multer({ storage });

imageRouter.post('/submit', upload.single('image'), submitImage);

// Admin feature: View all submissions
imageRouter.get('/submissions', adminAuth, getImageSubmissions);

// Admin feature: Update submission status
imageRouter.post('/status', adminAuth, updateSubmissionStatus);

export default imageRouter;



