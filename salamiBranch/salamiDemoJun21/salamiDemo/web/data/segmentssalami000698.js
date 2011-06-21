var data = [
[{o: 0.294, f: 5.936, l: "Z", a: 0},
{o: 5.936, f: 9.397, l: "I", a: 1},
{o: 9.397, f: 40.363, l: "A", a: 0},
{o: 40.363, f: 56.77, l: "V", a: 1},
{o: 56.77, f: 75.244, l: "P", a: 0},
{o: 75.244, f: 112.051, l: "D", a: 1},
{o: 112.051, f: 128.461, l: "V", a: 0},
{o: 128.461, f: 146.891, l: "P", a: 1},
{o: 146.891, f: 183.811, l: "D", a: 0},
{o: 183.811, f: 192.003, l: "H", a: 1},
{o: 192.003, f: 208.315, l: "C", a: 0},
{o: 208.315, f: 286.849, l: "P", a: 1}],
[{o: 0.052, f: 5.912, l: "A", a: 0},
{o: 5.912, f: 18.216, l: "C", a: 1},
{o: 18.216, f: 28.468, l: "C", a: 0},
{o: 28.468, f: 40.252, l: "C", a: 1},
{o: 40.252, f: 52.544, l: "C", a: 0},
{o: 52.544, f: 59.72, l: "C", a: 1},
{o: 59.72, f: 74.584, l: "C", a: 0},
{o: 74.584, f: 87.384, l: "C", a: 1},
{o: 87.384, f: 100.192, l: "C", a: 0},
{o: 100.192, f: 111.988, l: "C", a: 1},
{o: 111.988, f: 118.636, l: "C", a: 0},
{o: 118.636, f: 127.864, l: "C", a: 1},
{o: 127.864, f: 146.316, l: "C", a: 0},
{o: 146.316, f: 160.14, l: "C", a: 1},
{o: 160.14, f: 173.976, l: "C", a: 0},
{o: 173.976, f: 182.692, l: "C", a: 1},
{o: 182.692, f: 191.916, l: "B", a: 0},
{o: 191.916, f: 200.112, l: "D", a: 1},
{o: 200.112, f: 208.82, l: "E", a: 0},
{o: 208.82, f: 221.632, l: "F", a: 1},
{o: 221.632, f: 231.364, l: "G", a: 0},
{o: 231.364, f: 241.1, l: "C", a: 1},
{o: 241.1, f: 255.444, l: "H", a: 0},
{o: 255.444, f: 273.376, l: "I", a: 1},
{o: 273.376, f: 284.148, l: "J", a: 0}],
[{o: 0, f: 286.573, l: "A", a: 0}],
[{o: 0.707, f: 9.76, l: "7", a: 0},
{o: 9.76, f: 30.773, l: "4", a: 1},
{o: 30.773, f: 55.36, l: "1", a: 0},
{o: 55.36, f: 75.867, l: "2", a: 1},
{o: 75.867, f: 128.12, l: "1", a: 0},
{o: 128.12, f: 147.6, l: "2", a: 1},
{o: 147.6, f: 174.747, l: "1", a: 0},
{o: 174.747, f: 191.147, l: "3", a: 1},
{o: 191.147, f: 207.027, l: "5", a: 0},
{o: 207.027, f: 224.453, l: "2", a: 1},
{o: 224.453, f: 242.387, l: "3", a: 0},
{o: 242.387, f: 264.427, l: "1", a: 1},
{o: 264.427, f: 272.107, l: "8", a: 0},
{o: 272.107, f: 285.72, l: "6", a: 1}],
[{o: 0, f: 30.545, l: "a", a: 0},
{o: 30.545, f: 47.68, l: "b", a: 1},
{o: 47.68, f: 76.735, l: "c", a: 0},
{o: 76.735, f: 95.36, l: "d", a: 1},
{o: 95.36, f: 119.945, l: "b", a: 0},
{o: 119.945, f: 149, l: "c", a: 1},
{o: 149, f: 171.35, l: "d", a: 0},
{o: 171.35, f: 199.66, l: "e", a: 1},
{o: 199.66, f: 228.715, l: "c", a: 0},
{o: 228.715, f: 286.08, l: "f", a: 1}],
[{o: 0, f: 37.721, l: "n1", a: 0},
{o: 37.721, f: 103.306, l: "A", a: 1},
{o: 103.306, f: 109.447, l: "n2", a: 0},
{o: 109.447, f: 175.032, l: "A", a: 1},
{o: 175.032, f: 238.063, l: "n3", a: 0},
{o: 238.063, f: 254.456, l: "B", a: 1},
{o: 254.456, f: 266.751, l: "n4", a: 0},
{o: 266.751, f: 286.488, l: "B", a: 1}],
[{o: 0, f: 0.176, l: "F", a: 0},
{o: 0.176, f: 29.748, l: "B", a: 1},
{o: 29.748, f: 54.596, l: "A", a: 0},
{o: 54.596, f: 76.884, l: "E", a: 1},
{o: 76.884, f: 124.536, l: "A", a: 0},
{o: 124.536, f: 152.456, l: "E", a: 1},
{o: 152.456, f: 188.072, l: "A", a: 0},
{o: 188.072, f: 206.26, l: "B", a: 1},
{o: 206.26, f: 227.516, l: "E", a: 0},
{o: 227.516, f: 284.14, l: "C", a: 1},
{o: 284.14, f: 286.573, l: "F", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000698.ogg";

var artist = "Compilations";

var track = "GET OUTTA MY DREAMS GET INTO MY CAR";
