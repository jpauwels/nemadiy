var data = [
[{o: 0.464, f: 58.403, l: "A", a: 0},
{o: 58.403, f: 131.256, l: "B", a: 1},
{o: 131.256, f: 271.663, l: "B", a: 0},
{o: 271.663, f: 348.108, l: "B", a: 1},
{o: 348.108, f: 418.332, l: "A'", a: 0}],
[{o: 0.244, f: 18.084, l: "E", a: 0},
{o: 18.084, f: 29.672, l: "G", a: 1},
{o: 29.672, f: 47.036, l: "H", a: 0},
{o: 47.036, f: 72.216, l: "B", a: 1},
{o: 72.216, f: 93.056, l: "B", a: 0},
{o: 93.056, f: 112.924, l: "B", a: 1},
{o: 112.924, f: 130.108, l: "F", a: 0},
{o: 130.108, f: 140.368, l: "F", a: 1},
{o: 140.368, f: 150.112, l: "F", a: 0},
{o: 150.112, f: 165.896, l: "F", a: 1},
{o: 165.896, f: 175.656, l: "F", a: 0},
{o: 175.656, f: 190.772, l: "F", a: 1},
{o: 190.772, f: 211.204, l: "F", a: 0},
{o: 211.204, f: 220.768, l: "F", a: 1},
{o: 220.768, f: 236.992, l: "F", a: 0},
{o: 236.992, f: 259.148, l: "D", a: 1},
{o: 259.148, f: 273.38, l: "I", a: 0},
{o: 273.38, f: 280.456, l: "D", a: 1},
{o: 280.456, f: 291.168, l: "J", a: 0},
{o: 291.168, f: 312.128, l: "C", a: 1},
{o: 312.128, f: 321.192, l: "C", a: 0},
{o: 321.192, f: 340.996, l: "C", a: 1},
{o: 340.996, f: 355.524, l: "K", a: 0},
{o: 355.524, f: 366.096, l: "L", a: 1},
{o: 366.096, f: 381.212, l: "A", a: 0},
{o: 381.212, f: 388.872, l: "M", a: 1},
{o: 388.872, f: 408.088, l: "A", a: 0}],
[{o: 0.244, f: 18.084, l: "F", a: 0},
{o: 18.084, f: 29.672, l: "G", a: 1},
{o: 29.672, f: 47.036, l: "H", a: 0},
{o: 47.036, f: 72.216, l: "B", a: 1},
{o: 72.216, f: 93.056, l: "B", a: 0},
{o: 93.056, f: 112.924, l: "B", a: 1},
{o: 112.924, f: 130.108, l: "I", a: 0},
{o: 130.108, f: 140.368, l: "J", a: 1},
{o: 140.368, f: 150.112, l: "K", a: 0},
{o: 150.112, f: 165.896, l: "D", a: 1},
{o: 165.896, f: 175.656, l: "E", a: 0},
{o: 175.656, f: 190.772, l: "L", a: 1},
{o: 190.772, f: 211.204, l: "E", a: 0},
{o: 211.204, f: 220.768, l: "D", a: 1},
{o: 220.768, f: 236.992, l: "D", a: 0},
{o: 236.992, f: 259.148, l: "M", a: 1},
{o: 259.148, f: 273.38, l: "N", a: 0},
{o: 273.38, f: 280.456, l: "O", a: 1},
{o: 280.456, f: 291.168, l: "P", a: 0},
{o: 291.168, f: 312.128, l: "C", a: 1},
{o: 312.128, f: 321.192, l: "C", a: 0},
{o: 321.192, f: 340.996, l: "C", a: 1},
{o: 340.996, f: 355.524, l: "Q", a: 0},
{o: 355.524, f: 366.096, l: "R", a: 1},
{o: 366.096, f: 381.212, l: "A", a: 0},
{o: 381.212, f: 388.872, l: "S", a: 1},
{o: 388.872, f: 408.088, l: "A", a: 0}],
[{o: 0.68, f: 8.12, l: "8", a: 0},
{o: 8.12, f: 20.68, l: "2", a: 1},
{o: 20.68, f: 29.107, l: "4", a: 0},
{o: 29.107, f: 45.507, l: "2", a: 1},
{o: 45.507, f: 54.2, l: "4", a: 0},
{o: 54.2, f: 71.08, l: "1", a: 1},
{o: 71.08, f: 82.12, l: "5", a: 0},
{o: 82.12, f: 88.04, l: "1", a: 1},
{o: 88.04, f: 95.747, l: "5", a: 0},
{o: 95.747, f: 107.267, l: "1", a: 1},
{o: 107.267, f: 131.053, l: "5", a: 0},
{o: 131.053, f: 163.467, l: "1", a: 1},
{o: 163.467, f: 174.387, l: "3", a: 0},
{o: 174.387, f: 181.96, l: "4", a: 1},
{o: 181.96, f: 191.867, l: "1", a: 0},
{o: 191.867, f: 218.16, l: "3", a: 1},
{o: 218.16, f: 229.187, l: "1", a: 0},
{o: 229.187, f: 239.987, l: "3", a: 1},
{o: 239.987, f: 245.187, l: "6", a: 0},
{o: 245.187, f: 256.667, l: "3", a: 1},
{o: 256.667, f: 266.627, l: "6", a: 0},
{o: 266.627, f: 315.533, l: "1", a: 1},
{o: 315.533, f: 326.653, l: "2", a: 0},
{o: 326.653, f: 336.707, l: "1", a: 1},
{o: 336.707, f: 347.16, l: "2", a: 0},
{o: 347.16, f: 355.333, l: "1", a: 1},
{o: 355.333, f: 368.467, l: "2", a: 0},
{o: 368.467, f: 376.6, l: "4", a: 1},
{o: 376.6, f: 394.12, l: "2", a: 0},
{o: 394.12, f: 401.987, l: "4", a: 1},
{o: 401.987, f: 407.107, l: "2", a: 0},
{o: 407.107, f: 418.227, l: "7", a: 1}],
[{o: 0, f: 26.075, l: "a", a: 0},
{o: 26.075, f: 51.405, l: "a", a: 1},
{o: 51.405, f: 347.915, l: "b", a: 0},
{o: 347.915, f: 374.735, l: "a", a: 1},
{o: 374.735, f: 400.065, l: "a", a: 0},
{o: 400.065, f: 417.945, l: "c", a: 1}],
[{o: 0, f: 2.136, l: "n1", a: 0},
{o: 2.136, f: 19.284, l: "B", a: 1},
{o: 19.284, f: 30.755, l: "A", a: 0},
{o: 30.755, f: 44.571, l: "C", a: 1},
{o: 44.571, f: 55.449, l: "A", a: 0},
{o: 55.449, f: 349.797, l: "n4", a: 1},
{o: 349.797, f: 367.212, l: "B", a: 0},
{o: 367.212, f: 378.381, l: "A", a: 1},
{o: 378.381, f: 392.406, l: "C", a: 0},
{o: 392.406, f: 402.692, l: "A", a: 1},
{o: 402.692, f: 418.006, l: "n8", a: 0}],
[{o: 0, f: 0.244, l: "G", a: 0},
{o: 0.244, f: 13.628, l: "C", a: 1},
{o: 13.628, f: 60.292, l: "F", a: 0},
{o: 60.292, f: 74.06, l: "C", a: 1},
{o: 74.06, f: 90.532, l: "B", a: 0},
{o: 90.532, f: 102.892, l: "A", a: 1},
{o: 102.892, f: 124.064, l: "B", a: 0},
{o: 124.064, f: 144.564, l: "C", a: 1},
{o: 144.564, f: 157.028, l: "B", a: 0},
{o: 157.028, f: 180.296, l: "A", a: 1},
{o: 180.296, f: 225.708, l: "B", a: 0},
{o: 225.708, f: 285.872, l: "A", a: 1},
{o: 285.872, f: 305.232, l: "B", a: 0},
{o: 305.232, f: 324.208, l: "A", a: 1},
{o: 324.208, f: 347.348, l: "B", a: 0},
{o: 347.348, f: 362.796, l: "C", a: 1},
{o: 362.796, f: 408.088, l: "F", a: 0},
{o: 408.088, f: 418.326, l: "G", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000340.ogg";

var artist = "Compilations";

var track = "8 4 Beat";
