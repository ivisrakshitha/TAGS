const Assessment = require('../models/Assessment');

exports.createAssessment = async (req, res) => {
  const { teacherId, templateId, content, settings } = req.body;

  try {
    const assessment = new Assessment({ teacherId, templateId, content, settings });
    await assessment.save();
    res.status(201).json({ message: 'Assessment created successfully', assessment });
  } catch (err) {
    res.status(500).json({ message: 'Error creating assessment', error: err.message });
  }
};

exports.getAssessments = async (req, res) => {
  try {
    const assessments = await Assessment.find();
    res.status(200).json(assessments);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving assessments', error: err.message });
  }
};
