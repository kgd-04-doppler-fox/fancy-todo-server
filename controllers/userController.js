const {User} = require('../models')
const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const { verifyToken , generateToken } = require('../helper/jwt')


class UserController {
    static async register (req, res, next) {
        const {email, password} = req.body
        try {
            const user = await User.create({
                email,
                password
            })
            res.status(201).json({
                id : user.id,
                email : user.email
            })
        } catch (error) {
            next(error)
        } {

        }
    }

    static async login (req, res, next) {
        const {email, password} = req.body
        try {
            const user = await User.findOne({ // nyari username dengan email tersebut di database
                where : {
                    email
                }
            })
            // console.log(user);

            if(user === null) { // kalau misalnya abis dicari didatabase nggak ada, brarti null, brarti lempar error ke catch next(err)
                throw {
                    name : "Wrong email / password"
                }
            }

            const validPassword = bcryptjs.compareSync(password, user.password) // membandingkan req.body password dengan hasil hash yang
                                                                              // didatabase

            if(validPassword){ // kalau validPass nya true , brarti hasil compare nya sesuai dan cocok, brarti user bisa dikirimin token
                // console.log(validPassword);
                const access_token = jwt.sign({
                    email : user.email,
                    id : user.id
                }, process.env.JWT_SECRET)

                console.log(access_token);

                res.status(200).json({
                    access_token
                })
            }
        } catch (error) {
            next(error)
        }

    }

    static googleSign (req, res, next) {
        let email = null
        client.verifyIdToken({
            idToken: req.body.tokenGoogle,
            audience: process.env.GOOGLE_CLIENT_ID, 
        })
        .then(ticket => {
            let payload = ticket.getPayload()
            email = payload.email
            
            return User.findOne({
                where : {
                    email
                }
            }) // kenapa direturn? karena biar gak promise hell, jadi harus di return dan dioper ke 
                // then berikutnya setelah then yang inih
        })
        .then(user => {
            if(user){
                return user // kalau didatabase udah ada usernya , yaudah yang direturn yang ada didatabase
            } else {
                User.create({ // kalau belom ada, yaudah didaftarin dulu, tapi make password yang buat sendiri
                    // 
                    email,
                    password: "passwordbikinsendiri"
                })
            }
        })
        .then(user => {
            const access_token = jwt.sign({
                email : user.email,
                id : user.id
            }, process.env.JWT_SECRET)
            res.status(200).json({access_token})
        })
        .catch(err => {
            next(err);
        })
    }
}

module.exports = UserController

/*
jadi yang diverifikasi kan ada 2 tuh yang harus dimasukin,
1. idToken ---> tokenGoogle (token dari google setelah kita ngeklik sign in pake button google)
2. audience ---> ini GOOGLE CLIENT ID , jadi kayak dicocokin nih, sama gak CLIENT ID dari google,
sama si idToken dari google yang dikasih, kalau cocok , nanti keluar payload di terminal 
kayak gini:

{
  iss: 'accounts.google.com',
  azp: '602459969942-e8uikbks5f702fej52hel9utgr4ph5uk.apps.googleusercontent.com',
  aud: '602459969942-e8uikbks5f702fej52hel9utgr4ph5uk.apps.googleusercontent.com',
  sub: '101423377883166556630',
  email: 'dirabbieto@gmail.com',
  email_verified: true,
  at_hash: '2z9-vQ6OWRu4zYgdKJyIdQ',
  name: 'Ardira Fariz Pasha',
  picture: 'https://lh3.googleusercontent.com/a-/AOh14GjEoEBi870qYO4ZNOqZRAqPU3w6I8CEpy-NSDz6NA=s96-c',
  given_name: 'Ardira Fariz',
  family_name: 'Pasha',
  locale: 'en',
  iat: 1601696696,
  exp: 1601700296,
  jti: 'a6f32afef1af731f9f6d7b9403fe4b2e76a2aa02'
}

kan nanti yang akan dipake untuk login/sign in itu si email,
jadinya nanti 

*/