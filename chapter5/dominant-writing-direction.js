require('./scripts.js');

function dominantDirection(text) {
  let scripts = textScripts(text);
  let domDir = '';
  let domCount = 0;
  for (script of scripts) {
    if (domCount < script.count) {
      domDir = script.name;
      domCount = script.count;
    }
  }
  return domDir;
}

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (
      script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })
    ) {
      return script;
    }
  }
  return null;
}

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

function textScripts(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : 'none';
  }).filter(({ name }) => name != 'none');

  let total = scripts.reduce((n, { count }) => n + count, 0);
  if (total == 0) return 'No scripts found';

  return scripts;
}

console.log(dominantDirection('Hello!'));
console.log(dominantDirection('Hey, مساء الخير'));
