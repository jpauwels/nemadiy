var data = [
[{o: 0.082, f: 21.94, l: "A", a: 0},
{o: 21.94, f: 46.458, l: "B", a: 1},
{o: 46.458, f: 71.032, l: "C", a: 0},
{o: 71.032, f: 95.55, l: "D", a: 1},
{o: 95.55, f: 120.181, l: "B'", a: 0},
{o: 120.181, f: 141.938, l: "C", a: 1},
{o: 141.938, f: 169.305, l: "E", a: 0},
{o: 169.305, f: 191.013, l: "C", a: 1},
{o: 191.013, f: 212.814, l: "C", a: 0},
{o: 212.814, f: 235.012, l: "A'", a: 1}],
[{o: 0.016, f: 9.896, l: "A", a: 0},
{o: 9.896, f: 31.716, l: "B", a: 1},
{o: 31.716, f: 45.688, l: "B", a: 0},
{o: 45.688, f: 70.236, l: "B", a: 1},
{o: 70.236, f: 81.488, l: "B", a: 0},
{o: 81.488, f: 94.776, l: "B", a: 1},
{o: 94.776, f: 119.676, l: "B", a: 0},
{o: 119.676, f: 132.624, l: "B", a: 1},
{o: 132.624, f: 152.74, l: "B", a: 0},
{o: 152.74, f: 166.696, l: "B", a: 1},
{o: 166.696, f: 192.612, l: "B", a: 0},
{o: 192.612, f: 213.752, l: "B", a: 1},
{o: 213.752, f: 230.172, l: "B", a: 0}],
[{o: 0.016, f: 9.896, l: "D", a: 0},
{o: 9.896, f: 31.716, l: "B", a: 1},
{o: 31.716, f: 45.688, l: "B", a: 0},
{o: 45.688, f: 70.236, l: "A", a: 1},
{o: 70.236, f: 81.488, l: "C", a: 0},
{o: 81.488, f: 94.776, l: "C", a: 1},
{o: 94.776, f: 119.676, l: "B", a: 0},
{o: 119.676, f: 132.624, l: "A", a: 1},
{o: 132.624, f: 152.74, l: "E", a: 0},
{o: 152.74, f: 166.696, l: "F", a: 1},
{o: 166.696, f: 192.612, l: "B", a: 0},
{o: 192.612, f: 213.752, l: "A", a: 1},
{o: 213.752, f: 230.172, l: "B", a: 0}],
[{o: 0.36, f: 8.72, l: "5", a: 0},
{o: 8.72, f: 17.92, l: "4", a: 1},
{o: 17.92, f: 45.867, l: "2", a: 0},
{o: 45.867, f: 70.747, l: "1", a: 1},
{o: 70.747, f: 78.933, l: "3", a: 0},
{o: 78.933, f: 82.68, l: "4", a: 1},
{o: 82.68, f: 89.16, l: "3", a: 0},
{o: 89.16, f: 93.573, l: "4", a: 1},
{o: 93.573, f: 119.493, l: "2", a: 0},
{o: 119.493, f: 145.413, l: "1", a: 1},
{o: 145.413, f: 167.227, l: "3", a: 0},
{o: 167.227, f: 172, l: "8", a: 1},
{o: 172, f: 215.293, l: "1", a: 0},
{o: 215.293, f: 223.813, l: "4", a: 1},
{o: 223.813, f: 228.587, l: "7", a: 0},
{o: 228.587, f: 234.04, l: "6", a: 1}],
[{o: 0, f: 16.39, l: "a", a: 0},
{o: 16.39, f: 35.76, l: "b", a: 1},
{o: 35.76, f: 78.225, l: "c", a: 0},
{o: 78.225, f: 90.145, l: "d", a: 1},
{o: 90.145, f: 109.515, l: "b", a: 0},
{o: 109.515, f: 152.725, l: "c", a: 1},
{o: 152.725, f: 171.35, l: "e", a: 0},
{o: 171.35, f: 203.385, l: "c", a: 1},
{o: 203.385, f: 234.675, l: "f", a: 0}],
[{o: 0, f: 0.383, l: "n1", a: 0},
{o: 0.383, f: 11.285, l: "C", a: 1},
{o: 11.285, f: 22.198, l: "C", a: 0},
{o: 22.198, f: 33.112, l: "B", a: 1},
{o: 33.112, f: 46.393, l: "B", a: 0},
{o: 46.393, f: 57.318, l: "A", a: 1},
{o: 57.318, f: 70.612, l: "A", a: 0},
{o: 70.612, f: 81.514, l: "D", a: 1},
{o: 81.514, f: 95.829, l: "D", a: 0},
{o: 95.829, f: 106.742, l: "B", a: 1},
{o: 106.742, f: 120.036, l: "B", a: 0},
{o: 120.036, f: 130.949, l: "A", a: 1},
{o: 130.949, f: 141.851, l: "A", a: 0},
{o: 141.851, f: 169.123, l: "n6", a: 1},
{o: 169.123, f: 180.036, l: "A", a: 0},
{o: 180.036, f: 190.949, l: "A", a: 1},
{o: 190.949, f: 201.851, l: "A", a: 0},
{o: 201.851, f: 213.09, l: "A", a: 1},
{o: 213.09, f: 224.003, l: "C", a: 0},
{o: 224.003, f: 234.847, l: "n8", a: 1}],
[{o: 0, f: 0.016, l: "C", a: 0},
{o: 0.016, f: 28.308, l: "B", a: 1},
{o: 28.308, f: 86.936, l: "A", a: 0},
{o: 86.936, f: 116.26, l: "B", a: 1},
{o: 116.26, f: 212.4, l: "A", a: 0},
{o: 212.4, f: 230.172, l: "B", a: 1},
{o: 230.172, f: 234.947, l: "C", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000500.ogg";

var artist = "RWC MDB P 2001 M01";

var track = "14";