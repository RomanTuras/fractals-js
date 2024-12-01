const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Function to draw the fractal tree
function drawTree(x, y, length, angle, depth) {
  if (depth === 0) return; // Stop recursion at depth 0

  // Calculate the end position of the branch
  const xEnd = x + length * Math.cos(angle);
  const yEnd = y + length * Math.sin(angle);

  // Draw the branch
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(xEnd, yEnd);
  ctx.strokeStyle = `hsl(${depth * 30}, 100%, 70%)`; // Dynamic color
  ctx.lineWidth = depth;
  ctx.stroke();

  // Recursively draw two smaller branches
  drawTree(xEnd, yEnd, length * 0.7, angle - Math.PI / 6, depth - 1); // Left branch
  drawTree(xEnd, yEnd, length * 0.7, angle + Math.PI / 6, depth - 1); // Right branch
}

// Initialize the canvas and draw the fractal
function init() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Start drawing the tree
  drawTree(canvas.width / 2, canvas.height / 2, 150, -Math.PI / 2, 10); // Adjust parameters as needed
}

// Resize canvas dynamically
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

init();
