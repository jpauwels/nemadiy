var data = [
[{o: 0.081, f: 23.101, l: "H", a: 0},
{o: 23.101, f: 53.798, l: "A", a: 1},
{o: 53.798, f: 84.487, l: "A", a: 0},
{o: 84.487, f: 92.221, l: "B", a: 1},
{o: 92.221, f: 130.629, l: "A", a: 0},
{o: 130.629, f: 161.313, l: "C", a: 1},
{o: 161.313, f: 193.79, l: "A", a: 0}],
[{o: 0.016, f: 5.276, l: "E", a: 0},
{o: 5.276, f: 23.048, l: "D", a: 1},
{o: 23.048, f: 38.404, l: "D", a: 0},
{o: 38.404, f: 46.084, l: "C", a: 1},
{o: 46.084, f: 53.76, l: "C", a: 0},
{o: 53.76, f: 66.232, l: "A", a: 1},
{o: 66.232, f: 80.612, l: "A", a: 0},
{o: 80.612, f: 87.324, l: "F", a: 1},
{o: 87.324, f: 95.028, l: "C", a: 0},
{o: 95.028, f: 112.3, l: "C", a: 1},
{o: 112.3, f: 129.092, l: "C", a: 0},
{o: 129.092, f: 145.408, l: "B", a: 1},
{o: 145.408, f: 161.244, l: "B", a: 0},
{o: 161.244, f: 176.592, l: "C", a: 1},
{o: 176.592, f: 192.912, l: "C", a: 0}],
[{o: 0.016, f: 5.276, l: "E", a: 0},
{o: 5.276, f: 23.048, l: "D", a: 1},
{o: 23.048, f: 38.404, l: "D", a: 0},
{o: 38.404, f: 46.084, l: "C", a: 1},
{o: 46.084, f: 53.76, l: "C", a: 0},
{o: 53.76, f: 66.232, l: "A", a: 1},
{o: 66.232, f: 80.612, l: "A", a: 0},
{o: 80.612, f: 87.324, l: "F", a: 1},
{o: 87.324, f: 95.028, l: "G", a: 0},
{o: 95.028, f: 112.3, l: "C", a: 1},
{o: 112.3, f: 129.092, l: "H", a: 0},
{o: 129.092, f: 145.408, l: "B", a: 1},
{o: 145.408, f: 161.244, l: "B", a: 0},
{o: 161.244, f: 176.592, l: "C", a: 1},
{o: 176.592, f: 192.912, l: "I", a: 0}],
[{o: 0.733, f: 6.747, l: "7", a: 0},
{o: 6.747, f: 22.093, l: "5", a: 1},
{o: 22.093, f: 37.453, l: "2", a: 0},
{o: 37.453, f: 54.253, l: "1", a: 1},
{o: 54.253, f: 84.48, l: "4", a: 0},
{o: 84.48, f: 99.347, l: "6", a: 1},
{o: 99.347, f: 114.227, l: "3", a: 0},
{o: 114.227, f: 130.547, l: "2", a: 1},
{o: 130.547, f: 161.747, l: "1", a: 0},
{o: 161.747, f: 176.12, l: "3", a: 1},
{o: 176.12, f: 190.52, l: "1", a: 0},
{o: 190.52, f: 193.587, l: "8", a: 1}],
[{o: 0, f: 22.35, l: "a", a: 0},
{o: 22.35, f: 43.955, l: "a", a: 1},
{o: 43.955, f: 97.595, l: "b", a: 0},
{o: 97.595, f: 119.945, l: "a", a: 1},
{o: 119.945, f: 141.55, l: "a", a: 0},
{o: 141.55, f: 192.955, l: "b", a: 1}],
[{o: 0, f: 9.416, l: "n1", a: 0},
{o: 9.416, f: 24.764, l: "B", a: 1},
{o: 24.764, f: 40.124, l: "B", a: 0},
{o: 40.124, f: 53.069, l: "n2", a: 1},
{o: 53.069, f: 68.418, l: "C", a: 0},
{o: 68.418, f: 131.286, l: "n3", a: 1},
{o: 131.286, f: 146.646, l: "A", a: 0},
{o: 146.646, f: 160.554, l: "A", a: 1},
{o: 160.554, f: 177.354, l: "C", a: 0},
{o: 177.354, f: 193.608, l: "A", a: 1}],
[{o: 0, f: 0.012, l: "F", a: 0},
{o: 0.012, f: 21.848, l: "D", a: 1},
{o: 21.848, f: 56.4, l: "E", a: 0},
{o: 56.4, f: 70.552, l: "B", a: 1},
{o: 70.552, f: 88.54, l: "D", a: 0},
{o: 88.54, f: 100.784, l: "C", a: 1},
{o: 100.784, f: 113.736, l: "B", a: 0},
{o: 113.736, f: 130.292, l: "E", a: 1},
{o: 130.292, f: 160.524, l: "A", a: 0},
{o: 160.524, f: 193.448, l: "E", a: 1},
{o: 193.448, f: 193.707, l: "F", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001019.ogg";
