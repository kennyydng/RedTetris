import React from 'react'

const HomePage = ({ onPlayClick }) => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Red Tetris</h1>
            <p style={styles.subtitle}>Online multijoueur game</p>

            <button
                style={styles.playButton}
                onClick={onPlayClick}
                onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-3px)'
                    e.target.style.boxShadow = '0 10px 30px rgba(255, 0, 0, 0.4)'
                }}
                onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)'
                    e.target.style.boxShadow = '0 5px 20px rgba(255, 0, 0, 0.3)'
                }}
            >
                PLAY
            </button>
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
        padding: 0,
        fontFamily: 'Arial, sans-serif',
        background: '#000000',
        color: '#ffffff',
        textAlign: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        gap: '1rem'
    },
    title: {
        fontSize: '4rem',
        marginBottom: '0',
        fontWeight: 'bold',
        color: '#ff0000',
        animation: 'pulse 2s infinite'
    },
    subtitle: {
        fontSize: '1.2rem',
        opacity: 0.8,
    },
    playButton: {
        fontSize: '2rem',
        fontWeight: 'bold',
        padding: '1rem 3rem',
        backgroundColor: '#ff0000',
        color: '#ffffff',
        border: 'none',
        borderRadius: '10px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: '0 5px 20px rgba(255, 0, 0, 0.3)',
        letterSpacing: '2px',
        fontFamily: 'Arial, sans-serif',
        textTransform: 'uppercase',
        margin: '1rem 0'
    }
}

export default HomePage