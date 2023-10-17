const UserModel = require("../model/UserModel")

class UserController{

    async createUser(req,res,next){
        try {
            
            const newUser =   await  UserModel.create(req.body)
            res.status(200).json({message:newUser,success:true,status:"OK"})

        } catch (error) {
            next(error)  
        }
    }

    async getUser(req,res,next){
        try {
            const searchedUsers = await UserModel.find({...req.query});
            res.status(200).json({message:searchedUsers,success:true,status:"OK"}) 
        } catch (error) {
            next(error) 
        }
    }
    async updateUser(req,res,next){
        const {id} = req.params;
        try {
            if(!id){
                new Error("id field required")
            }
            

            const updatedUser = await UserModel.findByIdAndUpdate(id,{
                $set:{...req.body}
            },{
                new:true,
                returnDocument:true
            })
            res.status(200).json({message:updatedUser,success:true,status:"OK"})
        } catch (error) {
            next(error)
        }
    }
    async deleteUser(req,res,next){
        try {
            const {id} = req.params;
            if(!id){
                new Error("Id field is required")
            }
            await UserModel.findOneAndDelete(id);
            res.status(200).json({message:"successfully deleted",success:true,status:"OK"})
        } catch (error) {
            next(error) 
        }
    }
}
module.exports = new UserController()

