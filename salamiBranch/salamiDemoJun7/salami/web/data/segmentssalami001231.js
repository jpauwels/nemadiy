var data = [
[{o: 0, f: 22.408, l: "A", a: 0},
{o: 22.408, f: 44.429, l: "C", a: 1},
{o: 44.429, f: 62.584, l: "D", a: 0},
{o: 62.584, f: 89.248, l: "E", a: 1},
{o: 89.248, f: 99.819, l: "B", a: 0},
{o: 99.819, f: 120.906, l: "G", a: 1},
{o: 120.906, f: 126.083, l: "B", a: 0},
{o: 126.083, f: 147.221, l: "C", a: 1},
{o: 147.221, f: 165.636, l: "D", a: 0},
{o: 165.636, f: 192.018, l: "E", a: 1},
{o: 192.018, f: 202.635, l: "B", a: 0},
{o: 202.635, f: 223.748, l: "F", a: 1},
{o: 223.748, f: 244.864, l: "G", a: 0},
{o: 244.864, f: 255.36, l: "B", a: 1},
{o: 255.36, f: 276.472, l: "F", a: 0},
{o: 276.472, f: 302.868, l: "E", a: 1},
{o: 302.868, f: 368.869, l: "G", a: 0}],
[{o: 0, f: 368.85, l: "A", a: 0}],
[{o: 0.04, f: 9.348, l: "E", a: 0},
{o: 9.348, f: 20.02, l: "G", a: 1},
{o: 20.02, f: 43.128, l: "A", a: 0},
{o: 43.128, f: 62.552, l: "C", a: 1},
{o: 62.552, f: 88.604, l: "A", a: 0},
{o: 88.604, f: 102.772, l: "C", a: 1},
{o: 102.772, f: 124.556, l: "C", a: 0},
{o: 124.556, f: 146.948, l: "C", a: 1},
{o: 146.948, f: 161.14, l: "C", a: 0},
{o: 161.14, f: 173.656, l: "A", a: 1},
{o: 173.656, f: 191.46, l: "A", a: 0},
{o: 191.46, f: 207.956, l: "C", a: 1},
{o: 207.956, f: 222.788, l: "B", a: 0},
{o: 222.788, f: 240.604, l: "F", a: 1},
{o: 240.604, f: 253.448, l: "F", a: 0},
{o: 253.448, f: 276.188, l: "B", a: 1},
{o: 276.188, f: 301.9, l: "D", a: 0},
{o: 301.9, f: 317.404, l: "D", a: 1},
{o: 317.404, f: 326.944, l: "H", a: 0},
{o: 326.944, f: 339.156, l: "I", a: 1},
{o: 339.156, f: 353.312, l: "J", a: 0},
{o: 353.312, f: 365.208, l: "K", a: 1}],
[{o: 0.627, f: 13.413, l: "6", a: 0},
{o: 13.413, f: 22.667, l: "8", a: 1},
{o: 22.667, f: 43, l: "2", a: 0},
{o: 43, f: 61.253, l: "4", a: 1},
{o: 61.253, f: 86.973, l: "1", a: 0},
{o: 86.973, f: 99.813, l: "3", a: 1},
{o: 99.813, f: 118.933, l: "1", a: 0},
{o: 118.933, f: 126.853, l: "3", a: 1},
{o: 126.853, f: 145.653, l: "2", a: 0},
{o: 145.653, f: 160.8, l: "4", a: 1},
{o: 160.8, f: 191.467, l: "1", a: 0},
{o: 191.467, f: 200.693, l: "3", a: 1},
{o: 200.693, f: 224.107, l: "2", a: 0},
{o: 224.107, f: 243.227, l: "1", a: 1},
{o: 243.227, f: 254.093, l: "3", a: 0},
{o: 254.093, f: 272.893, l: "2", a: 1},
{o: 272.893, f: 322.987, l: "1", a: 0},
{o: 322.987, f: 330.24, l: "5", a: 1},
{o: 330.24, f: 340.147, l: "1", a: 0},
{o: 340.147, f: 356.933, l: "5", a: 1},
{o: 356.933, f: 368.467, l: "7", a: 0}],
[{o: 0, f: 58.855, l: "a", a: 0},
{o: 58.855, f: 145.275, l: "b", a: 1},
{o: 145.275, f: 177.31, l: "c", a: 0},
{o: 177.31, f: 258.515, l: "b", a: 1},
{o: 258.515, f: 274.905, l: "d", a: 0},
{o: 274.905, f: 368.775, l: "b", a: 1}],
[{o: 0, f: 23.382, l: "n1", a: 0},
{o: 23.382, f: 33.599, l: "B", a: 1},
{o: 33.599, f: 43.015, l: "B", a: 0},
{o: 43.015, f: 62.264, l: "n3", a: 1},
{o: 62.264, f: 75.465, l: "A", a: 0},
{o: 75.465, f: 88.619, l: "A", a: 1},
{o: 88.619, f: 101.82, l: "C", a: 0},
{o: 101.82, f: 115.032, l: "A", a: 1},
{o: 115.032, f: 134.153, l: "n4", a: 0},
{o: 134.153, f: 144.033, l: "B", a: 1},
{o: 144.033, f: 157.211, l: "A", a: 0},
{o: 157.211, f: 165.129, l: "n6", a: 1},
{o: 165.129, f: 178.318, l: "A", a: 0},
{o: 178.318, f: 191.495, l: "A", a: 1},
{o: 191.495, f: 197.126, l: "n7", a: 0},
{o: 197.126, f: 206.507, l: "B", a: 1},
{o: 206.507, f: 215.11, l: "n8", a: 0},
{o: 215.11, f: 228.426, l: "C", a: 1},
{o: 228.426, f: 241.615, l: "A", a: 0},
{o: 241.615, f: 250.195, l: "n9", a: 1},
{o: 250.195, f: 259.413, l: "B", a: 0},
{o: 259.413, f: 275.9, l: "n10", a: 1},
{o: 275.9, f: 289.077, l: "A", a: 0},
{o: 289.077, f: 302.266, l: "A", a: 1},
{o: 302.266, f: 315.443, l: "A", a: 0},
{o: 315.443, f: 326.647, l: "n11", a: 1},
{o: 326.647, f: 335.888, l: "B", a: 0},
{o: 335.888, f: 341.809, l: "n12", a: 1},
{o: 341.809, f: 355.196, l: "A", a: 0},
{o: 355.196, f: 368.594, l: "n13", a: 1}],
[{o: 0, f: 0.04, l: "G", a: 0},
{o: 0.04, f: 19.388, l: "E", a: 1},
{o: 19.388, f: 100.812, l: "D", a: 0},
{o: 100.812, f: 119.932, l: "F", a: 1},
{o: 119.932, f: 224.096, l: "D", a: 0},
{o: 224.096, f: 247.184, l: "F", a: 1},
{o: 247.184, f: 290.356, l: "D", a: 0},
{o: 290.356, f: 323.976, l: "F", a: 1},
{o: 323.976, f: 365.208, l: "D", a: 0},
{o: 365.208, f: 368.85, l: "G", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001231.ogg";