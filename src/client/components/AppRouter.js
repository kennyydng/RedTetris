import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import HomePage from '../components/HomePage'
import GameRoom from '../components/GameRoom'
import GameMenu from '../components/GameMenu'
import Modal from '../components/Modal'
import { 
  openNameModal, 
  closeNameModal, 
  setPlayerName,
  joinGameFromUrl,
  createGame,
  joinGame,
  logout
} from '../actions/player'

// Composant wrapper pour utiliser les hooks dans le contexte du router
const AppContent = ({ 
  player, 
  openNameModal, 
  closeNameModal, 
  setPlayerName,
  createGame,
  logout
}) => {
  const navigate = useNavigate()

  const handlePlayClick = () => {
    openNameModal()
  }

  const handleModalSubmit = (name) => {
    setPlayerName(name)
    // Rediriger vers le menu après saisie du nom
    navigate('/menu')
  }

  const handleModalClose = () => {
    closeNameModal()
  }

  const handleCreateGame = () => {
    createGame()
    // Créer une salle aléatoire et rediriger
    const roomCode = Math.random().toString(36).substring(2, 8).toUpperCase()
    const encodedPlayerName = encodeURIComponent(player.playerName)
    navigate(`/${roomCode}/${encodedPlayerName}`)
  }

  const handleJoinGame = (roomCode) => {
    const encodedPlayerName = encodeURIComponent(player.playerName)
    navigate(`/${roomCode}/${encodedPlayerName}`)
  }

  const handleLogout = () => {
    logout()
    navigate('/', { replace: true })
  }

  const handlePlaySolo = () => {
    // Créer une partie solo
    const roomCode = 'SOLO_' + Math.random().toString(36).substring(2, 6).toUpperCase()
    const encodedPlayerName = encodeURIComponent(player.playerName)
    navigate(`/${roomCode}/${encodedPlayerName}`)
  }

  return (
    <div>
      <Routes>
        {/* Page d'accueil */}
        <Route 
          path="/" 
          element={<HomePage onPlayClick={handlePlayClick} />} 
        />
        
        {/* Menu principal */}
        <Route 
          path="/menu" 
          element={
            <GameMenu
              playerName={player.playerName}
              onCreateGame={handleCreateGame}
              onJoinGame={handleJoinGame}
              onPlaySolo={handlePlaySolo}
              onLogout={handleLogout}
            />
          } 
        />
        
        {/* Route principale du jeu: /:room/:playerName */}
        <Route 
          path="/:room/:playerName" 
          element={<GameRoom />} 
        />
        
        {/* Redirection pour les routes non trouvées */}
        <Route 
          path="*" 
          element={<Navigate to="/" replace />} 
        />
      </Routes>
      
      {/* Modal globale pour saisie du nom */}
      <Modal
        isOpen={player.isModalOpen}
        onClose={handleModalClose}
        onSubmit={handleModalSubmit}
        title="Enter your name"
      />
    </div>
  )
}

const AppRouter = ({ 
  player, 
  openNameModal, 
  closeNameModal, 
  setPlayerName,
  joinGameFromUrl,
  createGame,
  joinGame,
  logout
}) => {
  return (
    <BrowserRouter>
      <AppContent
        player={player}
        openNameModal={openNameModal}
        closeNameModal={closeNameModal}
        setPlayerName={setPlayerName}
        joinGameFromUrl={joinGameFromUrl}
        createGame={createGame}
        joinGame={joinGame}
        logout={logout}
      />
    </BrowserRouter>
  )
}

const mapStateToProps = (state) => {
  return {
    player: state.player
  }
}

const mapDispatchToProps = {
  openNameModal,
  closeNameModal,
  setPlayerName,
  joinGameFromUrl,
  createGame,
  joinGame,
  logout
}

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter)