var data = [
[{o: 0.424, f: 14.876, l: "A", a: 0},
{o: 14.876, f: 25.304, l: "B", a: 1},
{o: 25.304, f: 46.163, l: "C", a: 0},
{o: 46.163, f: 67.045, l: "D", a: 1},
{o: 67.045, f: 85.335, l: "C", a: 0},
{o: 85.335, f: 95.72, l: "B", a: 1},
{o: 95.72, f: 106.176, l: "E", a: 0},
{o: 106.176, f: 127.024, l: "C'", a: 1},
{o: 127.024, f: 147.872, l: "F", a: 0},
{o: 147.872, f: 158.361, l: "E", a: 1},
{o: 158.361, f: 192.303, l: "F'", a: 0},
{o: 192.303, f: 202.712, l: "B", a: 1},
{o: 202.712, f: 223.575, l: "C", a: 0},
{o: 223.575, f: 247.073, l: "D", a: 1},
{o: 247.073, f: 278.079, l: "B'", a: 0}],
[{o: 0.168, f: 16.736, l: "B", a: 0},
{o: 16.736, f: 25.556, l: "A", a: 1},
{o: 25.556, f: 43.808, l: "B", a: 0},
{o: 43.808, f: 67.808, l: "A", a: 1},
{o: 67.808, f: 84.9, l: "A", a: 0},
{o: 84.9, f: 97.68, l: "A", a: 1},
{o: 97.68, f: 104.964, l: "A", a: 0},
{o: 104.964, f: 126.98, l: "A", a: 1},
{o: 126.98, f: 147.708, l: "A", a: 0},
{o: 147.708, f: 160.408, l: "A", a: 1},
{o: 160.408, f: 174.62, l: "A", a: 0},
{o: 174.62, f: 193.684, l: "C", a: 1},
{o: 193.684, f: 202.988, l: "A", a: 0},
{o: 202.988, f: 224.676, l: "A", a: 1},
{o: 224.676, f: 238.368, l: "D", a: 0},
{o: 238.368, f: 257.948, l: "A", a: 1},
{o: 257.948, f: 274.588, l: "E", a: 0}],
[{o: 0.168, f: 16.736, l: "C", a: 0},
{o: 16.736, f: 25.556, l: "A", a: 1},
{o: 25.556, f: 43.808, l: "D", a: 0},
{o: 43.808, f: 67.808, l: "E", a: 1},
{o: 67.808, f: 84.9, l: "A", a: 0},
{o: 84.9, f: 97.68, l: "A", a: 1},
{o: 97.68, f: 104.964, l: "B", a: 0},
{o: 104.964, f: 126.98, l: "F", a: 1},
{o: 126.98, f: 147.708, l: "G", a: 0},
{o: 147.708, f: 160.408, l: "B", a: 1},
{o: 160.408, f: 174.62, l: "B", a: 0},
{o: 174.62, f: 193.684, l: "H", a: 1},
{o: 193.684, f: 202.988, l: "A", a: 0},
{o: 202.988, f: 224.676, l: "A", a: 1},
{o: 224.676, f: 238.368, l: "I", a: 0},
{o: 238.368, f: 257.948, l: "A", a: 1},
{o: 257.948, f: 274.588, l: "J", a: 0}],
[{o: 0.44, f: 3.547, l: "8", a: 0},
{o: 3.547, f: 14.627, l: "5", a: 1},
{o: 14.627, f: 24.893, l: "1", a: 0},
{o: 24.893, f: 42.2, l: "3", a: 1},
{o: 42.2, f: 46.28, l: "4", a: 0},
{o: 46.28, f: 71.373, l: "3", a: 1},
{o: 71.373, f: 77.24, l: "1", a: 0},
{o: 77.24, f: 83.107, l: "3", a: 1},
{o: 83.107, f: 106.293, l: "1", a: 0},
{o: 106.293, f: 117.88, l: "3", a: 1},
{o: 117.88, f: 121.773, l: "2", a: 0},
{o: 121.773, f: 131.72, l: "4", a: 1},
{o: 131.72, f: 146.067, l: "2", a: 0},
{o: 146.067, f: 153.267, l: "1", a: 1},
{o: 153.267, f: 160.093, l: "4", a: 0},
{o: 160.093, f: 164.013, l: "2", a: 1},
{o: 164.013, f: 167.933, l: "6", a: 0},
{o: 167.933, f: 176.08, l: "2", a: 1},
{o: 176.08, f: 183.587, l: "1", a: 0},
{o: 183.587, f: 187.827, l: "2", a: 1},
{o: 187.827, f: 219.293, l: "1", a: 0},
{o: 219.293, f: 224.04, l: "4", a: 1},
{o: 224.04, f: 232.507, l: "2", a: 0},
{o: 232.507, f: 236.733, l: "3", a: 1},
{o: 236.733, f: 240.973, l: "2", a: 0},
{o: 240.973, f: 274.653, l: "1", a: 1},
{o: 274.653, f: 277.907, l: "7", a: 0}],
[{o: 0, f: 17.135, l: "a", a: 0},
{o: 17.135, f: 43.21, l: "b", a: 1},
{o: 43.21, f: 67.05, l: "b", a: 0},
{o: 67.05, f: 96.85, l: "c", a: 1},
{o: 96.85, f: 122.925, l: "b", a: 0},
{o: 122.925, f: 154.96, l: "b", a: 1},
{o: 154.96, f: 180.29, l: "d", a: 0},
{o: 180.29, f: 195.19, l: "a", a: 1},
{o: 195.19, f: 221.265, l: "b", a: 0},
{o: 221.265, f: 244.36, l: "b", a: 1},
{o: 244.36, f: 277.885, l: "c", a: 0}],
[{o: 0, f: 4.563, l: "n1", a: 0},
{o: 4.563, f: 14.025, l: "F", a: 1},
{o: 14.025, f: 55.914, l: "A", a: 0},
{o: 55.914, f: 67.349, l: "n3", a: 1},
{o: 67.349, f: 77.752, l: "D", a: 0},
{o: 77.752, f: 86.901, l: "D", a: 1},
{o: 86.901, f: 96.038, l: "B", a: 0},
{o: 96.038, f: 111.502, l: "n5", a: 1},
{o: 111.502, f: 120.651, l: "F", a: 0},
{o: 120.651, f: 132.725, l: "n6", a: 1},
{o: 132.725, f: 144.451, l: "C", a: 0},
{o: 144.451, f: 154.273, l: "n7", a: 1},
{o: 154.273, f: 164.699, l: "E", a: 0},
{o: 164.699, f: 173.825, l: "E", a: 1},
{o: 173.825, f: 179.688, l: "n9", a: 0},
{o: 179.688, f: 191.437, l: "C", a: 1},
{o: 191.437, f: 233.326, l: "A", a: 0},
{o: 233.326, f: 248.674, l: "n10", a: 1},
{o: 248.674, f: 257.8, l: "B", a: 0},
{o: 257.8, f: 264.324, l: "n11", a: 1},
{o: 264.324, f: 273.461, l: "B", a: 0},
{o: 273.461, f: 277.943, l: "n12", a: 1}],
[{o: 0, f: 0.332, l: "H", a: 0},
{o: 0.332, f: 5.988, l: "F", a: 1},
{o: 5.988, f: 29.796, l: "D", a: 0},
{o: 29.796, f: 48.388, l: "G", a: 1},
{o: 48.388, f: 56.548, l: "D", a: 0},
{o: 56.548, f: 74.148, l: "C", a: 1},
{o: 74.148, f: 116.544, l: "D", a: 0},
{o: 116.544, f: 124.38, l: "G", a: 1},
{o: 124.38, f: 136.288, l: "E", a: 0},
{o: 136.288, f: 156.668, l: "D", a: 1},
{o: 156.668, f: 166.132, l: "E", a: 0},
{o: 166.132, f: 172.808, l: "D", a: 1},
{o: 172.808, f: 178.044, l: "E", a: 0},
{o: 178.044, f: 216.016, l: "D", a: 1},
{o: 216.016, f: 225.012, l: "E", a: 0},
{o: 225.012, f: 274.596, l: "D", a: 1},
{o: 274.596, f: 278.074, l: "H", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000368.ogg";

var artist = "Compilations";

var track = "Nuevo Sol";
