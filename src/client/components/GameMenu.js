import React, { useState } from 'react'

const GameMenu = ({ playerName, currentRoom, onCreateGame, onJoinGame, onPlaySolo, onLogout }) => {
  const [roomCode, setRoomCode] = useState('')
  const [showJoinForm, setShowJoinForm] = useState(false)

  const handlePlaySolo = () => {
    onPlaySolo()
  }

  const handleCreateMultiplayer = () => {
    onCreateGame()
  }

  const handleJoinGame = (e) => {
    e.preventDefault()
    if (roomCode.trim()) {
      onJoinGame(roomCode.trim())
      setRoomCode('')
      setShowJoinForm(false)
    }
  }

  const handleLogout = () => {
    onLogout()
  }

  return (
    <div style={styles.container}>
      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(255, 0, 0, 0.3); }
          50% { box-shadow: 0 0 30px rgba(255, 0, 0, 0.6); }
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
      `}</style>
      <div style={styles.menuContainer}>
        <div style={styles.header}>
          <h1 style={styles.title}>Red Tetris</h1>
          <div style={styles.playerInfo}>
            <span style={styles.welcomeText}>Bienvenue </span>
            <span style={styles.playerName}>{playerName}</span>
          </div>
          {currentRoom && (
            <div style={styles.roomInfo}>
              <span style={styles.roomLabel}>Salle actuelle: </span>
              <span style={styles.roomName}>{currentRoom}</span>
            </div>
          )}
        </div>

        <div style={styles.menuOptions}>
          <button 
            style={styles.primaryButton}
            onClick={handlePlaySolo}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px) scale(1.02)'
              e.target.style.boxShadow = '0 10px 30px rgba(255, 0, 0, 0.5)'
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)'
              e.target.style.boxShadow = '0 5px 20px rgba(255, 0, 0, 0.3)'
            }}
          >
            Jouer en Solo
          </button>

          <button 
            style={styles.secondaryButton}
            onClick={handleCreateMultiplayer}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px) scale(1.02)'
              e.target.style.backgroundColor = '#0066cc'
              e.target.style.boxShadow = '0 10px 30px rgba(0, 102, 204, 0.4)'
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)'
              e.target.style.backgroundColor = 'transparent'
              e.target.style.boxShadow = '0 5px 20px rgba(0, 102, 204, 0.3)'
            }}
          >
            👥 Créer partie Multijoueur
          </button>

          <button 
            style={styles.tertiaryButton}
            onClick={() => setShowJoinForm(!showJoinForm)}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px)'
              e.target.style.backgroundColor = '#333333'
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)'
              e.target.style.backgroundColor = 'transparent'
            }}
          >
            🔗 Rejoindre une partie
          </button>

          {showJoinForm && (
            <div style={styles.joinForm}>
              <form onSubmit={handleJoinGame}>
                <input
                  type="text"
                  value={roomCode}
                  onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
                  placeholder="Code de la partie (ex: ABCD)"
                  style={styles.input}
                  maxLength={6}
                  autoFocus
                />
                <div style={styles.formButtons}>
                  <button
                    type="button"
                    onClick={() => setShowJoinForm(false)}
                    style={styles.cancelButton}
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    style={styles.submitButton}
                    disabled={!roomCode.trim()}
                  >
                    Rejoindre
                  </button>
                </div>
              </form>
            </div>
          )}

          <button 
            style={styles.logoutButton}
            onClick={handleLogout}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#666666'
              e.target.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent'
              e.target.style.transform = 'translateY(0)'
            }}
          >
            🚪 Logout
          </button>
        </div>

        <div style={styles.footer}>
          <div style={styles.gameStats}>
            <div style={styles.statItem}>
              <span style={styles.statLabel}>Parties jouées:</span>
              <span style={styles.statValue}>0</span>
            </div>
            <div style={styles.statItem}>
              <span style={styles.statLabel}>Meilleur score:</span>
              <span style={styles.statValue}>-</span>
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
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    width: '100vw',
    margin: 0,
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
    background: 'linear-gradient(135deg, #000000 0%, #1a0000 50%, #000000 100%)',
    color: '#ffffff',
    position: 'fixed',
    top: 0,
    left: 0,
    overflow: 'auto'
  },
  menuContainer: {
    maxWidth: '600px',
    width: '100%',
    padding: '3rem',
    backgroundColor: 'rgba(20, 20, 20, 0.9)',
    border: '2px solid #ff0000',
    borderRadius: '15px',
    boxShadow: '0 0 40px rgba(255, 0, 0, 0.3)',
    animation: 'slideInUp 0.6s ease-out'
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem'
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#ff0000',
    marginBottom: '1rem',
    textShadow: '0 0 20px rgba(255, 0, 0, 0.5)'
  },
  playerInfo: {
    fontSize: '1.2rem',
    padding: '0.8rem 1.5rem',
    backgroundColor: 'rgba(0, 255, 0, 0.1)',
    border: '1px solid #00ff00',
    borderRadius: '25px',
    display: 'inline-block'
  },
  welcomeText: {
    opacity: 0.8
  },
  playerName: {
    color: '#00ff00',
    fontWeight: 'bold'
  },
  roomInfo: {
    fontSize: '1rem',
    padding: '0.6rem 1.2rem',
    backgroundColor: 'rgba(255, 165, 0, 0.1)',
    border: '1px solid #ffaa00',
    borderRadius: '20px',
    display: 'inline-block',
    marginTop: '1rem'
  },
  roomLabel: {
    opacity: 0.8
  },
  roomName: {
    color: '#ffaa00',
    fontWeight: 'bold'
  },
  menuOptions: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    marginBottom: '2rem'
  },
  primaryButton: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    padding: '1.2rem 2rem',
    backgroundColor: '#ff0000',
    color: '#ffffff',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 5px 20px rgba(255, 0, 0, 0.3)',
    fontFamily: 'Arial, sans-serif'
  },
  secondaryButton: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    padding: '1rem 2rem',
    backgroundColor: 'transparent',
    color: '#ffffff',
    border: '2px solid #0066cc',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0 5px 20px rgba(0, 102, 204, 0.3)'
  },
  tertiaryButton: {
    fontSize: '1rem',
    padding: '0.8rem 1.5rem',
    backgroundColor: 'transparent',
    color: '#cccccc',
    border: '1px solid #666666',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontFamily: 'Arial, sans-serif',
  },
  logoutButton: {
    fontSize: '0.9rem',
    padding: '0.6rem 1.2rem',
    backgroundColor: 'transparent',
    color: '#999999',
    border: '1px solid #555555',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontFamily: 'Arial, sans-serif',
  },
  joinForm: {
    padding: '1.5rem',
    backgroundColor: 'rgba(40, 40, 40, 0.8)',
    border: '1px solid #333333',
    borderRadius: '10px',
    animation: 'slideInUp 0.3s ease-out'
  },
  input: {
    width: '100%',
    padding: '1rem',
    fontSize: '1.1rem',
    border: '2px solid #333333',
    borderRadius: '8px',
    backgroundColor: '#2a2a2a',
    color: '#ffffff',
    marginBottom: '1rem',
    outline: 'none',
    transition: 'border-color 0.2s',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    letterSpacing: '2px'
  },
  formButtons: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'flex-end'
  },
  cancelButton: {
    padding: '0.8rem 1.5rem',
    backgroundColor: 'transparent',
    color: '#ffffff',
    border: '1px solid #666666',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    fontFamily: 'Arial, sans-serif'
  },
  submitButton: {
    padding: '0.8rem 1.5rem',
    backgroundColor: '#00aa00',
    color: '#ffffff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    fontFamily: 'Arial, sans-serif'
  },
  footer: {
    borderTop: '1px solid #333333',
    paddingTop: '2rem'
  },
  gameStats: {
    display: 'flex',
    justifyContent: 'space-around',
    gap: '2rem'
  },
  statItem: {
    textAlign: 'center'
  },
  statLabel: {
    display: 'block',
    fontSize: '0.9rem',
    opacity: 0.7,
    marginBottom: '0.5rem'
  },
  statValue: {
    display: 'block',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#ff0000'
  }
}

export default GameMenu