import mongoose, { Schema } from 'mongoose';
import { dbCollectionNames } from '../config';
import { IPost } from './types';

const postSchema = new Schema<IPost>(
  {
    caption: {
      type: String,
      default: '',
    },
    allowLikes: {
      type: Boolean,
      default: true,
    },
    allowComments: {
      type: Boolean,
      default: true,
    },
    media: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: dbCollectionNames.media,
      },
    ],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: dbCollectionNames.user,
      default: null,
    },
  },
  { timestamps: true }
);

export default mongoose.model<IPost>(dbCollectionNames.post, postSchema);
