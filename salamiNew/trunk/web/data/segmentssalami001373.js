var data = [
[{o: 0.223, f: 53.162, l: "A", a: 0},
{o: 53.162, f: 92.82, l: "B", a: 1},
{o: 92.82, f: 119.208, l: "C", a: 0},
{o: 119.208, f: 172.036, l: "B", a: 1},
{o: 172.036, f: 224.811, l: "D", a: 0},
{o: 224.811, f: 277.775, l: "B", a: 1},
{o: 277.775, f: 314.269, l: "D", a: 0}],
[{o: 0.036, f: 13.156, l: "D", a: 0},
{o: 13.156, f: 25.94, l: "E", a: 1},
{o: 25.94, f: 39.536, l: "F", a: 0},
{o: 39.536, f: 52.344, l: "A", a: 1},
{o: 52.344, f: 67.592, l: "C", a: 0},
{o: 67.592, f: 78.324, l: "C", a: 1},
{o: 78.324, f: 93.556, l: "C", a: 0},
{o: 93.556, f: 105.956, l: "A", a: 1},
{o: 105.956, f: 118.736, l: "A", a: 0},
{o: 118.736, f: 133.56, l: "C", a: 1},
{o: 133.56, f: 144.728, l: "C", a: 0},
{o: 144.728, f: 155.032, l: "C", a: 1},
{o: 155.032, f: 169.492, l: "C", a: 0},
{o: 169.492, f: 185.132, l: "B", a: 1},
{o: 185.132, f: 199.152, l: "G", a: 0},
{o: 199.152, f: 211.54, l: "A", a: 1},
{o: 211.54, f: 224.3, l: "A", a: 0},
{o: 224.3, f: 237.516, l: "C", a: 1},
{o: 237.516, f: 249.88, l: "C", a: 0},
{o: 249.88, f: 263.516, l: "C", a: 1},
{o: 263.516, f: 275.868, l: "C", a: 0},
{o: 275.868, f: 290.3, l: "B", a: 1},
{o: 290.3, f: 306.924, l: "C", a: 0}],
[{o: 0.036, f: 13.156, l: "D", a: 0},
{o: 13.156, f: 25.94, l: "E", a: 1},
{o: 25.94, f: 39.536, l: "F", a: 0},
{o: 39.536, f: 52.344, l: "A", a: 1},
{o: 52.344, f: 67.592, l: "C", a: 0},
{o: 67.592, f: 78.324, l: "B", a: 1},
{o: 78.324, f: 93.556, l: "C", a: 0},
{o: 93.556, f: 105.956, l: "A", a: 1},
{o: 105.956, f: 118.736, l: "A", a: 0},
{o: 118.736, f: 133.56, l: "C", a: 1},
{o: 133.56, f: 144.728, l: "B", a: 0},
{o: 144.728, f: 155.032, l: "C", a: 1},
{o: 155.032, f: 169.492, l: "C", a: 0},
{o: 169.492, f: 185.132, l: "G", a: 1},
{o: 185.132, f: 199.152, l: "H", a: 0},
{o: 199.152, f: 211.54, l: "A", a: 1},
{o: 211.54, f: 224.3, l: "A", a: 0},
{o: 224.3, f: 237.516, l: "I", a: 1},
{o: 237.516, f: 249.88, l: "J", a: 0},
{o: 249.88, f: 263.516, l: "K", a: 1},
{o: 263.516, f: 275.868, l: "C", a: 0},
{o: 275.868, f: 290.3, l: "L", a: 1},
{o: 290.3, f: 306.924, l: "M", a: 0}],
[{o: 0.413, f: 24.507, l: "5", a: 0},
{o: 24.507, f: 38.933, l: "6", a: 1},
{o: 38.933, f: 69.453, l: "1", a: 0},
{o: 69.453, f: 76.053, l: "2", a: 1},
{o: 76.053, f: 92.533, l: "3", a: 0},
{o: 92.533, f: 138.333, l: "1", a: 1},
{o: 138.333, f: 143.28, l: "2", a: 0},
{o: 143.28, f: 159.773, l: "3", a: 1},
{o: 159.773, f: 170.933, l: "2", a: 0},
{o: 170.933, f: 186.173, l: "4", a: 1},
{o: 186.173, f: 194.853, l: "1", a: 0},
{o: 194.853, f: 200.6, l: "4", a: 1},
{o: 200.6, f: 229.893, l: "1", a: 0},
{o: 229.893, f: 235.68, l: "2", a: 1},
{o: 235.68, f: 260.427, l: "1", a: 0},
{o: 260.427, f: 264.547, l: "3", a: 1},
{o: 264.547, f: 277.733, l: "2", a: 0},
{o: 277.733, f: 289.28, l: "4", a: 1},
{o: 289.28, f: 299.987, l: "1", a: 0},
{o: 299.987, f: 304.96, l: "8", a: 1},
{o: 304.96, f: 313.267, l: "7", a: 0}],
[{o: 0, f: 26.075, l: "a", a: 0},
{o: 26.075, f: 92.38, l: "b", a: 1},
{o: 92.38, f: 156.45, l: "b", a: 0},
{o: 156.45, f: 198.17, l: "c", a: 1},
{o: 198.17, f: 262.24, l: "b", a: 0},
{o: 262.24, f: 313.645, l: "c", a: 1}],
[{o: 0, f: 27.202, l: "n1", a: 0},
{o: 27.202, f: 79.993, l: "A", a: 1},
{o: 79.993, f: 93.182, l: "n2", a: 0},
{o: 93.182, f: 145.995, l: "A", a: 1},
{o: 145.995, f: 198.774, l: "B", a: 0},
{o: 198.774, f: 251.588, l: "A", a: 1},
{o: 251.588, f: 304.367, l: "B", a: 0},
{o: 304.367, f: 313.98, l: "n3", a: 1}],
[{o: 0, f: 0.016, l: "G", a: 0},
{o: 0.016, f: 24.908, l: "B", a: 1},
{o: 24.908, f: 79.328, l: "A", a: 0},
{o: 79.328, f: 91.32, l: "D", a: 1},
{o: 91.32, f: 144.328, l: "A", a: 0},
{o: 144.328, f: 158.52, l: "D", a: 1},
{o: 158.52, f: 165.984, l: "F", a: 0},
{o: 165.984, f: 184.116, l: "E", a: 1},
{o: 184.116, f: 200.384, l: "F", a: 0},
{o: 200.384, f: 250.924, l: "A", a: 1},
{o: 250.924, f: 275.464, l: "D", a: 0},
{o: 275.464, f: 285.768, l: "E", a: 1},
{o: 285.768, f: 304.372, l: "A", a: 0},
{o: 304.372, f: 308.256, l: "B", a: 1},
{o: 308.256, f: 314.202, l: "G", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001373.ogg";

var artist = "The Cure";

var track = "How Beautiful You Are";