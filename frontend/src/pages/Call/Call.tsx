import { MdCallEnd } from "react-icons/md"
import {   AudioCallWrapper, CallingWrapper, IncomingWrapper } from "./Call.styles"
import {BiSolidPhoneCall} from "react-icons/bi"
import {BsFillMicFill} from "react-icons/bs"
import {HiMiniVideoCamera} from "react-icons/hi2"
import { useEffect, useRef, useState } from "react"
import { useLocation } from "react-router-dom"
const Call = () => {
    const [callTab,setCallTab]=useState("outgoing")

    const callTabMapping= {
        "outgoing":<Calling/>,
        "incoming":<InComing/>,
        "videoCall":<VideoCall/>,
        "audioCall":<AudioCall/>
        
    }

    const search  =  useLocation().search

    
    useEffect(()=>{
        setInterval(()=>{
            let type = search.split("=")[1]
            if(type==="video"){
                setCallTab("videoCall")
            }else{
                setCallTab("audioCall")
            }
        },2000)
    },[])
  return (

   <>
    {callTabMapping[callTab]}
   </>
    
  )
}

export default Call;

const Calling=()=>{

    return (

        <>


        <CallingWrapper>
            <div className="callUserBox">
        <div className="userBox">
                <img src="https://images.pexels.com/photos/3748399/pexels-photo-3748399.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" />
            </div>
            <div className="userBoxContent">
                <p className="callingText">Calling ...</p>
            </div>
            </div>
            <div className="callActionBox">
                <div className="actionBottons">
                    <div className="actionIconItem">
                    <MdCallEnd/>
                </div>

                </div>

            </div>
        </CallingWrapper>


        
        </>
    )

}
const InComing=()=>{
    return (
        <>  
        <IncomingWrapper>

        <div className="callUserBox">
        <div className="userBox">
                <img src="https://images.pexels.com/photos/3748399/pexels-photo-3748399.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" />
            </div>
            <div className="userBoxContent">
                <p className="callingText">Ram is calling you ...</p>
            </div>
            </div>
            <div className="callActionBox">
                <div className="actionBottons">
                    <div className="actionIconItem acceptButton">
                        <BiSolidPhoneCall/>
                    </div>
                    <div className="actionIconItem">
                    <MdCallEnd/>
                </div>

                </div>

            </div>
        </IncomingWrapper>
        
        </>
    )
}



const AudioCall=()=>{
return (
     <AudioCallWrapper>
        <div className="callContainer">
            <div className="callUserWrapper">
            <div className="bigUserBox isSpeaking">
                <div className="userBox">
                    <img src="https://images.pexels.com/photos/2598024/pexels-photo-2598024.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" />
                </div>
            </div>
            <div className="smallUserBox">
            <div className="userBox">
                <img src="https://images.pexels.com/photos/3748399/pexels-photo-3748399.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" />
            </div>
            </div>
            </div>
            <div className="callActionBox">
                <p className="durationTime">4:11</p>
                <div className="actionBottons">
                    <div className="actionIconItem micBtn">
                    <BsFillMicFill/>
                    </div>
                    <div className="actionIconItem">
                    <MdCallEnd/>
                    </div>

                </div>
            </div>
        </div>
    </AudioCallWrapper>
)
}


const VideoCall=()=>{
    const myVideoRef:React.MutableRefObject<HTMLVideoElement |null>=useRef(null)
    useEffect(()=>{
        navigator.mediaDevices.getUserMedia({video:true,audio:true}).then((mediaStream)=>{
            console.log(mediaStream)
            if(myVideoRef.current){
                myVideoRef.current.srcObject = mediaStream;
            }
        })
    },[])

return (
     <AudioCallWrapper>
        <div className="callContainer">
            <div className="callUserWrapper">
            <div className="bigUserBox isSpeaking">
                <div className="userBox">
                    <img src="https://images.pexels.com/photos/2598024/pexels-photo-2598024.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" />
                </div>
            </div>
            <div className="smallUserBox">
                <div className="myVideo">
                    <video src="" ref={myVideoRef} autoPlay muted></video>
                </div>
            {/* <div className="userBox">
                <img src="https://images.pexels.com/photos/3748399/pexels-photo-3748399.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" />
            </div> */}
            </div>
            </div>
            <div className="callActionBox">
                <p className="durationTime">4:11</p>
                <div className="actionBottons">
                    <div className="actionIconItem micBtn">
                    <HiMiniVideoCamera/>
                    </div>
                    <div className="actionIconItem micBtn">
                    <BsFillMicFill/>
                    </div>
                    <div className="actionIconItem">
                    <MdCallEnd/>
                    </div>

                </div>
            </div>
        </div>
    </AudioCallWrapper>
)
}

