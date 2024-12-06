const mongoose = require('mongoose');

const AssessmentSchema = new mongoose.Schema({
  teacherId: mongoose.Types.ObjectId,
  templateId: mongoose.Types.ObjectId,
  content: {
    questions: Array,
    answers: Array,
    instructions: String,
  },
  settings: {
    mode: String,
    copies: Number,
    randomization: Object,
  },
});

module.exports = mongoose.model('Assessment', AssessmentSchema);
