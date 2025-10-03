import React from 'react'

const GamePage = ({ playerName, gameRoom, isHost, onBackToMenu }) => {
  return (
    <div style={styles.container}>
      <div style={styles.gameContainer}>
        <div style={styles.header}>
          <h1 style={styles.title}>Red Tetris - Partie en cours</h1>
          <button 
            style={styles.backButton}
            onClick={onBackToMenu}
          >
            ← Retour au menu
          </button>
        </div>
        
        <div style={styles.gameInfo}>
          <div style={styles.playerInfo}>
            <h3>Joueur: {playerName}</h3>
            <p>Salle: {gameRoom}</p>
            <p>Statut: {isHost ? 'Hôte' : 'Invité'}</p>
          </div>
          
          <div style={styles.gameArea}>
            <div style={styles.tetrisBoard}>
              <h4>Zone de jeu</h4>
              <p style={styles.placeholder}>
                🎮 Le jeu Tetris sera implémenté ici
              </p>
            </div>
            
            <div style={styles.sidebar}>
              <div style={styles.nextPiece}>
                <h5>Prochaine pièce</h5>
                <div style={styles.previewBox}></div>
              </div>
              
              <div style={styles.score}>
                <h5>Score</h5>
                <p style={styles.scoreValue}>0</p>
              </div>
              
              <div style={styles.level}>
                <h5>Niveau</h5>
                <p style={styles.levelValue}>1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
    background: 'linear-gradient(135deg, #000000 0%, #1a0000 50%, #000000 100%)',
    color: '#ffffff',
    padding: '1rem'
  },
  gameContainer: {
    flex: 1,
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',
    padding: '1rem 0'
  },
  title: {
    fontSize: '2rem',
    color: '#ff0000',
    margin: 0
  },
  backButton: {
    padding: '0.8rem 1.5rem',
    backgroundColor: 'transparent',
    color: '#ffffff',
    border: '2px solid #ffffff',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontFamily: 'Arial, sans-serif'
  },
  gameInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  },
  playerInfo: {
    padding: '1.5rem',
    backgroundColor: 'rgba(40, 40, 40, 0.8)',
    border: '2px solid #333333',
    borderRadius: '10px',
    textAlign: 'center'
  },
  gameArea: {
    display: 'flex',
    gap: '2rem',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  tetrisBoard: {
    flex: 1,
    minWidth: '300px',
    maxWidth: '400px',
    height: '600px',
    backgroundColor: 'rgba(20, 20, 20, 0.9)',
    border: '3px solid #ff0000',
    borderRadius: '10px',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  placeholder: {
    fontSize: '1.2rem',
    color: '#cccccc',
    textAlign: 'center',
    margin: 'auto',
    opacity: 0.7
  },
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    minWidth: '200px'
  },
  nextPiece: {
    padding: '1rem',
    backgroundColor: 'rgba(40, 40, 40, 0.8)',
    border: '2px solid #333333',
    borderRadius: '10px',
    textAlign: 'center'
  },
  previewBox: {
    width: '80px',
    height: '80px',
    backgroundColor: '#1a1a1a',
    border: '2px solid #666666',
    borderRadius: '5px',
    margin: '0 auto'
  },
  score: {
    padding: '1rem',
    backgroundColor: 'rgba(40, 40, 40, 0.8)',
    border: '2px solid #333333',
    borderRadius: '10px',
    textAlign: 'center'
  },
  scoreValue: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#00ff00',
    margin: '0.5rem 0'
  },
  level: {
    padding: '1rem',
    backgroundColor: 'rgba(40, 40, 40, 0.8)',
    border: '2px solid #333333',
    borderRadius: '10px',
    textAlign: 'center'
  },
  levelValue: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#ffaa00',
    margin: '0.5rem 0'
  }
}

export default GamePage