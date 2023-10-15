import { CallItemWrappper } from './CallItem.styles'
import {IoVideocam} from "react-icons/io5"
import {AiFillAudio} from "react-icons/ai"
import {LuPhoneOutgoing,LuPhoneIncoming} from "react-icons/lu"
const CallItem = ({call}) => {


  return (
    <CallItemWrappper isSuccess={call?.success} >
        <div className="callItemLeft">
            <img className='callUserProfile' src={call?.caller?.image} alt="" />
            <div className="mainInfo">
                <h4 className='callUserName'> {call?.caller?.username}</h4>
                <p className='callTimeAgo'>{call?.calledAt} </p>
            </div>
        </div>
     
         <div className='midBox'>
         {
          call?.isCallerMe ? 
          <div className='incomingBox'>
              <LuPhoneOutgoing/>
              <p>Outgoing</p>
          </div>:
          <div className='incomingBox'>
          <LuPhoneIncoming/>
          <p>Incoming</p>
          </div>
         }
          <div className='durationBox'>

          </div>
          </div>
        <div className="iconBox">

        {
          call?.type==="Video"? <IoVideocam className="videoTypeIcon"/>:<AiFillAudio className="videoTypeIcon"/>
        }
        </div>
            
    </CallItemWrappper>
  )
}

export default CallItem