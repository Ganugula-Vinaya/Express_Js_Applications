//step1: creating express ref, setting up port
const express=require('express');
const app=express();
const PORT=3000;

//step2: middleware to parse JSON request body
app.use(express.json());


//step3: GET route - root
app.get('/',(req,res)=>{
    res.send('welcome to express');
});

//step4: POST route-accepts JSON data
app.post('/data',(req,res) => {
    res.json({
        message:'data received successfully',
        YourData:req.body
    });
});

//step5: PUT route-update data
app.put('/update',(req,res)=>{
    res.json({
        message:'data updated successfully',
        YourData: req.body
    });
});

//step6: DELETE route
app.delete('/delete',(req,res)=>{
    res.json({
        message:'data deleted successfully'});
});


//step7: dynamic route with url parameter
app.get('/users/:id', (req, res) => {
    res.json({ message: `user Id is ${req.params.id}` }); // <-- BACKTICKS!
});

//Step 8: Start the server 
    
app.listen(PORT,() => {
    console.log(`Server is running at http://localhost:${PORT}`);
});


