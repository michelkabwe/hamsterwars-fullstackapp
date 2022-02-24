const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const hamsters = require('./routes/hamsters.js')



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/build/', index.html))  //backa ut backend och in i bild
})


//const PORT = 1387
const PORT = process.env.PORT||3000
const buildFolder = path.join(__dirname, '/build')
//const staticFolder = path.join(__dirname, 'static')

app.use(express.static(buildFolder))

// Egen middleware funktion
app.use((req, res, next) => {
	// Logger - ska skriva ut information om det request som kommer, bra för att veta vad som händerpå webservern
	console.log(`${req.method} ${req.url}`, req.params);
	next()
})

// Middleware läggs alltid FÖRE endpoints
app.use(express.json()) // ehövs för att skicka data till request body. Om jag vill lägg till ett objet behövs denna! Glömmer man så kommer request body vara tom
app.use(cors())
//app.use(express.static(staticFolder))
//app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded




app.use('/hamsters', hamsters)  // alla request som börjar på hamster kommer behandlas av hamster modulen
 // alla request som börjar på hamster kommer behandlas av hamster modulen






//Startar servern 
app.listen(PORT, () => {
    console.log('Server is listeninhg on port ' + PORT)
})