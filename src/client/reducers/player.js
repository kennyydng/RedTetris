import { 
  OPEN_NAME_MODAL, 
  CLOSE_NAME_MODAL, 
  SET_PLAYER_NAME,
  NAVIGATE_TO_HOME,
  NAVIGATE_TO_MENU,
  NAVIGATE_TO_GAME,
  CREATE_GAME,
  JOIN_GAME,
  JOIN_GAME_FROM_URL,
  LOGOUT,
  SET_GAME_STATE
} from '../actions/player'

const initialState = {
  isModalOpen: false,
  playerName: '',
  currentPage: 'home', // 'home', 'menu', 'game'
  gameRoom: null,
  isHost: false,
  gameState: 'lobby' // 'lobby', 'menu', 'playing', 'finished'
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case OPEN_NAME_MODAL:
      return { 
        ...state, 
        isModalOpen: true 
      }
    case CLOSE_NAME_MODAL:
      return { 
        ...state, 
        isModalOpen: false 
      }
    case SET_PLAYER_NAME:
      return { 
        ...state, 
        playerName: action.payload,
        isModalOpen: false,
        currentPage: 'menu'
      }
    case NAVIGATE_TO_HOME:
      return {
        ...state,
        currentPage: 'home'
      }
    case NAVIGATE_TO_MENU:
      return {
        ...state,
        currentPage: 'menu',
        gameState: 'menu'
      }
    case NAVIGATE_TO_GAME:
      return {
        ...state,
        currentPage: 'game',
        gameState: 'playing'
      }
    case CREATE_GAME:
      return {
        ...state,
        currentPage: 'game',
        gameState: 'playing',
        isHost: true,
        gameRoom: Math.random().toString(36).substring(2, 8).toUpperCase()
      }
    case JOIN_GAME:
      return {
        ...state,
        currentPage: 'game',
        gameState: 'playing',
        isHost: false,
        gameRoom: action.payload
      }
    case JOIN_GAME_FROM_URL:
      return {
        ...state,
        playerName: action.payload.playerName,
        gameRoom: action.payload.room,
        currentPage: 'menu',
        gameState: 'lobby',
        isHost: false // Sera déterminé par le serveur
      }
    case SET_GAME_STATE:
      return {
        ...state,
        gameState: action.payload
      }
    case LOGOUT:
      return {
        ...initialState,
        currentPage: 'home'
      }
    default: 
      return state
  }
}

export default reducer