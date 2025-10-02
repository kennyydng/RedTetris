import React from 'react'
import { connect } from 'react-redux'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
    background: '#000000',
    color: '#ffffff',
    textAlign: 'center'
  },
  title: {
    fontSize: '4rem',
    fontWeight: 'bold',
    marginBottom: '2rem',
    color: '#ff0000',
    animation: 'pulse 2s infinite'
  },
  subtitle: {
    fontSize: '1.2rem',
    opacity: 0.8,
    marginBottom: '3rem'
  },
  gameInfo: {
    maxWidth: '600px',
    padding: '2rem',
    backgroundColor: 'rgba(40, 40, 40, 0.8)',
    border: '2px solid #333333',
    borderRadius: '10px',
    boxShadow: '0 0 20px rgba(255, 0, 0, 0.3)'
  },
  tetrisColors: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginTop: '2rem',
    flexWrap: 'wrap'
  },
  colorBlock: {
    width: '30px',
    height: '30px',
    borderRadius: '3px',
    border: '1px solid #666'
  }
}

const App = ({message}) => {
  return (
    <div style={styles.container}>
      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        body {
          margin: 0;
          padding: 0;
        }
      `}</style>
      <div style={styles.gameInfo}>
        <h1 style={styles.title}>Red Tetris</h1>
        <p style={styles.subtitle}>Le jeu de Tetris multijoueur ultime</p>
        {message && <p>{message}</p>}        
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    message: state.message
  }
}
export default connect(mapStateToProps, null)(App)


