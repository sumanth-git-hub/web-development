import '../BackgroundSection/BackgroundStyles.css'
import carAddVideo from '../../assets/video1.mp4'
import firstImage from '../../assets/image1.png'
import secondImage from '../../assets/image2.png'
import thirdImage from '../../assets/image3.png'

const BackgroundSection = ({playStatus, heroCount}) => {
  if(playStatus){
    return (
      <video className='backgroundStyles' autoPlay loop muted>
        <source src={carAddVideo} type='video/mp4' />
      </video>
    )
  }
  else if(heroCount === 0){
    return <img src={firstImage} alt="car image" className='backgroundStyles fade-in'/>
  }
  else if(heroCount === 1){
    return <img src={secondImage} alt="car image" className='backgroundStyles fade-in'/>
  }
  else if(heroCount === 2){
    return <img src={thirdImage} alt="car image" className='backgroundStyles fade-in'/>
  }
}

export default BackgroundSection