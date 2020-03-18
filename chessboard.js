function chessboard(width, height) {
  for (let i = 0; i < height; i++) {
    let line = "";
    const offset = i % 2 === 0 ? 0 : 1;
    for (let j = offset; j < width; j++) {
      const char = j % 2 === 0 ? "#" : " ";
      line += char;
    }
    console.log(line);
  }
}
chessboard(8, 20);
