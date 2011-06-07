var data = [
[{o: 0.325, f: 24.289, l: "A", a: 0},
{o: 24.289, f: 57.513, l: "B", a: 1},
{o: 57.513, f: 65.642, l: "A'", a: 0},
{o: 65.642, f: 97.697, l: "B", a: 1},
{o: 97.697, f: 105.793, l: "D", a: 0},
{o: 105.793, f: 137.781, l: "C", a: 1},
{o: 137.781, f: 190.736, l: "B", a: 0}],
[{o: 0.16, f: 4.428, l: "C", a: 0},
{o: 4.428, f: 10.32, l: "C", a: 1},
{o: 10.32, f: 19.44, l: "C", a: 0},
{o: 19.44, f: 22.82, l: "C", a: 1},
{o: 22.82, f: 33.58, l: "C", a: 0},
{o: 33.58, f: 40.428, l: "C", a: 1},
{o: 40.428, f: 48.128, l: "C", a: 0},
{o: 48.128, f: 53.296, l: "C", a: 1},
{o: 53.296, f: 64.264, l: "C", a: 0},
{o: 64.264, f: 70.164, l: "C", a: 1},
{o: 70.164, f: 77.436, l: "C", a: 0},
{o: 77.436, f: 89.936, l: "C", a: 1},
{o: 89.936, f: 99.684, l: "C", a: 0},
{o: 99.684, f: 106.22, l: "C", a: 1},
{o: 106.22, f: 111.036, l: "C", a: 0},
{o: 111.036, f: 121.576, l: "C", a: 1},
{o: 121.576, f: 136.184, l: "C", a: 0},
{o: 136.184, f: 146.284, l: "C", a: 1},
{o: 146.284, f: 152.26, l: "C", a: 0},
{o: 152.26, f: 163.696, l: "C", a: 1},
{o: 163.696, f: 168.908, l: "C", a: 0},
{o: 168.908, f: 181.08, l: "A", a: 1},
{o: 181.08, f: 187.516, l: "C", a: 0}],
[{o: 0.16, f: 4.428, l: "C", a: 0},
{o: 4.428, f: 10.32, l: "D", a: 1},
{o: 10.32, f: 19.44, l: "B", a: 0},
{o: 19.44, f: 22.82, l: "B", a: 1},
{o: 22.82, f: 33.58, l: "A", a: 0},
{o: 33.58, f: 40.428, l: "A", a: 1},
{o: 40.428, f: 48.128, l: "E", a: 0},
{o: 48.128, f: 53.296, l: "A", a: 1},
{o: 53.296, f: 64.264, l: "A", a: 0},
{o: 64.264, f: 70.164, l: "A", a: 1},
{o: 70.164, f: 77.436, l: "A", a: 0},
{o: 77.436, f: 89.936, l: "A", a: 1},
{o: 89.936, f: 99.684, l: "A", a: 0},
{o: 99.684, f: 106.22, l: "F", a: 1},
{o: 106.22, f: 111.036, l: "G", a: 0},
{o: 111.036, f: 121.576, l: "A", a: 1},
{o: 121.576, f: 136.184, l: "A", a: 0},
{o: 136.184, f: 146.284, l: "H", a: 1},
{o: 146.284, f: 152.26, l: "I", a: 0},
{o: 152.26, f: 163.696, l: "A", a: 1},
{o: 163.696, f: 168.908, l: "J", a: 0},
{o: 168.908, f: 181.08, l: "K", a: 1},
{o: 181.08, f: 187.516, l: "C", a: 0}],
[{o: 0.653, f: 0.933, l: "8", a: 0},
{o: 0.933, f: 15.787, l: "4", a: 1},
{o: 15.787, f: 23.547, l: "3", a: 0},
{o: 23.547, f: 58.24, l: "1", a: 1},
{o: 58.24, f: 64.507, l: "3", a: 0},
{o: 64.507, f: 98.667, l: "1", a: 1},
{o: 98.667, f: 103.773, l: "6", a: 0},
{o: 103.773, f: 137.88, l: "2", a: 1},
{o: 137.88, f: 145.28, l: "3", a: 0},
{o: 145.28, f: 152.48, l: "2", a: 1},
{o: 152.48, f: 169.787, l: "1", a: 0},
{o: 169.787, f: 180.613, l: "4", a: 1},
{o: 180.613, f: 185.987, l: "5", a: 0},
{o: 185.987, f: 190.6, l: "7", a: 1}],
[{o: 0, f: 16.39, l: "a", a: 0},
{o: 16.39, f: 21.605, l: "b", a: 1},
{o: 21.605, f: 58.11, l: "c", a: 0},
{o: 58.11, f: 63.325, l: "b", a: 1},
{o: 63.325, f: 104.3, l: "d", a: 0},
{o: 104.3, f: 108.77, l: "e", a: 1},
{o: 108.77, f: 112.495, l: "e", a: 0},
{o: 112.495, f: 189.975, l: "f", a: 1}],
[{o: 0, f: 43.282, l: "n1", a: 0},
{o: 43.282, f: 53.232, l: "B", a: 1},
{o: 53.232, f: 58.735, l: "n2", a: 0},
{o: 58.735, f: 67.976, l: "A", a: 1},
{o: 67.976, f: 82.071, l: "n3", a: 0},
{o: 82.071, f: 93.774, l: "B", a: 1},
{o: 93.774, f: 178.027, l: "n4", a: 0},
{o: 178.027, f: 190.636, l: "A", a: 1}],
[{o: 0, f: 0.16, l: "I", a: 0},
{o: 0.16, f: 27.756, l: "D", a: 1},
{o: 27.756, f: 53.296, l: "B", a: 0},
{o: 53.296, f: 72.996, l: "F", a: 1},
{o: 72.996, f: 102.728, l: "E", a: 0},
{o: 102.728, f: 133.308, l: "H", a: 1},
{o: 133.308, f: 155.888, l: "A", a: 0},
{o: 155.888, f: 187.516, l: "C", a: 1},
{o: 187.516, f: 190.721, l: "I", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000288.ogg";
