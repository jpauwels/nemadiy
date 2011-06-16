var data = [
[{o: 0.279, f: 3.209, l: "I", a: 0},
{o: 3.209, f: 24.41, l: "A", a: 1},
{o: 24.41, f: 44.929, l: "A", a: 0},
{o: 44.929, f: 64.97, l: "A", a: 1},
{o: 64.97, f: 84.897, l: "A", a: 0},
{o: 84.897, f: 104.258, l: "A", a: 1},
{o: 104.258, f: 142.754, l: "A", a: 0},
{o: 142.754, f: 162.087, l: "A", a: 1},
{o: 162.087, f: 180.68, l: "A", a: 0}],
[{o: 0.092, f: 17.972, l: "A", a: 0},
{o: 17.972, f: 26.436, l: "A", a: 1},
{o: 26.436, f: 38.888, l: "A", a: 0},
{o: 38.888, f: 58.736, l: "A", a: 1},
{o: 58.736, f: 72.452, l: "A", a: 0},
{o: 72.452, f: 81.152, l: "A", a: 1},
{o: 81.152, f: 103.636, l: "A", a: 0},
{o: 103.636, f: 115.668, l: "A", a: 1},
{o: 115.668, f: 121.452, l: "B", a: 0},
{o: 121.452, f: 134.584, l: "A", a: 1},
{o: 134.584, f: 146.036, l: "A", a: 0},
{o: 146.036, f: 165.348, l: "A", a: 1},
{o: 165.348, f: 180.596, l: "A", a: 0}],
[{o: 0.092, f: 17.972, l: "A", a: 0},
{o: 17.972, f: 26.436, l: "A", a: 1},
{o: 26.436, f: 38.888, l: "A", a: 0},
{o: 38.888, f: 58.736, l: "A", a: 1},
{o: 58.736, f: 72.452, l: "A", a: 0},
{o: 72.452, f: 81.152, l: "B", a: 1},
{o: 81.152, f: 103.636, l: "A", a: 0},
{o: 103.636, f: 115.668, l: "A", a: 1},
{o: 115.668, f: 121.452, l: "C", a: 0},
{o: 121.452, f: 134.584, l: "D", a: 1},
{o: 134.584, f: 146.036, l: "E", a: 0},
{o: 146.036, f: 165.348, l: "A", a: 1},
{o: 165.348, f: 180.596, l: "F", a: 0}],
[{o: 0.68, f: 4.973, l: "8", a: 0},
{o: 4.973, f: 29.467, l: "4", a: 1},
{o: 29.467, f: 47.6, l: "1", a: 0},
{o: 47.6, f: 56.92, l: "7", a: 1},
{o: 56.92, f: 65.067, l: "1", a: 0},
{o: 65.067, f: 76.253, l: "5", a: 1},
{o: 76.253, f: 102.44, l: "1", a: 0},
{o: 102.44, f: 109.68, l: "2", a: 1},
{o: 109.68, f: 122.387, l: "3", a: 0},
{o: 122.387, f: 131.933, l: "2", a: 1},
{o: 131.933, f: 141.493, l: "3", a: 0},
{o: 141.493, f: 160.267, l: "1", a: 1},
{o: 160.267, f: 171.72, l: "2", a: 0},
{o: 171.72, f: 180.52, l: "6", a: 1}],
[{o: 0, f: 29.055, l: "a", a: 0},
{o: 29.055, f: 49.17, l: "a", a: 1},
{o: 49.17, f: 61.835, l: "b", a: 0},
{o: 61.835, f: 90.89, l: "a", a: 1},
{o: 90.89, f: 111.005, l: "a", a: 0},
{o: 111.005, f: 122.18, l: "b", a: 1},
{o: 122.18, f: 151.235, l: "a", a: 0},
{o: 151.235, f: 171.35, l: "a", a: 1},
{o: 171.35, f: 180.29, l: "b", a: 0}],
[{o: 0, f: 0.639, l: "n1", a: 0},
{o: 0.639, f: 22.233, l: "A", a: 1},
{o: 22.233, f: 42.667, l: "A", a: 0},
{o: 42.667, f: 62.508, l: "A", a: 1},
{o: 62.508, f: 82.721, l: "A", a: 0},
{o: 82.721, f: 102.168, l: "A", a: 1},
{o: 102.168, f: 121.487, l: "A", a: 0},
{o: 121.487, f: 140.62, l: "A", a: 1},
{o: 140.62, f: 159.997, l: "A", a: 0},
{o: 159.997, f: 180.605, l: "A", a: 1}],
[{o: 0, f: 0.092, l: "E", a: 0},
{o: 0.092, f: 102.732, l: "C", a: 1},
{o: 102.732, f: 139.696, l: "D", a: 0},
{o: 139.696, f: 160.56, l: "C", a: 1},
{o: 160.56, f: 180.276, l: "D", a: 0},
{o: 180.276, f: 180.596, l: "B", a: 1},
{o: 180.596, f: 180.664, l: "E", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000788.ogg";