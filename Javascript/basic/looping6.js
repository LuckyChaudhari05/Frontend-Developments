let n = 5;
for (let p = n; p >= 1; p--) {
    let line = '';

    for (let q = 1; q <= n - p; q++) {
        line += ' ';
    }
    for (let r = 1; r <= 2 * p - 1; r++) {
        line += '*';
    }

    console.log(line);
}