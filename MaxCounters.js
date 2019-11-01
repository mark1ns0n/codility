function solution(N, A) {
    const counters = {};
    let max = 0;
    let min = 0;
    for (let i of A) {
        let value = counters[i] || 0;

        if (value < min) {
            value = min;
        }

        if (N + 1 === i) {
            min = max;
        } else {
            value++;
            if (value > max) {
                max = value;
            }
            counters[i] = value;
        }
    }

    for (let i = 1; i <= N; i++) {
        counters[i] = (counters[i] || 0) < min ? min : (counters[i] || 0);
    }
    
    return Object.values(counters);
}