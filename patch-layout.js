const fs = require('fs');
const path = require('path');

const slidesDir = path.join(__dirname, 'app/deck/slides');
const files = fs.readdirSync(slidesDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(slidesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Step 1: Remove justify-center from the outermost h-full flex-col div, and add py-safe
  content = content.replace(/className="w-full h-full flex flex-col justify-center/g, 'className="w-full h-full flex flex-col py-12 md:py-20');
  
  // Step 2: Add my-auto to the inner motion.div that contains the max-w
  // But some slides have it slightly differently.
  // A safe way is to just find `className="w-full max-w-` and add `my-auto` if it doesn't have it.
  content = content.replace(/className="w-full max-w-([^"]+?)"/g, (match, p1) => {
    if (p1.includes('my-auto')) return match;
    return `className="w-full max-w-${p1} my-auto"`;
  });

  fs.writeFileSync(filePath, content);
}

console.log('Layout patched successfully.');
