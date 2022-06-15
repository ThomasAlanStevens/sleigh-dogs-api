const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

const PORT = 8000

const sleighDogs = {
    'siberian husky': {
        'lifespan': ' years',
        'temperament': 'alert, friendly, gentle.',
        'weight': ' pounds',
        'image':'https://petkeen.com/wp-content/uploads/2021/05/Siberian-Husky-Dog.webp'
    },
    'chinook': {
        'lifespan': '12-15 years',
        'temperament': 'Gentle and friendly.',
        'weight': '55-90 pounds',
        'image': 'https://petkeen.com/wp-content/uploads/2021/07/chinook_rwtrahul_Shutterstock-e1626929709670.jpg'  
    },
    'canadian eskimo dog': {
        'lifespan': '10-15 years',
        'temperament': 'Affectionate, intelligent, alert.',
        'weight': ' pounds',
        'image': 'https://petkeen.com/wp-content/uploads/2021/06/canadian-eskimo-dog_Karen-Appleby_Shutterstock.webp'  
    },
    'labrador husky': {
        'lifespan': '10-15 years',
        'temperament': 'Lively, fun affectionate.',
        'weight': '60-100 pounds',
        'image': 'http://www.canaandogsofanacan.com/Divina_04feb19.jpg'  
    },
    'kugsha dog': {
        'lifespan': '12-14 years',
        'temperament': 'Intelligent and eager to please.',
        'weight': '100-130 pounds',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Czambor_jesie%C5%84.jpg'  
    },
    'alaskan malamute': {
        'lifespan': '10-12 years',
        'temperament': 'Affectionate, friendly, devoted.',
        'weight': '75-85 pounds',
        'image': 'https://petkeen.com/wp-content/uploads/2021/06/alaskan-malamute-in-the-forest_Tatyana-Kuznetsova_Shutterstock.webp'  
    },
    'greysther': {
        'lifespan': '10-15 years',
        'temperament': 'Calm, active, friendly',
        'weight': '60-80 pounds',
        'image': 'https://mallingdowndogs.co.uk/wp-content/uploads/2018/10/Screen-Shot-2018-10-24-at-09.04.16.png'  
    },
    'scandinavian hound': {
        'lifespan': '12-15 years',
        'temperament': 'Cheerful, friendly, watchful.',
        'weight': '20-35 pounds',
        'image': 'https://i.pinimg.com/originals/f8/80/d7/f880d74689cd7365731daaa379280e3b.jpg'  
    },
    'alaskan husky': {
        'lifespan': '10-15 years',
        'temperament': 'Intelligent, independent, eager to learn.',
        'weight': ' pounds',
        'image': 'https://petkeen.com/wp-content/uploads/2021/05/alaskan-husky-1.webp'  
    },
    'sakhalin husky': {
        'lifespan': '12-14 years',
        'temperament': 'Affectionate, alert, intelligent.',
        'weight': '65-90 pounds',
        'image': 'https://doglime.com/wp-content/uploads/2020/04/The-Rare-Sakhalin-Husky-Dog.jpg'  
    },
    'greenland dog': {
        'lifespan': '10-14 years',
        'temperament': 'Independent, quiet, well mannered.',
        'weight': '60-100 pounds',
        'image': 'https://petkeen.com/wp-content/uploads/2021/05/greenland-dog-pixabay.webp'  
    },
    'mackenzie river husky': {
        'lifespan': '12-15 years',
        'temperament': 'Dominant, eager, intelligent.',
        'weight': '65-105 pounds',
        'image': 'https://i.pinimg.com/originals/c1/44/84/c144844d6b6eda26e81668088651a3b0.jpg'  
    },
    'samoyed': {
        'lifespan': '12-14 years',
        'temperament': 'Vocal, affectionate, intelligent.',
        'weight': '35-65 pounds',
        'image': 'https://www.akc.org/wp-content/uploads/2017/11/Samoyed-standing-in-the-forest.jpg'  
    },
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})



app.get('/api', (req, res) => {
    res.json(sleighDogs)
})

app.get('/api/:dogBreed', (req, res) => {
    const dogsBreed = req.params.dogBreed.toLowerCase()
    console.log(dogsBreed)
    if(sleighDogs[dogsBreed]){
        res.json(sleighDogs[dogsBreed])
    }
    else{
        res.status(404).end()
    }
})

app.listen(process.env.PORT || PORT, () =>{
    console.log(`The server is running!`)
})