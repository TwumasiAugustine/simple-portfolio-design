module.exports = {
    darkMode: 'class',
    content: [
        './index.html',
        './scripts.js'
    ],
    theme: {
        extend: {
            colors: {
                // Ensure dark mode colors are defined
                dark: {
                    900: '#1a202c',
                    800: '#2d3748',
                    700: '#4a5568',
                }
            }
        },
    },
    plugins: [],
} 