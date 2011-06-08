var data = [
[{o: 0.209, f: 14.538, l: "N", a: 0},
{o: 14.538, f: 54.845, l: "A", a: 1},
{o: 54.845, f: 94.874, l: "A", a: 0},
{o: 94.874, f: 147.554, l: "B", a: 1},
{o: 147.554, f: 187.122, l: "A", a: 0},
{o: 187.122, f: 239.514, l: "B", a: 1},
{o: 239.514, f: 295.726, l: "A", a: 0}],
[{o: 0.216, f: 12.024, l: "A", a: 0},
{o: 12.024, f: 21.216, l: "E", a: 1},
{o: 21.216, f: 28.784, l: "F", a: 0},
{o: 28.784, f: 41.348, l: "C", a: 1},
{o: 41.348, f: 54.74, l: "C", a: 0},
{o: 54.74, f: 65.648, l: "C", a: 1},
{o: 65.648, f: 74.832, l: "C", a: 0},
{o: 74.832, f: 81.532, l: "C", a: 1},
{o: 81.532, f: 95.636, l: "C", a: 0},
{o: 95.636, f: 113.048, l: "C", a: 1},
{o: 113.048, f: 127.848, l: "D", a: 0},
{o: 127.848, f: 139.36, l: "C", a: 1},
{o: 139.36, f: 159.584, l: "B", a: 0},
{o: 159.584, f: 167.068, l: "B", a: 1},
{o: 167.068, f: 187.64, l: "B", a: 0},
{o: 187.64, f: 201.76, l: "C", a: 1},
{o: 201.76, f: 213.312, l: "G", a: 0},
{o: 213.312, f: 221.532, l: "D", a: 1},
{o: 221.532, f: 231.344, l: "C", a: 0},
{o: 231.344, f: 239.448, l: "H", a: 1},
{o: 239.448, f: 252.58, l: "I", a: 0},
{o: 252.58, f: 265.704, l: "B", a: 1},
{o: 265.704, f: 279.832, l: "B", a: 0},
{o: 279.832, f: 288.94, l: "J", a: 1}],
[{o: 0.216, f: 12.024, l: "F", a: 0},
{o: 12.024, f: 21.216, l: "G", a: 1},
{o: 21.216, f: 28.784, l: "H", a: 0},
{o: 28.784, f: 41.348, l: "C", a: 1},
{o: 41.348, f: 54.74, l: "A", a: 0},
{o: 54.74, f: 65.648, l: "C", a: 1},
{o: 65.648, f: 74.832, l: "I", a: 0},
{o: 74.832, f: 81.532, l: "J", a: 1},
{o: 81.532, f: 95.636, l: "A", a: 0},
{o: 95.636, f: 113.048, l: "E", a: 1},
{o: 113.048, f: 127.848, l: "D", a: 0},
{o: 127.848, f: 139.36, l: "A", a: 1},
{o: 139.36, f: 159.584, l: "B", a: 0},
{o: 159.584, f: 167.068, l: "B", a: 1},
{o: 167.068, f: 187.64, l: "B", a: 0},
{o: 187.64, f: 201.76, l: "E", a: 1},
{o: 201.76, f: 213.312, l: "K", a: 0},
{o: 213.312, f: 221.532, l: "D", a: 1},
{o: 221.532, f: 231.344, l: "A", a: 0},
{o: 231.344, f: 239.448, l: "L", a: 1},
{o: 239.448, f: 252.58, l: "M", a: 0},
{o: 252.58, f: 265.704, l: "N", a: 1},
{o: 265.704, f: 279.832, l: "O", a: 0},
{o: 279.832, f: 288.94, l: "P", a: 1}],
[{o: 1.24, f: 12.453, l: "8", a: 0},
{o: 12.453, f: 40.973, l: "5", a: 1},
{o: 40.973, f: 58.587, l: "1", a: 0},
{o: 58.587, f: 79.48, l: "6", a: 1},
{o: 79.48, f: 93.573, l: "1", a: 0},
{o: 93.573, f: 115.933, l: "2", a: 1},
{o: 115.933, f: 147.093, l: "1", a: 0},
{o: 147.093, f: 186.653, l: "4", a: 1},
{o: 186.653, f: 210.44, l: "2", a: 0},
{o: 210.44, f: 238.213, l: "1", a: 1},
{o: 238.213, f: 284.427, l: "3", a: 0},
{o: 284.427, f: 295.56, l: "7", a: 1}],
[{o: 0, f: 27.565, l: "a", a: 0},
{o: 27.565, f: 52.15, l: "b", a: 1},
{o: 52.15, f: 70.775, l: "c", a: 0},
{o: 70.775, f: 163.155, l: "d", a: 1},
{o: 163.155, f: 253.3, l: "d", a: 0},
{o: 253.3, f: 277.14, l: "b", a: 1},
{o: 277.14, f: 295.02, l: "e", a: 0}],
[{o: 0, f: 1.788, l: "n1", a: 0},
{o: 1.788, f: 15.07, l: "B", a: 1},
{o: 15.07, f: 28.526, l: "A", a: 0},
{o: 28.526, f: 41.947, l: "A", a: 1},
{o: 41.947, f: 55.333, l: "B", a: 0},
{o: 55.333, f: 68.731, l: "A", a: 1},
{o: 68.731, f: 82.117, l: "A", a: 0},
{o: 82.117, f: 94.285, l: "B", a: 1},
{o: 94.285, f: 104.501, l: "n4", a: 0},
{o: 104.501, f: 115.566, l: "C", a: 1},
{o: 115.566, f: 128.139, l: "n5", a: 0},
{o: 128.139, f: 149.432, l: "D", a: 1},
{o: 149.432, f: 161.321, l: "E", a: 0},
{o: 161.321, f: 174.498, l: "A", a: 1},
{o: 174.498, f: 186.816, l: "B", a: 0},
{o: 186.816, f: 199.97, l: "C", a: 1},
{o: 199.97, f: 210.895, l: "C", a: 0},
{o: 210.895, f: 220.172, l: "n10", a: 1},
{o: 220.172, f: 240.013, l: "D", a: 0},
{o: 240.013, f: 254.549, l: "A", a: 1},
{o: 254.549, f: 265.451, l: "E", a: 0},
{o: 265.451, f: 295.404, l: "n13", a: 1}],
[{o: 0, f: 0.004, l: "G", a: 0},
{o: 0.004, f: 272.544, l: "D", a: 1},
{o: 272.544, f: 290.024, l: "F", a: 0},
{o: 290.024, f: 295.707, l: "G", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001641.ogg";

var artist = "B B King";

var track = "Dangerous Mood With Joe Cocker ";
