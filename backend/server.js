require('dotenv').config() 
const cors = require('cors')
const express = require ('express'); 
const app = express(); 
const PORT = process.env.PORT || 3000; 
const connectToDB = require ('./config/connectToDB') 
connectToDB() 

const reminderController = require ('./controllers/reminderController') 
 
// //---------------------------------------Middleware
app.use(express.json())
app.use(cors({
    origin:true,
    credentials:true
}))
// app.get("/notifications", notificationsController.fetchnotifications); //{READ} 

// app.get("/notifications/:id", notificationsController.fetchNotication);// {READ}

app.use("/reminder", reminderController.createReminder); // {CREATE}

// app.put("/notifications/:id", notificationsController.updateNotification); //UPDATE}

// app.delete("/notifications/:id", notificationsController.deleteMNotification); {DELETE}

// -------------------------------------------------------[userRoutes]
// app.post('/api/users', usersController.create);
// app.post('api/users/login', usersController.login);
// app.get('api/users/check-token', ensureLoggedIn, usersController.checkToken)

// // Routes for Sessions
// app.use('/sessions', sessionRoutes);

// // Routes for Users
// app.use('/users', userRoutes);

// ------->------->-------> Server
app.listen (PORT, ()=> { 
    console.log (`Server is running on ${PORT}`); 
})