import React, { useState } from 'react'
import ImageComponent from './ImageComponent';
import NewCounter from './NewCounter';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';

export default function HomePage() {
  // const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className='px-4 md:px-8'>
        <p>Welcome Home</p>
        <ImageComponent source={'https://d2h44aw7l5xdvz.cloudfront.net/assets/img/vk-thumbsup-illus-01.svg'} altText={'virat in digit'} />
       <ClickCounter name = "Click Counter"/>
       <HoverCounter name ="Hover Counter" />
    </div>
  )
}
