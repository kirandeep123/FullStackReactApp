import express from 'express';
import bodyParser from 'body-parser';
import {MongoClient} from 'mongodb';
const app =express();


app.use(bodyParser.json());

const withDB =async(operations,res) =>{
    try{
      const client=await  MongoClient.connect('mongodb://localhost:27017',{useNewUrlParser:true})
        const db =client.db('fullstack')
      await  operations(db)
        client.close()
        }catch( e ){
           res.status(500).json({message:'error'});
             }
}
app.get("/api/articles/:name", async(req,res)=>{
 withDB(async(db) =>{
    const articleName = req.params.name;
 
    const articleInfo = await (db.collection('articles').findOne({name:articleName}))
    res.status(200).json(articleInfo)
 },res)
   
})

app.post("/api/articles/:name/upvote",async(req,res)=>{
    withDB(async(db )=>{
        const articleName = req.params.name;

       
        const articleInfo = await db.collection('articles').findOne({name:articleName});
         await db.collection('articles').updateOne({name:articleName},
            {
                '$set':{
                    upvotes:articleInfo.upvotes+1
                }
            });
            const updatedArticleInfo = await db.collection('articles').findOne({name:articleName});
            res.status(200).json(updatedArticleInfo)
    },res)
       
})
app.post("/api/articles/:name/comment",(req,res)=>{
    const articleName =req.params.name;
    const {username,text} =req.body;
    withDB( async(db)=>{
        
        const articleInfo = await db.collection('articles').findOne({name:articleName});
        await db.collection('articles').updateOne({name:articleName},
            {
                '$set':{
                    comments:articleInfo.comments.concat({username,text})
                }
            });
            const updatedArticleInfo = await db.collection('articles').findOne({name:articleName});
            res.status(200).json(updatedArticleInfo)
    },res)
   
   
})

app.listen(8000,()=>{
    console.log("app is listening")
})
