var data = [
[{o: 0.114, f: 46.161, l: "A", a: 0},
{o: 46.161, f: 92.952, l: "A'", a: 1},
{o: 92.952, f: 145.039, l: "A''", a: 0}],
[{o: 0.104, f: 6.068, l: "C", a: 0},
{o: 6.068, f: 14.248, l: "A", a: 1},
{o: 14.248, f: 25.904, l: "B", a: 0},
{o: 25.904, f: 40.564, l: "B", a: 1},
{o: 40.564, f: 50.656, l: "D", a: 0},
{o: 50.656, f: 59.172, l: "B", a: 1},
{o: 59.172, f: 73.132, l: "B", a: 0},
{o: 73.132, f: 86.648, l: "B", a: 1},
{o: 86.648, f: 96.856, l: "B", a: 0},
{o: 96.856, f: 110.028, l: "B", a: 1},
{o: 110.028, f: 118.992, l: "D", a: 0},
{o: 118.992, f: 130.752, l: "A", a: 1},
{o: 130.752, f: 140.264, l: "D", a: 0}],
[{o: 0.104, f: 6.068, l: "A", a: 0},
{o: 6.068, f: 14.248, l: "E", a: 1},
{o: 14.248, f: 25.904, l: "B", a: 0},
{o: 25.904, f: 40.564, l: "B", a: 1},
{o: 40.564, f: 50.656, l: "D", a: 0},
{o: 50.656, f: 59.172, l: "C", a: 1},
{o: 59.172, f: 73.132, l: "B", a: 0},
{o: 73.132, f: 86.648, l: "B", a: 1},
{o: 86.648, f: 96.856, l: "C", a: 0},
{o: 96.856, f: 110.028, l: "B", a: 1},
{o: 110.028, f: 118.992, l: "F", a: 0},
{o: 118.992, f: 130.752, l: "G", a: 1},
{o: 130.752, f: 140.264, l: "D", a: 0}],
[{o: 0.36, f: 4.533, l: "4", a: 0},
{o: 4.533, f: 11.32, l: "1", a: 1},
{o: 11.32, f: 16.427, l: "6", a: 0},
{o: 16.427, f: 22.627, l: "5", a: 1},
{o: 22.627, f: 29.52, l: "3", a: 0},
{o: 29.52, f: 36.307, l: "2", a: 1},
{o: 36.307, f: 43.92, l: "1", a: 0},
{o: 43.92, f: 50.827, l: "4", a: 1},
{o: 50.827, f: 57.973, l: "1", a: 0},
{o: 57.973, f: 62.8, l: "6", a: 1},
{o: 62.8, f: 68.747, l: "5", a: 0},
{o: 68.747, f: 75.413, l: "3", a: 1},
{o: 75.413, f: 83.04, l: "2", a: 0},
{o: 83.04, f: 90.987, l: "1", a: 1},
{o: 90.987, f: 97.68, l: "4", a: 0},
{o: 97.68, f: 103.84, l: "1", a: 1},
{o: 103.84, f: 109.52, l: "6", a: 0},
{o: 109.52, f: 115.04, l: "5", a: 1},
{o: 115.04, f: 121.533, l: "3", a: 0},
{o: 121.533, f: 129.533, l: "2", a: 1},
{o: 129.533, f: 139.76, l: "7", a: 0},
{o: 139.76, f: 144.947, l: "8", a: 1}],
[{o: 0, f: 35.015, l: "a", a: 0},
{o: 35.015, f: 46.19, l: "b", a: 1},
{o: 46.19, f: 82.695, l: "a", a: 0},
{o: 82.695, f: 93.125, l: "b", a: 1},
{o: 93.125, f: 128.885, l: "a", a: 0},
{o: 128.885, f: 144.53, l: "c", a: 1}],
[{o: 0, f: 22.802, l: "A", a: 0},
{o: 22.802, f: 33.414, l: "C", a: 1},
{o: 33.414, f: 46.254, l: "B", a: 0},
{o: 46.254, f: 69.254, l: "A", a: 1},
{o: 69.254, f: 79.285, l: "C", a: 0},
{o: 79.285, f: 92.891, l: "n5", a: 1},
{o: 92.891, f: 113.128, l: "A", a: 0},
{o: 113.128, f: 126.108, l: "n6", a: 1},
{o: 126.108, f: 138.797, l: "B", a: 0},
{o: 138.797, f: 144.939, l: "n7", a: 1}],
[{o: 0, f: 0.104, l: "F", a: 0},
{o: 0.104, f: 28.296, l: "D", a: 1},
{o: 28.296, f: 45.872, l: "A", a: 0},
{o: 45.872, f: 69.616, l: "D", a: 1},
{o: 69.616, f: 92.544, l: "C", a: 0},
{o: 92.544, f: 115.544, l: "D", a: 1},
{o: 115.544, f: 129.108, l: "C", a: 0},
{o: 129.108, f: 140.264, l: "E", a: 1},
{o: 140.264, f: 145.033, l: "F", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000527.ogg";
