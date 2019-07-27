import express from 'express';
import bodyParser from 'body-parser';
import {MongoClient} from 'mongodb';
const app =express();


app.use(bodyParser.json());

app.get("/api/articles/:name", async(req,res)=>{
    try{
    const articleName = req.params.name;
  const client=await  MongoClient.connect('mongodb://localhost:27017',{useNewUrlParser:true})
    const db =client.db('fullstack')
    const articleInfo = await (db.collection('articles').findOne({name:articleName}))
    res.status(200).json(articleInfo)
    client.close()
    }catch( e ){
        res.status(500).json({message:'error'});
       
   
        
    }
})

app.post("/api/articles/:name/upvote",async(req,res)=>{
        const articleName = req.params.name   
        const client=await  MongoClient.connect('mongodb://localhost:27017',{useNewUrlParser:true})
        const db =client.db('fullstack')
        const articleInfo = await db.collection('articles').findOne({name:articleName});
         await db.collection('articles').updateOne({name:articleName},
                        '$set': {
                            upvotes:articleInfo.upvotes+1
                            });
})

app.post("/api/articles/:name/comment",(req,res)=>{
    const articleName =req.params.name;
    const {username,text} =req.body;
    articleInfo[articleName].comments.push({username,text})
    res.status(200).send(articleInfo[articleName])
})

app.listen(8000,()=>{
    console.log("app is listening")
})
