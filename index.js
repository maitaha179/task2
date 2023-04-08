
const yargs = require("yargs")
const users = require("./moudles/users")

yargs.command({
    command:"addUser",
    builder:{
        name:{ demandOption:true},
        email:{ demandOption:true},
        age:{ demandOption:true}
    },
    handler:(argv)=>{
        users.addUser(argv)
    }
})
yargs.command({
    command:"showAll",
    handler:()=>{
        users.showALL()
    }
})
yargs.command({
    command:"singleUser",
    builder:{ id : {demandCommand:true}},
    handler:(argv)=>{
        users.singleUser(argv)
    }
})
yargs.command({
    command:"delUser",
    builder:{ id : {demandCommand:true}},
    handler:(argv)=>{
        users.delSingle(argv)
    }
})
yargs.command({
    command:"delAll",
    handler:()=>{
        users.delALL()
    }
})
yargs.command({
    command:"editUser",
    handler:(argv)=>{
        users.editUser(argv)
    }
})

yargs.argv