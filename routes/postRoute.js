const express = require('express');
const router = express.Router();
const Post = require('../models/post');
const _ = require('lodash');

router.get('/posts', function(req , res, next){
  Post.find({}, (err, posts) => {
    if(err){
      res.json({success:false, message: 'cant not get all posts'});
    } else {

      // let finalDiners = diners.map((obj) => {
      //   return _.pick(obj, ['_id', 'name', 'info', 'times', 'pic']);
      // });

      res.json(posts);
    }
  })
});


router.post('/post', function(req, res, next){
  let post = req.body;
  console.log(req.body);
  Post.create(post, function(err , post){
    if(err){
      res.json({success: false, err: err});
    } else {
      res.json({success: true, post : post});
    }
  })
});

// router.get('/diner/:id', function(req, res, next){
//   let id = req.params.id;
//   Diner.findOne({_id: id}, (err, diner) => {
//     if(err){
//       res.json({success: false, message: "cant find such diner"});
//     } else {
//       res.json(diner);
//     }
//   });
// })
//
// router.get('/address/:add', function(req, res, next){
//   let add = req.params.add;
//   console.log(add);
//   let arr = add.split('');
//   res.send(arr);
// })
module.exports = router;
