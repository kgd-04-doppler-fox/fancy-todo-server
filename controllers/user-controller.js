const {User} = require('../models')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken');
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);

class UserController{
    static async register(req, res, next){
        const {email, password} = req.body

        try {
            
            const user = await User.create({
                email, password
            })

            res.status(201).json({
                id: user.id,
                email: user.email
            })
        } catch (err) {
            next(err)
        }

    }

    static async login(req, res, next){
        const {email, password} = req.body

        try {
            
            const user = await User.findOne({
                where:{email}
            })
            if (user == null){
                throw{
                    name: 'Wrong email / password'
                }
            }
            else{
                const validePassword = bcryptjs.compareSync(password, user.password)

                if (validePassword){
                    const access_token = jwt.sign({
                        email: user.email,
                        id : user.id
                    }, process.env.JWT_SECRET)

                    res.status(200).json({access_token})

                }
                else{

                    throw{
                        name: 'Wrong email / password'
                    }
                }
            
            }

        } catch (err) {
            next(err)
        }
    }

    static async googleSignIn(req, res, next){
        const idToken = req.headers.id_token

        try {
            const ticket = await client.verifyIdToken({
                idToken,
                audience: process.env.CLIENT_ID,
            });
            const payload = ticket.getPayload();
            const email = payload.email
            
            const user = await User.findOne({
                where: {
                    email
                }
            })
            if (!user){
                const newUser = await User.create({
                    email,
                    password: process.env.NEW_USER_PASSWORD+(Math.floor(Math.random()*process.env.SPECIAL_NUMBER))
                })
    
                const access_token = jwt.sign({
                    email: newUser.email,
                    id : newUser.id
                }, process.env.JWT_SECRET)
    
              res.status(200).json({access_token})
            }
            else{
                
                const access_token = jwt.sign({
                    email,
                    id : user.id
                }, process.env.JWT_SECRET)
    
                res.status(200).json({access_token})
            }
        } catch (error) {
            next(error)
        }        
    }

}

module.exports = UserController