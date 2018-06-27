
let users = [{ email: 'pugster@malone', password: 'cheddarcheese', loginAttempts: 0 }, { email: 'thedame@tails', password: 'pawicure', loginAttempts: 0 }, { email: 'ratty@tails', password: 'ratchaser', loginAttempts: 0 }]


authenticate = (req, res, next) => {

    let currentuser = users.filter(user => user.email === req.body.email)[0] 
    
    let index = users.findIndex(user => user.email === req.body.email)
    console.log(users[index].loginAttempts)

    

    req.session.loggedIn = req.session.loggedIn || false
    
    req.session.loginAttempts = req.session.loginAttempts || users[index].loginAttempts


    if (req.body.password === currentuser.password && req.body.agree === 'on') {
        req.session.loggedIn = true
        users[index].loginAttempts = 0

    } else {
        // req.session.loginAttempts += 1
        users[index].loginAttempts += 1
        req.session.loginAttempts = users[index].loginAttempts
        req.session.loggedIn = false
    }
    next()
}

module.exports = authenticate