const app = require("./app");
const db = require("./config/db");
const cors = require("cors");
app.use(cors());

const port = 3000;

app.get('./',(req,res)=>{
     res.send("hellosfdfsdadsafghj.....................fda");
});
app.listen(port,()=>{
console.log(`server listening in the port ${port}`);
});

