
const AppleBasket = ({appleCount, basketName})  => {
  return (
        <div className="apple-basket">
        <span>{appleCount}</span>
        Apples
        <p>{basketName}</p>
      </div>
  )
}
export default AppleBasket
