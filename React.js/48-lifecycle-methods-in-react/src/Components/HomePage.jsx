import React, { useState } from 'react'
import ImageComponent from './ImageComponent';
import NewCounter from './NewCounter';
import OldCounter from './OldComponent';

export default function HomePage() {
  // const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className='px-4 md:px-8'>
        <p>Welcome Home</p>
        <ImageComponent source={'https://d2h44aw7l5xdvz.cloudfront.net/assets/img/vk-thumbsup-illus-01.svg'} altText={'virat in digit'} />
       <div>
        <NewCounter name='New Counter' titleTagInc = "Click to Increase" titleTagDec = "Click to Decrease" divider= {<hr className="my-3 text-gray-400"/>}/>
       </div>
       <OldCounter name = "Old Counter" titleTagInc = "Click to Increase" titleTagDec = "Click to Decrease" />
    </div>
  )
}
