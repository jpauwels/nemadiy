var data = [
[{o: 0.267, f: 44.931, l: "A", a: 0},
{o: 44.931, f: 102.307, l: "B", a: 1},
{o: 102.307, f: 158.499, l: "C", a: 0},
{o: 158.499, f: 182.752, l: "A'", a: 1},
{o: 182.752, f: 211.715, l: "D", a: 0}],
[{o: 0.016, f: 8.476, l: "B", a: 0},
{o: 8.476, f: 20.4, l: "B", a: 1},
{o: 20.4, f: 28.156, l: "B", a: 0},
{o: 28.156, f: 34.892, l: "B", a: 1},
{o: 34.892, f: 45, l: "B", a: 0},
{o: 45, f: 56.424, l: "B", a: 1},
{o: 56.424, f: 66.012, l: "B", a: 0},
{o: 66.012, f: 72.956, l: "B", a: 1},
{o: 72.956, f: 80.452, l: "B", a: 0},
{o: 80.452, f: 89.704, l: "B", a: 1},
{o: 89.704, f: 94.808, l: "B", a: 0},
{o: 94.808, f: 102.592, l: "B", a: 1},
{o: 102.592, f: 112.04, l: "B", a: 0},
{o: 112.04, f: 120.344, l: "B", a: 1},
{o: 120.344, f: 125.276, l: "B", a: 0},
{o: 125.276, f: 134.724, l: "B", a: 1},
{o: 134.724, f: 144.224, l: "B", a: 0},
{o: 144.224, f: 161.036, l: "B", a: 1},
{o: 161.036, f: 173.552, l: "B", a: 0},
{o: 173.552, f: 182.3, l: "B", a: 1},
{o: 182.3, f: 194.028, l: "A", a: 0},
{o: 194.028, f: 198.272, l: "B", a: 1},
{o: 198.272, f: 204.652, l: "B", a: 0},
{o: 204.652, f: 211.64, l: "B", a: 1}],
[{o: 0.016, f: 8.476, l: "C", a: 0},
{o: 8.476, f: 20.4, l: "B", a: 1},
{o: 20.4, f: 28.156, l: "B", a: 0},
{o: 28.156, f: 34.892, l: "D", a: 1},
{o: 34.892, f: 45, l: "B", a: 0},
{o: 45, f: 56.424, l: "B", a: 1},
{o: 56.424, f: 66.012, l: "B", a: 0},
{o: 66.012, f: 72.956, l: "B", a: 1},
{o: 72.956, f: 80.452, l: "B", a: 0},
{o: 80.452, f: 89.704, l: "B", a: 1},
{o: 89.704, f: 94.808, l: "A", a: 0},
{o: 94.808, f: 102.592, l: "E", a: 1},
{o: 102.592, f: 112.04, l: "B", a: 0},
{o: 112.04, f: 120.344, l: "B", a: 1},
{o: 120.344, f: 125.276, l: "F", a: 0},
{o: 125.276, f: 134.724, l: "A", a: 1},
{o: 134.724, f: 144.224, l: "E", a: 0},
{o: 144.224, f: 161.036, l: "B", a: 1},
{o: 161.036, f: 173.552, l: "B", a: 0},
{o: 173.552, f: 182.3, l: "G", a: 1},
{o: 182.3, f: 194.028, l: "H", a: 0},
{o: 194.028, f: 198.272, l: "I", a: 1},
{o: 198.272, f: 204.652, l: "J", a: 0},
{o: 204.652, f: 211.64, l: "K", a: 1}],
[{o: 0.547, f: 8.267, l: "1", a: 0},
{o: 8.267, f: 14.093, l: "2", a: 1},
{o: 14.093, f: 19.533, l: "4", a: 0},
{o: 19.533, f: 43.933, l: "5", a: 1},
{o: 43.933, f: 72.12, l: "1", a: 0},
{o: 72.12, f: 95.24, l: "3", a: 1},
{o: 95.24, f: 100.733, l: "6", a: 0},
{o: 100.733, f: 105.933, l: "8", a: 1},
{o: 105.933, f: 120.213, l: "2", a: 0},
{o: 120.213, f: 143.987, l: "6", a: 1},
{o: 143.987, f: 158.293, l: "3", a: 0},
{o: 158.293, f: 165.067, l: "2", a: 1},
{o: 165.067, f: 176.573, l: "4", a: 0},
{o: 176.573, f: 181.227, l: "5", a: 1},
{o: 181.227, f: 195.533, l: "1", a: 0},
{o: 195.533, f: 203.16, l: "4", a: 1},
{o: 203.16, f: 211.133, l: "7", a: 0}],
[{o: 0, f: 0.745, l: "a", a: 0},
{o: 0.745, f: 14.155, l: "b", a: 1},
{o: 14.155, f: 30.545, l: "c", a: 0},
{o: 30.545, f: 165.39, l: "d", a: 1},
{o: 165.39, f: 183.27, l: "c", a: 0},
{o: 183.27, f: 193.7, l: "a", a: 1},
{o: 193.7, f: 210.835, l: "e", a: 0}],
[{o: 0, f: 211.627, l: "A", a: 0},
{o: 0.012, f: 211.441, l: "A", a: 1}],
[{o: 0, f: 0.016, l: "J", a: 0},
{o: 0.016, f: 36.356, l: "E", a: 1},
{o: 36.356, f: 97.564, l: "I", a: 0},
{o: 97.564, f: 128.452, l: "E", a: 1},
{o: 128.452, f: 151.224, l: "D", a: 0},
{o: 151.224, f: 208.26, l: "E", a: 1},
{o: 208.26, f: 211.64, l: "I", a: 0},
{o: 211.64, f: 211.697, l: "J", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000023.ogg";
