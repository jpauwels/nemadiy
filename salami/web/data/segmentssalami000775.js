var data = [
[{o: 0.395, f: 16.939, l: "A", a: 0},
{o: 16.939, f: 50.012, l: "A", a: 1},
{o: 50.012, f: 66.258, l: "A", a: 0},
{o: 66.258, f: 99.33, l: "A", a: 1},
{o: 99.33, f: 132.105, l: "A", a: 0},
{o: 132.105, f: 164.794, l: "A", a: 1},
{o: 164.794, f: 197.834, l: "A", a: 0},
{o: 197.834, f: 230.959, l: "A", a: 1},
{o: 230.959, f: 264.167, l: "A", a: 0},
{o: 264.167, f: 296.919, l: "A", a: 1},
{o: 296.919, f: 329.014, l: "A", a: 0},
{o: 329.014, f: 361.552, l: "A", a: 1},
{o: 361.552, f: 393.648, l: "A", a: 0},
{o: 393.648, f: 410.081, l: "A", a: 1},
{o: 410.081, f: 442.681, l: "A", a: 0},
{o: 442.681, f: 458.849, l: "A'", a: 1},
{o: 458.849, f: 484.041, l: "A", a: 0}],
[{o: 0.116, f: 16.364, l: "A", a: 0},
{o: 16.364, f: 29.224, l: "C", a: 1},
{o: 29.224, f: 45.66, l: "C", a: 0},
{o: 45.66, f: 59.972, l: "C", a: 1},
{o: 59.972, f: 84.204, l: "C", a: 0},
{o: 84.204, f: 96.672, l: "C", a: 1},
{o: 96.672, f: 110.044, l: "C", a: 0},
{o: 110.044, f: 118.108, l: "C", a: 1},
{o: 118.108, f: 133.976, l: "C", a: 0},
{o: 133.976, f: 149.936, l: "C", a: 1},
{o: 149.936, f: 166.716, l: "C", a: 0},
{o: 166.716, f: 183.148, l: "C", a: 1},
{o: 183.148, f: 197.06, l: "C", a: 0},
{o: 197.06, f: 213.78, l: "C", a: 1},
{o: 213.78, f: 233.488, l: "C", a: 0},
{o: 233.488, f: 245.932, l: "C", a: 1},
{o: 245.932, f: 264.88, l: "C", a: 0},
{o: 264.88, f: 281.876, l: "B", a: 1},
{o: 281.876, f: 298.24, l: "B", a: 0},
{o: 298.24, f: 308.296, l: "B", a: 1},
{o: 308.296, f: 318.844, l: "E", a: 0},
{o: 318.844, f: 341.424, l: "B", a: 1},
{o: 341.424, f: 361.792, l: "F", a: 0},
{o: 361.792, f: 378.92, l: "D", a: 1},
{o: 378.92, f: 405.34, l: "D", a: 0},
{o: 405.34, f: 422.272, l: "G", a: 1},
{o: 422.272, f: 438.516, l: "H", a: 0},
{o: 438.516, f: 453.152, l: "I", a: 1},
{o: 453.152, f: 466.224, l: "J", a: 0},
{o: 466.224, f: 477.396, l: "K", a: 1}],
[{o: 0.116, f: 16.364, l: "F", a: 0},
{o: 16.364, f: 29.224, l: "C", a: 1},
{o: 29.224, f: 45.66, l: "C", a: 0},
{o: 45.66, f: 59.972, l: "G", a: 1},
{o: 59.972, f: 84.204, l: "A", a: 0},
{o: 84.204, f: 96.672, l: "A", a: 1},
{o: 96.672, f: 110.044, l: "A", a: 0},
{o: 110.044, f: 118.108, l: "A", a: 1},
{o: 118.108, f: 133.976, l: "A", a: 0},
{o: 133.976, f: 149.936, l: "A", a: 1},
{o: 149.936, f: 166.716, l: "H", a: 0},
{o: 166.716, f: 183.148, l: "I", a: 1},
{o: 183.148, f: 197.06, l: "J", a: 0},
{o: 197.06, f: 213.78, l: "K", a: 1},
{o: 213.78, f: 233.488, l: "L", a: 0},
{o: 233.488, f: 245.932, l: "E", a: 1},
{o: 245.932, f: 264.88, l: "E", a: 0},
{o: 264.88, f: 281.876, l: "B", a: 1},
{o: 281.876, f: 298.24, l: "B", a: 0},
{o: 298.24, f: 308.296, l: "B", a: 1},
{o: 308.296, f: 318.844, l: "M", a: 0},
{o: 318.844, f: 341.424, l: "B", a: 1},
{o: 341.424, f: 361.792, l: "N", a: 0},
{o: 361.792, f: 378.92, l: "D", a: 1},
{o: 378.92, f: 405.34, l: "D", a: 0},
{o: 405.34, f: 422.272, l: "O", a: 1},
{o: 422.272, f: 438.516, l: "P", a: 0},
{o: 438.516, f: 453.152, l: "Q", a: 1},
{o: 453.152, f: 466.224, l: "R", a: 0},
{o: 466.224, f: 477.396, l: "S", a: 1}],
[{o: 0.44, f: 16.48, l: "6", a: 0},
{o: 16.48, f: 63.28, l: "4", a: 1},
{o: 63.28, f: 88.013, l: "1", a: 0},
{o: 88.013, f: 98.32, l: "2", a: 1},
{o: 98.32, f: 115.4, l: "1", a: 0},
{o: 115.4, f: 121.893, l: "2", a: 1},
{o: 121.893, f: 136.24, l: "1", a: 0},
{o: 136.24, f: 147.12, l: "2", a: 1},
{o: 147.12, f: 155.373, l: "1", a: 0},
{o: 155.373, f: 164.933, l: "2", a: 1},
{o: 164.933, f: 185.56, l: "5", a: 0},
{o: 185.56, f: 207.28, l: "1", a: 1},
{o: 207.28, f: 218.147, l: "5", a: 0},
{o: 218.147, f: 255.92, l: "1", a: 1},
{o: 255.92, f: 265.187, l: "5", a: 0},
{o: 265.187, f: 288.773, l: "3", a: 1},
{o: 288.773, f: 299.973, l: "1", a: 0},
{o: 299.973, f: 326.107, l: "3", a: 1},
{o: 326.107, f: 333.2, l: "1", a: 0},
{o: 333.2, f: 353.573, l: "3", a: 1},
{o: 353.573, f: 368.773, l: "1", a: 0},
{o: 368.773, f: 374.787, l: "2", a: 1},
{o: 374.787, f: 382.187, l: "1", a: 0},
{o: 382.187, f: 398.507, l: "2", a: 1},
{o: 398.507, f: 410.8, l: "1", a: 0},
{o: 410.8, f: 455.28, l: "4", a: 1},
{o: 455.28, f: 467.493, l: "6", a: 0},
{o: 467.493, f: 474.027, l: "8", a: 1},
{o: 474.027, f: 482.173, l: "7", a: 0}],
[{o: 0, f: 64.07, l: "a", a: 0},
{o: 64.07, f: 108.77, l: "b", a: 1},
{o: 108.77, f: 148.255, l: "c", a: 0},
{o: 148.255, f: 196.68, l: "c", a: 1},
{o: 196.68, f: 410.495, l: "d", a: 0},
{o: 410.495, f: 458.175, l: "a", a: 1},
{o: 458.175, f: 482.76, l: "e", a: 0},
{o: 482.76, f: 484.25, l: "f", a: 1}],
[{o: 0, f: 16.951, l: "n1", a: 0},
{o: 16.951, f: 66.235, l: "A", a: 1},
{o: 66.235, f: 410.03, l: "n2", a: 0},
{o: 410.03, f: 457.247, l: "A", a: 1},
{o: 457.247, f: 483.765, l: "n3", a: 0}],
[{o: 0, f: 0.116, l: "J", a: 0},
{o: 0.116, f: 40.024, l: "E", a: 1},
{o: 40.024, f: 66.728, l: "H", a: 0},
{o: 66.728, f: 89.4, l: "G", a: 1},
{o: 89.4, f: 115.676, l: "H", a: 0},
{o: 115.676, f: 138.524, l: "G", a: 1},
{o: 138.524, f: 164.68, l: "H", a: 0},
{o: 164.68, f: 187.232, l: "G", a: 1},
{o: 187.232, f: 214.268, l: "H", a: 0},
{o: 214.268, f: 237.576, l: "G", a: 1},
{o: 237.576, f: 269.556, l: "H", a: 0},
{o: 269.556, f: 287.004, l: "C", a: 1},
{o: 287.004, f: 361.792, l: "H", a: 0},
{o: 361.792, f: 383.956, l: "G", a: 1},
{o: 383.956, f: 455.04, l: "H", a: 0},
{o: 455.04, f: 475.3, l: "I", a: 1},
{o: 475.3, f: 477.396, l: "A", a: 0},
{o: 477.396, f: 484.024, l: "J", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000775.ogg";
