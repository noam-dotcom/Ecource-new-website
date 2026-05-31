const { createCanvas, loadImage } = require('canvas');

async function measureBorder(path) {
  const img = await loadImage(path);
  const canvas = createCanvas(300, 300);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
  const d = ctx.getImageData(0, 0, 300, 300).data;
  const isGold = (x, y) => {
    const i = (y * 300 + x) * 4;
    const r = d[i], g = d[i+1], b = d[i+2], a = d[i+3];
    return a > 128 && r > 195 && g > 185 && b < 175 && (r + g) > b * 3;
  };
  let topB = 0;
  for (let y = 0; y < 50; y++) { if (isGold(150, y)) topB++; else if (topB > 0) break; }
  let leftB = 0;
  for (let x = 0; x < 50; x++) { if (isGold(x, 150)) leftB++; else if (leftB > 0) break; }
  let start = -1, end = -1;
  for (let x = 0; x < 150; x++) {
    if (isGold(x, 75)) { if (start < 0) start = x; end = x; }
    else if (start >= 0) break;
  }
  const parts = path.replace(/\\/g, '/').split('/');
  const name = parts[parts.length - 1];
  console.log(name + ': top=' + topB + 'px  left=' + leftB + 'px  diag=' + (end - start + 1) + 'px (x=' + start + '-' + end + ')');
}

Promise.all([
  'public/team/team-noam.png',
  'public/team/team-joseph.png',
  'public/team/team-bogie.png',
  'public/team/team-avner.png',
].map(measureBorder)).catch(console.error);
