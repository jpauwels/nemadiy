var data = [
[{o: 0.035, f: 20.239, l: "A", a: 0},
{o: 20.239, f: 40.287, l: "A", a: 1},
{o: 40.287, f: 80.431, l: "A", a: 0},
{o: 80.431, f: 100.647, l: "A", a: 1},
{o: 100.647, f: 140.364, l: "A", a: 0},
{o: 140.364, f: 160.37, l: "A", a: 1},
{o: 160.37, f: 179.774, l: "A", a: 0},
{o: 179.774, f: 205.717, l: "A", a: 1},
{o: 205.717, f: 255.451, l: "Z", a: 0}],
[{o: 0.04, f: 11.132, l: "B", a: 0},
{o: 11.132, f: 19.592, l: "B", a: 1},
{o: 19.592, f: 41.18, l: "B", a: 0},
{o: 41.18, f: 58.492, l: "B", a: 1},
{o: 58.492, f: 71.964, l: "B", a: 0},
{o: 71.964, f: 83.916, l: "B", a: 1},
{o: 83.916, f: 104.248, l: "B", a: 0},
{o: 104.248, f: 120.964, l: "B", a: 1},
{o: 120.964, f: 132.18, l: "B", a: 0},
{o: 132.18, f: 143.728, l: "B", a: 1},
{o: 143.728, f: 153.856, l: "B", a: 0},
{o: 153.856, f: 168.236, l: "A", a: 1},
{o: 168.236, f: 176.72, l: "B", a: 0},
{o: 176.72, f: 197.96, l: "C", a: 1},
{o: 197.96, f: 206.704, l: "D", a: 0},
{o: 206.704, f: 218.556, l: "B", a: 1},
{o: 218.556, f: 228.168, l: "E", a: 0},
{o: 228.168, f: 241.264, l: "F", a: 1},
{o: 241.264, f: 255.108, l: "G", a: 0}],
[{o: 0.04, f: 11.132, l: "D", a: 0},
{o: 11.132, f: 19.592, l: "E", a: 1},
{o: 19.592, f: 41.18, l: "A", a: 0},
{o: 41.18, f: 58.492, l: "C", a: 1},
{o: 58.492, f: 71.964, l: "A", a: 0},
{o: 71.964, f: 83.916, l: "A", a: 1},
{o: 83.916, f: 104.248, l: "A", a: 0},
{o: 104.248, f: 120.964, l: "B", a: 1},
{o: 120.964, f: 132.18, l: "B", a: 0},
{o: 132.18, f: 143.728, l: "B", a: 1},
{o: 143.728, f: 153.856, l: "A", a: 0},
{o: 153.856, f: 168.236, l: "F", a: 1},
{o: 168.236, f: 176.72, l: "C", a: 0},
{o: 176.72, f: 197.96, l: "G", a: 1},
{o: 197.96, f: 206.704, l: "H", a: 0},
{o: 206.704, f: 218.556, l: "I", a: 1},
{o: 218.556, f: 228.168, l: "J", a: 0},
{o: 228.168, f: 241.264, l: "K", a: 1},
{o: 241.264, f: 255.108, l: "L", a: 0}],
[{o: 0.573, f: 5.12, l: "8", a: 0},
{o: 5.12, f: 20.547, l: "2", a: 1},
{o: 20.547, f: 40.573, l: "1", a: 0},
{o: 40.573, f: 80.76, l: "4", a: 1},
{o: 80.76, f: 101.413, l: "1", a: 0},
{o: 101.413, f: 140.627, l: "2", a: 1},
{o: 140.627, f: 195.8, l: "1", a: 0},
{o: 195.8, f: 211.747, l: "5", a: 1},
{o: 211.747, f: 225.707, l: "3", a: 0},
{o: 225.707, f: 234.587, l: "6", a: 1},
{o: 234.587, f: 241.48, l: "7", a: 0},
{o: 241.48, f: 253.213, l: "3", a: 1}],
[{o: 0, f: 17.135, l: "a", a: 0},
{o: 17.135, f: 40.23, l: "b", a: 1},
{o: 40.23, f: 62.58, l: "c", a: 0},
{o: 62.58, f: 81.205, l: "c", a: 1},
{o: 81.205, f: 177.31, l: "d", a: 0},
{o: 177.31, f: 200.405, l: "b", a: 1},
{o: 200.405, f: 254.79, l: "e", a: 0}],
[{o: 0, f: 98.151, l: "n1", a: 0},
{o: 98.151, f: 106.765, l: "A", a: 1},
{o: 106.765, f: 117.888, l: "n2", a: 0},
{o: 117.888, f: 126.642, l: "A", a: 1},
{o: 126.642, f: 255.28, l: "n3", a: 0}],
[{o: 0, f: 0.04, l: "G", a: 0},
{o: 0.04, f: 0.04, l: "B", a: 1},
{o: 0.04, f: 235.536, l: "A", a: 0},
{o: 235.536, f: 254.712, l: "D", a: 1},
{o: 254.712, f: 255.336, l: "F", a: 0},
{o: 255.336, f: 255.373, l: "G", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000066.ogg";
