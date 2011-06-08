var data = [
[{o: 0.326, f: 8.654, l: "A", a: 0},
{o: 8.654, f: 42.973, l: "B", a: 1},
{o: 42.973, f: 79.502, l: "C", a: 0},
{o: 79.502, f: 97.723, l: "D", a: 1},
{o: 97.723, f: 132.352, l: "B", a: 0},
{o: 132.352, f: 171.167, l: "C", a: 1}],
[{o: 0.244, f: 9.164, l: "E", a: 0},
{o: 9.164, f: 18.272, l: "E", a: 1},
{o: 18.272, f: 25.504, l: "E", a: 0},
{o: 25.504, f: 38.74, l: "E", a: 1},
{o: 38.74, f: 43.52, l: "E", a: 0},
{o: 43.52, f: 53.556, l: "E", a: 1},
{o: 53.556, f: 60.76, l: "E", a: 0},
{o: 60.76, f: 76.908, l: "A", a: 1},
{o: 76.908, f: 83.628, l: "A", a: 0},
{o: 83.628, f: 98.244, l: "A", a: 1},
{o: 98.244, f: 108.492, l: "A", a: 0},
{o: 108.492, f: 117.116, l: "E", a: 1},
{o: 117.116, f: 127.2, l: "E", a: 0},
{o: 127.2, f: 134.24, l: "B", a: 1},
{o: 134.24, f: 150.056, l: "E", a: 0},
{o: 150.056, f: 162.62, l: "C", a: 1},
{o: 162.62, f: 168.272, l: "D", a: 0}],
[{o: 0.244, f: 9.164, l: "E", a: 0},
{o: 9.164, f: 18.272, l: "F", a: 1},
{o: 18.272, f: 25.504, l: "D", a: 0},
{o: 25.504, f: 38.74, l: "C", a: 1},
{o: 38.74, f: 43.52, l: "D", a: 0},
{o: 43.52, f: 53.556, l: "C", a: 1},
{o: 53.556, f: 60.76, l: "G", a: 0},
{o: 60.76, f: 76.908, l: "A", a: 1},
{o: 76.908, f: 83.628, l: "B", a: 0},
{o: 83.628, f: 98.244, l: "B", a: 1},
{o: 98.244, f: 108.492, l: "A", a: 0},
{o: 108.492, f: 117.116, l: "C", a: 1},
{o: 117.116, f: 127.2, l: "C", a: 0},
{o: 127.2, f: 134.24, l: "H", a: 1},
{o: 134.24, f: 150.056, l: "C", a: 0},
{o: 150.056, f: 162.62, l: "I", a: 1},
{o: 162.62, f: 168.272, l: "J", a: 0}],
[{o: 0.787, f: 8.387, l: "3", a: 0},
{o: 8.387, f: 20.707, l: "6", a: 1},
{o: 20.707, f: 30.333, l: "4", a: 0},
{o: 30.333, f: 42.733, l: "2", a: 1},
{o: 42.733, f: 51.96, l: "1", a: 0},
{o: 51.96, f: 59.987, l: "2", a: 1},
{o: 59.987, f: 73.96, l: "1", a: 0},
{o: 73.96, f: 79.747, l: "3", a: 1},
{o: 79.747, f: 89.747, l: "8", a: 0},
{o: 89.747, f: 101.747, l: "3", a: 1},
{o: 101.747, f: 114.733, l: "2", a: 0},
{o: 114.733, f: 131.56, l: "4", a: 1},
{o: 131.56, f: 149.293, l: "1", a: 0},
{o: 149.293, f: 161.787, l: "5", a: 1},
{o: 161.787, f: 171.053, l: "7", a: 0}],
[{o: 0, f: 14.9, l: "a", a: 0},
{o: 14.9, f: 31.29, l: "b", a: 1},
{o: 31.29, f: 49.17, l: "a", a: 0},
{o: 49.17, f: 67.05, l: "b", a: 1},
{o: 67.05, f: 89.4, l: "b", a: 0},
{o: 89.4, f: 102.81, l: "a", a: 1},
{o: 102.81, f: 120.69, l: "b", a: 0},
{o: 120.69, f: 134.1, l: "a", a: 1},
{o: 134.1, f: 141.55, l: "c", a: 0},
{o: 141.55, f: 157.195, l: "b", a: 1},
{o: 157.195, f: 170.605, l: "d", a: 0}],
[{o: 0, f: 10.832, l: "n1", a: 0},
{o: 10.832, f: 30.616, l: "A", a: 1},
{o: 30.616, f: 47.903, l: "A", a: 0},
{o: 47.903, f: 65.062, l: "A", a: 1},
{o: 65.062, f: 81.107, l: "A", a: 0},
{o: 81.107, f: 102.563, l: "n5", a: 1},
{o: 102.563, f: 119.873, l: "A", a: 0},
{o: 119.873, f: 137.23, l: "A", a: 1},
{o: 137.23, f: 153.6, l: "A", a: 0},
{o: 153.6, f: 170.945, l: "n8", a: 1}],
[{o: 0, f: 0.252, l: "D", a: 0},
{o: 0.252, f: 12.688, l: "B", a: 1},
{o: 12.688, f: 75.868, l: "A", a: 0},
{o: 75.868, f: 98.244, l: "B", a: 1},
{o: 98.244, f: 160.092, l: "A", a: 0},
{o: 160.092, f: 168.536, l: "C", a: 1},
{o: 168.536, f: 171.155, l: "D", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001482.ogg";

var artist = "Compilations";

var track = "We Believe In Happy Endings";
