var data = [
[{o: 0.245, f: 12.942, l: "N", a: 0},
{o: 12.942, f: 25.518, l: "A", a: 1},
{o: 25.518, f: 38.063, l: "B", a: 0},
{o: 38.063, f: 50.763, l: "A", a: 1},
{o: 50.763, f: 63.128, l: "B", a: 0},
{o: 63.128, f: 75.326, l: "B", a: 1},
{o: 75.326, f: 100.018, l: "A'", a: 0},
{o: 100.018, f: 112.147, l: "B", a: 1},
{o: 112.147, f: 124.322, l: "B", a: 0},
{o: 124.322, f: 136.651, l: "A''", a: 1},
{o: 136.651, f: 157.058, l: "B", a: 0}],
[{o: 0.196, f: 7.008, l: "E", a: 0},
{o: 7.008, f: 15.66, l: "E", a: 1},
{o: 15.66, f: 24.34, l: "E", a: 0},
{o: 24.34, f: 31.036, l: "E", a: 1},
{o: 31.036, f: 37.248, l: "E", a: 0},
{o: 37.248, f: 44.776, l: "E", a: 1},
{o: 44.776, f: 53.072, l: "E", a: 0},
{o: 53.072, f: 59.288, l: "E", a: 1},
{o: 59.288, f: 63.092, l: "E", a: 0},
{o: 63.092, f: 67.88, l: "E", a: 1},
{o: 67.88, f: 72.588, l: "E", a: 0},
{o: 72.588, f: 75.28, l: "D", a: 1},
{o: 75.28, f: 83.024, l: "A", a: 0},
{o: 83.024, f: 90.732, l: "A", a: 1},
{o: 90.732, f: 98.448, l: "A", a: 0},
{o: 98.448, f: 107.136, l: "B", a: 1},
{o: 107.136, f: 111.336, l: "F", a: 0},
{o: 111.336, f: 115.172, l: "C", a: 1},
{o: 115.172, f: 124.712, l: "B", a: 0},
{o: 124.712, f: 135.112, l: "G", a: 1},
{o: 135.112, f: 143.504, l: "C", a: 0},
{o: 143.504, f: 149.984, l: "H", a: 1},
{o: 149.984, f: 155.744, l: "I", a: 0}],
[{o: 0.196, f: 7.008, l: "H", a: 0},
{o: 7.008, f: 15.66, l: "E", a: 1},
{o: 15.66, f: 24.34, l: "E", a: 0},
{o: 24.34, f: 31.036, l: "D", a: 1},
{o: 31.036, f: 37.248, l: "D", a: 0},
{o: 37.248, f: 44.776, l: "C", a: 1},
{o: 44.776, f: 53.072, l: "C", a: 0},
{o: 53.072, f: 59.288, l: "F", a: 1},
{o: 59.288, f: 63.092, l: "F", a: 0},
{o: 63.092, f: 67.88, l: "G", a: 1},
{o: 67.88, f: 72.588, l: "G", a: 0},
{o: 72.588, f: 75.28, l: "I", a: 1},
{o: 75.28, f: 83.024, l: "A", a: 0},
{o: 83.024, f: 90.732, l: "A", a: 1},
{o: 90.732, f: 98.448, l: "A", a: 0},
{o: 98.448, f: 107.136, l: "B", a: 1},
{o: 107.136, f: 111.336, l: "J", a: 0},
{o: 111.336, f: 115.172, l: "K", a: 1},
{o: 115.172, f: 124.712, l: "B", a: 0},
{o: 124.712, f: 135.112, l: "L", a: 1},
{o: 135.112, f: 143.504, l: "M", a: 0},
{o: 143.504, f: 149.984, l: "N", a: 1},
{o: 149.984, f: 155.744, l: "O", a: 0}],
[{o: 0.28, f: 12.347, l: "5", a: 0},
{o: 12.347, f: 24.96, l: "1", a: 1},
{o: 24.96, f: 37.493, l: "4", a: 0},
{o: 37.493, f: 49.76, l: "1", a: 1},
{o: 49.76, f: 61.747, l: "2", a: 0},
{o: 61.747, f: 77.027, l: "3", a: 1},
{o: 77.027, f: 99.427, l: "1", a: 0},
{o: 99.427, f: 111.147, l: "3", a: 1},
{o: 111.147, f: 122.96, l: "2", a: 0},
{o: 122.96, f: 132.227, l: "6", a: 1},
{o: 132.227, f: 145.933, l: "2", a: 0},
{o: 145.933, f: 154.36, l: "7", a: 1},
{o: 154.36, f: 156.947, l: "8", a: 0}],
[{o: 0, f: 10.43, l: "a", a: 0},
{o: 10.43, f: 24.585, l: "b", a: 1},
{o: 24.585, f: 35.76, l: "c", a: 0},
{o: 35.76, f: 48.425, l: "b", a: 1},
{o: 48.425, f: 114.73, l: "d", a: 0},
{o: 114.73, f: 128.14, l: "e", a: 1},
{o: 128.14, f: 143.04, l: "f", a: 0},
{o: 143.04, f: 156.45, l: "e", a: 1}],
[{o: 0, f: 12.156, l: "n1", a: 0},
{o: 12.156, f: 24.764, l: "A", a: 1},
{o: 24.764, f: 37.303, l: "n2", a: 0},
{o: 37.303, f: 49.946, l: "A", a: 1},
{o: 49.946, f: 156.828, l: "n3", a: 0}],
[{o: 0, f: 0.092, l: "H", a: 0},
{o: 0.092, f: 12.124, l: "B", a: 1},
{o: 12.124, f: 25.5, l: "C", a: 0},
{o: 25.5, f: 37.264, l: "E", a: 1},
{o: 37.264, f: 49.94, l: "C", a: 0},
{o: 49.94, f: 64.98, l: "B", a: 1},
{o: 64.98, f: 76.448, l: "D", a: 0},
{o: 76.448, f: 103.696, l: "G", a: 1},
{o: 103.696, f: 110.04, l: "D", a: 0},
{o: 110.04, f: 117.768, l: "F", a: 1},
{o: 117.768, f: 155.156, l: "A", a: 0},
{o: 155.156, f: 157.049, l: "H", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000396.ogg";

var artist = "Wes Montgomery";

var track = "Movin Wes Part II ";
