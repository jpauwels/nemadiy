var data = [
[{o: 17.508, f: 29.878, l: "D'", a: 0},
{o: 29.878, f: 39.691, l: "A", a: 1},
{o: 39.691, f: 49.333, l: "B", a: 0},
{o: 49.333, f: 75.322, l: "C", a: 1},
{o: 75.322, f: 82.175, l: "D", a: 0},
{o: 82.175, f: 91.845, l: "A", a: 1},
{o: 91.845, f: 101.424, l: "B", a: 0},
{o: 101.424, f: 127.177, l: "C", a: 1},
{o: 127.177, f: 134.193, l: "D", a: 0},
{o: 134.193, f: 143.873, l: "A", a: 1},
{o: 143.873, f: 153.408, l: "B", a: 0},
{o: 153.408, f: 179.275, l: "C", a: 1},
{o: 179.275, f: 256.163, l: "D", a: 0}],
[{o: 0.016, f: 17.588, l: "D", a: 0},
{o: 17.588, f: 39.872, l: "C", a: 1},
{o: 39.872, f: 66.524, l: "C", a: 0},
{o: 66.524, f: 84.064, l: "C", a: 1},
{o: 84.064, f: 103.924, l: "C", a: 0},
{o: 103.924, f: 116.252, l: "C", a: 1},
{o: 116.252, f: 134.568, l: "C", a: 0},
{o: 134.568, f: 161.564, l: "C", a: 1},
{o: 161.564, f: 170, l: "B", a: 0},
{o: 170, f: 194.104, l: "B", a: 1},
{o: 194.104, f: 216.52, l: "B", a: 0},
{o: 216.52, f: 232.26, l: "A", a: 1},
{o: 232.26, f: 245.2, l: "D", a: 0},
{o: 245.2, f: 255.988, l: "A", a: 1}],
[{o: 0.016, f: 17.588, l: "A", a: 0},
{o: 17.588, f: 39.872, l: "C", a: 1},
{o: 39.872, f: 66.524, l: "C", a: 0},
{o: 66.524, f: 84.064, l: "C", a: 1},
{o: 84.064, f: 103.924, l: "C", a: 0},
{o: 103.924, f: 116.252, l: "C", a: 1},
{o: 116.252, f: 134.568, l: "C", a: 0},
{o: 134.568, f: 161.564, l: "C", a: 1},
{o: 161.564, f: 170, l: "B", a: 0},
{o: 170, f: 194.104, l: "D", a: 1},
{o: 194.104, f: 216.52, l: "E", a: 0},
{o: 216.52, f: 232.26, l: "F", a: 1},
{o: 232.26, f: 245.2, l: "G", a: 0},
{o: 245.2, f: 255.988, l: "H", a: 1}],
[{o: 0.733, f: 3.613, l: "3", a: 0},
{o: 3.613, f: 22.04, l: "5", a: 1},
{o: 22.04, f: 52.813, l: "1", a: 0},
{o: 52.813, f: 73.72, l: "2", a: 1},
{o: 73.72, f: 81.493, l: "1", a: 0},
{o: 81.493, f: 90.467, l: "4", a: 1},
{o: 90.467, f: 99.72, l: "1", a: 0},
{o: 99.72, f: 125.773, l: "2", a: 1},
{o: 125.773, f: 133.493, l: "1", a: 0},
{o: 133.493, f: 142.547, l: "4", a: 1},
{o: 142.547, f: 151.973, l: "1", a: 0},
{o: 151.973, f: 179.16, l: "2", a: 1},
{o: 179.16, f: 189.867, l: "1", a: 0},
{o: 189.867, f: 200.44, l: "8", a: 1},
{o: 200.44, f: 217.893, l: "6", a: 0},
{o: 217.893, f: 229.267, l: "7", a: 1},
{o: 229.267, f: 255.96, l: "3", a: 0}],
[{o: 0, f: 37.995, l: "a", a: 0},
{o: 37.995, f: 81.205, l: "b", a: 1},
{o: 81.205, f: 134.845, l: "b", a: 0},
{o: 134.845, f: 184.76, l: "b", a: 1},
{o: 184.76, f: 255.535, l: "c", a: 0}],
[{o: 0, f: 4.017, l: "n1", a: 0},
{o: 4.017, f: 14.571, l: "C", a: 1},
{o: 14.571, f: 34.783, l: "n2", a: 0},
{o: 34.783, f: 49.168, l: "B", a: 1},
{o: 49.168, f: 54.102, l: "n3", a: 0},
{o: 54.102, f: 82.477, l: "A", a: 1},
{o: 82.477, f: 87.017, l: "n4", a: 0},
{o: 87.017, f: 101.332, l: "B", a: 1},
{o: 101.332, f: 106.243, l: "n5", a: 0},
{o: 106.243, f: 134.455, l: "A", a: 1},
{o: 134.455, f: 158.348, l: "n6", a: 0},
{o: 158.348, f: 186.468, l: "A", a: 1},
{o: 186.468, f: 202.083, l: "n7", a: 0},
{o: 202.083, f: 212.962, l: "C", a: 1},
{o: 212.962, f: 256.023, l: "n8", a: 0}],
[{o: 0, f: 0.008, l: "G", a: 0},
{o: 0.008, f: 3.572, l: "B", a: 1},
{o: 3.572, f: 43.556, l: "C", a: 0},
{o: 43.556, f: 185.188, l: "F", a: 1},
{o: 185.188, f: 193.304, l: "C", a: 0},
{o: 193.304, f: 253.484, l: "F", a: 1},
{o: 253.484, f: 255.988, l: "B", a: 0},
{o: 255.988, f: 256.067, l: "G", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001224.ogg";

var artist = "Super 400";

var track = "Emergency";
