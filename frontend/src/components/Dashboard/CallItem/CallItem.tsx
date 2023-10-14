import { CallItemWrappper } from './CallItem.styles'
import {IoVideocam} from "react-icons/io5"
import {AiFillAudio} from "react-icons/ai"
const CallItem = ({call}) => {


  return (
    <CallItemWrappper isSuccess={call?.success}>
        <div className="callItemLeft">
            <img className='callUserProfile' src={call?.caller?.image} alt="" />
            <div className="mainInfo">
                <h4 className='callUserName'> {call?.caller?.username}</h4>
                <p className='callTimeAgo'>{call?.calledAt} </p>
            </div>
        </div>
        {
            call?.type==="Video"? <IoVideocam className="videoTypeIcon"/>:<AiFillAudio className="videoTypeIcon"/>
        }
            
    </CallItemWrappper>
  )
}

export default CallItem