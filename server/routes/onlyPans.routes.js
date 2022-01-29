// const ProjectController = require('../controllers/projectManager.controllers')
const UserController = require("../controllers/user.controller");
const {authenticate} = require("../config/jwt")
//replace names for current project
module.exports = app => {
    // app.post("/api/project/new", ProjectController.addProjectManager)
    // app.get("/api/project", ProjectController.showAllProjectManager)
    // // app.get("/api/project/:id" , ProjectController.showOneProject)
    // app.put("/api/project/update/:id" , ProjectController.updateExistingProject)
    // app.delete("/api/project/delete/:id" , ProjectController.deleteProject)

    app.post("/api/register", UserController.register);
    app.get('/api/users', UserController.findAllUsers)
    app.delete("/api/user/delete/:id", UserController.deleteUser)
    app.post("/api/login", UserController.login);
    app.get("/api/users/getloggedinuser", authenticate, UserController.getLoggedInUser);
    app.get("/api/logout", UserController.logout)
    app.get('/api/users/email/:email',  UserController.findOneUserByEmail);

}