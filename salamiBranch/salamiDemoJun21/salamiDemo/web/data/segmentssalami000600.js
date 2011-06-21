var data = [
[{o: 1.78, f: 11.414, l: "I", a: 0},
{o: 11.414, f: 29.601, l: "A", a: 1},
{o: 29.601, f: 47.868, l: "A", a: 0},
{o: 47.868, f: 63.589, l: "D", a: 1},
{o: 63.589, f: 82.583, l: "A", a: 0},
{o: 82.583, f: 105.767, l: "D", a: 1},
{o: 105.767, f: 141.385, l: "D", a: 0},
{o: 141.385, f: 169.58, l: "D", a: 1},
{o: 169.58, f: 199.654, l: "D", a: 0}],
[{o: 0.2, f: 9.712, l: "B", a: 0},
{o: 9.712, f: 21.828, l: "A", a: 1},
{o: 21.828, f: 39.116, l: "A", a: 0},
{o: 39.116, f: 49.84, l: "A", a: 1},
{o: 49.84, f: 61.048, l: "A", a: 0},
{o: 61.048, f: 74.628, l: "A", a: 1},
{o: 74.628, f: 87.048, l: "A", a: 0},
{o: 87.048, f: 95.456, l: "A", a: 1},
{o: 95.456, f: 104.796, l: "B", a: 0},
{o: 104.796, f: 115.648, l: "A", a: 1},
{o: 115.648, f: 130.352, l: "A", a: 0},
{o: 130.352, f: 138.764, l: "B", a: 1},
{o: 138.764, f: 151.048, l: "A", a: 0},
{o: 151.048, f: 162.528, l: "A", a: 1},
{o: 162.528, f: 168.276, l: "C", a: 0},
{o: 168.276, f: 179.596, l: "A", a: 1},
{o: 179.596, f: 196.86, l: "A", a: 0}],
[{o: 0.2, f: 9.712, l: "B", a: 0},
{o: 9.712, f: 21.828, l: "A", a: 1},
{o: 21.828, f: 39.116, l: "A", a: 0},
{o: 39.116, f: 49.84, l: "C", a: 1},
{o: 49.84, f: 61.048, l: "A", a: 0},
{o: 61.048, f: 74.628, l: "A", a: 1},
{o: 74.628, f: 87.048, l: "A", a: 0},
{o: 87.048, f: 95.456, l: "F", a: 1},
{o: 95.456, f: 104.796, l: "G", a: 0},
{o: 104.796, f: 115.648, l: "A", a: 1},
{o: 115.648, f: 130.352, l: "A", a: 0},
{o: 130.352, f: 138.764, l: "H", a: 1},
{o: 138.764, f: 151.048, l: "E", a: 0},
{o: 151.048, f: 162.528, l: "D", a: 1},
{o: 162.528, f: 168.276, l: "I", a: 0},
{o: 168.276, f: 179.596, l: "E", a: 1},
{o: 179.596, f: 196.86, l: "D", a: 0}],
[{o: 0.76, f: 10.387, l: "5", a: 0},
{o: 10.387, f: 44.573, l: "1", a: 1},
{o: 44.573, f: 52.267, l: "3", a: 0},
{o: 52.267, f: 81.4, l: "1", a: 1},
{o: 81.4, f: 93.613, l: "3", a: 0},
{o: 93.613, f: 104.827, l: "2", a: 1},
{o: 104.827, f: 117.8, l: "3", a: 0},
{o: 117.8, f: 134.36, l: "2", a: 1},
{o: 134.36, f: 141.893, l: "8", a: 0},
{o: 141.893, f: 160.347, l: "4", a: 1},
{o: 160.347, f: 169.24, l: "7", a: 0},
{o: 169.24, f: 182.28, l: "4", a: 1},
{o: 182.28, f: 191.187, l: "2", a: 0},
{o: 191.187, f: 199.533, l: "6", a: 1}],
[{o: 0, f: 14.9, l: "a", a: 0},
{o: 14.9, f: 85.675, l: "b", a: 1},
{o: 85.675, f: 118.455, l: "c", a: 0},
{o: 118.455, f: 139.315, l: "a", a: 1},
{o: 139.315, f: 172.095, l: "c", a: 0},
{o: 172.095, f: 198.915, l: "a", a: 1}],
[{o: 0, f: 7.883, l: "n1", a: 0},
{o: 7.883, f: 19.365, l: "B", a: 1},
{o: 19.365, f: 69.068, l: "n2", a: 0},
{o: 69.068, f: 84.985, l: "B", a: 1},
{o: 84.985, f: 95.434, l: "A", a: 0},
{o: 95.434, f: 107.892, l: "n4", a: 1},
{o: 107.892, f: 119.978, l: "A", a: 0},
{o: 119.978, f: 125.736, l: "n5", a: 1},
{o: 125.736, f: 137.149, l: "B", a: 0},
{o: 137.149, f: 157.095, l: "n6", a: 1},
{o: 157.095, f: 167.613, l: "C", a: 0},
{o: 167.613, f: 173.5, l: "n7", a: 1},
{o: 173.5, f: 185.806, l: "A", a: 0},
{o: 185.806, f: 199.552, l: "C", a: 1}],
[{o: 0, f: 0.2, l: "E", a: 0},
{o: 0.2, f: 0.2, l: "B", a: 1},
{o: 0.2, f: 41.616, l: "A", a: 0},
{o: 41.616, f: 65.836, l: "B", a: 1},
{o: 65.836, f: 101.732, l: "C", a: 0},
{o: 101.732, f: 138.764, l: "B", a: 1},
{o: 138.764, f: 196.86, l: "D", a: 0},
{o: 196.86, f: 199.655, l: "E", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000600.ogg";

var artist = "Monty Python";

var track = "I m So Worried";
