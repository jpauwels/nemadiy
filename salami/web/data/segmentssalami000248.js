var data = [
[{o: 0.215, f: 13.479, l: "I", a: 0},
{o: 13.479, f: 43.159, l: "A", a: 1},
{o: 43.159, f: 68.703, l: "C", a: 0},
{o: 68.703, f: 94.351, l: "B", a: 1},
{o: 94.351, f: 119.775, l: "C", a: 0},
{o: 119.775, f: 156.5, l: "I", a: 1}],
[{o: 0.12, f: 9.24, l: "F", a: 0},
{o: 9.24, f: 16.668, l: "F", a: 1},
{o: 16.668, f: 22.376, l: "F", a: 0},
{o: 22.376, f: 28.5, l: "A", a: 1},
{o: 28.5, f: 41.796, l: "F", a: 0},
{o: 41.796, f: 51.456, l: "F", a: 1},
{o: 51.456, f: 62.164, l: "F", a: 0},
{o: 62.164, f: 68.596, l: "F", a: 1},
{o: 68.596, f: 78.26, l: "F", a: 0},
{o: 78.26, f: 83.516, l: "F", a: 1},
{o: 83.516, f: 93.844, l: "F", a: 0},
{o: 93.844, f: 103.404, l: "F", a: 1},
{o: 103.404, f: 112.888, l: "F", a: 0},
{o: 112.888, f: 122.312, l: "F", a: 1},
{o: 122.312, f: 133.108, l: "F", a: 0},
{o: 133.108, f: 140.92, l: "F", a: 1},
{o: 140.92, f: 149.64, l: "F", a: 0}],
[{o: 0.12, f: 9.24, l: "F", a: 0},
{o: 9.24, f: 16.668, l: "F", a: 1},
{o: 16.668, f: 22.376, l: "G", a: 0},
{o: 22.376, f: 28.5, l: "E", a: 1},
{o: 28.5, f: 41.796, l: "G", a: 0},
{o: 41.796, f: 51.456, l: "A", a: 1},
{o: 51.456, f: 62.164, l: "A", a: 0},
{o: 62.164, f: 68.596, l: "A", a: 1},
{o: 68.596, f: 78.26, l: "B", a: 0},
{o: 78.26, f: 83.516, l: "H", a: 1},
{o: 83.516, f: 93.844, l: "B", a: 0},
{o: 93.844, f: 103.404, l: "A", a: 1},
{o: 103.404, f: 112.888, l: "D", a: 0},
{o: 112.888, f: 122.312, l: "D", a: 1},
{o: 122.312, f: 133.108, l: "C", a: 0},
{o: 133.108, f: 140.92, l: "G", a: 1},
{o: 140.92, f: 149.64, l: "C", a: 0}],
[{o: 1.213, f: 13.08, l: "5", a: 0},
{o: 13.08, f: 43.48, l: "2", a: 1},
{o: 43.48, f: 69.027, l: "1", a: 0},
{o: 69.027, f: 90.653, l: "4", a: 1},
{o: 90.653, f: 102.6, l: "1", a: 0},
{o: 102.6, f: 113.667, l: "6", a: 1},
{o: 113.667, f: 120.867, l: "8", a: 0},
{o: 120.867, f: 147.507, l: "3", a: 1},
{o: 147.507, f: 156.387, l: "7", a: 0}],
[{o: 0, f: 26.82, l: "a", a: 0},
{o: 26.82, f: 46.19, l: "b", a: 1},
{o: 46.19, f: 55.13, l: "c", a: 0},
{o: 55.13, f: 97.595, l: "d", a: 1},
{o: 97.595, f: 106.535, l: "c", a: 0},
{o: 106.535, f: 124.415, l: "e", a: 1},
{o: 124.415, f: 154.215, l: "a", a: 0},
{o: 154.215, f: 155.705, l: "f", a: 1}],
[{o: 0, f: 1.637, l: "n1", a: 0},
{o: 1.637, f: 21.246, l: "A", a: 1},
{o: 21.246, f: 42.725, l: "A", a: 0},
{o: 42.725, f: 68.232, l: "B", a: 1},
{o: 68.232, f: 81.119, l: "C", a: 0},
{o: 81.119, f: 93.878, l: "C", a: 1},
{o: 93.878, f: 119.362, l: "B", a: 0},
{o: 119.362, f: 124.471, l: "n4", a: 1},
{o: 124.471, f: 142.571, l: "A", a: 0},
{o: 142.571, f: 156.456, l: "n5", a: 1}],
[{o: 0, f: 0.12, l: "G", a: 0},
{o: 0.12, f: 24.452, l: "B", a: 1},
{o: 24.452, f: 44.284, l: "A", a: 0},
{o: 44.284, f: 67.408, l: "C", a: 1},
{o: 67.408, f: 95.052, l: "E", a: 0},
{o: 95.052, f: 131.08, l: "C", a: 1},
{o: 131.08, f: 150.072, l: "F", a: 0},
{o: 150.072, f: 156.501, l: "G", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000248.ogg";
