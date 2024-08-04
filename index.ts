import express from 'express'

const app = express();

const server = app.listen(3000,()=>
{
    console.log(`Local Node Server running at port 3000`);
})

