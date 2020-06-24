var mongoose = require('./connection')

var citySchema = mongoose.Schema({
    name: String,
    desc: String,
    img: String,
    temp_min: Number,
    temp_max: Number,
    lat: Number,
    lon: Number,
})

var cityModel = mongoose.model('cities', citySchema)

module.exports = cityModel;