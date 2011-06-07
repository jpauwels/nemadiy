var data = [
[{o: 0.325, f: 16.254, l: "N", a: 0},
{o: 16.254, f: 46.371, l: "A", a: 1},
{o: 46.371, f: 76.904, l: "A", a: 0},
{o: 76.904, f: 107.926, l: "B", a: 1},
{o: 107.926, f: 139.203, l: "A", a: 0},
{o: 139.203, f: 169.899, l: "C", a: 1},
{o: 169.899, f: 194.555, l: "A", a: 0},
{o: 194.555, f: 225.077, l: "E", a: 1}],
[{o: 0.108, f: 15.44, l: "A", a: 0},
{o: 15.44, f: 27.82, l: "E", a: 1},
{o: 27.82, f: 37.808, l: "E", a: 0},
{o: 37.808, f: 47.16, l: "E", a: 1},
{o: 47.16, f: 55.288, l: "E", a: 0},
{o: 55.288, f: 65.612, l: "E", a: 1},
{o: 65.612, f: 83.144, l: "E", a: 0},
{o: 83.144, f: 92.324, l: "E", a: 1},
{o: 92.324, f: 103.132, l: "E", a: 0},
{o: 103.132, f: 115.148, l: "E", a: 1},
{o: 115.148, f: 125.712, l: "E", a: 0},
{o: 125.712, f: 137.272, l: "E", a: 1},
{o: 137.272, f: 148.6, l: "E", a: 0},
{o: 148.6, f: 161.148, l: "E", a: 1},
{o: 161.148, f: 173.912, l: "E", a: 0},
{o: 173.912, f: 185.648, l: "E", a: 1},
{o: 185.648, f: 200.748, l: "E", a: 0},
{o: 200.748, f: 207.244, l: "E", a: 1},
{o: 207.244, f: 217.74, l: "E", a: 0}],
[{o: 0.108, f: 15.44, l: "B", a: 0},
{o: 15.44, f: 27.82, l: "E", a: 1},
{o: 27.82, f: 37.808, l: "E", a: 0},
{o: 37.808, f: 47.16, l: "F", a: 1},
{o: 47.16, f: 55.288, l: "E", a: 0},
{o: 55.288, f: 65.612, l: "E", a: 1},
{o: 65.612, f: 83.144, l: "E", a: 0},
{o: 83.144, f: 92.324, l: "D", a: 1},
{o: 92.324, f: 103.132, l: "C", a: 0},
{o: 103.132, f: 115.148, l: "E", a: 1},
{o: 115.148, f: 125.712, l: "D", a: 0},
{o: 125.712, f: 137.272, l: "C", a: 1},
{o: 137.272, f: 148.6, l: "A", a: 0},
{o: 148.6, f: 161.148, l: "A", a: 1},
{o: 161.148, f: 173.912, l: "E", a: 0},
{o: 173.912, f: 185.648, l: "A", a: 1},
{o: 185.648, f: 200.748, l: "G", a: 0},
{o: 200.748, f: 207.244, l: "H", a: 1},
{o: 207.244, f: 217.74, l: "I", a: 0}],
[{o: 0.387, f: 1.507, l: "8", a: 0},
{o: 1.507, f: 14.28, l: "3", a: 1},
{o: 14.28, f: 20.853, l: "7", a: 0},
{o: 20.853, f: 38.813, l: "2", a: 1},
{o: 38.813, f: 46.227, l: "1", a: 0},
{o: 46.227, f: 68.267, l: "2", a: 1},
{o: 68.267, f: 100.2, l: "1", a: 0},
{o: 100.2, f: 118.467, l: "2", a: 1},
{o: 118.467, f: 140.28, l: "1", a: 0},
{o: 140.28, f: 152.293, l: "2", a: 1},
{o: 152.293, f: 167.68, l: "1", a: 0},
{o: 167.68, f: 179.947, l: "2", a: 1},
{o: 179.947, f: 194.253, l: "1", a: 0},
{o: 194.253, f: 201.747, l: "3", a: 1},
{o: 201.747, f: 208.813, l: "6", a: 0},
{o: 208.813, f: 216.2, l: "5", a: 1},
{o: 216.2, f: 224.973, l: "4", a: 0}],
[{o: 0, f: 11.175, l: "a", a: 0},
{o: 11.175, f: 37.25, l: "b", a: 1},
{o: 37.25, f: 73.01, l: "c", a: 0},
{o: 73.01, f: 80.46, l: "d", a: 1},
{o: 80.46, f: 96.85, l: "d", a: 0},
{o: 96.85, f: 166.135, l: "e", a: 1},
{o: 166.135, f: 192.21, l: "b", a: 0},
{o: 192.21, f: 222.755, l: "f", a: 1},
{o: 222.755, f: 224.245, l: "g", a: 0}],
[{o: 0, f: 16.463, l: "n1", a: 0},
{o: 16.463, f: 29.211, l: "A", a: 1},
{o: 29.211, f: 69.486, l: "n2", a: 0},
{o: 69.486, f: 87.713, l: "B", a: 1},
{o: 87.713, f: 130.914, l: "n3", a: 0},
{o: 130.914, f: 149.328, l: "B", a: 1},
{o: 149.328, f: 170.62, l: "n4", a: 0},
{o: 170.62, f: 182.996, l: "A", a: 1},
{o: 182.996, f: 224.816, l: "n5", a: 0}],
[{o: 0, f: 0.108, l: "G", a: 0},
{o: 0.108, f: 40.048, l: "D", a: 1},
{o: 40.048, f: 72.412, l: "B", a: 0},
{o: 72.412, f: 100.132, l: "C", a: 1},
{o: 100.132, f: 133.564, l: "B", a: 0},
{o: 133.564, f: 156.876, l: "A", a: 1},
{o: 156.876, f: 190.92, l: "E", a: 0},
{o: 190.92, f: 217.74, l: "F", a: 1},
{o: 217.74, f: 225.072, l: "G", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000515.ogg";
