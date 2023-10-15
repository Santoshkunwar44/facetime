import CallItem from '../CallItem/CallItem'
import { MainContentWrapper } from './MainContent.styles'

const MainContent = () => {
  return (
    <MainContentWrapper>
      <div className="CallLogHeader">
        <h2>Call Logs</h2>
      </div>
      <div className="callLogsContainer">

     {
       callData.map((call,index)=><CallItem key={index} call={call}/>)
      }
      </div>
    </MainContentWrapper>
  )
}

export default MainContent


const callData=[
{
  caller:{
    username:"John Doe",
    image:"https://images.pexels.com/photos/18356968/pexels-photo-18356968/free-photo-of-a-girl-in-white-dress-holding-flowers.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  calledAt:"33 minutes ago",
  type:"Video",
  duration:"1:33",
  success:true,
  isCallerMe:true, 

  

},
{
  caller:{
    username:"Alina ",
    image:"https://images.pexels.com/photos/13294605/pexels-photo-13294605.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  calledAt:"55 minutes ago",
  type:"Audio",
  duration:"0",
  success:false,
  isCallerMe:false
  

},
{
  caller:{
    username:"Hippi Anderson",
    image:"https://images.pexels.com/photos/14079121/pexels-photo-14079121.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  calledAt:"1 hour ago",
  type:"Video",
  duration:"0",
  success:false,
  isCallerMe:false
  

},
{
  caller:{
    username:"Feros Doe",
    image:"https://images.pexels.com/photos/18076151/pexels-photo-18076151/free-photo-of-badboy-vibes-b-w.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  calledAt:"2 days ago",
  type:"Video",
  duration:"1:00",
  success:true,
  isCallerMe:true
},


]