const express = require('express');
const router = express.Router();
const { createAssessment, getAssessments } = require('../controllers/assessmentController');

router.post('/create', createAssessment);
router.get('/list', getAssessments);

module.exports = router;
