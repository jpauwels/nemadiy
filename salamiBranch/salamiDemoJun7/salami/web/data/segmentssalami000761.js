var data = [
[{o: 0.343, f: 26.657, l: "I", a: 0},
{o: 26.657, f: 52.454, l: "V", a: 1},
{o: 52.454, f: 65.295, l: "C", a: 0},
{o: 65.295, f: 78.34, l: "I", a: 1},
{o: 78.34, f: 104.067, l: "V", a: 0},
{o: 104.067, f: 123.642, l: "C", a: 1},
{o: 123.642, f: 141.145, l: "I", a: 0}],
[{o: 0.072, f: 5.476, l: "B", a: 0},
{o: 5.476, f: 12.824, l: "B", a: 1},
{o: 12.824, f: 25.94, l: "B", a: 0},
{o: 25.94, f: 36.032, l: "A", a: 1},
{o: 36.032, f: 40.036, l: "A", a: 0},
{o: 40.036, f: 46.9, l: "A", a: 1},
{o: 46.9, f: 53.016, l: "B", a: 0},
{o: 53.016, f: 63.452, l: "B", a: 1},
{o: 63.452, f: 70.828, l: "B", a: 0},
{o: 70.828, f: 79.372, l: "C", a: 1},
{o: 79.372, f: 84.232, l: "C", a: 0},
{o: 84.232, f: 91.14, l: "D", a: 1},
{o: 91.14, f: 96.56, l: "E", a: 0},
{o: 96.56, f: 104.292, l: "B", a: 1},
{o: 104.292, f: 113.488, l: "B", a: 0},
{o: 113.488, f: 122.308, l: "F", a: 1},
{o: 122.308, f: 128.804, l: "B", a: 0},
{o: 128.804, f: 138.112, l: "G", a: 1}],
[{o: 0.072, f: 5.476, l: "B", a: 0},
{o: 5.476, f: 12.824, l: "A", a: 1},
{o: 12.824, f: 25.94, l: "A", a: 0},
{o: 25.94, f: 36.032, l: "C", a: 1},
{o: 36.032, f: 40.036, l: "D", a: 0},
{o: 40.036, f: 46.9, l: "E", a: 1},
{o: 46.9, f: 53.016, l: "A", a: 0},
{o: 53.016, f: 63.452, l: "A", a: 1},
{o: 63.452, f: 70.828, l: "A", a: 0},
{o: 70.828, f: 79.372, l: "F", a: 1},
{o: 79.372, f: 84.232, l: "G", a: 0},
{o: 84.232, f: 91.14, l: "H", a: 1},
{o: 91.14, f: 96.56, l: "I", a: 0},
{o: 96.56, f: 104.292, l: "A", a: 1},
{o: 104.292, f: 113.488, l: "A", a: 0},
{o: 113.488, f: 122.308, l: "J", a: 1},
{o: 122.308, f: 128.804, l: "B", a: 0},
{o: 128.804, f: 138.112, l: "K", a: 1}],
[{o: 0.387, f: 1.413, l: "8", a: 0},
{o: 1.413, f: 24.533, l: "1", a: 1},
{o: 24.533, f: 31.813, l: "2", a: 0},
{o: 31.813, f: 36.24, l: "4", a: 1},
{o: 36.24, f: 41.067, l: "6", a: 0},
{o: 41.067, f: 45.707, l: "7", a: 1},
{o: 45.707, f: 50.96, l: "2", a: 0},
{o: 50.96, f: 61.853, l: "3", a: 1},
{o: 61.853, f: 76.64, l: "1", a: 0},
{o: 76.64, f: 84.053, l: "2", a: 1},
{o: 84.053, f: 89.707, l: "4", a: 0},
{o: 89.707, f: 102.88, l: "2", a: 1},
{o: 102.88, f: 119.68, l: "3", a: 0},
{o: 119.68, f: 135.907, l: "1", a: 1},
{o: 135.907, f: 140.973, l: "5", a: 0}],
[{o: 0, f: 8.195, l: "a", a: 0},
{o: 8.195, f: 18.625, l: "b", a: 1},
{o: 18.625, f: 30.545, l: "b", a: 0},
{o: 30.545, f: 55.13, l: "c", a: 1},
{o: 55.13, f: 65.56, l: "b", a: 0},
{o: 65.56, f: 77.48, l: "b", a: 1},
{o: 77.48, f: 107.28, l: "c", a: 0},
{o: 107.28, f: 140.06, l: "d", a: 1}],
[{o: 0, f: 10.6, l: "n1", a: 0},
{o: 10.6, f: 62.485, l: "A", a: 1},
{o: 62.485, f: 114.335, l: "A", a: 0},
{o: 114.335, f: 140.852, l: "n2", a: 1}],
[{o: 0, f: 0.184, l: "H", a: 0},
{o: 0.184, f: 28.172, l: "G", a: 1},
{o: 28.172, f: 41.06, l: "C", a: 0},
{o: 41.06, f: 51.988, l: "B", a: 1},
{o: 51.988, f: 64.884, l: "A", a: 0},
{o: 64.884, f: 79.976, l: "G", a: 1},
{o: 79.976, f: 92.928, l: "C", a: 0},
{o: 92.928, f: 100.636, l: "B", a: 1},
{o: 100.636, f: 123.124, l: "A", a: 0},
{o: 123.124, f: 134.852, l: "G", a: 1},
{o: 134.852, f: 137.556, l: "E", a: 0},
{o: 137.556, f: 141.067, l: "H", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000761.ogg";
