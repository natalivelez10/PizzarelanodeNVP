const { Router } = require('express');
const router = Router();
const admin=require('../configFirebase')

  
  let db = admin.firestore();

//gets

router.get('/',(req,res)=>{

    res.render('index')
})


router.get('/menu',(req,res)=>{
    res.render('menu')
})

router.get('/nosotros',(req,res)=>{
    res.render('sobreNosotros')
})

router.get('/sucursales',(req,res)=>{
    res.render('sucursales')
})

router.get('/login',(req,res)=>{
    res.render('login')
})

router.get('/crearcuenta',(req,res)=>{
    res.render('createAccount')
})


//posts

router.post('/crearcuenta',(req,res)=>{
    console.log(req.body)
    db.collection('algo').doc('12344').set(req.body)
    .then(()=>{
        console.log('dato almacenado')
    })
})

module.exports=router;