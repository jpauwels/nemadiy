var data = [
[{o: 0, f: 15.679, l: "A", a: 0},
{o: 15.679, f: 38.974, l: "A", a: 1},
{o: 38.974, f: 54.584, l: "A", a: 0},
{o: 54.584, f: 77.951, l: "A", a: 1},
{o: 77.951, f: 107.374, l: "A", a: 0},
{o: 107.374, f: 126.262, l: "A", a: 1},
{o: 126.262, f: 133.108, l: "Z", a: 0},
{o: 133.108, f: 150.652, l: "B", a: 1},
{o: 150.652, f: 166.725, l: "B", a: 0},
{o: 166.725, f: 183.061, l: "C", a: 1},
{o: 183.061, f: 198.966, l: "D", a: 0},
{o: 198.966, f: 214.589, l: "B", a: 1},
{o: 214.589, f: 231.163, l: "C", a: 0},
{o: 231.163, f: 235.293, l: "D'", a: 1},
{o: 235.293, f: 252.517, l: "E", a: 0},
{o: 252.517, f: 328.819, l: "E", a: 1},
{o: 328.819, f: 332.333, l: "Z", a: 0},
{o: 332.333, f: 373.653, l: "A", a: 1},
{o: 373.653, f: 386.486, l: "Z", a: 0}],
[{o: 0, f: 386.483, l: "A", a: 0}],
[{o: 0, f: 386.483, l: "A", a: 0}],
[{o: 0.36, f: 48.52, l: "1", a: 0},
{o: 48.52, f: 56, l: "5", a: 1},
{o: 56, f: 73.987, l: "4", a: 0},
{o: 73.987, f: 125.893, l: "1", a: 1},
{o: 125.893, f: 132.627, l: "3", a: 0},
{o: 132.627, f: 151.267, l: "1", a: 1},
{o: 151.267, f: 157.8, l: "2", a: 0},
{o: 157.8, f: 176.107, l: "1", a: 1},
{o: 176.107, f: 189.547, l: "2", a: 0},
{o: 189.547, f: 199.253, l: "1", a: 1},
{o: 199.253, f: 209.733, l: "2", a: 0},
{o: 209.733, f: 223.253, l: "1", a: 1},
{o: 223.253, f: 236.493, l: "2", a: 0},
{o: 236.493, f: 259.347, l: "1", a: 1},
{o: 259.347, f: 274.093, l: "2", a: 0},
{o: 274.093, f: 298.293, l: "3", a: 1},
{o: 298.293, f: 304.36, l: "6", a: 0},
{o: 304.36, f: 326.64, l: "3", a: 1},
{o: 326.64, f: 331.973, l: "7", a: 0},
{o: 331.973, f: 361.573, l: "4", a: 1},
{o: 361.573, f: 371.28, l: "1", a: 0},
{o: 371.28, f: 382.987, l: "3", a: 1},
{o: 382.987, f: 386.36, l: "8", a: 0}],
[{o: 0, f: 25.33, l: "a", a: 0},
{o: 25.33, f: 58.11, l: "a", a: 1},
{o: 58.11, f: 83.44, l: "a", a: 0},
{o: 83.44, f: 124.415, l: "a", a: 1},
{o: 124.415, f: 386.655, l: "b", a: 0}],
[{o: 0, f: 1.242, l: "n1", a: 0},
{o: 1.242, f: 16.033, l: "A", a: 1},
{o: 16.033, f: 24.335, l: "n2", a: 0},
{o: 24.335, f: 39.439, l: "A", a: 1},
{o: 39.439, f: 49.493, l: "n3", a: 0},
{o: 49.493, f: 63.495, l: "A", a: 1},
{o: 63.495, f: 78.042, l: "A", a: 0},
{o: 78.042, f: 85.728, l: "n5", a: 1},
{o: 85.728, f: 100.635, l: "A", a: 0},
{o: 100.635, f: 108.426, l: "n6", a: 1},
{o: 108.426, f: 122.648, l: "A", a: 0},
{o: 122.648, f: 130.392, l: "n7", a: 1},
{o: 130.392, f: 146.297, l: "B", a: 0},
{o: 146.297, f: 159.985, l: "D", a: 1},
{o: 159.985, f: 173.5, l: "C", a: 0},
{o: 173.5, f: 180.779, l: "n10", a: 1},
{o: 180.779, f: 194.676, l: "B", a: 0},
{o: 194.676, f: 208.538, l: "D", a: 1},
{o: 208.538, f: 222.25, l: "C", a: 0},
{o: 222.25, f: 332.707, l: "n12", a: 1},
{o: 332.707, f: 339.975, l: "E", a: 0},
{o: 339.975, f: 355.881, l: "n13", a: 1},
{o: 355.881, f: 363.799, l: "E", a: 0},
{o: 363.799, f: 386.426, l: "n14", a: 1}],
[{o: 0, f: 0.004, l: "G", a: 0},
{o: 0.004, f: 133.556, l: "C", a: 1},
{o: 133.556, f: 280.676, l: "F", a: 0},
{o: 280.676, f: 302.408, l: "C", a: 1},
{o: 302.408, f: 309.724, l: "F", a: 0},
{o: 309.724, f: 374.86, l: "C", a: 1},
{o: 374.86, f: 382.936, l: "B", a: 0},
{o: 382.936, f: 386.483, l: "G", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000852.ogg";
