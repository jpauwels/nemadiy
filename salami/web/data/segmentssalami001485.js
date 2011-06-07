var data = [
[{o: 0.383, f: 25.143, l: "I", a: 0},
{o: 25.143, f: 60.087, l: "A", a: 1},
{o: 60.087, f: 73.654, l: "A", a: 0},
{o: 73.654, f: 92.029, l: "T", a: 1},
{o: 92.029, f: 143.747, l: "B", a: 0},
{o: 143.747, f: 190.012, l: "B", a: 1},
{o: 190.012, f: 225.107, l: "G", a: 0},
{o: 225.107, f: 272.118, l: "W", a: 1}],
[{o: 0.164, f: 14.392, l: "A", a: 0},
{o: 14.392, f: 29.616, l: "D", a: 1},
{o: 29.616, f: 45.444, l: "D", a: 0},
{o: 45.444, f: 60.716, l: "D", a: 1},
{o: 60.716, f: 83.06, l: "D", a: 0},
{o: 83.06, f: 108.576, l: "D", a: 1},
{o: 108.576, f: 121.256, l: "D", a: 0},
{o: 121.256, f: 136.636, l: "D", a: 1},
{o: 136.636, f: 148.5, l: "D", a: 0},
{o: 148.5, f: 169.028, l: "D", a: 1},
{o: 169.028, f: 179.644, l: "D", a: 0},
{o: 179.644, f: 195.032, l: "D", a: 1},
{o: 195.032, f: 207.352, l: "D", a: 0},
{o: 207.352, f: 229.572, l: "D", a: 1},
{o: 229.572, f: 249.56, l: "D", a: 0},
{o: 249.56, f: 269.94, l: "D", a: 1}],
[{o: 0.164, f: 14.392, l: "F", a: 0},
{o: 14.392, f: 29.616, l: "G", a: 1},
{o: 29.616, f: 45.444, l: "C", a: 0},
{o: 45.444, f: 60.716, l: "H", a: 1},
{o: 60.716, f: 83.06, l: "C", a: 0},
{o: 83.06, f: 108.576, l: "B", a: 1},
{o: 108.576, f: 121.256, l: "A", a: 0},
{o: 121.256, f: 136.636, l: "E", a: 1},
{o: 136.636, f: 148.5, l: "B", a: 0},
{o: 148.5, f: 169.028, l: "A", a: 1},
{o: 169.028, f: 179.644, l: "E", a: 0},
{o: 179.644, f: 195.032, l: "D", a: 1},
{o: 195.032, f: 207.352, l: "D", a: 0},
{o: 207.352, f: 229.572, l: "A", a: 1},
{o: 229.572, f: 249.56, l: "A", a: 0},
{o: 249.56, f: 269.94, l: "A", a: 1}],
[{o: 0.387, f: 2.933, l: "8", a: 0},
{o: 2.933, f: 24.493, l: "5", a: 1},
{o: 24.493, f: 61.32, l: "4", a: 0},
{o: 61.32, f: 80.827, l: "1", a: 1},
{o: 80.827, f: 90.32, l: "6", a: 0},
{o: 90.32, f: 115.173, l: "3", a: 1},
{o: 115.173, f: 122.787, l: "2", a: 0},
{o: 122.787, f: 135.333, l: "1", a: 1},
{o: 135.333, f: 142.613, l: "2", a: 0},
{o: 142.613, f: 163.6, l: "3", a: 1},
{o: 163.6, f: 171.747, l: "2", a: 0},
{o: 171.747, f: 182.16, l: "1", a: 1},
{o: 182.16, f: 224.107, l: "2", a: 0},
{o: 224.107, f: 265.227, l: "1", a: 1},
{o: 265.227, f: 271.987, l: "7", a: 0}],
[{o: 0, f: 82.695, l: "a", a: 0},
{o: 82.695, f: 119.2, l: "b", a: 1},
{o: 119.2, f: 134.1, l: "c", a: 0},
{o: 134.1, f: 169.86, l: "b", a: 1},
{o: 169.86, f: 183.27, l: "d", a: 0},
{o: 183.27, f: 204.13, l: "e", a: 1},
{o: 204.13, f: 223.5, l: "e", a: 0},
{o: 223.5, f: 271.925, l: "f", a: 1}],
[{o: 0, f: 90.697, l: "n1", a: 0},
{o: 90.697, f: 122.567, l: "A", a: 1},
{o: 122.567, f: 142.083, l: "n2", a: 0},
{o: 142.083, f: 170.365, l: "A", a: 1},
{o: 170.365, f: 271.999, l: "n3", a: 0}],
[{o: 0, f: 0.26, l: "I", a: 0},
{o: 0.26, f: 85.092, l: "G", a: 1},
{o: 85.092, f: 189.832, l: "H", a: 0},
{o: 189.832, f: 269.544, l: "F", a: 1},
{o: 269.544, f: 270.064, l: "G", a: 0},
{o: 270.064, f: 272.119, l: "I", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001485.ogg";
