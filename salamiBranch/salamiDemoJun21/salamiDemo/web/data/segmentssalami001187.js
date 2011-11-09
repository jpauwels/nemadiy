var data = [
[{o: 0, f: 8.797, l: "A", a: 0},
{o: 8.797, f: 17.273, l: "A", a: 1},
{o: 17.273, f: 25.856, l: "A", a: 0},
{o: 25.856, f: 34.254, l: "A", a: 1},
{o: 34.254, f: 59.568, l: "A", a: 0},
{o: 59.568, f: 67.891, l: "B", a: 1},
{o: 67.891, f: 76.073, l: "A", a: 0},
{o: 76.073, f: 100.494, l: "B", a: 1},
{o: 100.494, f: 117.065, l: "A", a: 0},
{o: 117.065, f: 125.375, l: "A", a: 1},
{o: 125.375, f: 149.547, l: "B", a: 0},
{o: 149.547, f: 159.967, l: "A", a: 1}],
[{o: 0.02, f: 8.78, l: "F", a: 0},
{o: 8.78, f: 18.64, l: "A", a: 1},
{o: 18.64, f: 35.304, l: "A", a: 0},
{o: 35.304, f: 40.884, l: "G", a: 1},
{o: 40.884, f: 47.988, l: "G", a: 0},
{o: 47.988, f: 61.14, l: "G", a: 1},
{o: 61.14, f: 68.4, l: "G", a: 0},
{o: 68.4, f: 76.06, l: "C", a: 1},
{o: 76.06, f: 84.472, l: "G", a: 0},
{o: 84.472, f: 92.876, l: "C", a: 1},
{o: 92.876, f: 100.244, l: "F", a: 0},
{o: 100.244, f: 116.3, l: "F", a: 1},
{o: 116.3, f: 123.04, l: "F", a: 0},
{o: 123.04, f: 133.972, l: "G", a: 1},
{o: 133.972, f: 149.544, l: "F", a: 0},
{o: 149.544, f: 158.752, l: "F", a: 1}],
[{o: 0.02, f: 8.78, l: "F", a: 0},
{o: 8.78, f: 18.64, l: "A", a: 1},
{o: 18.64, f: 35.304, l: "A", a: 0},
{o: 35.304, f: 40.884, l: "G", a: 1},
{o: 40.884, f: 47.988, l: "G", a: 0},
{o: 47.988, f: 61.14, l: "H", a: 1},
{o: 61.14, f: 68.4, l: "B", a: 0},
{o: 68.4, f: 76.06, l: "C", a: 1},
{o: 76.06, f: 84.472, l: "I", a: 0},
{o: 84.472, f: 92.876, l: "C", a: 1},
{o: 92.876, f: 100.244, l: "F", a: 0},
{o: 100.244, f: 116.3, l: "E", a: 1},
{o: 116.3, f: 123.04, l: "E", a: 0},
{o: 123.04, f: 133.972, l: "B", a: 1},
{o: 133.972, f: 149.544, l: "D", a: 0},
{o: 149.544, f: 158.752, l: "D", a: 1}],
[{o: 0.44, f: 8.253, l: "7", a: 0},
{o: 8.253, f: 16.293, l: "1", a: 1},
{o: 16.293, f: 25.293, l: "2", a: 0},
{o: 25.293, f: 32.613, l: "1", a: 1},
{o: 32.613, f: 43.027, l: "5", a: 0},
{o: 43.027, f: 58.32, l: "4", a: 1},
{o: 58.32, f: 66.093, l: "1", a: 0},
{o: 66.093, f: 75.293, l: "2", a: 1},
{o: 75.293, f: 81.44, l: "1", a: 0},
{o: 81.44, f: 100.8, l: "2", a: 1},
{o: 100.8, f: 116.08, l: "3", a: 0},
{o: 116.08, f: 124.533, l: "6", a: 1},
{o: 124.533, f: 156.64, l: "1", a: 0},
{o: 156.64, f: 159.827, l: "8", a: 1}],
[{o: 0, f: 21.605, l: "a", a: 0},
{o: 21.605, f: 46.19, l: "a", a: 1},
{o: 46.19, f: 66.305, l: "b", a: 0},
{o: 66.305, f: 87.91, l: "c", a: 1},
{o: 87.91, f: 105.79, l: "a", a: 0},
{o: 105.79, f: 128.885, l: "a", a: 1},
{o: 128.885, f: 159.43, l: "b", a: 0}],
[{o: 0, f: 32.415, l: "n1", a: 0},
{o: 32.415, f: 47.496, l: "A", a: 1},
{o: 47.496, f: 70.473, l: "n2", a: 0},
{o: 70.473, f: 84.764, l: "A", a: 1},
{o: 84.764, f: 131.994, l: "n3", a: 0},
{o: 131.994, f: 146.065, l: "A", a: 1},
{o: 146.065, f: 159.8, l: "n4", a: 0}],
[{o: 0, f: 0.02, l: "E", a: 0},
{o: 0.02, f: 0.304, l: "D", a: 1},
{o: 0.304, f: 81.176, l: "A", a: 0},
{o: 81.176, f: 99.248, l: "C", a: 1},
{o: 99.248, f: 130.18, l: "A", a: 0},
{o: 130.18, f: 143.516, l: "C", a: 1},
{o: 143.516, f: 158.7, l: "B", a: 0},
{o: 158.7, f: 159.923, l: "E", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001187.ogg";

var artist = "Compilations";

var track = "A Las Seis";