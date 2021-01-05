module.exports = {
    src: [
      './src/index.ts',
    ],
    mode: 'file',
    includeDeclarations: true,
    tsconfig: './tsconfig.json',
    out: './docs',
    excludePrivate: true,
    excludeProtected: true,
    excludeExternals: true,
    readme: 'README.md',
    name: 'TicTac-Node',
    ignoreCompilerErrors: true,
    listInvalidSymbolLinks: true,
};