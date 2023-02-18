/* eslint-disable prettier/prettier */
const admin = require('firebase-admin')
const express = require('express')
const app = express()

var serviceAccount = require("./pushnotification-625e7-firebase-adminsdk-p6sf3-ab9473599e.json");
app.use(express.json())
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

// const message = {
//     notification:{
//         title:"new ad",
//         body:"new ad posted click to open"
//     },
//     token:"eJRZCfS2Tq-T20N-RgZFtS:APA91bHX8N0-C2tV_NeizVxddTfEnRoKQhIFzh56QXDF78qHbioziFJWsl-kTCLDLvrXB8GyrGpfuHJVY0b_crOMgioUZ9z6q9Af4GODY76p3J1jy58kIydYOLVVppjCrtRGjHws3KSd"
// }

// admin.messaging().send(message).then(res=>{
//        console.log('send success')
//     }).catch(err=>{
//         console.log(err)
//     });

app.post('/send-noti', (req, res) => {
    console.log(req.body)
    // const message = {
    //     notification: {
    //         title: "new ad",
    //         body: "new ad posted click to open"
    //     },
    //     tokens: req.body.tokens
    // }

    // admin.messaging().sendMulticast(message).then(res => {
    //     console.log('send success')
    // }).catch(err => {
    //     console.log(err)
    // })
})

app.listen(3000, () => {
    console.log('surver running')
})