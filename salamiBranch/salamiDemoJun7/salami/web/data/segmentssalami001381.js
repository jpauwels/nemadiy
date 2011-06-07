var data = [
[{o: 0.046, f: 36.241, l: "A", a: 0},
{o: 36.241, f: 62.685, l: "A", a: 1},
{o: 62.685, f: 88.486, l: "B", a: 0},
{o: 88.486, f: 100.926, l: "C", a: 1},
{o: 100.926, f: 113.59, l: "A", a: 0},
{o: 113.59, f: 139.734, l: "A", a: 1},
{o: 139.734, f: 165.363, l: "B", a: 0},
{o: 165.363, f: 177.934, l: "C", a: 1},
{o: 177.934, f: 190.374, l: "A", a: 0},
{o: 190.374, f: 215.942, l: "A", a: 1},
{o: 215.942, f: 241.19, l: "B", a: 0},
{o: 241.19, f: 253.535, l: "C", a: 1},
{o: 253.535, f: 269.09, l: "A", a: 0},
{o: 269.09, f: 307.357, l: "Z", a: 1}],
[{o: 0.148, f: 13.336, l: "C", a: 0},
{o: 13.336, f: 21.84, l: "C", a: 1},
{o: 21.84, f: 36.18, l: "C", a: 0},
{o: 36.18, f: 46.62, l: "C", a: 1},
{o: 46.62, f: 60.664, l: "C", a: 0},
{o: 60.664, f: 74.992, l: "C", a: 1},
{o: 74.992, f: 89.6, l: "C", a: 0},
{o: 89.6, f: 102.508, l: "C", a: 1},
{o: 102.508, f: 122.68, l: "C", a: 0},
{o: 122.68, f: 132.496, l: "C", a: 1},
{o: 132.496, f: 139.652, l: "B", a: 0},
{o: 139.652, f: 155.196, l: "C", a: 1},
{o: 155.196, f: 167.712, l: "C", a: 0},
{o: 167.712, f: 176.7, l: "C", a: 1},
{o: 176.7, f: 198.06, l: "C", a: 0},
{o: 198.06, f: 204.756, l: "C", a: 1},
{o: 204.756, f: 223.384, l: "C", a: 0},
{o: 223.384, f: 238.364, l: "C", a: 1},
{o: 238.364, f: 248.048, l: "C", a: 0},
{o: 248.048, f: 267.776, l: "C", a: 1},
{o: 267.776, f: 276.944, l: "A", a: 0},
{o: 276.944, f: 299.024, l: "A", a: 1},
{o: 299.024, f: 307.212, l: "C", a: 0}],
[{o: 0.148, f: 13.336, l: "C", a: 0},
{o: 13.336, f: 21.84, l: "C", a: 1},
{o: 21.84, f: 36.18, l: "E", a: 0},
{o: 36.18, f: 46.62, l: "H", a: 1},
{o: 46.62, f: 60.664, l: "I", a: 0},
{o: 60.664, f: 74.992, l: "E", a: 1},
{o: 74.992, f: 89.6, l: "G", a: 0},
{o: 89.6, f: 102.508, l: "H", a: 1},
{o: 102.508, f: 122.68, l: "E", a: 0},
{o: 122.68, f: 132.496, l: "A", a: 1},
{o: 132.496, f: 139.652, l: "B", a: 0},
{o: 139.652, f: 155.196, l: "E", a: 1},
{o: 155.196, f: 167.712, l: "I", a: 0},
{o: 167.712, f: 176.7, l: "D", a: 1},
{o: 176.7, f: 198.06, l: "G", a: 0},
{o: 198.06, f: 204.756, l: "F", a: 1},
{o: 204.756, f: 223.384, l: "H", a: 0},
{o: 223.384, f: 238.364, l: "H", a: 1},
{o: 238.364, f: 248.048, l: "D", a: 0},
{o: 248.048, f: 267.776, l: "A", a: 1},
{o: 267.776, f: 276.944, l: "J", a: 0},
{o: 276.944, f: 299.024, l: "K", a: 1},
{o: 299.024, f: 307.212, l: "F", a: 0}],
[{o: 0.36, f: 11.573, l: "1", a: 0},
{o: 11.573, f: 16.2, l: "7", a: 1},
{o: 16.2, f: 43.96, l: "1", a: 0},
{o: 43.96, f: 53.573, l: "6", a: 1},
{o: 53.573, f: 62.853, l: "1", a: 0},
{o: 62.853, f: 71.627, l: "2", a: 1},
{o: 71.627, f: 76.453, l: "4", a: 0},
{o: 76.453, f: 87.04, l: "2", a: 1},
{o: 87.04, f: 100.307, l: "3", a: 0},
{o: 100.307, f: 126.987, l: "1", a: 1},
{o: 126.987, f: 131.92, l: "6", a: 0},
{o: 131.92, f: 139.827, l: "1", a: 1},
{o: 139.827, f: 149.013, l: "2", a: 0},
{o: 149.013, f: 153.813, l: "4", a: 1},
{o: 153.813, f: 162.693, l: "2", a: 0},
{o: 162.693, f: 177.28, l: "3", a: 1},
{o: 177.28, f: 190.56, l: "4", a: 0},
{o: 190.56, f: 206.56, l: "1", a: 1},
{o: 206.56, f: 212.533, l: "3", a: 0},
{o: 212.533, f: 225.12, l: "2", a: 1},
{o: 225.12, f: 230.267, l: "4", a: 0},
{o: 230.267, f: 242.453, l: "2", a: 1},
{o: 242.453, f: 251.707, l: "3", a: 0},
{o: 251.707, f: 263.253, l: "1", a: 1},
{o: 263.253, f: 268.84, l: "7", a: 0},
{o: 268.84, f: 280.64, l: "8", a: 1},
{o: 280.64, f: 300.08, l: "5", a: 0},
{o: 300.08, f: 305.68, l: "1", a: 1},
{o: 305.68, f: 307.16, l: "5", a: 0}],
[{o: 0, f: 19.37, l: "a", a: 0},
{o: 19.37, f: 37.995, l: "b", a: 1},
{o: 37.995, f: 90.89, l: "c", a: 0},
{o: 90.89, f: 115.475, l: "b", a: 1},
{o: 115.475, f: 167.625, l: "c", a: 0},
{o: 167.625, f: 186.995, l: "b", a: 1},
{o: 186.995, f: 243.615, l: "c", a: 0},
{o: 243.615, f: 270.435, l: "b", a: 1},
{o: 270.435, f: 306.94, l: "d", a: 0}],
[{o: 0, f: 17.229, l: "B", a: 0},
{o: 17.229, f: 29.907, l: "B", a: 1},
{o: 29.907, f: 43.282, l: "B", a: 0},
{o: 43.282, f: 54.161, l: "n2", a: 1},
{o: 54.161, f: 107.323, l: "A", a: 0},
{o: 107.323, f: 120.291, l: "B", a: 1},
{o: 120.291, f: 131.32, l: "n4", a: 0},
{o: 131.32, f: 182.277, l: "A", a: 1},
{o: 182.277, f: 207.586, l: "n5", a: 0},
{o: 207.586, f: 257.753, l: "A", a: 1},
{o: 257.753, f: 307.293, l: "n6", a: 0}],
[{o: 0, f: 0.148, l: "G", a: 0},
{o: 0.148, f: 16.448, l: "B", a: 1},
{o: 16.448, f: 62.232, l: "E", a: 0},
{o: 62.232, f: 95.812, l: "F", a: 1},
{o: 95.812, f: 139.256, l: "E", a: 0},
{o: 139.256, f: 170.428, l: "F", a: 1},
{o: 170.428, f: 183.78, l: "E", a: 0},
{o: 183.78, f: 212.356, l: "B", a: 1},
{o: 212.356, f: 246.152, l: "F", a: 0},
{o: 246.152, f: 259.228, l: "E", a: 1},
{o: 259.228, f: 284.432, l: "B", a: 0},
{o: 284.432, f: 306.832, l: "C", a: 1},
{o: 306.832, f: 307.212, l: "F", a: 0},
{o: 307.212, f: 307.267, l: "G", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001381.ogg";
