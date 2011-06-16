var data = [
[{o: 0.058, f: 6.298, l: "Z", a: 0},
{o: 6.298, f: 46.237, l: "A", a: 1},
{o: 46.237, f: 66.095, l: "A", a: 0},
{o: 66.095, f: 86.338, l: "B", a: 1},
{o: 86.338, f: 127.026, l: "C", a: 0},
{o: 127.026, f: 147.328, l: "D", a: 1},
{o: 147.328, f: 188.107, l: "E", a: 0},
{o: 188.107, f: 208.812, l: "B", a: 1},
{o: 208.812, f: 250.041, l: "C", a: 0},
{o: 250.041, f: 286.076, l: "D", a: 1},
{o: 286.076, f: 306.661, l: "B", a: 0},
{o: 306.661, f: 355.951, l: "E", a: 1},
{o: 355.951, f: 377.472, l: "Z", a: 0}],
[{o: 0.032, f: 9.456, l: "C", a: 0},
{o: 9.456, f: 24.292, l: "C", a: 1},
{o: 24.292, f: 43.7, l: "C", a: 0},
{o: 43.7, f: 66.016, l: "C", a: 1},
{o: 66.016, f: 74.864, l: "C", a: 0},
{o: 74.864, f: 87.216, l: "C", a: 1},
{o: 87.216, f: 109.988, l: "C", a: 0},
{o: 109.988, f: 132.284, l: "C", a: 1},
{o: 132.284, f: 147.844, l: "C", a: 0},
{o: 147.844, f: 165.116, l: "C", a: 1},
{o: 165.116, f: 188.312, l: "C", a: 0},
{o: 188.312, f: 200.92, l: "E", a: 1},
{o: 200.92, f: 209.292, l: "C", a: 0},
{o: 209.292, f: 220.284, l: "C", a: 1},
{o: 220.284, f: 228.592, l: "C", a: 0},
{o: 228.592, f: 237.28, l: "C", a: 1},
{o: 237.28, f: 245.712, l: "C", a: 0},
{o: 245.712, f: 262.108, l: "F", a: 1},
{o: 262.108, f: 283.968, l: "C", a: 0},
{o: 283.968, f: 303.316, l: "B", a: 1},
{o: 303.316, f: 316.896, l: "B", a: 0},
{o: 316.896, f: 336.24, l: "B", a: 1},
{o: 336.24, f: 345.912, l: "A", a: 0},
{o: 345.912, f: 355.752, l: "A", a: 1},
{o: 355.752, f: 366.74, l: "D", a: 0},
{o: 366.74, f: 377.296, l: "D", a: 1}],
[{o: 0.032, f: 9.456, l: "D", a: 0},
{o: 9.456, f: 24.292, l: "F", a: 1},
{o: 24.292, f: 43.7, l: "G", a: 0},
{o: 43.7, f: 66.016, l: "A", a: 1},
{o: 66.016, f: 74.864, l: "C", a: 0},
{o: 74.864, f: 87.216, l: "C", a: 1},
{o: 87.216, f: 109.988, l: "A", a: 0},
{o: 109.988, f: 132.284, l: "A", a: 1},
{o: 132.284, f: 147.844, l: "A", a: 0},
{o: 147.844, f: 165.116, l: "A", a: 1},
{o: 165.116, f: 188.312, l: "A", a: 0},
{o: 188.312, f: 200.92, l: "H", a: 1},
{o: 200.92, f: 209.292, l: "C", a: 0},
{o: 209.292, f: 220.284, l: "A", a: 1},
{o: 220.284, f: 228.592, l: "A", a: 0},
{o: 228.592, f: 237.28, l: "E", a: 1},
{o: 237.28, f: 245.712, l: "E", a: 0},
{o: 245.712, f: 262.108, l: "I", a: 1},
{o: 262.108, f: 283.968, l: "A", a: 0},
{o: 283.968, f: 303.316, l: "J", a: 1},
{o: 303.316, f: 316.896, l: "B", a: 0},
{o: 316.896, f: 336.24, l: "B", a: 1},
{o: 336.24, f: 345.912, l: "K", a: 0},
{o: 345.912, f: 355.752, l: "L", a: 1},
{o: 355.752, f: 366.74, l: "M", a: 0},
{o: 366.74, f: 377.296, l: "N", a: 1}],
[{o: 0.733, f: 5.667, l: "8", a: 0},
{o: 5.667, f: 24.6, l: "3", a: 1},
{o: 24.6, f: 41.507, l: "4", a: 0},
{o: 41.507, f: 65.107, l: "1", a: 1},
{o: 65.107, f: 85.307, l: "2", a: 0},
{o: 85.307, f: 189, l: "1", a: 1},
{o: 189, f: 207.667, l: "2", a: 0},
{o: 207.667, f: 284.96, l: "1", a: 1},
{o: 284.96, f: 346.947, l: "2", a: 0},
{o: 346.947, f: 355.32, l: "7", a: 1},
{o: 355.32, f: 364.853, l: "6", a: 0},
{o: 364.853, f: 377.213, l: "5", a: 1}],
[{o: 0, f: 79.715, l: "a", a: 0},
{o: 79.715, f: 148.255, l: "b", a: 1},
{o: 148.255, f: 216.795, l: "a", a: 0},
{o: 216.795, f: 262.24, l: "c", a: 1},
{o: 262.24, f: 333.015, l: "a", a: 0},
{o: 333.015, f: 376.97, l: "d", a: 1}],
[{o: 0, f: 26.842, l: "n1", a: 0},
{o: 26.842, f: 41.866, l: "A", a: 1},
{o: 41.866, f: 56.169, l: "A", a: 0},
{o: 56.169, f: 66.699, l: "B", a: 1},
{o: 66.699, f: 81.827, l: "A", a: 0},
{o: 81.827, f: 94.61, l: "C", a: 1},
{o: 94.61, f: 132.005, l: "n6", a: 0},
{o: 132.005, f: 142.129, l: "B", a: 1},
{o: 142.129, f: 153.008, l: "n7", a: 0},
{o: 153.008, f: 167.056, l: "A", a: 1},
{o: 167.056, f: 173.441, l: "n8", a: 0},
{o: 173.441, f: 188.662, l: "A", a: 1},
{o: 188.662, f: 204.15, l: "A", a: 0},
{o: 204.15, f: 217.072, l: "C", a: 1},
{o: 217.072, f: 265.369, l: "n11", a: 0},
{o: 265.369, f: 275.679, l: "B", a: 1},
{o: 275.679, f: 286.569, l: "n12", a: 0},
{o: 286.569, f: 300.768, l: "A", a: 1},
{o: 300.768, f: 307.212, l: "n13", a: 0},
{o: 307.212, f: 321.48, l: "A", a: 1},
{o: 321.48, f: 327.912, l: "n14", a: 0},
{o: 327.912, f: 342.053, l: "A", a: 1},
{o: 342.053, f: 377.139, l: "n15", a: 0}],
[{o: 0, f: 0.028, l: "F", a: 0},
{o: 0.028, f: 3.092, l: "E", a: 1},
{o: 3.092, f: 377.3, l: "C", a: 0},
{o: 377.3, f: 377.36, l: "F", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001384.ogg";