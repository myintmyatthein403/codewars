function determinant(m) {
  if (m.length === 1) {
    return m[0][0];
  }
  if (m.length === 2) {
    return m[0][0] * m[1][1] - m[0][1] * m[1][0];
  }
  let det = 0;
  for (let i = 0; i < m.length; i++) {
    det += m[0][i] * cofactor(m, 0, i);
  }
  return det;
}

function cofactor(m, row, col) {
  return Math.pow(-1, row + col) * determinant(minor(m, row, col));
}

function minor(m, row, col) {
  return m.filter((r, i) => i !== row).map(r => r.filter((c, j) => j !== col));
}
