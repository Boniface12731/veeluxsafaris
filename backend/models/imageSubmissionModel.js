import mongoose from 'mongoose'

const  imageSubmissionSchema  = new mongoose.Schema({
    imageUrl:{type: String, required:true},
    name: { type: String, required: true },
    phone: { type: String, required: true}, 
    size: { type: String, required: true, enum: ['A1', 'A2', 'A3'] },
    description: {type:String,  default:''},
    status:{type:String, default:'Pending'},
    dateSubmitted:{type: Date, default:Date.now}
});

const ImageSubmission = mongoose.models.imageSubmission || mongoose.model('ImageSubmission',imageSubmissionSchema);
export default ImageSubmission;