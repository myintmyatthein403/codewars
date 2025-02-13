function validateBattlefield(field) {
  const ships = { 4: 1, 3: 2, 2: 3, 1: 4 };
  const visited = Array.from({ length: 10 }, () => Array(10).fill(false));

  function isValid(x, y) {
    return x >= 0 && x < 10 && y >= 0 && y < 10;
  }

  function dfs(x, y) {
    if (!isValid(x, y) || field[x][y] === 0 || visited[x][y]) return 0;
    visited[x][y] = true;
    return 1 + dfs(x + 1, y) + dfs(x - 1, y) + dfs(x, y + 1) + dfs(x, y - 1);
  }

  function isTouching(x, y) {
    const directions = [
      [1, 1], [1, -1], [-1, 1], [-1, -1],
      [0, 1], [1, 0], [0, -1], [-1, 0]
    ];
    return directions.some(([dx, dy]) => isValid(x + dx, y + dy) && field[x + dx][y + dy] === 1);
  }

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (field[i][j] === 1 && !visited[i][j]) {
        if (isTouching(i, j)) return false;
        const size = dfs(i, j);
        if (!ships[size]) return false;
        ships[size]--;
      }
    }
  }

  return Object.values(ships).every(count => count === 0);
}
