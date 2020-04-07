const request=require('request')
const geocode=require('./utils/geocode')

const address=process.argv[2]
if(!address)
{
    console.log('provide an addresss')
}
else{
    geocode.geocode(address,(error,data)=>{
        if(error)
        {
           return console.log(error)
        }
        geocode.forecast(data.latitude,data.longitude,(error,forecastdata)=>{
            if(error)
            {
               return console.log(error) 
            }
           console.log(data.location)
           console.log(forecastdata)
        })
    })
}