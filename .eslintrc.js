module.exports = {
    root: true,
    extends: ['react-app', 'react-app/jest', 'prettier'],
    plugins: ['prettier', 'react-hooks'], 
    rules: {
        'prettier/prettier': 'warn',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'off',
    },
};