import mongoose, { Schema, Document } from 'mongoose';

export type TMediaTypeImage = 0;
export type TMediaTypeVideo = 1;

export interface IMedia extends Document {
  mediaType: TMediaTypeImage | TMediaTypeVideo;
  mediaUrl: string;
  mediaDeleteUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface IPost extends Document {
  caption: string;
  allowLinks: boolean;
  allowComments: boolean;
  media: mongoose.Types.ObjectId[] | IMedia[];
  user: mongoose.Types.ObjectId | null;
  createdAt: Date;
  updatedAt: Date;
}
