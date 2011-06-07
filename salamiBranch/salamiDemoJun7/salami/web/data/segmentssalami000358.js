var data = [
[{o: 0.267, f: 86.335, l: "A", a: 0},
{o: 86.335, f: 103.645, l: "B", a: 1},
{o: 103.645, f: 137.71, l: "C", a: 0},
{o: 137.71, f: 177.306, l: "D", a: 1},
{o: 177.306, f: 194.638, l: "B", a: 0},
{o: 194.638, f: 228.974, l: "C", a: 1},
{o: 228.974, f: 245.03, l: "D'", a: 0}],
[{o: 0, f: 245.004, l: "A", a: 0}],
[{o: 0, f: 245.004, l: "A", a: 0}],
[{o: 0.6, f: 1.373, l: "4", a: 0},
{o: 1.373, f: 10.64, l: "3", a: 1},
{o: 10.64, f: 16.147, l: "7", a: 0},
{o: 16.147, f: 25.987, l: "3", a: 1},
{o: 25.987, f: 32.453, l: "4", a: 0},
{o: 32.453, f: 45.693, l: "6", a: 1},
{o: 45.693, f: 59.707, l: "5", a: 0},
{o: 59.707, f: 80.32, l: "3", a: 1},
{o: 80.32, f: 86.12, l: "4", a: 0},
{o: 86.12, f: 94.173, l: "3", a: 1},
{o: 94.173, f: 102.2, l: "2", a: 0},
{o: 102.2, f: 113.907, l: "1", a: 1},
{o: 113.907, f: 123.533, l: "2", a: 0},
{o: 123.533, f: 130.907, l: "1", a: 1},
{o: 130.907, f: 138.413, l: "2", a: 0},
{o: 138.413, f: 151.48, l: "1", a: 1},
{o: 151.48, f: 157.96, l: "2", a: 0},
{o: 157.96, f: 172.147, l: "1", a: 1},
{o: 172.147, f: 198.147, l: "2", a: 0},
{o: 198.147, f: 206.173, l: "1", a: 1},
{o: 206.173, f: 214.787, l: "2", a: 0},
{o: 214.787, f: 241.16, l: "1", a: 1},
{o: 241.16, f: 244.893, l: "8", a: 0}],
[{o: 0, f: 26.82, l: "a", a: 0},
{o: 26.82, f: 47.68, l: "b", a: 1},
{o: 47.68, f: 73.01, l: "b", a: 0},
{o: 73.01, f: 151.98, l: "c", a: 1},
{o: 151.98, f: 168.37, l: "d", a: 0},
{o: 168.37, f: 244.36, l: "c", a: 1}],
[{o: 0, f: 19.168, l: "n1", a: 0},
{o: 19.168, f: 34.029, l: "B", a: 1},
{o: 34.029, f: 47.566, l: "n2", a: 0},
{o: 47.566, f: 62.241, l: "B", a: 1},
{o: 62.241, f: 73.979, l: "n3", a: 0},
{o: 73.979, f: 86.97, l: "B", a: 1},
{o: 86.97, f: 97.721, l: "n4", a: 0},
{o: 97.721, f: 105.779, l: "D", a: 1},
{o: 105.779, f: 120.604, l: "A", a: 0},
{o: 120.604, f: 142.327, l: "C", a: 1},
{o: 142.327, f: 157.431, l: "A", a: 0},
{o: 157.431, f: 162.238, l: "n7", a: 1},
{o: 162.238, f: 177.041, l: "A", a: 0},
{o: 177.041, f: 184.622, l: "D", a: 1},
{o: 184.622, f: 188.662, l: "n8", a: 0},
{o: 188.662, f: 196.905, l: "D", a: 1},
{o: 196.905, f: 211.894, l: "A", a: 0},
{o: 211.894, f: 233.268, l: "C", a: 1},
{o: 233.268, f: 244.878, l: "n10", a: 0}],
[{o: 0, f: 0.212, l: "G", a: 0},
{o: 0.212, f: 4.712, l: "B", a: 1},
{o: 4.712, f: 11.672, l: "F", a: 0},
{o: 11.672, f: 26.672, l: "C", a: 1},
{o: 26.672, f: 36.188, l: "B", a: 0},
{o: 36.188, f: 43.12, l: "F", a: 1},
{o: 43.12, f: 46.768, l: "E", a: 0},
{o: 46.768, f: 49.884, l: "F", a: 1},
{o: 49.884, f: 54.064, l: "C", a: 0},
{o: 54.064, f: 62.688, l: "B", a: 1},
{o: 62.688, f: 69.388, l: "F", a: 0},
{o: 69.388, f: 72.576, l: "E", a: 1},
{o: 72.576, f: 79.572, l: "F", a: 0},
{o: 79.572, f: 105.968, l: "B", a: 1},
{o: 105.968, f: 116.224, l: "C", a: 0},
{o: 116.224, f: 122.676, l: "B", a: 1},
{o: 122.676, f: 133.204, l: "C", a: 0},
{o: 133.204, f: 142.652, l: "B", a: 1},
{o: 142.652, f: 153.02, l: "C", a: 0},
{o: 153.02, f: 162.464, l: "B", a: 1},
{o: 162.464, f: 172.932, l: "C", a: 0},
{o: 172.932, f: 197.112, l: "B", a: 1},
{o: 197.112, f: 207.424, l: "C", a: 0},
{o: 207.424, f: 213.856, l: "B", a: 1},
{o: 213.856, f: 224.608, l: "C", a: 0},
{o: 224.608, f: 230.92, l: "B", a: 1},
{o: 230.92, f: 233.428, l: "F", a: 0},
{o: 233.428, f: 243.176, l: "C", a: 1},
{o: 243.176, f: 245.004, l: "G", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000358.ogg";
