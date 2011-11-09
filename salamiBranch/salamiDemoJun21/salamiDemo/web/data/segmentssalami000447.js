var data = [
[{o: 0.128, f: 4.604, l: "I", a: 0},
{o: 4.604, f: 46.257, l: "A", a: 1},
{o: 46.257, f: 87.28, l: "A", a: 0},
{o: 87.28, f: 140.846, l: "A", a: 1}],
[{o: 0.18, f: 5.592, l: "F", a: 0},
{o: 5.592, f: 10.304, l: "F", a: 1},
{o: 10.304, f: 19.216, l: "B", a: 0},
{o: 19.216, f: 26.744, l: "B", a: 1},
{o: 26.744, f: 35.004, l: "B", a: 0},
{o: 35.004, f: 43.548, l: "B", a: 1},
{o: 43.548, f: 47.24, l: "F", a: 0},
{o: 47.24, f: 58.26, l: "F", a: 1},
{o: 58.26, f: 69.752, l: "B", a: 0},
{o: 69.752, f: 75.592, l: "B", a: 1},
{o: 75.592, f: 85.912, l: "B", a: 0},
{o: 85.912, f: 90.964, l: "B", a: 1},
{o: 90.964, f: 103.868, l: "F", a: 0},
{o: 103.868, f: 112.732, l: "F", a: 1},
{o: 112.732, f: 125.6, l: "B", a: 0},
{o: 125.6, f: 134.864, l: "B", a: 1},
{o: 134.864, f: 140.6, l: "F", a: 0}],
[{o: 0.18, f: 5.592, l: "F", a: 0},
{o: 5.592, f: 10.304, l: "F", a: 1},
{o: 10.304, f: 19.216, l: "B", a: 0},
{o: 19.216, f: 26.744, l: "B", a: 1},
{o: 26.744, f: 35.004, l: "C", a: 0},
{o: 35.004, f: 43.548, l: "C", a: 1},
{o: 43.548, f: 47.24, l: "A", a: 0},
{o: 47.24, f: 58.26, l: "E", a: 1},
{o: 58.26, f: 69.752, l: "C", a: 0},
{o: 69.752, f: 75.592, l: "C", a: 1},
{o: 75.592, f: 85.912, l: "C", a: 0},
{o: 85.912, f: 90.964, l: "G", a: 1},
{o: 90.964, f: 103.868, l: "D", a: 0},
{o: 103.868, f: 112.732, l: "D", a: 1},
{o: 112.732, f: 125.6, l: "B", a: 0},
{o: 125.6, f: 134.864, l: "B", a: 1},
{o: 134.864, f: 140.6, l: "H", a: 0}],
[{o: 0.76, f: 4.293, l: "8", a: 0},
{o: 4.293, f: 40.693, l: "1", a: 1},
{o: 40.693, f: 46.467, l: "7", a: 0},
{o: 46.467, f: 58.253, l: "3", a: 1},
{o: 58.253, f: 65.427, l: "1", a: 0},
{o: 65.427, f: 74.56, l: "4", a: 1},
{o: 74.56, f: 81.227, l: "3", a: 0},
{o: 81.227, f: 89.413, l: "5", a: 1},
{o: 89.413, f: 132.84, l: "2", a: 0},
{o: 132.84, f: 139.053, l: "6", a: 1}],
[{o: 0, f: 14.9, l: "a", a: 0},
{o: 14.9, f: 22.35, l: "b", a: 1},
{o: 22.35, f: 34.27, l: "a", a: 0},
{o: 34.27, f: 40.975, l: "b", a: 1},
{o: 40.975, f: 54.385, l: "c", a: 0},
{o: 54.385, f: 64.07, l: "a", a: 1},
{o: 64.07, f: 82.695, l: "d", a: 0},
{o: 82.695, f: 94.615, l: "a", a: 1},
{o: 94.615, f: 106.535, l: "b", a: 0},
{o: 106.535, f: 118.455, l: "a", a: 1},
{o: 118.455, f: 125.16, l: "b", a: 0},
{o: 125.16, f: 140.06, l: "c", a: 1}],
[{o: 0, f: 5.608, l: "n1", a: 0},
{o: 5.608, f: 22.361, l: "A", a: 1},
{o: 22.361, f: 38.917, l: "A", a: 0},
{o: 38.917, f: 47.276, l: "n2", a: 1},
{o: 47.276, f: 63.658, l: "A", a: 0},
{o: 63.658, f: 106.162, l: "n3", a: 1},
{o: 106.162, f: 122.381, l: "A", a: 0},
{o: 122.381, f: 140.852, l: "n4", a: 1}],
[{o: 0, f: 0.004, l: "E", a: 0},
{o: 0.004, f: 2.896, l: "D", a: 1},
{o: 2.896, f: 66.184, l: "B", a: 0},
{o: 66.184, f: 82.736, l: "C", a: 1},
{o: 82.736, f: 134.86, l: "B", a: 0},
{o: 134.86, f: 140.6, l: "D", a: 1},
{o: 140.6, f: 140.827, l: "E", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000447.ogg";

var artist = "Albert Collins";

var track = "Chatterbox";