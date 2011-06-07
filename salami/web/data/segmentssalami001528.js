var data = [
[{o: 0.023, f: 49.989, l: "A", a: 0},
{o: 49.989, f: 93.426, l: "B", a: 1},
{o: 93.426, f: 136.822, l: "B", a: 0},
{o: 136.822, f: 178.617, l: "C", a: 1},
{o: 178.617, f: 220.846, l: "B", a: 0},
{o: 220.846, f: 262.654, l: "C", a: 1},
{o: 262.654, f: 305.024, l: "B", a: 0},
{o: 305.024, f: 373.479, l: "C", a: 1}],
[{o: 0.028, f: 9.988, l: "G", a: 0},
{o: 9.988, f: 26.676, l: "G", a: 1},
{o: 26.676, f: 34.564, l: "G", a: 0},
{o: 34.564, f: 43.032, l: "G", a: 1},
{o: 43.032, f: 68.94, l: "G", a: 0},
{o: 68.94, f: 92.764, l: "G", a: 1},
{o: 92.764, f: 110.716, l: "G", a: 0},
{o: 110.716, f: 123.212, l: "G", a: 1},
{o: 123.212, f: 136.752, l: "G", a: 0},
{o: 136.752, f: 146.648, l: "G", a: 1},
{o: 146.648, f: 157.36, l: "G", a: 0},
{o: 157.36, f: 165.128, l: "G", a: 1},
{o: 165.128, f: 183.44, l: "G", a: 0},
{o: 183.44, f: 197.948, l: "G", a: 1},
{o: 197.948, f: 209.784, l: "G", a: 0},
{o: 209.784, f: 220.968, l: "G", a: 1},
{o: 220.968, f: 230.692, l: "G", a: 0},
{o: 230.692, f: 240.232, l: "B", a: 1},
{o: 240.232, f: 254, l: "G", a: 0},
{o: 254, f: 262.196, l: "C", a: 1},
{o: 262.196, f: 283.216, l: "A", a: 0},
{o: 283.216, f: 297.756, l: "A", a: 1},
{o: 297.756, f: 314.24, l: "D", a: 0},
{o: 314.24, f: 326.444, l: "A", a: 1},
{o: 326.444, f: 345.44, l: "E", a: 0},
{o: 345.44, f: 356.492, l: "F", a: 1},
{o: 356.492, f: 373.288, l: "A", a: 0}],
[{o: 0.028, f: 9.988, l: "G", a: 0},
{o: 9.988, f: 26.676, l: "F", a: 1},
{o: 26.676, f: 34.564, l: "D", a: 0},
{o: 34.564, f: 43.032, l: "F", a: 1},
{o: 43.032, f: 68.94, l: "F", a: 0},
{o: 68.94, f: 92.764, l: "F", a: 1},
{o: 92.764, f: 110.716, l: "B", a: 0},
{o: 110.716, f: 123.212, l: "F", a: 1},
{o: 123.212, f: 136.752, l: "B", a: 0},
{o: 136.752, f: 146.648, l: "C", a: 1},
{o: 146.648, f: 157.36, l: "H", a: 0},
{o: 157.36, f: 165.128, l: "H", a: 1},
{o: 165.128, f: 183.44, l: "C", a: 0},
{o: 183.44, f: 197.948, l: "F", a: 1},
{o: 197.948, f: 209.784, l: "G", a: 0},
{o: 209.784, f: 220.968, l: "F", a: 1},
{o: 220.968, f: 230.692, l: "E", a: 0},
{o: 230.692, f: 240.232, l: "I", a: 1},
{o: 240.232, f: 254, l: "E", a: 0},
{o: 254, f: 262.196, l: "J", a: 1},
{o: 262.196, f: 283.216, l: "A", a: 0},
{o: 283.216, f: 297.756, l: "A", a: 1},
{o: 297.756, f: 314.24, l: "K", a: 0},
{o: 314.24, f: 326.444, l: "L", a: 1},
{o: 326.444, f: 345.44, l: "M", a: 0},
{o: 345.44, f: 356.492, l: "N", a: 1},
{o: 356.492, f: 373.288, l: "O", a: 0}],
[{o: 0.36, f: 8.12, l: "6", a: 0},
{o: 8.12, f: 14.4, l: "7", a: 1},
{o: 14.4, f: 19.627, l: "1", a: 0},
{o: 19.627, f: 25.2, l: "7", a: 1},
{o: 25.2, f: 30.347, l: "5", a: 0},
{o: 30.347, f: 49.307, l: "1", a: 1},
{o: 49.307, f: 57.227, l: "3", a: 0},
{o: 57.227, f: 63.347, l: "1", a: 1},
{o: 63.347, f: 69.147, l: "3", a: 0},
{o: 69.147, f: 80.36, l: "2", a: 1},
{o: 80.36, f: 85.12, l: "1", a: 0},
{o: 85.12, f: 89.907, l: "3", a: 1},
{o: 89.907, f: 95.747, l: "1", a: 0},
{o: 95.747, f: 100.453, l: "3", a: 1},
{o: 100.453, f: 106.56, l: "1", a: 0},
{o: 106.56, f: 111.293, l: "3", a: 1},
{o: 111.293, f: 127.787, l: "2", a: 0},
{o: 127.787, f: 134.24, l: "3", a: 1},
{o: 134.24, f: 138.947, l: "1", a: 0},
{o: 138.947, f: 144.173, l: "2", a: 1},
{o: 144.173, f: 149.747, l: "1", a: 0},
{o: 149.747, f: 154.28, l: "2", a: 1},
{o: 154.28, f: 161.72, l: "5", a: 0},
{o: 161.72, f: 170.133, l: "4", a: 1},
{o: 170.133, f: 177.28, l: "2", a: 0},
{o: 177.28, f: 181.307, l: "1", a: 1},
{o: 181.307, f: 185.573, l: "3", a: 0},
{o: 185.573, f: 191.52, l: "1", a: 1},
{o: 191.52, f: 199.107, l: "3", a: 0},
{o: 199.107, f: 207.32, l: "2", a: 1},
{o: 207.32, f: 212.227, l: "1", a: 0},
{o: 212.227, f: 218.493, l: "3", a: 1},
{o: 218.493, f: 240.067, l: "1", a: 0},
{o: 240.067, f: 244.68, l: "5", a: 1},
{o: 244.68, f: 255.133, l: "4", a: 0},
{o: 255.133, f: 265.027, l: "1", a: 1},
{o: 265.027, f: 291, l: "2", a: 0},
{o: 291, f: 297.253, l: "1", a: 1},
{o: 297.253, f: 301.947, l: "3", a: 0},
{o: 301.947, f: 306.533, l: "1", a: 1},
{o: 306.533, f: 312.333, l: "4", a: 0},
{o: 312.333, f: 317.48, l: "6", a: 1},
{o: 317.48, f: 324.307, l: "4", a: 0},
{o: 324.307, f: 329.48, l: "5", a: 1},
{o: 329.48, f: 345.267, l: "6", a: 0},
{o: 345.267, f: 360.933, l: "8", a: 1},
{o: 360.933, f: 369.213, l: "7", a: 0},
{o: 369.213, f: 373.053, l: "8", a: 1}],
[{o: 0, f: 19.37, l: "a", a: 0},
{o: 19.37, f: 60.345, l: "b", a: 1},
{o: 60.345, f: 105.045, l: "b", a: 0},
{o: 105.045, f: 146.02, l: "b", a: 1},
{o: 146.02, f: 190.72, l: "b", a: 0},
{o: 190.72, f: 231.695, l: "b", a: 1},
{o: 231.695, f: 276.395, l: "b", a: 0},
{o: 276.395, f: 317.37, l: "b", a: 1},
{o: 317.37, f: 373.245, l: "b", a: 0}],
[{o: 0, f: 25.333, l: "n1", a: 0},
{o: 25.333, f: 68.975, l: "A", a: 1},
{o: 68.975, f: 112.443, l: "A", a: 0},
{o: 112.443, f: 155.133, l: "A", a: 1},
{o: 155.133, f: 196.998, l: "A", a: 0},
{o: 196.998, f: 236.263, l: "A", a: 1},
{o: 236.263, f: 248.779, l: "n6", a: 0},
{o: 248.779, f: 259.262, l: "B", a: 1},
{o: 259.262, f: 269.793, l: "B", a: 0},
{o: 269.793, f: 280.973, l: "n7", a: 1},
{o: 280.973, f: 322.873, l: "A", a: 0},
{o: 322.873, f: 361.79, l: "A", a: 1},
{o: 361.79, f: 373.052, l: "n9", a: 0}],
[{o: 0, f: 0.028, l: "E", a: 0},
{o: 0.028, f: 0.028, l: "B", a: 1},
{o: 0.028, f: 15.896, l: "A", a: 0},
{o: 15.896, f: 114.772, l: "B", a: 1},
{o: 114.772, f: 125.54, l: "C", a: 0},
{o: 125.54, f: 199.26, l: "B", a: 1},
{o: 199.26, f: 214.364, l: "C", a: 0},
{o: 214.364, f: 366.188, l: "B", a: 1},
{o: 366.188, f: 373.288, l: "D", a: 0},
{o: 373.288, f: 373.36, l: "E", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001528.ogg";
