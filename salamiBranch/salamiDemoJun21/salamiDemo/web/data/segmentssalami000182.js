var data = [
[{o: 0.081, f: 19.044, l: "A'", a: 0},
{o: 19.044, f: 35.049, l: "B", a: 1},
{o: 35.049, f: 51.038, l: "C", a: 0},
{o: 51.038, f: 69.058, l: "D", a: 1},
{o: 69.058, f: 76.963, l: "A''", a: 0},
{o: 76.963, f: 93.044, l: "B", a: 1},
{o: 93.044, f: 109.038, l: "C", a: 0},
{o: 109.038, f: 127.044, l: "D'", a: 1},
{o: 127.044, f: 143.06, l: "E", a: 0},
{o: 143.06, f: 159.04, l: "B", a: 1},
{o: 159.04, f: 177.028, l: "C", a: 0},
{o: 177.028, f: 193.021, l: "D", a: 1},
{o: 193.021, f: 211.045, l: "D", a: 0},
{o: 211.045, f: 227.051, l: "A", a: 1},
{o: 227.051, f: 249.611, l: "A", a: 0}],
[{o: 0.004, f: 18.968, l: "E", a: 0},
{o: 18.968, f: 34.484, l: "C", a: 1},
{o: 34.484, f: 47.96, l: "B", a: 0},
{o: 47.96, f: 63.48, l: "B", a: 1},
{o: 63.48, f: 75.988, l: "E", a: 0},
{o: 75.988, f: 91.984, l: "C", a: 1},
{o: 91.984, f: 99.964, l: "B", a: 0},
{o: 99.964, f: 118.98, l: "B", a: 1},
{o: 118.98, f: 131.964, l: "B", a: 0},
{o: 131.964, f: 142.484, l: "E", a: 1},
{o: 142.484, f: 157.976, l: "A", a: 0},
{o: 157.976, f: 165.968, l: "D", a: 1},
{o: 165.968, f: 176.46, l: "D", a: 0},
{o: 176.46, f: 190.464, l: "F", a: 1},
{o: 190.464, f: 211.48, l: "G", a: 0},
{o: 211.48, f: 230.972, l: "H", a: 1},
{o: 230.972, f: 245.48, l: "I", a: 0}],
[{o: 0.004, f: 18.968, l: "E", a: 0},
{o: 18.968, f: 34.484, l: "C", a: 1},
{o: 34.484, f: 47.96, l: "B", a: 0},
{o: 47.96, f: 63.48, l: "A", a: 1},
{o: 63.48, f: 75.988, l: "E", a: 0},
{o: 75.988, f: 91.984, l: "C", a: 1},
{o: 91.984, f: 99.964, l: "B", a: 0},
{o: 99.964, f: 118.98, l: "A", a: 1},
{o: 118.98, f: 131.964, l: "F", a: 0},
{o: 131.964, f: 142.484, l: "G", a: 1},
{o: 142.484, f: 157.976, l: "H", a: 0},
{o: 157.976, f: 165.968, l: "D", a: 1},
{o: 165.968, f: 176.46, l: "D", a: 0},
{o: 176.46, f: 190.464, l: "I", a: 1},
{o: 190.464, f: 211.48, l: "J", a: 0},
{o: 211.48, f: 230.972, l: "K", a: 1},
{o: 230.972, f: 245.48, l: "L", a: 0}],
[{o: 0.467, f: 2.227, l: "8", a: 0},
{o: 2.227, f: 18.72, l: "1", a: 1},
{o: 18.72, f: 33.24, l: "4", a: 0},
{o: 33.24, f: 48.213, l: "3", a: 1},
{o: 48.213, f: 69.227, l: "2", a: 0},
{o: 69.227, f: 76.24, l: "1", a: 1},
{o: 76.24, f: 91.733, l: "4", a: 0},
{o: 91.733, f: 105.733, l: "3", a: 1},
{o: 105.733, f: 142.24, l: "2", a: 0},
{o: 142.24, f: 157.733, l: "1", a: 1},
{o: 157.733, f: 171.733, l: "3", a: 0},
{o: 171.733, f: 205.72, l: "5", a: 1},
{o: 205.72, f: 211.24, l: "2", a: 0},
{o: 211.24, f: 228.227, l: "1", a: 1},
{o: 228.227, f: 245.76, l: "6", a: 0},
{o: 245.76, f: 249.427, l: "7", a: 1}],
[{o: 0, f: 19.37, l: "a", a: 0},
{o: 19.37, f: 51.405, l: "b", a: 1},
{o: 51.405, f: 75.99, l: "c", a: 0},
{o: 75.99, f: 109.515, l: "b", a: 1},
{o: 109.515, f: 131.865, l: "c", a: 0},
{o: 131.865, f: 148.255, l: "d", a: 1},
{o: 148.255, f: 175.82, l: "b", a: 0},
{o: 175.82, f: 208.6, l: "e", a: 1},
{o: 208.6, f: 227.225, l: "f", a: 0},
{o: 227.225, f: 248.83, l: "f", a: 1}],
[{o: 0, f: 19.992, l: "n1", a: 0},
{o: 19.992, f: 78.019, l: "A", a: 1},
{o: 78.019, f: 132.005, l: "A", a: 0},
{o: 132.005, f: 249.336, l: "n3", a: 1}],
[{o: 0, f: 0.004, l: "H", a: 0},
{o: 0.004, f: 13.224, l: "G", a: 1},
{o: 13.224, f: 33.48, l: "F", a: 0},
{o: 33.48, f: 47.22, l: "G", a: 1},
{o: 47.22, f: 62.224, l: "C", a: 0},
{o: 62.224, f: 91.48, l: "B", a: 1},
{o: 91.48, f: 105.228, l: "G", a: 0},
{o: 105.228, f: 119.988, l: "C", a: 1},
{o: 119.988, f: 135.968, l: "B", a: 0},
{o: 135.968, f: 157.98, l: "F", a: 1},
{o: 157.98, f: 178.492, l: "G", a: 0},
{o: 178.492, f: 208.7, l: "E", a: 1},
{o: 208.7, f: 244.712, l: "A", a: 0},
{o: 244.712, f: 249.56, l: "H", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000182.ogg";

var artist = "RWC MDB P 2001 M06";

var track = "8";
