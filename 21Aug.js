const placeorder = (callback) => {
    setTimeout(()=>{
        console.log("order placed");
        callback();
    },2000);
};
const startProduction = (callback) => {
    setTimeout(()=>{
        console.log("production started");
        callback();
    },5000);
};
const printID = (callback) => {
    setTimeout(()=>{
        console.log("Id printed sucessfully");
        callback();
    },3000);
};
const productName = (callback) => {
    setTimeout(()=>{
        console.log("bornvita");
        callback();
    },3000);
};
const productDesc= (callback) => {
    setTimeout(()=>{
        console.log("bohat bhadiya doodh me milaao pii jaoo");
        callback();
    },4000);
};






















console.log('Ordering Product .......................................');
placeorder()
   .then(()=>{
             console.log("production is in progress............")
             return startProduction();
   })
   .then(()=>{
    console.log("printing id......")
    return printID();
   })
   .then(()=>{
    console.log("production is in progress............")
    return productName();
   })
   .then(()=>{
    console.log("production is in progress............")
    return productDesc();
   })
   .catch((error) =>{
    console.log("ERRORRRRRRRR",error)
   }) 


