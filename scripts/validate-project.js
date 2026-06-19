const fs = require('node:fs');
const path = require('node:path');

const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
const dbPath = path.join(rootDir, 'db', 'db.json');

const problems = [];

function walk(dir) {
    return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) return walk(fullPath);
        return fullPath;
    });
}

function stripUrlSuffix(value) {
    return value.split('#')[0].split('?')[0].trim();
}

function isExternalOrDynamic(value) {
    return (
        !value ||
        value === '#' ||
        value.startsWith('http://') ||
        value.startsWith('https://') ||
        value.startsWith('mailto:') ||
        value.startsWith('tel:') ||
        value.startsWith('javascript:') ||
        value.startsWith('data:') ||
        value.includes('${')
    );
}

function validateJsonDatabase() {
    const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
    if (!Array.isArray(db.usuarios)) problems.push('db/db.json deve conter usuarios[].');
    if (!Array.isArray(db.eventos)) problems.push('db/db.json deve conter eventos[].');

    const ids = new Set();
    for (const event of db.eventos || []) {
        if (!event.id) problems.push(`Evento sem id: ${event.nome || '(sem nome)'}`);
        if (ids.has(event.id)) problems.push(`Evento com id duplicado: ${event.id}`);
        ids.add(event.id);
        for (const field of ['nome', 'tipo', 'descricao', 'conteudo', 'local', 'data', 'organizador', 'imagemPrincipal']) {
            if (!event[field]) problems.push(`Evento ${event.id || '(sem id)'} sem campo obrigatorio: ${field}`);
        }
    }
}

function validateInternalReferences() {
    const files = walk(publicDir).filter((file) => /\.(html|css|js)$/i.test(file));
    const patterns = [
        /\bhref=["']([^"']+)["']/gi,
        /\bsrc=["']([^"']+)["']/gi,
        /url\(["']?([^"')]+)["']?\)/gi
    ];

    for (const file of files) {
        const text = fs.readFileSync(file, 'utf8');
        const baseDir = path.dirname(file);
        for (const pattern of patterns) {
            let match;
            while ((match = pattern.exec(text)) !== null) {
                const rawRef = match[1].trim();
                if (isExternalOrDynamic(rawRef)) continue;
                const cleanRef = stripUrlSuffix(rawRef);
                if (!cleanRef) continue;
                const target = cleanRef.startsWith('/')
                    ? path.join(publicDir, cleanRef)
                    : path.resolve(baseDir, cleanRef);
                if (!fs.existsSync(target)) {
                    problems.push(`${path.relative(rootDir, file)} referencia arquivo inexistente: ${rawRef}`);
                }
            }
        }
    }
}

function validatePortableNames() {
    const files = walk(rootDir).filter((file) => !file.includes(`${path.sep}node_modules${path.sep}`));
    const invalidName = /[\s]/;
    for (const file of files) {
        const relative = path.relative(rootDir, file);
        if (invalidName.test(relative)) {
            problems.push(`Caminho com espaco: ${relative}`);
        }
    }
}

validateJsonDatabase();
validateInternalReferences();
validatePortableNames();

if (problems.length) {
    console.error('Validacao encontrou problemas:');
    for (const problem of problems) console.error(`- ${problem}`);
    process.exit(1);
}

console.log('Validacao concluida: JSON, referencias internas e nomes portaveis estao OK.');
