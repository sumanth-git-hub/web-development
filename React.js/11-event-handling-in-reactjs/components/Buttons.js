
const ButtonsComponent = (props) => {
    const {imageUrl, alt, className,hoverButton, clickEvent } = props
  return (
    <button className="buttons-element" title={hoverButton} onClick={clickEvent}>
        <img alt={alt} className={className} src={imageUrl}/>
    </button>
)
}


export default ButtonsComponent