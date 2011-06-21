var data = [
[{o: 0.36, f: 7.105, l: "N", a: 0},
{o: 7.105, f: 77.349, l: "B", a: 1},
{o: 77.349, f: 89.94, l: "A", a: 0},
{o: 89.94, f: 102.468, l: "A", a: 1},
{o: 102.468, f: 115.005, l: "A", a: 0},
{o: 115.005, f: 127.602, l: "A", a: 1},
{o: 127.602, f: 140.113, l: "C", a: 0},
{o: 140.113, f: 152.416, l: "A", a: 1},
{o: 152.416, f: 164.775, l: "A", a: 0},
{o: 164.775, f: 176.866, l: "A", a: 1},
{o: 176.866, f: 188.79, l: "A", a: 0},
{o: 188.79, f: 200.677, l: "B", a: 1},
{o: 200.677, f: 212.406, l: "A", a: 0},
{o: 212.406, f: 224.351, l: "A", a: 1},
{o: 224.351, f: 236.111, l: "A", a: 0},
{o: 236.111, f: 247.914, l: "B", a: 1},
{o: 247.914, f: 264.032, l: "C", a: 0}],
[{o: 0.068, f: 15.164, l: "A", a: 0},
{o: 15.164, f: 36.408, l: "A", a: 1},
{o: 36.408, f: 68.436, l: "A", a: 0},
{o: 68.436, f: 91.68, l: "B", a: 1},
{o: 91.68, f: 103.432, l: "C", a: 0},
{o: 103.432, f: 124.6, l: "A", a: 1},
{o: 124.6, f: 141.044, l: "D", a: 0},
{o: 141.044, f: 169.1, l: "A", a: 1},
{o: 169.1, f: 196.396, l: "A", a: 0},
{o: 196.396, f: 213.572, l: "A", a: 1},
{o: 213.572, f: 223.044, l: "A", a: 0},
{o: 223.044, f: 238.892, l: "A", a: 1},
{o: 238.892, f: 260.812, l: "A", a: 0}],
[{o: 0.068, f: 15.164, l: "C", a: 0},
{o: 15.164, f: 36.408, l: "A", a: 1},
{o: 36.408, f: 68.436, l: "A", a: 0},
{o: 68.436, f: 91.68, l: "D", a: 1},
{o: 91.68, f: 103.432, l: "E", a: 0},
{o: 103.432, f: 124.6, l: "F", a: 1},
{o: 124.6, f: 141.044, l: "G", a: 0},
{o: 141.044, f: 169.1, l: "B", a: 1},
{o: 169.1, f: 196.396, l: "B", a: 0},
{o: 196.396, f: 213.572, l: "B", a: 1},
{o: 213.572, f: 223.044, l: "B", a: 0},
{o: 223.044, f: 238.892, l: "B", a: 1},
{o: 238.892, f: 260.812, l: "B", a: 0}],
[{o: 0.307, f: 5.693, l: "7", a: 0},
{o: 5.693, f: 18.587, l: "2", a: 1},
{o: 18.587, f: 64.08, l: "3", a: 0},
{o: 64.08, f: 69.84, l: "6", a: 1},
{o: 69.84, f: 84.853, l: "1", a: 0},
{o: 84.853, f: 90.32, l: "2", a: 1},
{o: 90.32, f: 96.187, l: "1", a: 0},
{o: 96.187, f: 102.2, l: "4", a: 1},
{o: 102.2, f: 121.8, l: "1", a: 0},
{o: 121.8, f: 125.773, l: "5", a: 1},
{o: 125.773, f: 142.4, l: "2", a: 0},
{o: 142.4, f: 146.64, l: "1", a: 1},
{o: 146.64, f: 152.4, l: "4", a: 0},
{o: 152.4, f: 160.52, l: "1", a: 1},
{o: 160.52, f: 164.733, l: "2", a: 0},
{o: 164.733, f: 184.267, l: "1", a: 1},
{o: 184.267, f: 199.867, l: "2", a: 0},
{o: 199.867, f: 208.387, l: "1", a: 1},
{o: 208.387, f: 213, l: "5", a: 0},
{o: 213, f: 224.667, l: "2", a: 1},
{o: 224.667, f: 236.787, l: "1", a: 0},
{o: 236.787, f: 258.653, l: "2", a: 1},
{o: 258.653, f: 262.973, l: "8", a: 0}],
[{o: 0, f: 17.135, l: "a", a: 0},
{o: 17.135, f: 25.33, l: "b", a: 1},
{o: 25.33, f: 46.19, l: "c", a: 0},
{o: 46.19, f: 75.99, l: "d", a: 1},
{o: 75.99, f: 174.33, l: "e", a: 0},
{o: 174.33, f: 182.525, l: "b", a: 1},
{o: 182.525, f: 219.775, l: "f", a: 0},
{o: 219.775, f: 247.34, l: "d", a: 1},
{o: 247.34, f: 263.73, l: "g", a: 0}],
[{o: 0, f: 189.463, l: "n1", a: 0},
{o: 189.463, f: 201.387, l: "A", a: 1},
{o: 201.387, f: 248.604, l: "n2", a: 0},
{o: 248.604, f: 260.342, l: "A", a: 1},
{o: 260.342, f: 263.825, l: "n3", a: 0}],
[{o: 0, f: 0.068, l: "G", a: 0},
{o: 0.068, f: 24.096, l: "D", a: 1},
{o: 24.096, f: 70.82, l: "B", a: 0},
{o: 70.82, f: 90.888, l: "A", a: 1},
{o: 90.888, f: 120.24, l: "F", a: 0},
{o: 120.24, f: 165.332, l: "C", a: 1},
{o: 165.332, f: 187.844, l: "B", a: 0},
{o: 187.844, f: 200.448, l: "C", a: 1},
{o: 200.448, f: 215.584, l: "E", a: 0},
{o: 215.584, f: 246.216, l: "B", a: 1},
{o: 246.216, f: 260.812, l: "C", a: 0},
{o: 260.812, f: 264.021, l: "G", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000096.ogg";

var artist = "Wynton Marsalis";

var track = "Little Birdie";
