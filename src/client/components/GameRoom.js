import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import GameMenu from './GameMenu'
import GamePage from './GamePage'
import { 
  joinGameFromUrl,
  navigateToMenu,
  createGame,
  joinGame,
  logout
} from '../actions/player'

const GameRoom = ({ 
  player, 
  joinGameFromUrl,
  navigateToMenu,
  createGame,
  joinGame,
  logout
}) => {
  const { room, playerName } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    // Valider les paramètres URL
    if (!room || !playerName) {
      navigate('/', { replace: true })
      return
    }

    // Décoder le nom du joueur depuis l'URL
    const decodedPlayerName = decodeURIComponent(playerName)
    
    // Initialiser le joueur et la salle depuis l'URL
    joinGameFromUrl(room, decodedPlayerName)
  }, [room, playerName, joinGameFromUrl, navigate])

  const handleCreateGame = () => {
    createGame()
    console.log('Création d\'une nouvelle partie...')
  }

  const handleJoinGame = (roomCode) => {
    // Rediriger vers la nouvelle URL de la salle
    const currentPlayerName = encodeURIComponent(player.playerName)
    navigate(`/${roomCode}/${currentPlayerName}`)
  }

  const handleLogout = () => {
    logout()
    navigate('/', { replace: true })
  }

  const handleBackToMenu = () => {
    navigateToMenu()
  }

  // Rediriger vers la page d'accueil si pas de nom de joueur
  if (!player.playerName) {
    return (
      <div style={styles.container}>
        <div style={styles.loadingContainer}>
          <h2 style={styles.loadingTitle}>Chargement...</h2>
          <p style={styles.loadingText}>
            Initialisation de la partie {room} pour {decodeURIComponent(playerName)}
          </p>
        </div>
      </div>
    )
  }

  // Rendu conditionnel basé sur l'état du jeu
  const renderGameContent = () => {
    switch (player.gameState) {
      case 'lobby':
      case 'menu':
        return (
          <GameMenu
            playerName={player.playerName}
            currentRoom={room}
            onCreateGame={handleCreateGame}
            onJoinGame={handleJoinGame}
            onLogout={handleLogout}
          />
        )
      
      case 'playing':
        return (
          <GamePage
            playerName={player.playerName}
            gameRoom={room}
            isHost={player.isHost}
            onBackToMenu={handleBackToMenu}
          />
        )
      
      default:
        return (
          <GameMenu
            playerName={player.playerName}
            currentRoom={room}
            onCreateGame={handleCreateGame}
            onJoinGame={handleJoinGame}
            onLogout={handleLogout}
          />
        )
    }
  }

  return (
    <div>
      {renderGameContent()}
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
    fontFamily: 'Arial, sans-serif',
    background: 'linear-gradient(135deg, #000000 0%, #1a0000 50%, #000000 100%)',
    color: '#ffffff'
  },
  loadingContainer: {
    textAlign: 'center',
    padding: '3rem',
    backgroundColor: 'rgba(20, 20, 20, 0.9)',
    border: '2px solid #ff0000',
    borderRadius: '15px',
    boxShadow: '0 0 40px rgba(255, 0, 0, 0.3)'
  },
  loadingTitle: {
    fontSize: '2rem',
    color: '#ff0000',
    marginBottom: '1rem'
  },
  loadingText: {
    fontSize: '1.1rem',
    opacity: 0.8
  }
}

const mapStateToProps = (state) => {
  return {
    player: state.player
  }
}

const mapDispatchToProps = {
  joinGameFromUrl,
  navigateToMenu,
  createGame,
  joinGame,
  logout
}

export default connect(mapStateToProps, mapDispatchToProps)(GameRoom)