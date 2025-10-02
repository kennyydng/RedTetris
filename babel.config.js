module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
          browsers: ['> 1%', 'last 2 versions']
        }
      }
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic' // Utilise la nouvelle JSX transform de React 17+
      }
    ]
  ],
  env: {
    test: {
      presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        ['@babel/preset-react', { runtime: 'automatic' }]
      ]
    }
  }
};