
// establish data structure for (Schema) for a particular model
// This schema stores notifications sent to users regarding their reminders
const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    reminder: {
        type: String
    },
       body: String,

    });
//     user: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User',
//         required: true,
//     },
//     sentAt: {
//         type: Date,
//         default: Date.now,
//     },
// });

// module.exports = mongoose.model('Notification', notificationSchema);
const Note = mongoose.model("Notification", noteSchema);
module.exports = Notification;