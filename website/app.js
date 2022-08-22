/* Global Variables */
let baseURL='https://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey='5cc4b4aee2173a3d0ec3325fef5333b0&units=imperial';
let zip=document.getElementById('zip').value;
let feelings=document.getElementById('feelings').value;

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth()+1)+'.'+ d.getDate()+'.'+ d.getFullYear();


document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
    getWeather(baseURL,zip,apiKey)
    .then(function(data){
        postData('/addWeather',{
            temp:data.main.temp,
            date:newDate,
            feelings:feelings
        })

    })
    .then(function(){
        updateUI();
    })

}


/* Function to POST data */
const postData= async (url='',data={})=>{
    console.log(data)
    const response =await fetch(url,{
        method: 'POST',
        credentials: 'same-origin',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(data),
    });

    try{
        const newData=await response.json();
        return newData;
    }
    catch(error){
        console.log('error',error);

    };

}
/* Function to GET Web API Data*/
const getWeather=async (baseURL,zip,apiKey)=>{
    const res=await fetch(baseURL+zip+'&appid='+apiKey)
    try{
        const retrieve = await response.json();
    }
    catch(error){
        console.log('error',error);
    }

}

//update UI
const updateUI =async()=>{
    const request=await fetch("/all")
    try{
        const allData=await request.json()
        const {date,temp,feelings}=data;
        document.getElementById('date').innerHTML=allData.date;;
        document.getElementById('temp').innerHTML=Math.round(allData.temp)+ 'degrees';
        document.getElementById('content').innerHTML=allData.feel;

    }
    catch(error){
        console.log('error', error);
    }
}