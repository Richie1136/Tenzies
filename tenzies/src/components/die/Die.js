import './Die.css'

const Die = ({ value, isHeld }) => {

  const styles = {
    backgroundColor: isHeld ? "#59E391" : ''
  }

  return (
    <div className="die-face" style={styles}>
      <p className='value'>{value}</p>
    </div>
  )
}

export default Die