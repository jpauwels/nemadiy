var data = [
[{o: 0.163, f: 3.028, l: "D", a: 0},
{o: 3.028, f: 26.985, l: "A", a: 1},
{o: 26.985, f: 51.199, l: "B", a: 0},
{o: 51.199, f: 63.97, l: "C", a: 1},
{o: 63.97, f: 87.689, l: "A", a: 0},
{o: 87.689, f: 111.602, l: "B", a: 1},
{o: 111.602, f: 131.598, l: "C'", a: 0},
{o: 131.598, f: 155.476, l: "A'", a: 1},
{o: 155.476, f: 183.466, l: "B'", a: 0},
{o: 183.466, f: 217.272, l: "Z", a: 1}],
[{o: 0.12, f: 21.784, l: "F", a: 0},
{o: 21.784, f: 34.24, l: "A", a: 1},
{o: 34.24, f: 51.128, l: "A", a: 0},
{o: 51.128, f: 63.992, l: "F", a: 1},
{o: 63.992, f: 82.312, l: "F", a: 0},
{o: 82.312, f: 90.96, l: "A", a: 1},
{o: 90.96, f: 104.324, l: "F", a: 0},
{o: 104.324, f: 115.816, l: "A", a: 1},
{o: 115.816, f: 134.148, l: "F", a: 0},
{o: 134.148, f: 152.756, l: "F", a: 1},
{o: 152.756, f: 159.832, l: "A", a: 0},
{o: 159.832, f: 167.624, l: "E", a: 1},
{o: 167.624, f: 182.052, l: "E", a: 0},
{o: 182.052, f: 190.576, l: "A", a: 1},
{o: 190.576, f: 198.932, l: "E", a: 0},
{o: 198.932, f: 217.108, l: "E", a: 1}],
[{o: 0.12, f: 21.784, l: "F", a: 0},
{o: 21.784, f: 34.24, l: "A", a: 1},
{o: 34.24, f: 51.128, l: "A", a: 0},
{o: 51.128, f: 63.992, l: "C", a: 1},
{o: 63.992, f: 82.312, l: "F", a: 0},
{o: 82.312, f: 90.96, l: "B", a: 1},
{o: 90.96, f: 104.324, l: "F", a: 0},
{o: 104.324, f: 115.816, l: "B", a: 1},
{o: 115.816, f: 134.148, l: "F", a: 0},
{o: 134.148, f: 152.756, l: "C", a: 1},
{o: 152.756, f: 159.832, l: "G", a: 0},
{o: 159.832, f: 167.624, l: "E", a: 1},
{o: 167.624, f: 182.052, l: "E", a: 0},
{o: 182.052, f: 190.576, l: "H", a: 1},
{o: 190.576, f: 198.932, l: "D", a: 0},
{o: 198.932, f: 217.108, l: "D", a: 1}],
[{o: 0.467, f: 3.68, l: "8", a: 0},
{o: 3.68, f: 16.76, l: "3", a: 1},
{o: 16.76, f: 22.347, l: "1", a: 0},
{o: 22.347, f: 31.707, l: "2", a: 1},
{o: 31.707, f: 37.24, l: "1", a: 0},
{o: 37.24, f: 43.813, l: "2", a: 1},
{o: 43.813, f: 53.013, l: "1", a: 0},
{o: 53.013, f: 63.747, l: "4", a: 1},
{o: 63.747, f: 74.053, l: "3", a: 0},
{o: 74.053, f: 82.04, l: "1", a: 1},
{o: 82.04, f: 92.12, l: "5", a: 0},
{o: 92.12, f: 111.773, l: "4", a: 1},
{o: 111.773, f: 132.16, l: "2", a: 0},
{o: 132.16, f: 141.333, l: "3", a: 1},
{o: 141.333, f: 160.2, l: "5", a: 0},
{o: 160.2, f: 183.107, l: "1", a: 1},
{o: 183.107, f: 190.08, l: "7", a: 0},
{o: 190.08, f: 217.08, l: "6", a: 1}],
[{o: 0, f: 53.64, l: "a", a: 0},
{o: 53.64, f: 64.815, l: "b", a: 1},
{o: 64.815, f: 113.24, l: "a", a: 0},
{o: 113.24, f: 131.865, l: "c", a: 1},
{o: 131.865, f: 182.525, l: "a", a: 0},
{o: 182.525, f: 216.795, l: "d", a: 1}],
[{o: 0, f: 12.957, l: "n1", a: 0},
{o: 12.957, f: 26.622, l: "B", a: 1},
{o: 26.622, f: 55.798, l: "A", a: 0},
{o: 55.798, f: 73.34, l: "n3", a: 1},
{o: 73.34, f: 87.516, l: "B", a: 0},
{o: 87.516, f: 115.577, l: "A", a: 1},
{o: 115.577, f: 155.272, l: "n5", a: 0},
{o: 155.272, f: 185.144, l: "A", a: 1},
{o: 185.144, f: 217.014, l: "n6", a: 0}],
[{o: 0, f: 0.12, l: "I", a: 0},
{o: 0.12, f: 12.672, l: "D", a: 1},
{o: 12.672, f: 60.52, l: "B", a: 0},
{o: 60.52, f: 73.54, l: "D", a: 1},
{o: 73.54, f: 150.976, l: "B", a: 0},
{o: 150.976, f: 184.12, l: "A", a: 1},
{o: 184.12, f: 201.76, l: "E", a: 0},
{o: 201.76, f: 216.836, l: "H", a: 1},
{o: 216.836, f: 217.108, l: "G", a: 0},
{o: 217.108, f: 217.187, l: "I", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000457.ogg";
