var data = [
[{o: 0.232, f: 24.619, l: "A", a: 0},
{o: 24.619, f: 137.459, l: "A", a: 1},
{o: 137.459, f: 157.703, l: "B", a: 0},
{o: 157.703, f: 222.33, l: "A", a: 1},
{o: 222.33, f: 242.609, l: "B", a: 0},
{o: 242.609, f: 339.298, l: "A", a: 1},
{o: 339.298, f: 369.908, l: "C", a: 0}],
[{o: 0.076, f: 11.676, l: "D", a: 0},
{o: 11.676, f: 22.952, l: "D", a: 1},
{o: 22.952, f: 44.932, l: "D", a: 0},
{o: 44.932, f: 60.62, l: "D", a: 1},
{o: 60.62, f: 72.348, l: "D", a: 0},
{o: 72.348, f: 91.24, l: "D", a: 1},
{o: 91.24, f: 104.3, l: "D", a: 0},
{o: 104.3, f: 119.096, l: "D", a: 1},
{o: 119.096, f: 130.956, l: "D", a: 0},
{o: 130.956, f: 149.304, l: "D", a: 1},
{o: 149.304, f: 158.604, l: "D", a: 0},
{o: 158.604, f: 174.688, l: "D", a: 1},
{o: 174.688, f: 192.852, l: "D", a: 0},
{o: 192.852, f: 207.972, l: "D", a: 1},
{o: 207.972, f: 223.208, l: "D", a: 0},
{o: 223.208, f: 233.472, l: "C", a: 1},
{o: 233.472, f: 240.116, l: "C", a: 0},
{o: 240.116, f: 259.16, l: "C", a: 1},
{o: 259.16, f: 273.12, l: "C", a: 0},
{o: 273.12, f: 291.768, l: "C", a: 1},
{o: 291.768, f: 307.984, l: "A", a: 0},
{o: 307.984, f: 323.268, l: "A", a: 1},
{o: 323.268, f: 338.172, l: "A", a: 0},
{o: 338.172, f: 344.352, l: "B", a: 1},
{o: 344.352, f: 361.008, l: "B", a: 0},
{o: 361.008, f: 367.588, l: "B", a: 1}],
[{o: 0.076, f: 11.676, l: "D", a: 0},
{o: 11.676, f: 22.952, l: "E", a: 1},
{o: 22.952, f: 44.932, l: "B", a: 0},
{o: 44.932, f: 60.62, l: "B", a: 1},
{o: 60.62, f: 72.348, l: "B", a: 0},
{o: 72.348, f: 91.24, l: "B", a: 1},
{o: 91.24, f: 104.3, l: "B", a: 0},
{o: 104.3, f: 119.096, l: "B", a: 1},
{o: 119.096, f: 130.956, l: "B", a: 0},
{o: 130.956, f: 149.304, l: "F", a: 1},
{o: 149.304, f: 158.604, l: "G", a: 0},
{o: 158.604, f: 174.688, l: "B", a: 1},
{o: 174.688, f: 192.852, l: "B", a: 0},
{o: 192.852, f: 207.972, l: "B", a: 1},
{o: 207.972, f: 223.208, l: "B", a: 0},
{o: 223.208, f: 233.472, l: "H", a: 1},
{o: 233.472, f: 240.116, l: "I", a: 0},
{o: 240.116, f: 259.16, l: "J", a: 1},
{o: 259.16, f: 273.12, l: "C", a: 0},
{o: 273.12, f: 291.768, l: "C", a: 1},
{o: 291.768, f: 307.984, l: "A", a: 0},
{o: 307.984, f: 323.268, l: "A", a: 1},
{o: 323.268, f: 338.172, l: "A", a: 0},
{o: 338.172, f: 344.352, l: "K", a: 1},
{o: 344.352, f: 361.008, l: "L", a: 0},
{o: 361.008, f: 367.588, l: "M", a: 1}],
[{o: 0.253, f: 23.76, l: "4", a: 0},
{o: 23.76, f: 43.427, l: "1", a: 1},
{o: 43.427, f: 47.747, l: "2", a: 0},
{o: 47.747, f: 62.467, l: "1", a: 1},
{o: 62.467, f: 67.48, l: "2", a: 0},
{o: 67.48, f: 89.04, l: "1", a: 1},
{o: 89.04, f: 101.44, l: "2", a: 0},
{o: 101.44, f: 119.627, l: "1", a: 1},
{o: 119.627, f: 124.4, l: "2", a: 0},
{o: 124.4, f: 204.76, l: "1", a: 1},
{o: 204.76, f: 217.333, l: "2", a: 0},
{o: 217.333, f: 222.72, l: "1", a: 1},
{o: 222.72, f: 230.947, l: "7", a: 0},
{o: 230.947, f: 259.707, l: "1", a: 1},
{o: 259.707, f: 299.36, l: "3", a: 0},
{o: 299.36, f: 305.12, l: "1", a: 1},
{o: 305.12, f: 338.053, l: "3", a: 0},
{o: 338.053, f: 354.053, l: "5", a: 1},
{o: 354.053, f: 366.173, l: "6", a: 0},
{o: 366.173, f: 369.027, l: "8", a: 1}],
[{o: 0, f: 47.68, l: "a", a: 0},
{o: 47.68, f: 90.145, l: "b", a: 1},
{o: 90.145, f: 121.435, l: "b", a: 0},
{o: 121.435, f: 187.74, l: "c", a: 1},
{o: 187.74, f: 230.205, l: "b", a: 0},
{o: 230.205, f: 261.495, l: "b", a: 1},
{o: 261.495, f: 338.23, l: "c", a: 0},
{o: 338.23, f: 369.52, l: "d", a: 1}],
[{o: 0, f: 0.279, l: "n1", a: 0},
{o: 0.279, f: 12.353, l: "B", a: 1},
{o: 12.353, f: 24.3, l: "B", a: 0},
{o: 24.3, f: 40.983, l: "n2", a: 1},
{o: 40.983, f: 56.947, l: "A", a: 0},
{o: 56.947, f: 73.073, l: "A", a: 1},
{o: 73.073, f: 89.246, l: "A", a: 0},
{o: 89.246, f: 105.349, l: "A", a: 1},
{o: 105.349, f: 121.522, l: "A", a: 0},
{o: 121.522, f: 137.416, l: "A", a: 1},
{o: 137.416, f: 148.341, l: "C", a: 0},
{o: 148.341, f: 157.954, l: "n9", a: 1},
{o: 157.954, f: 174.045, l: "A", a: 0},
{o: 174.045, f: 190.183, l: "A", a: 1},
{o: 190.183, f: 203.627, l: "A", a: 0},
{o: 203.627, f: 213.113, l: "D", a: 1},
{o: 213.113, f: 222.227, l: "n12", a: 0},
{o: 222.227, f: 233.163, l: "C", a: 1},
{o: 233.163, f: 275.516, l: "n13", a: 0},
{o: 275.516, f: 289.088, l: "A", a: 1},
{o: 289.088, f: 304.657, l: "n14", a: 0},
{o: 304.657, f: 314.154, l: "D", a: 1},
{o: 314.154, f: 324.313, l: "n15", a: 0},
{o: 324.313, f: 337.874, l: "A", a: 1},
{o: 337.874, f: 369.708, l: "n16", a: 0}],
[{o: 0, f: 0.072, l: "E", a: 0},
{o: 0.072, f: 4.276, l: "D", a: 1},
{o: 4.276, f: 341.212, l: "C", a: 0},
{o: 341.212, f: 367.328, l: "D", a: 1},
{o: 367.328, f: 369.895, l: "E", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000232.ogg";

var artist = "Donald Byrd";

var track = "Rock And Roll Again";