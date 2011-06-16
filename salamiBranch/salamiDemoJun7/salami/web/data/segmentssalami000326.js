var data = [
[{o: 85.821, f: 138.732, l: "A", a: 0},
{o: 138.732, f: 194.638, l: "A", a: 1},
{o: 194.638, f: 249.446, l: "A", a: 0},
{o: 249.446, f: 319.399, l: "A", a: 1}],
[{o: 0, f: 319.321, l: "A", a: 0}],
[{o: 0, f: 319.321, l: "A", a: 0}],
[{o: 0.387, f: 6.373, l: "3", a: 0},
{o: 6.373, f: 12.96, l: "8", a: 1},
{o: 12.96, f: 20.413, l: "3", a: 0},
{o: 20.413, f: 36.973, l: "2", a: 1},
{o: 36.973, f: 42.573, l: "3", a: 0},
{o: 42.573, f: 52.707, l: "2", a: 1},
{o: 52.707, f: 86.547, l: "3", a: 0},
{o: 86.547, f: 100.52, l: "2", a: 1},
{o: 100.52, f: 114.64, l: "1", a: 0},
{o: 114.64, f: 126.36, l: "4", a: 1},
{o: 126.36, f: 133.827, l: "1", a: 0},
{o: 133.827, f: 138.667, l: "5", a: 1},
{o: 138.667, f: 144.293, l: "2", a: 0},
{o: 144.293, f: 166.947, l: "1", a: 1},
{o: 166.947, f: 177.32, l: "4", a: 0},
{o: 177.32, f: 186.413, l: "1", a: 1},
{o: 186.413, f: 194.307, l: "5", a: 0},
{o: 194.307, f: 200.76, l: "1", a: 1},
{o: 200.76, f: 214.613, l: "4", a: 0},
{o: 214.613, f: 221.04, l: "1", a: 1},
{o: 221.04, f: 229.133, l: "4", a: 0},
{o: 229.133, f: 241.56, l: "1", a: 1},
{o: 241.56, f: 248.787, l: "5", a: 0},
{o: 248.787, f: 263.213, l: "2", a: 1},
{o: 263.213, f: 278.04, l: "1", a: 0},
{o: 278.04, f: 284.88, l: "7", a: 1},
{o: 284.88, f: 297.027, l: "1", a: 0},
{o: 297.027, f: 303.76, l: "5", a: 1},
{o: 303.76, f: 313.24, l: "6", a: 0},
{o: 313.24, f: 318.413, l: "3", a: 1}],
[{o: 0, f: 86.42, l: "a", a: 0},
{o: 86.42, f: 138.57, l: "b", a: 1},
{o: 138.57, f: 192.955, l: "b", a: 0},
{o: 192.955, f: 245.105, l: "b", a: 1},
{o: 245.105, f: 303.96, l: "b", a: 0},
{o: 303.96, f: 318.86, l: "c", a: 1}],
[{o: 0, f: 86.785, l: "n1", a: 0},
{o: 86.785, f: 139.447, l: "A", a: 1},
{o: 139.447, f: 193.666, l: "A", a: 0},
{o: 193.666, f: 249.893, l: "n2", a: 1},
{o: 249.893, f: 303.264, l: "A", a: 0},
{o: 303.264, f: 319.181, l: "n3", a: 1}],
[{o: 0, f: 0.016, l: "I", a: 0},
{o: 0.016, f: 6.812, l: "G", a: 1},
{o: 6.812, f: 15.356, l: "E", a: 0},
{o: 15.356, f: 54.596, l: "F", a: 1},
{o: 54.596, f: 86.084, l: "A", a: 0},
{o: 86.084, f: 128.184, l: "F", a: 1},
{o: 128.184, f: 138.296, l: "E", a: 0},
{o: 138.296, f: 180.54, l: "F", a: 1},
{o: 180.54, f: 186.848, l: "E", a: 0},
{o: 186.848, f: 194.316, l: "H", a: 1},
{o: 194.316, f: 217.42, l: "F", a: 0},
{o: 217.42, f: 228.408, l: "H", a: 1},
{o: 228.408, f: 291.016, l: "F", a: 0},
{o: 291.016, f: 297.516, l: "E", a: 1},
{o: 297.516, f: 303.596, l: "H", a: 0},
{o: 303.596, f: 317.812, l: "A", a: 1},
{o: 317.812, f: 319.256, l: "G", a: 0},
{o: 319.256, f: 319.321, l: "I", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000326.ogg";