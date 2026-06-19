const { spawn } = require('node:child_process');

const port = process.env.PORT || '3000';
const npx = process.platform === 'win32' ? 'npx.cmd' : 'npx';

const child = spawn(
    npx,
    ['json-server', '--watch', 'db/db.json', '--host', '0.0.0.0', '--port', port],
    { stdio: 'inherit' }
);

child.on('exit', (code) => {
    process.exit(code || 0);
});
