const CallModel = require("../model/CallModel")

class CallController{

    async createCall(req,res,next){
        try {
            
            const newCall =   await  CallModel.create(req.body)
            res.status(200).json({message:newCall,success:true,status:"OK"})

        } catch (error) {
            next(error)  
        }
    }

    async getCall(req,res,next){
        try {
            const searchedCalls = await CallModel.find({...req.query});
            res.status(200).json({message:searchedCalls,success:true,status:"OK"}) 
        } catch (error) {
            next(error) 
        }
    }
    async updateCall(req,res,next){
        const {id} = req.params;
        try {
            if(!id){
                new Error("id field required")
            }
            

            const updatedCall = await CallModel.findByIdAndUpdate(id,{
                $set:{...req.body}
            },{
                new:true,
                returnDocument:true
            })
            res.status(200).json({message:updatedCall,success:true,status:"OK"})
        } catch (error) {
            next(error)
        }
    }
    async deleteCall(req,res,next){
        try {
            const {id} = req.params;
            if(!id){
                new Error("Id field is required")
            }
            await CallModel.findOneAndDelete(id);
            res.status(200).json({message:"successfully deleted",success:true,status:"OK"})
        } catch (error) {
            next(error) 
        }
    }
}
module.exports = new CallController()

