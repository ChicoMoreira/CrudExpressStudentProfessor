var mongoose = require('mongoose');

var StudentSchema = mongoose.Schema(
    {
        name: { type: String, required: true, max: 100 },
        course: { type: String, required: true, max: 100 },
        ira: { type: Number, required: true},
    }
);

var StudentModel = mongoose.model('Students', StudentSchema)

module.exports = StudentModel