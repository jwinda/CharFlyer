import { Schema, models, model } from 'mongoose';

const IntroductionPostsSchema = new Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      required: true,
      maxlength: 50,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      maxlength: 100,
    },
    category: {
      type: String,
      required: true,
    },
    tags: {
      type: Array<String>,
    },
    views: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// models에서 IntroductionPost가 이미 있는지 확인합니다.
// 확인 후 생성되지 않았다면, model을 통해 IntroductionPost 모델을 생성합니다.
const IntroductionPost =
  models?.IntroductionPost ||
  model('IntroductionPost', IntroductionPostsSchema);

export default IntroductionPost;
