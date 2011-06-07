var data = [
[{o: 3.437, f: 73.173, l: "N", a: 0},
{o: 73.173, f: 103.093, l: "A", a: 1},
{o: 103.093, f: 148.096, l: "B", a: 0},
{o: 148.096, f: 220.687, l: "C", a: 1}],
[{o: 0.052, f: 9.044, l: "H", a: 0},
{o: 9.044, f: 17.264, l: "H", a: 1},
{o: 17.264, f: 29.076, l: "H", a: 0},
{o: 29.076, f: 37.288, l: "G", a: 1},
{o: 37.288, f: 46.732, l: "H", a: 0},
{o: 46.732, f: 55.096, l: "H", a: 1},
{o: 55.096, f: 66.632, l: "H", a: 0},
{o: 66.632, f: 79.016, l: "H", a: 1},
{o: 79.016, f: 91.172, l: "H", a: 0},
{o: 91.172, f: 103.296, l: "H", a: 1},
{o: 103.296, f: 113.36, l: "G", a: 0},
{o: 113.36, f: 128.784, l: "H", a: 1},
{o: 128.784, f: 138.416, l: "H", a: 0},
{o: 138.416, f: 148.58, l: "H", a: 1},
{o: 148.58, f: 158.604, l: "A", a: 0},
{o: 158.604, f: 166.624, l: "A", a: 1},
{o: 166.624, f: 183.048, l: "A", a: 0},
{o: 183.048, f: 196.904, l: "H", a: 1},
{o: 196.904, f: 208.264, l: "H", a: 0},
{o: 208.264, f: 219.248, l: "H", a: 1}],
[{o: 0.052, f: 9.044, l: "H", a: 0},
{o: 9.044, f: 17.264, l: "E", a: 1},
{o: 17.264, f: 29.076, l: "E", a: 0},
{o: 29.076, f: 37.288, l: "I", a: 1},
{o: 37.288, f: 46.732, l: "D", a: 0},
{o: 46.732, f: 55.096, l: "D", a: 1},
{o: 55.096, f: 66.632, l: "F", a: 0},
{o: 66.632, f: 79.016, l: "B", a: 1},
{o: 79.016, f: 91.172, l: "G", a: 0},
{o: 91.172, f: 103.296, l: "B", a: 1},
{o: 103.296, f: 113.36, l: "J", a: 0},
{o: 113.36, f: 128.784, l: "C", a: 1},
{o: 128.784, f: 138.416, l: "C", a: 0},
{o: 138.416, f: 148.58, l: "F", a: 1},
{o: 148.58, f: 158.604, l: "A", a: 0},
{o: 158.604, f: 166.624, l: "A", a: 1},
{o: 166.624, f: 183.048, l: "A", a: 0},
{o: 183.048, f: 196.904, l: "B", a: 1},
{o: 196.904, f: 208.264, l: "G", a: 0},
{o: 208.264, f: 219.248, l: "H", a: 1}],
[{o: 0.44, f: 2.973, l: "4", a: 0},
{o: 2.973, f: 7.72, l: "8", a: 1},
{o: 7.72, f: 30.773, l: "2", a: 0},
{o: 30.773, f: 55.907, l: "3", a: 1},
{o: 55.907, f: 60.4, l: "7", a: 0},
{o: 60.4, f: 69.08, l: "5", a: 1},
{o: 69.08, f: 102.333, l: "1", a: 0},
{o: 102.333, f: 112.187, l: "3", a: 1},
{o: 112.187, f: 145.467, l: "2", a: 0},
{o: 145.467, f: 209.32, l: "1", a: 1},
{o: 209.32, f: 216.28, l: "6", a: 0},
{o: 216.28, f: 220.12, l: "4", a: 1}],
[{o: 0, f: 56.62, l: "a", a: 0},
{o: 56.62, f: 79.715, l: "b", a: 1},
{o: 79.715, f: 101.32, l: "b", a: 0},
{o: 101.32, f: 128.14, l: "c", a: 1},
{o: 128.14, f: 153.47, l: "c", a: 0},
{o: 153.47, f: 180.29, l: "c", a: 1},
{o: 180.29, f: 208.6, l: "c", a: 0},
{o: 208.6, f: 220.52, l: "d", a: 1}],
[{o: 0, f: 118.248, l: "n1", a: 0},
{o: 118.248, f: 131.448, l: "A", a: 1},
{o: 131.448, f: 153.461, l: "n2", a: 0},
{o: 153.461, f: 165.999, l: "A", a: 1},
{o: 165.999, f: 190.845, l: "n3", a: 0},
{o: 190.845, f: 203.5, l: "A", a: 1},
{o: 203.5, f: 220.729, l: "n4", a: 0}],
[{o: 0, f: 0.008, l: "J", a: 0},
{o: 0.008, f: 14.78, l: "F", a: 1},
{o: 14.78, f: 31.144, l: "E", a: 0},
{o: 31.144, f: 60.048, l: "H", a: 1},
{o: 60.048, f: 113.244, l: "I", a: 0},
{o: 113.244, f: 130.216, l: "A", a: 1},
{o: 130.216, f: 209.344, l: "H", a: 0},
{o: 209.344, f: 219.248, l: "B", a: 1},
{o: 219.248, f: 220.684, l: "J", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000843.ogg";
