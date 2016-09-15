var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({

    storeName: String,
    commentId:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'stores' //Edit: I'd put the schema. Silly me.
  },
    title: String,
    comments: String
});



module.exports = mongoose.model("comment", CommentSchema);



//
//var query = req.query;
//       if (req.query.commentId) {
//           console.log("comment id : " + req.query.commentId)
//           console.log(req.body)
//           Blog.findById(req.params.id, function (err, post) {
//               if (err) {
//                   res.status(500).send(err);
//               } else {
//                   var comment = post.comments.id(req.query.commentId);
//                   comment.replies.push(req.body);
//                   post.save(function (err) {
//                       if (err) {
//                           res.status(500).send(err);
//                       } else {
//                           res.send(post);
//                       }
//                   })
//               }
//           });
//
//
//
//       }
//
//[6:40]  
//return $http.put('/api/blogs/' + id + '/?commentId=' + comment._id, {
//               'commentOnPost': comment.reply
//           });
//
//
//
//
//
//{
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'trainer' //Edit: I'd put the schema. Silly me.
//   }