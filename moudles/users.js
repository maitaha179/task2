const deal = require("./dealWithJason")
const heads=["id","name","email","age"]
const creatUser=(data)=>{
const userData={ }
heads.forEach(h=>{
    if(h=="id") userData[h]= Date.now()
    else userData[h]=data[h]
})
return userData
}
class users {
    static addUser=(argv)=>{
    const userData= creatUser(argv)
    const data=deal.readJsonData("user.json")
        data.push(userData)
        deal.writeJsonData("user.json",data)
}
    static showALL=()=>{
        const allUsers= deal.readJsonData("user.json")
        if(!allUsers.length){
            console.log("no users yet")
            return
        }
        allUsers.forEach((u , ind) => {
        console.log(`${ind+1}-${u.name}-${u.id}-${u.email}-${u.age}`)
    })
    }
    static singleUser=(argv)=>{
        const allUsers= deal.readJsonData("user.json")
        const showUser = allUsers.find(u=> u.id==argv.id)
        if (!showUser) console.log("no users with this id")
        else console.log(showUser)
    }
    static delALL=()=>deal.writeJsonData("user.json",[])
    static delSingle=(argv)=>{
        const allUsers= deal.readJsonData("user.json")
        const delUser = allUsers.find(u=> u.id==argv.id)
        if (delUser==-1){
            console.log("user not found")
            return
        }
        allUsers.splice(delUser,1)
        deal.writeJsonData("user.json",allUsers)
    }
    static editUser=()=>{
        const allUsers= deal.readJsonData("user.json")
        const ind= allUsers.find(u=> u.id==argv.id)
        if (ind==-1){
            console.log("user not found")
            return
        }
        for(const key in argv){
            allUsers[ind][key]==argv[key]
        }
    }
}

module.exports= users
