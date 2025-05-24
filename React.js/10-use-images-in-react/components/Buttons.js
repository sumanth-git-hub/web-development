
const ButtonsComponent = (props) => {
    const {imageUrl, alt, className,hoverButton } = props
  return (
    <button className="buttons-element" title={hoverButton}>
        <img alt={alt} className={className} src={imageUrl}/>
    </button>
)
}


export default ButtonsComponent