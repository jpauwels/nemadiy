var data = [
[{o: 0.041, f: 3.257, l: "Z", a: 0},
{o: 3.257, f: 17.648, l: "A", a: 1},
{o: 17.648, f: 62.452, l: "B", a: 0},
{o: 62.452, f: 81.313, l: "C", a: 1},
{o: 81.313, f: 111.803, l: "B", a: 0},
{o: 111.803, f: 130.869, l: "C", a: 1},
{o: 130.869, f: 145.94, l: "D", a: 0},
{o: 145.94, f: 190.607, l: "C", a: 1},
{o: 190.607, f: 281.45, l: "Z", a: 0}],
[{o: 0.016, f: 20.2, l: "A", a: 0},
{o: 20.2, f: 34.052, l: "A", a: 1},
{o: 34.052, f: 51.996, l: "A", a: 0},
{o: 51.996, f: 67.516, l: "A", a: 1},
{o: 67.516, f: 84.024, l: "A", a: 0},
{o: 84.024, f: 101.192, l: "B", a: 1},
{o: 101.192, f: 116.96, l: "A", a: 0},
{o: 116.96, f: 130.284, l: "A", a: 1},
{o: 130.284, f: 148.556, l: "A", a: 0},
{o: 148.556, f: 161.992, l: "E", a: 1},
{o: 161.992, f: 169.176, l: "D", a: 0},
{o: 169.176, f: 192.168, l: "E", a: 1},
{o: 192.168, f: 199.676, l: "C", a: 0},
{o: 199.676, f: 214.248, l: "E", a: 1},
{o: 214.248, f: 219.752, l: "E", a: 0},
{o: 219.752, f: 234.508, l: "D", a: 1},
{o: 234.508, f: 253.44, l: "E", a: 0},
{o: 253.44, f: 269.9, l: "B", a: 1},
{o: 269.9, f: 281.272, l: "D", a: 0}],
[{o: 0.016, f: 20.2, l: "G", a: 0},
{o: 20.2, f: 34.052, l: "C", a: 1},
{o: 34.052, f: 51.996, l: "C", a: 0},
{o: 51.996, f: 67.516, l: "A", a: 1},
{o: 67.516, f: 84.024, l: "B", a: 0},
{o: 84.024, f: 101.192, l: "H", a: 1},
{o: 101.192, f: 116.96, l: "A", a: 0},
{o: 116.96, f: 130.284, l: "B", a: 1},
{o: 130.284, f: 148.556, l: "A", a: 0},
{o: 148.556, f: 161.992, l: "E", a: 1},
{o: 161.992, f: 169.176, l: "I", a: 0},
{o: 169.176, f: 192.168, l: "E", a: 1},
{o: 192.168, f: 199.676, l: "J", a: 0},
{o: 199.676, f: 214.248, l: "F", a: 1},
{o: 214.248, f: 219.752, l: "F", a: 0},
{o: 219.752, f: 234.508, l: "D", a: 1},
{o: 234.508, f: 253.44, l: "F", a: 0},
{o: 253.44, f: 269.9, l: "K", a: 1},
{o: 269.9, f: 281.272, l: "D", a: 0}],
[{o: 0.44, f: 5.507, l: "5", a: 0},
{o: 5.507, f: 15.24, l: "4", a: 1},
{o: 15.24, f: 56.907, l: "1", a: 0},
{o: 56.907, f: 73.907, l: "2", a: 1},
{o: 73.907, f: 104.787, l: "1", a: 0},
{o: 104.787, f: 122.467, l: "2", a: 1},
{o: 122.467, f: 129.587, l: "1", a: 0},
{o: 129.587, f: 144.707, l: "4", a: 1},
{o: 144.707, f: 175.853, l: "2", a: 0},
{o: 175.853, f: 183.827, l: "1", a: 1},
{o: 183.827, f: 190.333, l: "2", a: 0},
{o: 190.333, f: 197.533, l: "6", a: 1},
{o: 197.533, f: 203.853, l: "7", a: 0},
{o: 203.853, f: 249.44, l: "3", a: 1},
{o: 249.44, f: 255.213, l: "8", a: 0},
{o: 255.213, f: 266.28, l: "3", a: 1},
{o: 266.28, f: 273.88, l: "5", a: 0},
{o: 273.88, f: 281.24, l: "3", a: 1}],
[{o: 0, f: 17.135, l: "a", a: 0},
{o: 17.135, f: 32.78, l: "a", a: 1},
{o: 32.78, f: 61.835, l: "a", a: 0},
{o: 61.835, f: 81.205, l: "b", a: 1},
{o: 81.205, f: 98.34, l: "a", a: 0},
{o: 98.34, f: 111.005, l: "a", a: 1},
{o: 111.005, f: 131.12, l: "b", a: 0},
{o: 131.12, f: 148.255, l: "a", a: 1},
{o: 148.255, f: 160.92, l: "a", a: 0},
{o: 160.92, f: 184.76, l: "b", a: 1},
{o: 184.76, f: 280.865, l: "c", a: 0}],
[{o: 0, f: 12.887, l: "n1", a: 0},
{o: 12.887, f: 27.585, l: "B", a: 1},
{o: 27.585, f: 43.607, l: "B", a: 0},
{o: 43.607, f: 83.116, l: "A", a: 1},
{o: 83.116, f: 92.613, l: "n3", a: 0},
{o: 92.613, f: 132.702, l: "A", a: 1},
{o: 132.702, f: 145.694, l: "n4", a: 0},
{o: 145.694, f: 185.783, l: "A", a: 1},
{o: 185.783, f: 281.287, l: "n5", a: 0}],
[{o: 0, f: 0.024, l: "H", a: 0},
{o: 0.024, f: 6.448, l: "F", a: 1},
{o: 6.448, f: 54.816, l: "A", a: 0},
{o: 54.816, f: 65.888, l: "C", a: 1},
{o: 65.888, f: 103.572, l: "A", a: 0},
{o: 103.572, f: 115.04, l: "C", a: 1},
{o: 115.04, f: 127.24, l: "A", a: 0},
{o: 127.24, f: 168.664, l: "C", a: 1},
{o: 168.664, f: 190.472, l: "A", a: 0},
{o: 190.472, f: 250.2, l: "G", a: 1},
{o: 250.2, f: 281.276, l: "E", a: 0},
{o: 281.276, f: 281.347, l: "H", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000219.ogg";

var artist = "Lisa Sanders";

var track = "Ever Find a way";