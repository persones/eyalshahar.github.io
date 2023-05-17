const fs = require('fs');
const yaml = require('yaml');
let files = fs.readdirSync('.');
for (const f of files) {
  if((f.split('.'))[1] != 'json') {
    continue;
  }
  const t = fs.readFileSync(f);
  let j = JSON.parse(t);
  console.log(j);
  let y = yaml.stringify(j);
  console.log(y);
  fs.writeFileSync(`${(f.split('.'))[0]}.yaml`, y);
}
