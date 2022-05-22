var mongoose = require('mongoose');

var ProfessorSchema = mongoose.Schema(
    {
        name: { type: String, required: true, max: 100 },
        university: { type: String, required: true, max: 150},
        degree: { type: String, required: true, max: 100 },
    }
);

var ProfessorModel = mongoose.model('Professors', ProfessorSchema)

module.exports = ProfessorModel