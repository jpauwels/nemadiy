var data = [
[{o: 0.126, f: 24.937, l: "A", a: 0},
{o: 24.937, f: 49.014, l: "B", a: 1},
{o: 49.014, f: 72.924, l: "C", a: 0},
{o: 72.924, f: 96.92, l: "A", a: 1},
{o: 96.92, f: 120.806, l: "B", a: 0},
{o: 120.806, f: 144.894, l: "C'", a: 1},
{o: 144.894, f: 168.94, l: "D", a: 0},
{o: 168.94, f: 216.415, l: "A'", a: 1}],
[{o: 0.048, f: 15.856, l: "B", a: 0},
{o: 15.856, f: 24.064, l: "B", a: 1},
{o: 24.064, f: 38.36, l: "B", a: 0},
{o: 38.36, f: 47.352, l: "B", a: 1},
{o: 47.352, f: 60.064, l: "B", a: 0},
{o: 60.064, f: 71.372, l: "B", a: 1},
{o: 71.372, f: 82.6, l: "B", a: 0},
{o: 82.6, f: 94.564, l: "B", a: 1},
{o: 94.564, f: 99.864, l: "B", a: 0},
{o: 99.864, f: 109.568, l: "B", a: 1},
{o: 109.568, f: 118.56, l: "B", a: 0},
{o: 118.56, f: 123.744, l: "B", a: 1},
{o: 123.744, f: 131.944, l: "B", a: 0},
{o: 131.944, f: 142.452, l: "B", a: 1},
{o: 142.452, f: 151.48, l: "B", a: 0},
{o: 151.48, f: 159.844, l: "B", a: 1},
{o: 159.844, f: 168.092, l: "B", a: 0},
{o: 168.092, f: 182.376, l: "B", a: 1},
{o: 182.376, f: 191.356, l: "B", a: 0},
{o: 191.356, f: 199.608, l: "A", a: 1},
{o: 199.608, f: 205.496, l: "B", a: 0}],
[{o: 0.048, f: 15.856, l: "B", a: 0},
{o: 15.856, f: 24.064, l: "B", a: 1},
{o: 24.064, f: 38.36, l: "D", a: 0},
{o: 38.36, f: 47.352, l: "B", a: 1},
{o: 47.352, f: 60.064, l: "A", a: 0},
{o: 60.064, f: 71.372, l: "B", a: 1},
{o: 71.372, f: 82.6, l: "C", a: 0},
{o: 82.6, f: 94.564, l: "B", a: 1},
{o: 94.564, f: 99.864, l: "B", a: 0},
{o: 99.864, f: 109.568, l: "G", a: 1},
{o: 109.568, f: 118.56, l: "A", a: 0},
{o: 118.56, f: 123.744, l: "A", a: 1},
{o: 123.744, f: 131.944, l: "H", a: 0},
{o: 131.944, f: 142.452, l: "F", a: 1},
{o: 142.452, f: 151.48, l: "E", a: 0},
{o: 151.48, f: 159.844, l: "F", a: 1},
{o: 159.844, f: 168.092, l: "E", a: 0},
{o: 168.092, f: 182.376, l: "A", a: 1},
{o: 182.376, f: 191.356, l: "I", a: 0},
{o: 191.356, f: 199.608, l: "J", a: 1},
{o: 199.608, f: 205.496, l: "C", a: 0}],
[{o: 0.813, f: 8.76, l: "8", a: 0},
{o: 8.76, f: 20.707, l: "1", a: 1},
{o: 20.707, f: 29, l: "2", a: 0},
{o: 29, f: 46.253, l: "1", a: 1},
{o: 46.253, f: 58.187, l: "4", a: 0},
{o: 58.187, f: 78.493, l: "2", a: 1},
{o: 78.493, f: 87.453, l: "1", a: 0},
{o: 87.453, f: 95.72, l: "4", a: 1},
{o: 95.72, f: 114.667, l: "5", a: 0},
{o: 114.667, f: 166.24, l: "3", a: 1},
{o: 166.24, f: 176.013, l: "2", a: 0},
{o: 176.013, f: 187.96, l: "1", a: 1},
{o: 187.96, f: 203.12, l: "6", a: 0},
{o: 203.12, f: 216.253, l: "7", a: 1}],
[{o: 0, f: 23.84, l: "a", a: 0},
{o: 23.84, f: 47.68, l: "a", a: 1},
{o: 47.68, f: 70.775, l: "b", a: 0},
{o: 70.775, f: 95.36, l: "a", a: 1},
{o: 95.36, f: 166.88, l: "c", a: 0},
{o: 166.88, f: 191.465, l: "a", a: 1},
{o: 191.465, f: 216.05, l: "d", a: 0}],
[{o: 0, f: 1.672, l: "n1", a: 0},
{o: 1.672, f: 21.444, l: "A", a: 1},
{o: 21.444, f: 25.275, l: "n2", a: 0},
{o: 25.275, f: 45.558, l: "A", a: 1},
{o: 45.558, f: 73.665, l: "n3", a: 0},
{o: 73.665, f: 93.472, l: "A", a: 1},
{o: 93.472, f: 170.504, l: "n4", a: 0},
{o: 170.504, f: 189.486, l: "A", a: 1},
{o: 189.486, f: 216.271, l: "n5", a: 0}],
[{o: 0, f: 0.052, l: "G", a: 0},
{o: 0.052, f: 45.124, l: "B", a: 1},
{o: 45.124, f: 71.76, l: "F", a: 0},
{o: 71.76, f: 96.424, l: "B", a: 1},
{o: 96.424, f: 138, l: "A", a: 0},
{o: 138, f: 168.356, l: "D", a: 1},
{o: 168.356, f: 187.972, l: "B", a: 0},
{o: 187.972, f: 204.364, l: "C", a: 1},
{o: 204.364, f: 216.347, l: "G", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000557.ogg";

var artist = "RWC MDB J 2001 M01";

var track = "7";
