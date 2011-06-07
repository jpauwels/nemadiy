var data = [
[{o: 0.021, f: 16.196, l: "Z", a: 0},
{o: 16.196, f: 21.754, l: "I", a: 1},
{o: 21.754, f: 68.31, l: "H'", a: 0},
{o: 68.31, f: 95.675, l: "H", a: 1},
{o: 95.675, f: 320.945, l: "S", a: 0},
{o: 320.945, f: 340.147, l: "D", a: 1},
{o: 340.147, f: 359.21, l: "Z", a: 0}],
[{o: 0.168, f: 14.388, l: "B", a: 0},
{o: 14.388, f: 31.688, l: "B", a: 1},
{o: 31.688, f: 46.232, l: "B", a: 0},
{o: 46.232, f: 61.232, l: "B", a: 1},
{o: 61.232, f: 80.22, l: "B", a: 0},
{o: 80.22, f: 94.124, l: "B", a: 1},
{o: 94.124, f: 110.864, l: "B", a: 0},
{o: 110.864, f: 133.876, l: "B", a: 1},
{o: 133.876, f: 151.008, l: "B", a: 0},
{o: 151.008, f: 166.28, l: "B", a: 1},
{o: 166.28, f: 183.58, l: "B", a: 0},
{o: 183.58, f: 202.704, l: "B", a: 1},
{o: 202.704, f: 218.724, l: "B", a: 0},
{o: 218.724, f: 226.84, l: "A", a: 1},
{o: 226.84, f: 246.232, l: "B", a: 0},
{o: 246.232, f: 261.1, l: "B", a: 1},
{o: 261.1, f: 276.136, l: "B", a: 0},
{o: 276.136, f: 295.848, l: "B", a: 1},
{o: 295.848, f: 313.46, l: "B", a: 0},
{o: 313.46, f: 326.564, l: "B", a: 1},
{o: 326.564, f: 346.704, l: "B", a: 0},
{o: 346.704, f: 359.088, l: "B", a: 1}],
[{o: 0.168, f: 14.388, l: "G", a: 0},
{o: 14.388, f: 31.688, l: "C", a: 1},
{o: 31.688, f: 46.232, l: "C", a: 0},
{o: 46.232, f: 61.232, l: "C", a: 1},
{o: 61.232, f: 80.22, l: "D", a: 0},
{o: 80.22, f: 94.124, l: "D", a: 1},
{o: 94.124, f: 110.864, l: "A", a: 0},
{o: 110.864, f: 133.876, l: "A", a: 1},
{o: 133.876, f: 151.008, l: "A", a: 0},
{o: 151.008, f: 166.28, l: "A", a: 1},
{o: 166.28, f: 183.58, l: "H", a: 0},
{o: 183.58, f: 202.704, l: "A", a: 1},
{o: 202.704, f: 218.724, l: "F", a: 0},
{o: 218.724, f: 226.84, l: "I", a: 1},
{o: 226.84, f: 246.232, l: "F", a: 0},
{o: 246.232, f: 261.1, l: "A", a: 1},
{o: 261.1, f: 276.136, l: "A", a: 0},
{o: 276.136, f: 295.848, l: "E", a: 1},
{o: 295.848, f: 313.46, l: "E", a: 0},
{o: 313.46, f: 326.564, l: "B", a: 1},
{o: 326.564, f: 346.704, l: "B", a: 0},
{o: 346.704, f: 359.088, l: "J", a: 1}],
[{o: 0.787, f: 4.373, l: "3", a: 0},
{o: 4.373, f: 15.48, l: "8", a: 1},
{o: 15.48, f: 94.813, l: "2", a: 0},
{o: 94.813, f: 161.8, l: "1", a: 1},
{o: 161.8, f: 182.373, l: "5", a: 0},
{o: 182.373, f: 213.533, l: "1", a: 1},
{o: 213.533, f: 228.68, l: "7", a: 0},
{o: 228.68, f: 275.907, l: "1", a: 1},
{o: 275.907, f: 312.013, l: "4", a: 0},
{o: 312.013, f: 320.84, l: "1", a: 1},
{o: 320.84, f: 339.707, l: "6", a: 0},
{o: 339.707, f: 357.933, l: "3", a: 1}],
[{o: 0, f: 161.665, l: "a", a: 0},
{o: 161.665, f: 167.625, l: "b", a: 1},
{o: 167.625, f: 173.585, l: "b", a: 0},
{o: 173.585, f: 275.65, l: "c", a: 1},
{o: 275.65, f: 293.53, l: "d", a: 0},
{o: 293.53, f: 314.39, l: "d", a: 1},
{o: 314.39, f: 359.09, l: "e", a: 0}],
[{o: 0, f: 358.934, l: "A", a: 0},
{o: 0.035, f: 358.934, l: "A", a: 1}],
[{o: 0, f: 0.004, l: "E", a: 0},
{o: 0.004, f: 87.884, l: "C", a: 1},
{o: 87.884, f: 94.12, l: "D", a: 0},
{o: 94.12, f: 162.036, l: "C", a: 1},
{o: 162.036, f: 183.204, l: "D", a: 0},
{o: 183.204, f: 217.872, l: "C", a: 1},
{o: 217.872, f: 227.456, l: "A", a: 0},
{o: 227.456, f: 246.156, l: "C", a: 1},
{o: 246.156, f: 251.964, l: "D", a: 0},
{o: 251.964, f: 275.948, l: "C", a: 1},
{o: 275.948, f: 313.192, l: "B", a: 0},
{o: 313.192, f: 359.116, l: "C", a: 1},
{o: 359.116, f: 359.211, l: "E", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001607.ogg";
