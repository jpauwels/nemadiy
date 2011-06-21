var data = [
[{o: 0.046, f: 26.859, l: "A", a: 0},
{o: 26.859, f: 45.55, l: "B", a: 1},
{o: 45.55, f: 64.212, l: "C", a: 0},
{o: 64.212, f: 73.279, l: "D", a: 1},
{o: 73.279, f: 92.22, l: "B", a: 0},
{o: 92.22, f: 129.269, l: "D", a: 1},
{o: 129.269, f: 148.156, l: "B", a: 0},
{o: 148.156, f: 166.896, l: "C", a: 1},
{o: 166.896, f: 181.032, l: "E", a: 0},
{o: 181.032, f: 186.481, l: "Z", a: 1}],
[{o: 0.004, f: 8.94, l: "B", a: 0},
{o: 8.94, f: 26.196, l: "B", a: 1},
{o: 26.196, f: 39.008, l: "B", a: 0},
{o: 39.008, f: 45.432, l: "B", a: 1},
{o: 45.432, f: 57.44, l: "B", a: 0},
{o: 57.44, f: 64.392, l: "B", a: 1},
{o: 64.392, f: 72.132, l: "B", a: 0},
{o: 72.132, f: 81.868, l: "B", a: 1},
{o: 81.868, f: 100.572, l: "B", a: 0},
{o: 100.572, f: 110.968, l: "B", a: 1},
{o: 110.968, f: 127.744, l: "A", a: 0},
{o: 127.744, f: 143.752, l: "B", a: 1},
{o: 143.752, f: 158.08, l: "B", a: 0},
{o: 158.08, f: 167.428, l: "C", a: 1},
{o: 167.428, f: 179.056, l: "D", a: 0},
{o: 179.056, f: 186.344, l: "E", a: 1}],
[{o: 0.004, f: 8.94, l: "D", a: 0},
{o: 8.94, f: 26.196, l: "B", a: 1},
{o: 26.196, f: 39.008, l: "B", a: 0},
{o: 39.008, f: 45.432, l: "B", a: 1},
{o: 45.432, f: 57.44, l: "A", a: 0},
{o: 57.44, f: 64.392, l: "C", a: 1},
{o: 64.392, f: 72.132, l: "B", a: 0},
{o: 72.132, f: 81.868, l: "B", a: 1},
{o: 81.868, f: 100.572, l: "A", a: 0},
{o: 100.572, f: 110.968, l: "C", a: 1},
{o: 110.968, f: 127.744, l: "E", a: 0},
{o: 127.744, f: 143.752, l: "F", a: 1},
{o: 143.752, f: 158.08, l: "A", a: 0},
{o: 158.08, f: 167.428, l: "G", a: 1},
{o: 167.428, f: 179.056, l: "H", a: 0},
{o: 179.056, f: 186.344, l: "I", a: 1}],
[{o: 0.573, f: 8.28, l: "7", a: 0},
{o: 8.28, f: 16.093, l: "8", a: 1},
{o: 16.093, f: 45.173, l: "1", a: 0},
{o: 45.173, f: 62.067, l: "2", a: 1},
{o: 62.067, f: 73.013, l: "4", a: 0},
{o: 73.013, f: 83.08, l: "6", a: 1},
{o: 83.08, f: 109.227, l: "1", a: 0},
{o: 109.227, f: 123.64, l: "3", a: 1},
{o: 123.64, f: 137.24, l: "4", a: 0},
{o: 137.24, f: 147.28, l: "1", a: 1},
{o: 147.28, f: 164.813, l: "2", a: 0},
{o: 164.813, f: 176.093, l: "3", a: 1},
{o: 176.093, f: 186.253, l: "5", a: 0}],
[{o: 0, f: 35.76, l: "a", a: 0},
{o: 35.76, f: 75.245, l: "a", a: 1},
{o: 75.245, f: 84.185, l: "b", a: 0},
{o: 84.185, f: 96.85, l: "c", a: 1},
{o: 96.85, f: 132.61, l: "a", a: 0},
{o: 132.61, f: 185.505, l: "a", a: 1}],
[{o: 0, f: 38.441, l: "n1", a: 0},
{o: 38.441, f: 46.626, l: "A", a: 1},
{o: 46.626, f: 57.156, l: "n2", a: 0},
{o: 57.156, f: 65.271, l: "A", a: 1},
{o: 65.271, f: 94.47, l: "n3", a: 0},
{o: 94.47, f: 102.586, l: "A", a: 1},
{o: 102.586, f: 111.862, l: "B", a: 0},
{o: 111.862, f: 141.084, l: "n4", a: 1},
{o: 141.084, f: 150.5, l: "A", a: 0},
{o: 150.5, f: 158.697, l: "A", a: 1},
{o: 158.697, f: 168.031, l: "B", a: 0},
{o: 168.031, f: 186.178, l: "n6", a: 1}],
[{o: 0, f: 0.004, l: "G", a: 0},
{o: 0.004, f: 44.86, l: "E", a: 1},
{o: 44.86, f: 60.664, l: "F", a: 0},
{o: 60.664, f: 69.86, l: "B", a: 1},
{o: 69.86, f: 89.812, l: "E", a: 0},
{o: 89.812, f: 115.552, l: "F", a: 1},
{o: 115.552, f: 128.32, l: "B", a: 0},
{o: 128.32, f: 145.82, l: "E", a: 1},
{o: 145.82, f: 168.312, l: "F", a: 0},
{o: 168.312, f: 186.08, l: "C", a: 1},
{o: 186.08, f: 186.344, l: "B", a: 0},
{o: 186.344, f: 186.387, l: "G", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000187.ogg";

var artist = "Nobody Drives My Car";

var track = "Halloween Have You Ever Seen Me";
