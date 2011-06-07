var data = [
[{o: 0.233, f: 24.299, l: "I", a: 0},
{o: 24.299, f: 56.491, l: "V", a: 1},
{o: 56.491, f: 80.349, l: "I", a: 0},
{o: 80.349, f: 112.307, l: "V", a: 1},
{o: 112.307, f: 152.843, l: "B", a: 0}],
[{o: 0.208, f: 3.244, l: "B", a: 0},
{o: 3.244, f: 6.22, l: "D", a: 1},
{o: 6.22, f: 10.8, l: "F", a: 0},
{o: 10.8, f: 16.832, l: "C", a: 1},
{o: 16.832, f: 22.796, l: "C", a: 0},
{o: 22.796, f: 28.844, l: "C", a: 1},
{o: 28.844, f: 34.404, l: "C", a: 0},
{o: 34.404, f: 39.964, l: "C", a: 1},
{o: 39.964, f: 47.008, l: "C", a: 0},
{o: 47.008, f: 54.436, l: "C", a: 1},
{o: 54.436, f: 58.924, l: "C", a: 0},
{o: 58.924, f: 64.424, l: "C", a: 1},
{o: 64.424, f: 72.4, l: "C", a: 0},
{o: 72.4, f: 80.38, l: "C", a: 1},
{o: 80.38, f: 86.4, l: "E", a: 0},
{o: 86.4, f: 92.376, l: "E", a: 1},
{o: 92.376, f: 96.356, l: "E", a: 0},
{o: 96.356, f: 101.856, l: "C", a: 1},
{o: 101.856, f: 106.344, l: "C", a: 0},
{o: 106.344, f: 112.336, l: "C", a: 1},
{o: 112.336, f: 122.384, l: "A", a: 0},
{o: 122.384, f: 130.364, l: "A", a: 1},
{o: 130.364, f: 137.312, l: "G", a: 0},
{o: 137.312, f: 144.296, l: "H", a: 1},
{o: 144.296, f: 150.332, l: "I", a: 0}],
[{o: 0.208, f: 3.244, l: "F", a: 0},
{o: 3.244, f: 6.22, l: "G", a: 1},
{o: 6.22, f: 10.8, l: "H", a: 0},
{o: 10.8, f: 16.832, l: "C", a: 1},
{o: 16.832, f: 22.796, l: "I", a: 0},
{o: 22.796, f: 28.844, l: "D", a: 1},
{o: 28.844, f: 34.404, l: "D", a: 0},
{o: 34.404, f: 39.964, l: "D", a: 1},
{o: 39.964, f: 47.008, l: "B", a: 0},
{o: 47.008, f: 54.436, l: "B", a: 1},
{o: 54.436, f: 58.924, l: "J", a: 0},
{o: 58.924, f: 64.424, l: "K", a: 1},
{o: 64.424, f: 72.4, l: "L", a: 0},
{o: 72.4, f: 80.38, l: "C", a: 1},
{o: 80.38, f: 86.4, l: "E", a: 0},
{o: 86.4, f: 92.376, l: "E", a: 1},
{o: 92.376, f: 96.356, l: "E", a: 0},
{o: 96.356, f: 101.856, l: "C", a: 1},
{o: 101.856, f: 106.344, l: "C", a: 0},
{o: 106.344, f: 112.336, l: "C", a: 1},
{o: 112.336, f: 122.384, l: "A", a: 0},
{o: 122.384, f: 130.364, l: "A", a: 1},
{o: 130.364, f: 137.312, l: "M", a: 0},
{o: 137.312, f: 144.296, l: "N", a: 1},
{o: 144.296, f: 150.332, l: "O", a: 0}],
[{o: 0.707, f: 4.48, l: "8", a: 0},
{o: 4.48, f: 24.587, l: "3", a: 1},
{o: 24.587, f: 35.707, l: "5", a: 0},
{o: 35.707, f: 55.68, l: "1", a: 1},
{o: 55.68, f: 63.68, l: "6", a: 0},
{o: 63.68, f: 96.12, l: "1", a: 1},
{o: 96.12, f: 119.147, l: "2", a: 0},
{o: 119.147, f: 132.093, l: "4", a: 1},
{o: 132.093, f: 146.587, l: "2", a: 0},
{o: 146.587, f: 151.693, l: "7", a: 1}],
[{o: 0, f: 34.27, l: "a", a: 0},
{o: 34.27, f: 55.875, l: "b", a: 1},
{o: 55.875, f: 91.635, l: "a", a: 0},
{o: 91.635, f: 125.16, l: "a", a: 1},
{o: 125.16, f: 151.98, l: "c", a: 0}],
[{o: 0, f: 8.278, l: "n1", a: 0},
{o: 8.278, f: 26.366, l: "A", a: 1},
{o: 26.366, f: 40.519, l: "B", a: 0},
{o: 40.519, f: 58.468, l: "A", a: 1},
{o: 58.468, f: 64.47, l: "n2", a: 0},
{o: 64.47, f: 82.442, l: "A", a: 1},
{o: 82.442, f: 96.409, l: "B", a: 0},
{o: 96.409, f: 116.413, l: "A", a: 1},
{o: 116.413, f: 134.374, l: "A", a: 0},
{o: 134.374, f: 152.741, l: "n4", a: 1}],
[{o: 0, f: 0.08, l: "D", a: 0},
{o: 0.08, f: 0.08, l: "B", a: 1},
{o: 0.08, f: 9.784, l: "A", a: 0},
{o: 9.784, f: 27.32, l: "B", a: 1},
{o: 27.32, f: 42.748, l: "A", a: 0},
{o: 42.748, f: 56.168, l: "B", a: 1},
{o: 56.168, f: 65.932, l: "A", a: 0},
{o: 65.932, f: 83.656, l: "B", a: 1},
{o: 83.656, f: 97.116, l: "A", a: 0},
{o: 97.116, f: 136.548, l: "B", a: 1},
{o: 136.548, f: 149.856, l: "C", a: 0},
{o: 149.856, f: 152.844, l: "D", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000890.ogg";
