var data = [
[{o: 0.139, f: 9.154, l: "A", a: 0},
{o: 9.154, f: 18.152, l: "D", a: 1},
{o: 18.152, f: 27.207, l: "E", a: 0},
{o: 27.207, f: 45.036, l: "B", a: 1},
{o: 45.036, f: 54.076, l: "E'", a: 0},
{o: 54.076, f: 67.729, l: "C", a: 1},
{o: 67.729, f: 85.35, l: "B", a: 0},
{o: 85.35, f: 94.23, l: "E", a: 1},
{o: 94.23, f: 112.165, l: "B", a: 0},
{o: 112.165, f: 129.664, l: "A", a: 1},
{o: 129.664, f: 138.515, l: "D", a: 0},
{o: 138.515, f: 147.438, l: "E", a: 1},
{o: 147.438, f: 165.08, l: "B", a: 0},
{o: 165.08, f: 182.545, l: "A", a: 1},
{o: 182.545, f: 191.41, l: "D", a: 0},
{o: 191.41, f: 200.365, l: "E", a: 1},
{o: 200.365, f: 217.911, l: "B", a: 0},
{o: 217.911, f: 226.776, l: "E'", a: 1},
{o: 226.776, f: 253.856, l: "C", a: 0}],
[{o: 0.132, f: 4.716, l: "A", a: 0},
{o: 4.716, f: 18.732, l: "C", a: 1},
{o: 18.732, f: 31.552, l: "C", a: 0},
{o: 31.552, f: 42.328, l: "C", a: 1},
{o: 42.328, f: 54.892, l: "C", a: 0},
{o: 54.892, f: 64.688, l: "C", a: 1},
{o: 64.688, f: 71.428, l: "C", a: 0},
{o: 71.428, f: 85.628, l: "C", a: 1},
{o: 85.628, f: 101.096, l: "C", a: 0},
{o: 101.096, f: 110.712, l: "C", a: 1},
{o: 110.712, f: 127.712, l: "C", a: 0},
{o: 127.712, f: 144.676, l: "C", a: 1},
{o: 144.676, f: 154.2, l: "C", a: 0},
{o: 154.2, f: 161.496, l: "C", a: 1},
{o: 161.496, f: 173.792, l: "C", a: 0},
{o: 173.792, f: 183.092, l: "C", a: 1},
{o: 183.092, f: 198.228, l: "C", a: 0},
{o: 198.228, f: 206.58, l: "C", a: 1},
{o: 206.58, f: 215.196, l: "C", a: 0},
{o: 215.196, f: 227.416, l: "A", a: 1},
{o: 227.416, f: 238.244, l: "C", a: 0},
{o: 238.244, f: 245.924, l: "A", a: 1}],
[{o: 0.132, f: 4.716, l: "A", a: 0},
{o: 4.716, f: 18.732, l: "F", a: 1},
{o: 18.732, f: 31.552, l: "C", a: 0},
{o: 31.552, f: 42.328, l: "C", a: 1},
{o: 42.328, f: 54.892, l: "E", a: 0},
{o: 54.892, f: 64.688, l: "G", a: 1},
{o: 64.688, f: 71.428, l: "C", a: 0},
{o: 71.428, f: 85.628, l: "C", a: 1},
{o: 85.628, f: 101.096, l: "C", a: 0},
{o: 101.096, f: 110.712, l: "C", a: 1},
{o: 110.712, f: 127.712, l: "B", a: 0},
{o: 127.712, f: 144.676, l: "B", a: 1},
{o: 144.676, f: 154.2, l: "D", a: 0},
{o: 154.2, f: 161.496, l: "D", a: 1},
{o: 161.496, f: 173.792, l: "E", a: 0},
{o: 173.792, f: 183.092, l: "E", a: 1},
{o: 183.092, f: 198.228, l: "E", a: 0},
{o: 198.228, f: 206.58, l: "H", a: 1},
{o: 206.58, f: 215.196, l: "I", a: 0},
{o: 215.196, f: 227.416, l: "A", a: 1},
{o: 227.416, f: 238.244, l: "J", a: 0},
{o: 238.244, f: 245.924, l: "A", a: 1}],
[{o: 0.76, f: 8.853, l: "7", a: 0},
{o: 8.853, f: 17.627, l: "3", a: 1},
{o: 17.627, f: 26.027, l: "2", a: 0},
{o: 26.027, f: 43.693, l: "1", a: 1},
{o: 43.693, f: 49.213, l: "2", a: 0},
{o: 49.213, f: 57.147, l: "4", a: 1},
{o: 57.147, f: 63.36, l: "5", a: 0},
{o: 63.36, f: 82.88, l: "1", a: 1},
{o: 82.88, f: 92.893, l: "2", a: 0},
{o: 92.893, f: 110.733, l: "1", a: 1},
{o: 110.733, f: 145.507, l: "2", a: 0},
{o: 145.507, f: 162.04, l: "1", a: 1},
{o: 162.04, f: 190.08, l: "3", a: 0},
{o: 190.08, f: 198.973, l: "2", a: 1},
{o: 198.973, f: 216, l: "1", a: 0},
{o: 216, f: 229.347, l: "4", a: 1},
{o: 229.347, f: 237.147, l: "5", a: 0},
{o: 237.147, f: 243.827, l: "8", a: 1},
{o: 243.827, f: 253.72, l: "6", a: 0}],
[{o: 0, f: 14.9, l: "a", a: 0},
{o: 14.9, f: 41.72, l: "b", a: 1},
{o: 41.72, f: 67.05, l: "c", a: 0},
{o: 67.05, f: 83.44, l: "d", a: 1},
{o: 83.44, f: 105.045, l: "a", a: 0},
{o: 105.045, f: 119.2, l: "e", a: 1},
{o: 119.2, f: 146.765, l: "a", a: 0},
{o: 146.765, f: 172.095, l: "b", a: 1},
{o: 172.095, f: 199.66, l: "a", a: 0},
{o: 199.66, f: 213.815, l: "b", a: 1},
{o: 213.815, f: 239.89, l: "c", a: 0},
{o: 239.89, f: 253.3, l: "f", a: 1}],
[{o: 0, f: 0.174, l: "n1", a: 0},
{o: 0.174, f: 16.8, l: "B", a: 1},
{o: 16.8, f: 50.329, l: "A", a: 0},
{o: 50.329, f: 75.105, l: "C", a: 1},
{o: 75.105, f: 83.998, l: "n3", a: 0},
{o: 83.998, f: 119.792, l: "A", a: 1},
{o: 119.792, f: 137.16, l: "B", a: 0},
{o: 137.16, f: 172.722, l: "A", a: 1},
{o: 172.722, f: 190.067, l: "B", a: 0},
{o: 190.067, f: 223.144, l: "A", a: 1},
{o: 223.144, f: 248.198, l: "C", a: 0},
{o: 248.198, f: 253.794, l: "n8", a: 1}],
[{o: 0, f: 0.132, l: "G", a: 0},
{o: 0.132, f: 6.988, l: "C", a: 1},
{o: 6.988, f: 31.804, l: "F", a: 0},
{o: 31.804, f: 41.512, l: "D", a: 1},
{o: 41.512, f: 58.24, l: "E", a: 0},
{o: 58.24, f: 72.044, l: "A", a: 1},
{o: 72.044, f: 83.156, l: "D", a: 0},
{o: 83.156, f: 98.424, l: "F", a: 1},
{o: 98.424, f: 110.172, l: "D", a: 0},
{o: 110.172, f: 136.284, l: "E", a: 1},
{o: 136.284, f: 160.36, l: "F", a: 0},
{o: 160.36, f: 187.824, l: "C", a: 1},
{o: 187.824, f: 204.64, l: "F", a: 0},
{o: 204.64, f: 214.924, l: "D", a: 1},
{o: 214.924, f: 230.992, l: "E", a: 0},
{o: 230.992, f: 243.056, l: "A", a: 1},
{o: 243.056, f: 245.924, l: "F", a: 0},
{o: 245.924, f: 253.833, l: "G", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000367.ogg";
