// Actions pour la modale de saisie du nom
export const OPEN_NAME_MODAL = 'OPEN_NAME_MODAL'
export const CLOSE_NAME_MODAL = 'CLOSE_NAME_MODAL'
export const SET_PLAYER_NAME = 'SET_PLAYER_NAME'

// Actions pour la navigation
export const NAVIGATE_TO_HOME = 'NAVIGATE_TO_HOME'
export const NAVIGATE_TO_MENU = 'NAVIGATE_TO_MENU'
export const NAVIGATE_TO_GAME = 'NAVIGATE_TO_GAME'

// Actions pour les parties
export const CREATE_GAME = 'CREATE_GAME'
export const JOIN_GAME = 'JOIN_GAME'
export const JOIN_GAME_FROM_URL = 'JOIN_GAME_FROM_URL'
export const LOGOUT = 'LOGOUT'

// Actions pour l'état du jeu
export const SET_GAME_STATE = 'SET_GAME_STATE'

export const openNameModal = () => {
  return {
    type: OPEN_NAME_MODAL
  }
}

export const closeNameModal = () => {
  return {
    type: CLOSE_NAME_MODAL
  }
}

export const setPlayerName = (name) => {
  return {
    type: SET_PLAYER_NAME,
    payload: name
  }
}

export const navigateToHome = () => {
  return {
    type: NAVIGATE_TO_HOME
  }
}

export const navigateToMenu = () => {
  return {
    type: NAVIGATE_TO_MENU
  }
}

export const navigateToGame = () => {
  return {
    type: NAVIGATE_TO_GAME
  }
}

export const createGame = () => {
  return {
    type: CREATE_GAME
  }
}

export const joinGame = (roomCode) => {
  return {
    type: JOIN_GAME,
    payload: roomCode
  }
}

export const joinGameFromUrl = (room, playerName) => {
  return {
    type: JOIN_GAME_FROM_URL,
    payload: { room, playerName }
  }
}

export const logout = () => {
  return {
    type: LOGOUT
  }
}

export const setGameState = (gameState) => {
  return {
    type: SET_GAME_STATE,
    payload: gameState
  }
}