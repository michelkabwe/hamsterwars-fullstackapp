const getDatabase = require('../database.js')
const db = getDatabase() 
// Ger hamster.js tillgång till databasen


const express = require('express');
const router = express.Router();




//GET 

router.get('/', async (req, res) => {
console.log('server hamsters.js GET /');

   try {

       const hamstersRef = db.collection('hamsters'); //referens till hamstersi db
       const snapshot = await hamstersRef.get(); //snapchot ger en överblick av databasen
       if (snapshot.empty) {
           res.send([]);
           return;
           
       }
       let hamsters = [];
       snapshot.forEach(document => {
           const data = document.data();  //plockar ut data
           data.id = document.id   //för varje dokument plockar vi ut data och pushar till en tillfällig array..
           hamsters.push(data); //Skickar  data till forntend..

       });
       res.send(hamsters);
   } catch (err) {
       res.status(500).send(err.message)
   }
})

//GET/gallery/

router.get('/gallery', async (req, res) => {
    console.log('server hamsters.js GET /gallery');
    
       try {
    
           const hamstersRef = db.collection('hamsters'); //referens till hamstersi db
           const snapshot = await hamstersRef.get(); //snapchot ger en överblick av databasen
           if (snapshot.empty) {
               res.send([]);
               return;
               
           }
           let hamsters = [];
           snapshot.forEach(document => {
               const data = document.data();  //plockar ut data
               data.id = document.id   //för varje dokument plockar vi ut data och pushar till en tillfällig array..
               hamsters.push(data); //Skickar  data till forntend..
    
           });
           res.send(hamsters);
       } catch (err) {
           res.status(500).send(err.message)
       }
    })

//GET/battle/

router.get('/gallery', async (req, res) => {
    console.log('server hamsters.js GET /gallery');
    
       try {
    
           const hamstersRef = db.collection('hamsters'); //referens till hamstersi db
           const snapshot = await hamstersRef.get(); //snapchot ger en överblick av databasen
           if (snapshot.empty) {
               res.send([]);
               return;
               
           }
           let hamsters = [];
           snapshot.forEach(document => {
               const data = document.data();  //plockar ut data
               data.id = document.id   //för varje dokument plockar vi ut data och pushar till en tillfällig array..
               hamsters.push(data); //Skickar  data till forntend..
    
           });
           res.send(hamsters);
       } catch (err) {
           res.status(500).send(err.message)
       }
    })



//GET/RANDOM/hamsters

router.get('/random', async (req, res) => {
   try {
       const hamstersRef = db.collection('hamsters')
       const snapshot = await hamstersRef.get()
      

       if (snapshot.empty) {
           res.status(404).send([])
           return
       }

       let items = []
       snapshot.forEach(doc => {
           const data = doc.data()
           items.push(data)
       });
       let randomIndex = Math.floor(Math.random() * items.length);

       res.status(200).send(items[randomIndex])
   } catch {
       res.status(500)
   }
})

//GET:id

router.get('/:id', async (req, res) => {
   try {

       const id = req.params.id;
       const docRef = await db.collection('hamsters').doc(id).get();
      
     

       if (!docRef.exists) {
           res.status(404).send('Sorry, Specific hamster does not exist!');
           return;
       }

       const data = docRef.data();
       res.send(data);
   } catch {
       res.status(500)
   }
});




router.get('static', async (req, res) => {

   try {

   console.log('GET /:id')
   const id = req.params.id
   for (const item of dataBase){
      if(item.id == id) {
         res.send(item) 
         return;  
      } 
   } 
   console.log("this is a third  message")
   res.status(404).send("The hamster you're looking for does not exist")
} catch (err) {
   res.status(500).send(err.message)
}
  
})

//POST 

router.post('/', async (req, res) => {

   try {

       const object = req.body;

       if (isHamsterObject(object)) {
           res.sendStatus(400);
           return;
       }
       const docRef = await db.collection('hamsters').add(object);
       res.send({ id: docRef.id });
   } catch (err) {
       res.status(500).send(err.message)
   }
})


//PUT
router.put('/:id', async (req, res) => {
   try {

       const id = req.params.id;
       const object = req.body;

       let docRef = await db.collection('hamsters').doc(id).get();

       if (isHamsterObject(object) || !Object.keys(object).length) {
           res.sendStatus(400);
           return;
       } else if (!docRef.exists) {
           res.sendStatus(404);
           return;
       }
       await db.collection('hamsters').doc(id).set(object, { merge: true });
       res.sendStatus(200);
   } catch (err) {
       res.status(500).send(err.message)
   }
});

//DELETE /hamsters/:id

router.delete('/:id', async (req, res) => {
   try {

       const id = req.params.id;
       const docRef = await db.collection('hamsters').doc(id).get();
       console.log(id , ' this is an id');

       if (!docRef.exists) {
           res.sendStatus(404);
           return;
       }

       if (!id) {
           res.sendStatus(400);
           return;
       }

       await db.collection('hamsters').doc(id).delete();
       res.sendStatus(200);
   } catch (err) {
       res.status(500).send(err.message)
   }
});

function isHamsterObject(hamster) {
   if (!hamster) {
       return false;
   } else if (!hamster.name || !hamster.age || !hamster.favFoods || !hamster.loves || !hamster.imgName || !hamster.wins || !hamster.defeats || !hamster.games) {
       return false;
   } else {
       return true;
   }
}


module.exports = router



