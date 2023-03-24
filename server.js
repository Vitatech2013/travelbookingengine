const express = require('express')
const app = express()
const port = 8528;

app.get('/', index);
app.get('/registration', userRegistration);
app.get('/adminlogin', adminLogin);
app.get('/userlogin', userLogin);
app.get('/admin', admin);
app.get('/user', user);
app.get('/mainhome', mainhome);

app.get('/admin/adminHomepage', adminHomepage);
app.get('/admin/addTours', adminAddTours);
app.get('/admin/viewTours', adminViewTours);
app.get('/admin/viewBooking', adminViewBooking);
app.get('/admin/veiwFeedback', adminVeiwFeedback);
app.get('/admin/changepassword', adminchangepassword);

app.get('/user/userhomepage', userhomepage);
app.get('/user/booking', userBooking);
app.get('/user/viewtours', userViewtours);
app.get('/user/viewbooking', userViewbooking);
app.get('/user/addfeedback', userAddfeedback);
app.get('/user/changepwd', userChangepwd);

function index(req, res) {
	res.sendFile("./index.html", { root: __dirname });
}
function mainhome(req, res) {
	res.sendFile("./MainHome.html", { root: __dirname });
}

function userRegistration(req, res) {
	res.sendFile("./registration.html", { root: __dirname });
}

function adminLogin(req, res) {
	res.sendFile("./admin.html", { root: __dirname });
}

function userLogin(req, res) {
	res.sendFile("./user.html", { root: __dirname });
}
function adminHomepage(req, res) {
	res.sendFile("Admin/AdminHomePage.html", { root: __dirname });
}

function admin(req, res) {
	res.sendFile("Admin/home.html", { root: __dirname });
}

function adminAddTours(req, res) {
	res.sendFile("Admin/addTours.html", { root: __dirname });
}

function adminViewTours(req, res) {
	res.sendFile("Admin/viewTours.html", { root: __dirname });
}

function adminViewBooking(req, res) {
	res.sendFile("Admin/viewBooking.html", { root: __dirname });
}

function adminVeiwFeedback(req, res) {
	res.sendFile("Admin/viewFeedBack.html", { root: __dirname });
}
function adminchangepassword(req, res) {
	res.sendFile("Admin/changePassword.html", { root: __dirname });
}



function user(req, res) {
	res.sendFile("User/home.html", { root: __dirname });
}
function userhomepage(req, res) {
	res.sendFile("User/UserHomepage.html", { root: __dirname });
}

function userBooking(req, res) {
	res.sendFile("User/addBooking.html", { root: __dirname });
}

function userViewtours(req, res) {
	res.sendFile("User/viewTours.html", { root: __dirname });
}

function userViewbooking(req, res) {
	res.sendFile("User/viewBooking.html", { root: __dirname });
}

function userAddfeedback(req, res) {
	res.sendFile("User/addFeedBack.html", { root: __dirname });
}

function userChangepwd(req, res) {
	res.sendFile("User/changePassword.html", { root: __dirname });
}



app.listen(port, () => console.log(`Server Started on ${port} Port Number`))
