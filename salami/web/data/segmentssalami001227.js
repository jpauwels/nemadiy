var data = [
[{o: 12.082, f: 32.568, l: "D", a: 0},
{o: 32.568, f: 61.152, l: "A", a: 1},
{o: 61.152, f: 86.361, l: "B", a: 0},
{o: 86.361, f: 106.44, l: "D", a: 1},
{o: 106.44, f: 134.828, l: "A", a: 0},
{o: 134.828, f: 159.893, l: "B", a: 1},
{o: 159.893, f: 180.005, l: "D", a: 0},
{o: 180.005, f: 208.208, l: "A", a: 1},
{o: 208.208, f: 241.668, l: "B'", a: 0},
{o: 241.668, f: 268.046, l: "A", a: 1},
{o: 268.046, f: 336.3, l: "B''", a: 0}],
[{o: 0.152, f: 11.48, l: "E", a: 0},
{o: 11.48, f: 31.64, l: "F", a: 1},
{o: 31.64, f: 41.736, l: "B", a: 0},
{o: 41.736, f: 55.18, l: "B", a: 1},
{o: 55.18, f: 72.832, l: "B", a: 0},
{o: 72.832, f: 86.664, l: "B", a: 1},
{o: 86.664, f: 107.292, l: "B", a: 0},
{o: 107.292, f: 128.508, l: "B", a: 1},
{o: 128.508, f: 148.156, l: "B", a: 0},
{o: 148.156, f: 160.736, l: "A", a: 1},
{o: 160.736, f: 179.568, l: "A", a: 0},
{o: 179.568, f: 195.364, l: "A", a: 1},
{o: 195.364, f: 209.424, l: "A", a: 0},
{o: 209.424, f: 241.232, l: "A", a: 1},
{o: 241.232, f: 254.088, l: "G", a: 0},
{o: 254.088, f: 270.084, l: "C", a: 1},
{o: 270.084, f: 284.308, l: "D", a: 0},
{o: 284.308, f: 307.888, l: "C", a: 1},
{o: 307.888, f: 320.124, l: "D", a: 0},
{o: 320.124, f: 336.132, l: "H", a: 1}],
[{o: 0.152, f: 11.48, l: "E", a: 0},
{o: 11.48, f: 31.64, l: "F", a: 1},
{o: 31.64, f: 41.736, l: "B", a: 0},
{o: 41.736, f: 55.18, l: "B", a: 1},
{o: 55.18, f: 72.832, l: "C", a: 0},
{o: 72.832, f: 86.664, l: "C", a: 1},
{o: 86.664, f: 107.292, l: "C", a: 0},
{o: 107.292, f: 128.508, l: "C", a: 1},
{o: 128.508, f: 148.156, l: "C", a: 0},
{o: 148.156, f: 160.736, l: "A", a: 1},
{o: 160.736, f: 179.568, l: "G", a: 0},
{o: 179.568, f: 195.364, l: "D", a: 1},
{o: 195.364, f: 209.424, l: "D", a: 0},
{o: 209.424, f: 241.232, l: "A", a: 1},
{o: 241.232, f: 254.088, l: "H", a: 0},
{o: 254.088, f: 270.084, l: "I", a: 1},
{o: 270.084, f: 284.308, l: "J", a: 0},
{o: 284.308, f: 307.888, l: "K", a: 1},
{o: 307.888, f: 320.124, l: "L", a: 0},
{o: 320.124, f: 336.132, l: "M", a: 1}],
[{o: 0.36, f: 6.067, l: "8", a: 0},
{o: 6.067, f: 12.573, l: "7", a: 1},
{o: 12.573, f: 24.307, l: "1", a: 0},
{o: 24.307, f: 31.053, l: "3", a: 1},
{o: 31.053, f: 44.48, l: "2", a: 0},
{o: 44.48, f: 48.68, l: "1", a: 1},
{o: 48.68, f: 54.573, l: "2", a: 0},
{o: 54.573, f: 98.68, l: "1", a: 1},
{o: 98.68, f: 105.413, l: "3", a: 0},
{o: 105.413, f: 115, l: "2", a: 1},
{o: 115, f: 173.093, l: "1", a: 0},
{o: 173.093, f: 179.373, l: "3", a: 1},
{o: 179.373, f: 191.427, l: "2", a: 0},
{o: 191.427, f: 254.267, l: "1", a: 1},
{o: 254.267, f: 304.44, l: "4", a: 0},
{o: 304.44, f: 320.027, l: "6", a: 1},
{o: 320.027, f: 336.12, l: "5", a: 0}],
[{o: 0, f: 78.97, l: "a", a: 0},
{o: 78.97, f: 159.43, l: "a", a: 1},
{o: 159.43, f: 226.48, l: "a", a: 0},
{o: 226.48, f: 312.155, l: "a", a: 1},
{o: 312.155, f: 335.995, l: "b", a: 0}],
[{o: 0, f: 16.591, l: "n1", a: 0},
{o: 16.591, f: 38.406, l: "B", a: 1},
{o: 38.406, f: 61.997, l: "A", a: 0},
{o: 61.997, f: 67.013, l: "n2", a: 1},
{o: 67.013, f: 90.5, l: "A", a: 0},
{o: 90.5, f: 112.315, l: "B", a: 1},
{o: 112.315, f: 135.697, l: "A", a: 0},
{o: 135.697, f: 140.713, l: "n3", a: 1},
{o: 140.713, f: 164.119, l: "A", a: 0},
{o: 164.119, f: 185.829, l: "B", a: 1},
{o: 185.829, f: 209.038, l: "A", a: 0},
{o: 209.038, f: 214.03, l: "n4", a: 1},
{o: 214.03, f: 237.494, l: "A", a: 0},
{o: 237.494, f: 256.987, l: "n5", a: 1},
{o: 256.987, f: 270.129, l: "C", a: 0},
{o: 270.129, f: 281.519, l: "C", a: 1},
{o: 281.519, f: 335.9, l: "n7", a: 0}],
[{o: 0, f: 0.152, l: "F", a: 0},
{o: 0.152, f: 11.48, l: "C", a: 1},
{o: 11.48, f: 45.512, l: "E", a: 0},
{o: 45.512, f: 87.928, l: "B", a: 1},
{o: 87.928, f: 119.772, l: "E", a: 0},
{o: 119.772, f: 161.56, l: "B", a: 1},
{o: 161.56, f: 192.868, l: "E", a: 0},
{o: 192.868, f: 314.772, l: "B", a: 1},
{o: 314.772, f: 336.132, l: "C", a: 0},
{o: 336.132, f: 336.225, l: "F", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001227.ogg";
