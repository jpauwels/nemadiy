var data = [
[{o: 0, f: 0.42, l: "X", a: 0},
{o: 0.42, f: 11.186, l: "A", a: 1},
{o: 11.186, f: 17.348, l: "B", a: 0},
{o: 17.348, f: 22.61, l: "X", a: 1},
{o: 22.61, f: 32.722, l: "X", a: 0},
{o: 32.722, f: 38.194, l: "B", a: 1},
{o: 38.194, f: 43.816, l: "X", a: 0},
{o: 43.816, f: 53.202, l: "X", a: 1},
{o: 53.202, f: 59.707, l: "C", a: 0},
{o: 59.707, f: 65.155, l: "X", a: 1},
{o: 65.155, f: 73.404, l: "C", a: 0},
{o: 73.404, f: 83.081, l: "X", a: 1},
{o: 83.081, f: 88.736, l: "B", a: 0},
{o: 88.736, f: 94.05, l: "X", a: 1},
{o: 94.05, f: 97.663, l: "X", a: 0},
{o: 97.663, f: 103.81, l: "X", a: 1},
{o: 103.81, f: 109.598, l: "B", a: 0},
{o: 109.598, f: 122.555, l: "X", a: 1},
{o: 122.555, f: 137.098, l: "D", a: 0},
{o: 137.098, f: 142.77, l: "X", a: 1},
{o: 142.77, f: 150.057, l: "X", a: 0}],
[{o: 0.428, f: 9.372, l: "B", a: 0},
{o: 9.372, f: 20.32, l: "A", a: 1},
{o: 20.32, f: 27.532, l: "A", a: 0},
{o: 27.532, f: 33.576, l: "D", a: 1},
{o: 33.576, f: 44.66, l: "A", a: 0},
{o: 44.66, f: 50.744, l: "A", a: 1},
{o: 50.744, f: 62.816, l: "A", a: 0},
{o: 62.816, f: 71.948, l: "A", a: 1},
{o: 71.948, f: 81.052, l: "A", a: 0},
{o: 81.052, f: 87.216, l: "A", a: 1},
{o: 87.216, f: 102.72, l: "A", a: 0},
{o: 102.72, f: 111.932, l: "A", a: 1},
{o: 111.932, f: 121.62, l: "A", a: 0},
{o: 121.62, f: 130.188, l: "A", a: 1},
{o: 130.188, f: 137.284, l: "A", a: 0},
{o: 137.284, f: 147.9, l: "D", a: 1}],
[{o: 0.428, f: 9.372, l: "F", a: 0},
{o: 9.372, f: 20.32, l: "A", a: 1},
{o: 20.32, f: 27.532, l: "B", a: 0},
{o: 27.532, f: 33.576, l: "D", a: 1},
{o: 33.576, f: 44.66, l: "A", a: 0},
{o: 44.66, f: 50.744, l: "C", a: 1},
{o: 50.744, f: 62.816, l: "A", a: 0},
{o: 62.816, f: 71.948, l: "A", a: 1},
{o: 71.948, f: 81.052, l: "E", a: 0},
{o: 81.052, f: 87.216, l: "G", a: 1},
{o: 87.216, f: 102.72, l: "H", a: 0},
{o: 102.72, f: 111.932, l: "B", a: 1},
{o: 111.932, f: 121.62, l: "C", a: 0},
{o: 121.62, f: 130.188, l: "E", a: 1},
{o: 130.188, f: 137.284, l: "E", a: 0},
{o: 137.284, f: 147.9, l: "D", a: 1}],
[{o: 0.28, f: 2.493, l: "8", a: 0},
{o: 2.493, f: 8.307, l: "3", a: 1},
{o: 8.307, f: 23.667, l: "1", a: 0},
{o: 23.667, f: 31.8, l: "2", a: 1},
{o: 31.8, f: 45.147, l: "1", a: 0},
{o: 45.147, f: 50.493, l: "2", a: 1},
{o: 50.493, f: 71.667, l: "1", a: 0},
{o: 71.667, f: 75.773, l: "6", a: 1},
{o: 75.773, f: 83.293, l: "1", a: 0},
{o: 83.293, f: 88.013, l: "2", a: 1},
{o: 88.013, f: 94.12, l: "3", a: 0},
{o: 94.12, f: 101.987, l: "2", a: 1},
{o: 101.987, f: 116.413, l: "1", a: 0},
{o: 116.413, f: 121.32, l: "5", a: 1},
{o: 121.32, f: 136.52, l: "1", a: 0},
{o: 136.52, f: 142.493, l: "2", a: 1},
{o: 142.493, f: 147.213, l: "4", a: 0},
{o: 147.213, f: 149.96, l: "7", a: 1}],
[{o: 0, f: 8.195, l: "a", a: 0},
{o: 8.195, f: 21.605, l: "b", a: 1},
{o: 21.605, f: 30.545, l: "c", a: 0},
{o: 30.545, f: 43.955, l: "b", a: 1},
{o: 43.955, f: 79.715, l: "d", a: 0},
{o: 79.715, f: 93.125, l: "b", a: 1},
{o: 93.125, f: 101.32, l: "c", a: 0},
{o: 101.32, f: 115.475, l: "b", a: 1},
{o: 115.475, f: 149, l: "e", a: 0}],
[{o: 0, f: 149.838, l: "A", a: 0},
{o: 0.174, f: 149.769, l: "A", a: 1}],
[{o: 0, f: 0.34, l: "I", a: 0},
{o: 0.34, f: 2.884, l: "C", a: 1},
{o: 2.884, f: 25.648, l: "B", a: 0},
{o: 25.648, f: 71.956, l: "A", a: 1},
{o: 71.956, f: 88.248, l: "H", a: 0},
{o: 88.248, f: 96.64, l: "C", a: 1},
{o: 96.64, f: 116.56, l: "A", a: 0},
{o: 116.56, f: 136.788, l: "F", a: 1},
{o: 136.788, f: 148.128, l: "B", a: 0},
{o: 148.128, f: 150.048, l: "I", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001065.ogg";
