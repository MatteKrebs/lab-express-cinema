const { model, Schema } = require("mongoose");

const movieSchema = new Schema({
  title: {
    type: String,
    required: true
},
director: {
    type: String,
    required: true
},
stars: {
    type: [String],
    required: true
},
image: {
    type: String,
    required: true
},
description: {
    type: String,
    required: true
},
showtime: {
    type: [String],
    required: true
}

});



module.exports = model("Movie", movieSchema);

