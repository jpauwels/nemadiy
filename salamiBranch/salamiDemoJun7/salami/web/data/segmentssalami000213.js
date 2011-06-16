var data = [
[{o: 0.139, f: 10.17, l: "N", a: 0},
{o: 10.17, f: 37.729, l: "A", a: 1},
{o: 37.729, f: 64.93, l: "A", a: 0},
{o: 64.93, f: 91.881, l: "A", a: 1},
{o: 91.881, f: 114.482, l: "B", a: 0},
{o: 114.482, f: 148.122, l: "C", a: 1}],
[{o: 0.108, f: 9.412, l: "A", a: 0},
{o: 9.412, f: 28.912, l: "A", a: 1},
{o: 28.912, f: 35.78, l: "C", a: 0},
{o: 35.78, f: 51.632, l: "C", a: 1},
{o: 51.632, f: 64.088, l: "C", a: 0},
{o: 64.088, f: 78.748, l: "C", a: 1},
{o: 78.748, f: 92.788, l: "C", a: 0},
{o: 92.788, f: 109.764, l: "A", a: 1},
{o: 109.764, f: 128.272, l: "A", a: 0},
{o: 128.272, f: 147.964, l: "A", a: 1}],
[{o: 0.108, f: 9.412, l: "D", a: 0},
{o: 9.412, f: 28.912, l: "A", a: 1},
{o: 28.912, f: 35.78, l: "E", a: 0},
{o: 35.78, f: 51.632, l: "C", a: 1},
{o: 51.632, f: 64.088, l: "C", a: 0},
{o: 64.088, f: 78.748, l: "B", a: 1},
{o: 78.748, f: 92.788, l: "B", a: 0},
{o: 92.788, f: 109.764, l: "A", a: 1},
{o: 109.764, f: 128.272, l: "A", a: 0},
{o: 128.272, f: 147.964, l: "A", a: 1}],
[{o: 0.813, f: 8.573, l: "7", a: 0},
{o: 8.573, f: 28.827, l: "3", a: 1},
{o: 28.827, f: 36.587, l: "2", a: 0},
{o: 36.587, f: 56.52, l: "1", a: 1},
{o: 56.52, f: 64.933, l: "2", a: 0},
{o: 64.933, f: 79.04, l: "4", a: 1},
{o: 79.04, f: 90.827, l: "5", a: 0},
{o: 90.827, f: 105.547, l: "1", a: 1},
{o: 105.547, f: 113.627, l: "6", a: 0},
{o: 113.627, f: 143.6, l: "1", a: 1},
{o: 143.6, f: 148.013, l: "8", a: 0}],
[{o: 0, f: 8.94, l: "a", a: 0},
{o: 8.94, f: 36.505, l: "b", a: 1},
{o: 36.505, f: 64.815, l: "b", a: 0},
{o: 64.815, f: 117.71, l: "c", a: 1},
{o: 117.71, f: 131.865, l: "d", a: 0},
{o: 131.865, f: 147.51, l: "d", a: 1}],
[{o: 0, f: 15.755, l: "n1", a: 0},
{o: 15.755, f: 26.471, l: "C", a: 1},
{o: 26.471, f: 31.405, l: "n2", a: 0},
{o: 31.405, f: 43.537, l: "A", a: 1},
{o: 43.537, f: 58.735, l: "n3", a: 0},
{o: 58.735, f: 70.728, l: "A", a: 1},
{o: 70.728, f: 81.247, l: "C", a: 0},
{o: 81.247, f: 85.74, l: "n4", a: 1},
{o: 85.74, f: 97.756, l: "A", a: 0},
{o: 97.756, f: 117.342, l: "n5", a: 1},
{o: 117.342, f: 130.717, l: "B", a: 0},
{o: 130.717, f: 142.605, l: "B", a: 1},
{o: 142.605, f: 147.911, l: "n7", a: 0}],
[{o: 0, f: 0.004, l: "G", a: 0},
{o: 0.004, f: 136.836, l: "B", a: 1},
{o: 136.836, f: 148.06, l: "F", a: 0},
{o: 148.06, f: 148.115, l: "G", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000213.ogg";