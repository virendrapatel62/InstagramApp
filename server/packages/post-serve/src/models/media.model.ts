import mongoose, { Schema } from 'mongoose';
import { dbCollectionNames, mediaTypes } from '../config';
import { IMedia } from './types';

const mediaSchema = new Schema<IMedia>(
  {
    mediaType: {
      type: Number,
      enum: [mediaTypes.image, mediaTypes.video],
      required: true,
    },
    mediaUrl: {
      type: String,
      required: true,
    },
    mediaDeleteUrl: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model<IMedia>(dbCollectionNames.media, mediaSchema);
