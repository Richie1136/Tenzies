import './Die.css'

const Die = ({ value }) => {
  return (
    <div className="die-face">
      <p className='value'>{value}</p>
    </div>
  )
}

export default Die