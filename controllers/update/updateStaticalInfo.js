const { Address } = require('../../models/address/address')
const utilStatistic = require('../Util/utilStatistic')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId
mongoose.connect('mongodb+srv://admin123456:admin123456@cluster0.qelzb.mongodb.net/citizenV?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

// MUST CONNECT WITH DATABASE AND CREATE NEW COLLECTION


const statisticsDataSchema = new Schema({
    areaCode:{
        type:String,
        require:true,
    },
    populationData :{
        type:Array,
        require:true,
        default:[]
    },
    employmentAndUnemploymentData:{
        type:Array,
        require:true,
        default:[]
    },
    ReligionData:{
        type:Array,
        require:true,
        default:[]
    },
    RangeAgeAndGenderData:{
        type:Array,
        require:true,
        default:[{}]
    },
    educationalData: {
        type:Array,
        require:true,
        default:[]
    }

})

const StatisticsData = mongoose.model("StatisticsData",statisticsDataSchema)

//update statistic data of villages
const refreshStatisticsData = function() {
    let addressesList=[]
  Address.find({}).populate('idVillageRef')
                .then(addresses=>
                    { 
                        let promises =[]
                        addressesList=addresses       
                        addresses.forEach(address=>{
                            promises.push(
                                utilStatistic.countThePopulation([address._id]),
                                utilStatistic.statisticsOnTheNumberOfUnemployedAndEmployedPeople([address._id]),
                                utilStatistic.statisticsOnReligion([address._id]),
                                utilStatistic.censusByAgeAndGender([address._id]),
                                utilStatistic.statisticsOnEducationalLevel([address._id]))
                            })
                        return Promise.all(promises)
                    })
                .then(data=>{
                    const results=[]
                    data.forEach((result,index)=>{
                        if(result.length)
                            results.push( result.map(unit=>{
                                return {...unit._id,count:unit.count}
                                }))
                        else results.push(result)
                    })
                    const numberOfPromisesPerVillageAddress = data.length/addressesList.length
                    return addressesList.map((address,index)=>{

                        //thong tin thong ke cua 1 address se duoc luu nhu phan return phia duoi
                        return {
                            areaCode: address.idVillageRef.areaCode,
                            populationData:results[index*numberOfPromisesPerVillageAddress],
                            employmentAndUnemploymentData:results[index*numberOfPromisesPerVillageAddress+1],
                            ReligionData:results[index*numberOfPromisesPerVillageAddress+2],
                            RangeAgeAndGenderData:results[index*numberOfPromisesPerVillageAddress+3],
                            educationalData:results[index*numberOfPromisesPerVillageAddress+4]
                        }
                    })
                })
                .then(result=> {
                    //save to database in this
                    console.log(result)
                    //sẽ có những element chỉ có id.các trường còn lại là undefined vì nó k có người dân nào
                    // unitUpdates = result.map(unit=>StatisticsData.findOneAndUpdate({areaCode:unit.areaCode},unit))
                    //neu khong co areacode trong collection statistics thi se khong dc luu
                        // return Promise.all(unitUpdates)
                    //neu co areaCode trong statistics roi thi no se them vao document moi, va van con documen co cung 
                    //areaCode trong collection statistics
                    // return StatisticsData.insertMany(result)
                })
                // .then(data=>console.log(data))
}
//getdata statistics from statistic data of area
const getData = (areaCodeString,typeOfstatisticscData,fieldNameOfStatisticData)=> {
    const _id ={}
    _id[`${fieldNameOfStatisticData}`] =`$${typeOfstatisticscData}.${fieldNameOfStatisticData}`
    return StatisticsData.aggregate([
        {
            $match:{
                areaCode : {$regex:new RegExp("^"+areaCodeString)}
            }
        },
        {
            $unwind:`$${typeOfstatisticscData}`
        },
        {
            $group:{
                _id:_id,
                count:{$sum:`$${typeOfstatisticscData}.count`},
            }
        },
    ])
    //doan nay de test data tra ve
    // .then(data=>{
    //     console.log(data)
    //     const results= data.map(unit=>{
    //                 return {...unit._id,count:unit.count}
    //     })
    //     return results
    // })
}

// getData("01","populationData","gender")

module.exports ={
    getData
}
