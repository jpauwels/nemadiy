var data = [
[{o: 0.023, f: 39.086, l: "A", a: 0},
{o: 39.086, f: 167.804, l: "B", a: 1},
{o: 167.804, f: 223.782, l: "C", a: 0},
{o: 223.782, f: 267.464, l: "D", a: 1},
{o: 267.464, f: 291.642, l: "D", a: 0}],
[{o: 0.112, f: 11.192, l: "A", a: 0},
{o: 11.192, f: 25.424, l: "A", a: 1},
{o: 25.424, f: 45.744, l: "A", a: 0},
{o: 45.744, f: 58.248, l: "A", a: 1},
{o: 58.248, f: 78.188, l: "A", a: 0},
{o: 78.188, f: 89.788, l: "A", a: 1},
{o: 89.788, f: 100.868, l: "A", a: 0},
{o: 100.868, f: 116.196, l: "B", a: 1},
{o: 116.196, f: 132.732, l: "A", a: 0},
{o: 132.732, f: 148.12, l: "A", a: 1},
{o: 148.12, f: 163.436, l: "E", a: 0},
{o: 163.436, f: 177.756, l: "A", a: 1},
{o: 177.756, f: 190.428, l: "D", a: 0},
{o: 190.428, f: 205.256, l: "A", a: 1},
{o: 205.256, f: 223.992, l: "C", a: 0},
{o: 223.992, f: 244.984, l: "A", a: 1},
{o: 244.984, f: 264.36, l: "E", a: 0},
{o: 264.36, f: 276.48, l: "D", a: 1},
{o: 276.48, f: 291.58, l: "A", a: 0}],
[{o: 0, f: 291.632, l: "A", a: 0}],
[{o: 0.813, f: 6.147, l: "5", a: 0},
{o: 6.147, f: 37.707, l: "1", a: 1},
{o: 37.707, f: 45.067, l: "3", a: 0},
{o: 45.067, f: 64.293, l: "1", a: 1},
{o: 64.293, f: 72.693, l: "3", a: 0},
{o: 72.693, f: 81.413, l: "5", a: 1},
{o: 81.413, f: 88.64, l: "2", a: 0},
{o: 88.64, f: 114.56, l: "1", a: 1},
{o: 114.56, f: 140.693, l: "4", a: 0},
{o: 140.693, f: 146.72, l: "1", a: 1},
{o: 146.72, f: 167.467, l: "2", a: 0},
{o: 167.467, f: 175.52, l: "3", a: 1},
{o: 175.52, f: 209.387, l: "1", a: 0},
{o: 209.387, f: 216.667, l: "7", a: 1},
{o: 216.667, f: 223.453, l: "8", a: 0},
{o: 223.453, f: 245.307, l: "1", a: 1},
{o: 245.307, f: 264.347, l: "2", a: 0},
{o: 264.347, f: 274.773, l: "1", a: 1},
{o: 274.773, f: 282.027, l: "3", a: 0},
{o: 282.027, f: 291.533, l: "6", a: 1}],
[{o: 0, f: 12.665, l: "a", a: 0},
{o: 12.665, f: 30.545, l: "b", a: 1},
{o: 30.545, f: 69.285, l: "c", a: 0},
{o: 69.285, f: 88.655, l: "d", a: 1},
{o: 88.655, f: 130.375, l: "c", a: 0},
{o: 130.375, f: 143.04, l: "e", a: 1},
{o: 143.04, f: 222.755, l: "b", a: 0},
{o: 222.755, f: 263.73, l: "c", a: 1},
{o: 263.73, f: 291.295, l: "f", a: 0}],
[{o: 0, f: 20.712, l: "n1", a: 0},
{o: 20.712, f: 32.845, l: "B", a: 1},
{o: 32.845, f: 40.809, l: "A", a: 0},
{o: 40.809, f: 105.221, l: "n3", a: 1},
{o: 105.221, f: 113.325, l: "A", a: 0},
{o: 113.325, f: 143.523, l: "n4", a: 1},
{o: 143.523, f: 155.62, l: "B", a: 0},
{o: 155.62, f: 163.19, l: "A", a: 1},
{o: 163.19, f: 197.509, l: "n6", a: 0},
{o: 197.509, f: 205.276, l: "A", a: 1},
{o: 205.276, f: 231.062, l: "n7", a: 0},
{o: 231.062, f: 238.875, l: "A", a: 1},
{o: 238.875, f: 244.46, l: "n8", a: 0},
{o: 244.46, f: 252.354, l: "A", a: 1},
{o: 252.354, f: 257.904, l: "n9", a: 0},
{o: 257.904, f: 265.776, l: "A", a: 1},
{o: 265.776, f: 291.318, l: "n10", a: 0}],
[{o: 0, f: 0.112, l: "E", a: 0},
{o: 0.112, f: 4.448, l: "D", a: 1},
{o: 4.448, f: 284.572, l: "B", a: 0},
{o: 284.572, f: 291.58, l: "A", a: 1},
{o: 291.58, f: 291.632, l: "E", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000289.ogg";

var artist = "Compilations";

var track = "Fandango";