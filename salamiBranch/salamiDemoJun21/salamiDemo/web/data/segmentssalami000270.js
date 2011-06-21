var data = [
[{o: 0.522, f: 5.694, l: "A", a: 0},
{o: 5.694, f: 20.592, l: "B", a: 1},
{o: 20.592, f: 35.829, l: "B", a: 0},
{o: 35.829, f: 50.855, l: "C", a: 1},
{o: 50.855, f: 78.569, l: "D", a: 0},
{o: 78.569, f: 110.774, l: "E", a: 1},
{o: 110.774, f: 125.895, l: "C", a: 0},
{o: 125.895, f: 151.061, l: "D", a: 1},
{o: 151.061, f: 173.637, l: "F", a: 0}],
[{o: 0.108, f: 9.144, l: "D", a: 0},
{o: 9.144, f: 17.576, l: "E", a: 1},
{o: 17.576, f: 26.832, l: "E", a: 0},
{o: 26.832, f: 32.12, l: "E", a: 1},
{o: 32.12, f: 44.288, l: "E", a: 0},
{o: 44.288, f: 54.896, l: "D", a: 1},
{o: 54.896, f: 66.812, l: "D", a: 0},
{o: 66.812, f: 78.572, l: "E", a: 1},
{o: 78.572, f: 88.476, l: "E", a: 0},
{o: 88.476, f: 95.504, l: "D", a: 1},
{o: 95.504, f: 102.252, l: "D", a: 0},
{o: 102.252, f: 108.088, l: "E", a: 1},
{o: 108.088, f: 119.336, l: "D", a: 0},
{o: 119.336, f: 125.872, l: "D", a: 1},
{o: 125.872, f: 135.944, l: "D", a: 0},
{o: 135.944, f: 149.768, l: "D", a: 1},
{o: 149.768, f: 156.392, l: "E", a: 0},
{o: 156.392, f: 165.668, l: "D", a: 1}],
[{o: 0.108, f: 9.144, l: "H", a: 0},
{o: 9.144, f: 17.576, l: "E", a: 1},
{o: 17.576, f: 26.832, l: "E", a: 0},
{o: 26.832, f: 32.12, l: "E", a: 1},
{o: 32.12, f: 44.288, l: "E", a: 0},
{o: 44.288, f: 54.896, l: "C", a: 1},
{o: 54.896, f: 66.812, l: "C", a: 0},
{o: 66.812, f: 78.572, l: "G", a: 1},
{o: 78.572, f: 88.476, l: "A", a: 0},
{o: 88.476, f: 95.504, l: "D", a: 1},
{o: 95.504, f: 102.252, l: "D", a: 0},
{o: 102.252, f: 108.088, l: "A", a: 1},
{o: 108.088, f: 119.336, l: "F", a: 0},
{o: 119.336, f: 125.872, l: "B", a: 1},
{o: 125.872, f: 135.944, l: "B", a: 0},
{o: 135.944, f: 149.768, l: "B", a: 1},
{o: 149.768, f: 156.392, l: "G", a: 0},
{o: 156.392, f: 165.668, l: "F", a: 1}],
[{o: 0.253, f: 5.227, l: "2", a: 0},
{o: 5.227, f: 14.933, l: "4", a: 1},
{o: 14.933, f: 20.173, l: "2", a: 0},
{o: 20.173, f: 29.747, l: "4", a: 1},
{o: 29.747, f: 45.373, l: "2", a: 0},
{o: 45.373, f: 50.68, l: "1", a: 1},
{o: 50.68, f: 56.333, l: "3", a: 0},
{o: 56.333, f: 70.733, l: "1", a: 1},
{o: 70.733, f: 75.427, l: "3", a: 0},
{o: 75.427, f: 78.733, l: "8", a: 1},
{o: 78.733, f: 107.987, l: "5", a: 0},
{o: 107.987, f: 120.413, l: "2", a: 1},
{o: 120.413, f: 125.4, l: "1", a: 0},
{o: 125.4, f: 130.733, l: "3", a: 1},
{o: 130.733, f: 146.187, l: "1", a: 0},
{o: 146.187, f: 151.213, l: "3", a: 1},
{o: 151.213, f: 160.973, l: "1", a: 0},
{o: 160.973, f: 167.707, l: "6", a: 1},
{o: 167.707, f: 173.507, l: "7", a: 0}],
[{o: 0, f: 16.39, l: "a", a: 0},
{o: 16.39, f: 32.035, l: "a", a: 1},
{o: 32.035, f: 75.99, l: "b", a: 0},
{o: 75.99, f: 107.28, l: "c", a: 1},
{o: 107.28, f: 151.235, l: "b", a: 0},
{o: 151.235, f: 172.84, l: "d", a: 1}],
[{o: 0, f: 0.592, l: "n1", a: 0},
{o: 0.592, f: 15.755, l: "B", a: 1},
{o: 15.755, f: 34.493, l: "B", a: 0},
{o: 34.493, f: 74.641, l: "A", a: 1},
{o: 74.641, f: 109.494, l: "n3", a: 0},
{o: 109.494, f: 149.792, l: "A", a: 1},
{o: 149.792, f: 173.546, l: "n4", a: 0}],
[{o: 0, f: 0.108, l: "G", a: 0},
{o: 0.108, f: 33.752, l: "B", a: 1},
{o: 33.752, f: 51.152, l: "E", a: 0},
{o: 51.152, f: 108.42, l: "A", a: 1},
{o: 108.42, f: 125.872, l: "E", a: 0},
{o: 125.872, f: 149.456, l: "A", a: 1},
{o: 149.456, f: 165.668, l: "F", a: 0},
{o: 165.668, f: 173.611, l: "G", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000270.ogg";

var artist = "Tito Puente";

var track = "Mambo Gallego";
