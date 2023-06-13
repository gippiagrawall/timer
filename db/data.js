const mongoose = require('mongoose')

const time = new mongoose.Schema({
    Total_study_hours : String,
    Date : String
})

const studyHour = mongoose.model('studyHour',time)

module.exports = studyHour;