
export default function Star(props) {
  let starIcon = props.isFilled ? "star-filled.png" : "star-empty.png"

  console.log(props)

  return (
    <img
      src={`../images/${starIcon}`}
      className="card--favorite"
      onClick={props.toggleFavorite}
      alt="Favorite"
    />
  )
}
