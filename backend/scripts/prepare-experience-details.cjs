const ts = require('typescript');
const fs = require('node:fs');
const path = require('node:path');
const input = process.argv[2];
if (!input) throw new Error('Provide the supplied experience TypeScript file');
const tree = ts.createSourceFile(input, fs.readFileSync(input, 'utf8'), ts.ScriptTarget.Latest, true);
const values = new Map();
function read(node) {
  if (ts.isStringLiteral(node) || ts.isNumericLiteral(node)) return ts.isStringLiteral(node) ? node.text : Number(node.text);
  if (ts.isIdentifier(node) && values.has(node.text)) return values.get(node.text);
  if (ts.isArrayLiteralExpression(node)) return node.elements.map(read);
  if (ts.isObjectLiteralExpression(node)) return Object.fromEntries(node.properties.map(prop => {
    if (!ts.isPropertyAssignment(prop)) throw new Error('Only literal data properties are supported');
    return [prop.name.text, read(prop.initializer)];
  }));
  throw new Error('Unsupported expression in supplied experience data');
}
for (const statement of tree.statements) {
  if (!ts.isVariableStatement(statement)) continue;
  for (const declaration of statement.declarationList.declarations) {
    if (!ts.isIdentifier(declaration.name) || !declaration.initializer) continue;
    values.set(declaration.name.text, read(declaration.initializer));
  }
}
const entries = values.get('ALL_EXPERIENCES');
if (!Array.isArray(entries)) throw new Error('ALL_EXPERIENCES data is missing');
fs.writeFileSync(path.resolve(__dirname, '../prisma/experience-details.json'), JSON.stringify(entries, null, 2) + '\n');
console.log(`Prepared ${entries.length} experience detail records without executing the source.`);
console.log(entries.map(entry => entry.slug).join('\n'));
