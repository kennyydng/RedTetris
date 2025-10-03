import React, { useState } from 'react'

const Modal = ({ isOpen, onClose, onSubmit, title = "Enter your name" }) => {
  const [playerName, setPlayerName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (playerName.trim()) {
      onSubmit(playerName.trim())
      setPlayerName('')
    }
  }

  const handleClose = () => {
    setPlayerName('')
    onClose()
  }

  if (!isOpen) return null

  return (
    <div style={styles.overlay} onClick={handleClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div style={styles.header}>
          <h2 style={styles.title}>{title}</h2>
          <button style={styles.closeButton} onClick={handleClose}>
            ×
          </button>
        </div>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            placeholder="Entrez votre nom..."
            style={styles.input}
            autoFocus
            maxLength={20}
          />
          <div style={styles.buttonGroup}>
            <button
              type="button"
              onClick={handleClose}
              style={styles.cancelButton}
            >
              Annuler
            </button>
            <button
              type="submit"
              style={styles.submitButton}
              disabled={!playerName.trim()}
            >
              Jouer
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000
  },
  modal: {
    backgroundColor: '#1a1a1a',
    border: '2px solid #ff0000',
    borderRadius: '10px',
    padding: '2rem',
    minWidth: '400px',
    maxWidth: '90vw',
    boxShadow: '0 0 30px rgba(255, 0, 0, 0.5)',
    animation: 'modalSlideIn 0.3s ease-out'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1.5rem'
  },
  title: {
    color: '#ff0000',
    fontSize: '1.5rem',
    margin: 0,
    fontFamily: 'Arial, sans-serif'
  },
  closeButton: {
    background: 'none',
    border: 'none',
    color: '#ffffff',
    fontSize: '2rem',
    cursor: 'pointer',
    padding: 0,
    width: '30px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    transition: 'background-color 0.2s'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  },
  input: {
    padding: '1rem',
    fontSize: '1rem',
    border: '2px solid #333',
    borderRadius: '5px',
    backgroundColor: '#2a2a2a',
    color: '#ffffff',
    outline: 'none',
    transition: 'border-color 0.2s',
    fontFamily: 'Arial, sans-serif'
  },
  buttonGroup: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'flex-end'
  },
  cancelButton: {
    padding: '0.8rem 1.5rem',
    fontSize: '1rem',
    border: '2px solid #666',
    borderRadius: '5px',
    backgroundColor: 'transparent',
    color: '#ffffff',
    cursor: 'pointer',
    transition: 'all 0.2s',
    fontFamily: 'Arial, sans-serif'
  },
  submitButton: {
    padding: '0.8rem 1.5rem',
    fontSize: '1rem',
    border: '2px solid #ff0000',
    borderRadius: '5px',
    backgroundColor: '#ff0000',
    color: '#ffffff',
    cursor: 'pointer',
    transition: 'all 0.2s',
    fontFamily: 'Arial, sans-serif'
  }
}

// CSS pour l'animation
const styleSheet = document.createElement('style')
styleSheet.textContent = `
  @keyframes modalSlideIn {
    from {
      opacity: 0;
      transform: translateY(-50px) scale(0.9);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  .modal input:focus {
    border-color: #ff0000 !important;
  }

  .modal button:hover.cancel {
    background-color: #666 !important;
  }

  .modal button:hover.submit:not(:disabled) {
    background-color: #cc0000 !important;
    transform: translateY(-2px);
  }

  .modal button:disabled {
    opacity: 0.5;
    cursor: not-allowed !important;
  }
`
document.head.appendChild(styleSheet)

export default Modal