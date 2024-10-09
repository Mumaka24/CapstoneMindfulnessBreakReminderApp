require('dotenv').config() 
const express = require ('express'); 
const app = express(); 
const PORT = process.env.PORT || 3000; 
const connectToDB = require ('./config/connectToDB') 
connectToDB() 
// //-------------------------------------------Routes

// app.get("/notifications", notificationsController.fetchnotifications);
// // +++++++++++++ {READ} ++++++++++++++

// app.get("/notifications/:id", notificationsController.fetchNotication);
// // +++++++++++++ {READ} ++++++++++++++

// app.post("/notifications", notificationsController.createNotification);

// // +++++++++++++ {CREATE} ++++++++++++++
// app.put("/notifications/:id", notificationsController.updateNotification);
// // +++++++++++++ {UPDATE} ++++++++++++++

// app.delete("/notifications/:id", notificationsController.deleteMNotification);
// // +++++++++++++ {DELETE} ++++++++++++++
// // -------------------------------------------------------[userRoutes]
// app.post('/api/users', usersController.create);
// app.post('api/users/login', usersController.login);
// app.get('api/users/check-token', ensureLoggedIn, usersController.checkToken)


// ------->------->-------> Server
app.listen (PORT, ()=> { 
    console.log (`Server is running on ${PORT}`); 
})