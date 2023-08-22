async function fetchdata(){
    try{
        const url= ""
      const response =await fetch(url)
      const data = response.json();
      console.log(data)
    }
}