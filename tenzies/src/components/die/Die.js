import './Die.css'

const Die = ({ value, isHeld, hold }) => {

  const styles = {
    backgroundColor: isHeld ? "#59E391" : 'white'
  }

  return (
    <div className="die-face" style={styles} onClick={hold}>
      <p className='value'>{value}</p>
    </div>
  )
}

export default Die