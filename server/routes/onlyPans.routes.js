// const ProjectController = require('../controllers/projectManager.controllers')
const UserController = require("../controllers/user.controller");
const RecipeController = require('../controllers/onlyPans.controllers');
const { authenticate } = require("../config/jwt")

const CLIENT_URL=process.env.CLIENT_URL
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)
//replace names for current project
module.exports = app => {
        // recipe
        app.get('/api/recipe', RecipeController.getRecipe);
        app.post('/api/recipe/new', RecipeController.createRecipe);
        app.get('/api/recipe/:id', RecipeController.getOneRecipe);
        app.put('/api/recipe/edit/:id', RecipeController.updateRecipe);
        app.delete('/api/recipe/:id', RecipeController.deleteRecipe);
    // users
    app.post("/api/register", UserController.register);
    app.get('/api/users', UserController.findAllUsers)
    app.delete("/api/user/delete/:id", UserController.deleteUser)
    app.post("/api/login", UserController.login);
    app.get("/api/users/getloggedinuser", authenticate, UserController.getLoggedInUser);
    app.get("/api/logout", UserController.logout)
    app.post('/api/google/login', UserController.googleLogin)
    app.put('/api/user/update/:id',UserController.updateUser)
    // subscriptions
    // app.post("/api/create-checkout-session", async (req, res) => {
    //     try {
    //       const session = await stripe.checkout.sessions.create({
    //         line_items: [
    //             {
    //               // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
    //               price:'price_1KNSJrKhZMSaEpADbgJVgeiZ',
    //               quantity: 1,
    //             },
    //           ],
    //         payment_method_types: ["card"],
    //         mode: "subscription",
            
    //         success_url: `${CLIENT_URL}/success`,
    //         cancel_url: `${CLIENT_URL}/checkout`,
    //       })
    //       res.json({ url: session.url })
    //     } catch (e) {
    //       res.status(500).json({ error: e.message })
    //     }
    //   })
      // stripe.subscriptions.update('sub_49ty4767H20z6a', {cancel_at_period_end: true});
}