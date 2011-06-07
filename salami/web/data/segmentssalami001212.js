var data = [
[{o: 0.096, f: 35.609, l: "A", a: 0},
{o: 35.609, f: 52.482, l: "B", a: 1},
{o: 52.482, f: 86.528, l: "C", a: 0},
{o: 86.528, f: 120.954, l: "D", a: 1},
{o: 120.954, f: 138.285, l: "B", a: 0},
{o: 138.285, f: 172.241, l: "C", a: 1},
{o: 172.241, f: 206.732, l: "D", a: 0},
{o: 206.732, f: 223.761, l: "E", a: 1},
{o: 223.761, f: 241.072, l: "B", a: 0},
{o: 241.072, f: 258.143, l: "E", a: 1},
{o: 258.143, f: 266.912, l: "C", a: 0},
{o: 266.912, f: 300.721, l: "D", a: 1},
{o: 300.721, f: 327.137, l: "E", a: 0}],
[{o: 0.028, f: 16.584, l: "A", a: 0},
{o: 16.584, f: 33.232, l: "A", a: 1},
{o: 33.232, f: 45.992, l: "B", a: 0},
{o: 45.992, f: 58.792, l: "B", a: 1},
{o: 58.792, f: 75.808, l: "B", a: 0},
{o: 75.808, f: 84.324, l: "B", a: 1},
{o: 84.324, f: 103.092, l: "B", a: 0},
{o: 103.092, f: 116.612, l: "E", a: 1},
{o: 116.612, f: 137.536, l: "B", a: 0},
{o: 137.536, f: 145.004, l: "B", a: 1},
{o: 145.004, f: 160.928, l: "B", a: 0},
{o: 160.928, f: 170.56, l: "B", a: 1},
{o: 170.56, f: 187.212, l: "B", a: 0},
{o: 187.212, f: 196.42, l: "D", a: 1},
{o: 196.42, f: 203.976, l: "D", a: 0},
{o: 203.976, f: 215.092, l: "F", a: 1},
{o: 215.092, f: 223.696, l: "G", a: 0},
{o: 223.696, f: 238.968, l: "H", a: 1},
{o: 238.968, f: 250.04, l: "C", a: 0},
{o: 250.04, f: 259.632, l: "C", a: 1},
{o: 259.632, f: 266.008, l: "I", a: 0},
{o: 266.008, f: 281.48, l: "B", a: 1},
{o: 281.48, f: 297.564, l: "J", a: 0},
{o: 297.564, f: 310.964, l: "K", a: 1},
{o: 310.964, f: 320.592, l: "L", a: 0}],
[{o: 0.028, f: 16.584, l: "E", a: 0},
{o: 16.584, f: 33.232, l: "F", a: 1},
{o: 33.232, f: 45.992, l: "B", a: 0},
{o: 45.992, f: 58.792, l: "C", a: 1},
{o: 58.792, f: 75.808, l: "C", a: 0},
{o: 75.808, f: 84.324, l: "C", a: 1},
{o: 84.324, f: 103.092, l: "A", a: 0},
{o: 103.092, f: 116.612, l: "G", a: 1},
{o: 116.612, f: 137.536, l: "B", a: 0},
{o: 137.536, f: 145.004, l: "C", a: 1},
{o: 145.004, f: 160.928, l: "C", a: 0},
{o: 160.928, f: 170.56, l: "H", a: 1},
{o: 170.56, f: 187.212, l: "A", a: 0},
{o: 187.212, f: 196.42, l: "D", a: 1},
{o: 196.42, f: 203.976, l: "D", a: 0},
{o: 203.976, f: 215.092, l: "I", a: 1},
{o: 215.092, f: 223.696, l: "J", a: 0},
{o: 223.696, f: 238.968, l: "K", a: 1},
{o: 238.968, f: 250.04, l: "L", a: 0},
{o: 250.04, f: 259.632, l: "M", a: 1},
{o: 259.632, f: 266.008, l: "N", a: 0},
{o: 266.008, f: 281.48, l: "A", a: 1},
{o: 281.48, f: 297.564, l: "O", a: 0},
{o: 297.564, f: 310.964, l: "P", a: 1},
{o: 310.964, f: 320.592, l: "Q", a: 0}],
[{o: 0.707, f: 15.88, l: "4", a: 0},
{o: 15.88, f: 30.773, l: "6", a: 1},
{o: 30.773, f: 86.173, l: "1", a: 0},
{o: 86.173, f: 117.427, l: "2", a: 1},
{o: 117.427, f: 171.88, l: "1", a: 0},
{o: 171.88, f: 202.667, l: "2", a: 1},
{o: 202.667, f: 222.907, l: "3", a: 0},
{o: 222.907, f: 237.6, l: "5", a: 1},
{o: 237.6, f: 266.76, l: "1", a: 0},
{o: 266.76, f: 282.307, l: "2", a: 1},
{o: 282.307, f: 288.227, l: "8", a: 0},
{o: 288.227, f: 297.293, l: "2", a: 1},
{o: 297.293, f: 318.16, l: "3", a: 0},
{o: 318.16, f: 326.867, l: "7", a: 1}],
[{o: 0, f: 32.78, l: "a", a: 0},
{o: 32.78, f: 60.345, l: "b", a: 1},
{o: 60.345, f: 119.2, l: "c", a: 0},
{o: 119.2, f: 145.275, l: "b", a: 1},
{o: 145.275, f: 204.875, l: "c", a: 0},
{o: 204.875, f: 240.635, l: "d", a: 1},
{o: 240.635, f: 298, l: "c", a: 0},
{o: 298, f: 327.055, l: "e", a: 1}],
[{o: 0, f: 35.399, l: "n1", a: 0},
{o: 35.399, f: 52.407, l: "A", a: 1},
{o: 52.407, f: 69.486, l: "A", a: 0},
{o: 69.486, f: 86.982, l: "A", a: 1},
{o: 86.982, f: 105.302, l: "C", a: 0},
{o: 105.302, f: 120.93, l: "B", a: 1},
{o: 120.93, f: 138.089, l: "A", a: 0},
{o: 138.089, f: 155.133, l: "A", a: 1},
{o: 155.133, f: 170.063, l: "A", a: 0},
{o: 170.063, f: 191.031, l: "n9", a: 1},
{o: 191.031, f: 205.915, l: "B", a: 0},
{o: 205.915, f: 249.556, l: "n10", a: 1},
{o: 249.556, f: 267.064, l: "A", a: 0},
{o: 267.064, f: 285.292, l: "C", a: 1},
{o: 285.292, f: 302.417, l: "B", a: 0},
{o: 302.417, f: 317.173, l: "B", a: 1},
{o: 317.173, f: 326.983, l: "n14", a: 0}],
[{o: 0, f: 0.024, l: "F", a: 0},
{o: 0.024, f: 2.032, l: "C", a: 1},
{o: 2.032, f: 33.504, l: "D", a: 0},
{o: 33.504, f: 86.408, l: "C", a: 1},
{o: 86.408, f: 99.588, l: "E", a: 0},
{o: 99.588, f: 120.368, l: "D", a: 1},
{o: 120.368, f: 172.144, l: "C", a: 0},
{o: 172.144, f: 183.144, l: "E", a: 1},
{o: 183.144, f: 239.988, l: "D", a: 0},
{o: 239.988, f: 265.756, l: "C", a: 1},
{o: 265.756, f: 280.42, l: "E", a: 0},
{o: 280.42, f: 310.156, l: "D", a: 1},
{o: 310.156, f: 320.876, l: "C", a: 0},
{o: 320.876, f: 326.947, l: "F", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001212.ogg";
