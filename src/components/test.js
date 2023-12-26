const axios = require("axios");
const url1  = "https://jsonplaceholder.typicode.com/posts/"
const url2 = "https://jsonplaceholder.typicode.com/comments"
 const fetching = async ()=>{
    const data = await axios.get(url1);
    // console.log(data.data);

    const d1 = data.data.filter((e)=>e.userId==8)
    // console.log(d1);

    const data2 = await axios.get(url2);
    const d2 = data2.data.filter((e)=>e.postId==8)
    // const p = ['a','b'];
    // // console.log(p.size);
    let s = 0;
    d2.forEach(element => {
        s++;
    });
    console.log(s);
 }

fetching();