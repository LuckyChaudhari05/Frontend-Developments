let n = 5;
for (let p = n; p >= 1; p--) {
    let line = '';

    for (let q = 1; q <= n - p; q++) {
        line += '*';
    }
    for (let r = 1; r <= 2 * p - 1; r++) {
        line += ' ';
    }

    for (let q = 1; q <= n - p; q++) {
        line += '*';
    }
    for (let r = 1; r <= 2 * p - 1; r++) {
        line += ' ';
    }

   
    console.log(line);
}

for (let i = 1; i <= n; i++) {
    let line = '';

    for (let j = 1; j <= n - i; j++) {
        line += '*';
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        line += ' ';
    }

     for (let j = 1; j <= n - i; j++) {
        line += '*';
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        line += ' ';
    }
 
 
    console.log(line);
}


