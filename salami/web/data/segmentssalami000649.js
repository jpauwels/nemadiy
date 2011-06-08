var data = [
[{o: 0.313, f: 10.738, l: "A", a: 0},
{o: 10.738, f: 31.529, l: "B", a: 1},
{o: 31.529, f: 42.22, l: "C", a: 0},
{o: 42.22, f: 52.794, l: "B", a: 1},
{o: 52.794, f: 139.953, l: "D", a: 0},
{o: 139.953, f: 228.534, l: "E", a: 1},
{o: 228.534, f: 316.515, l: "F", a: 0},
{o: 316.515, f: 337.946, l: "B", a: 1},
{o: 337.946, f: 348.797, l: "C", a: 0},
{o: 348.797, f: 359.614, l: "B", a: 1},
{o: 359.614, f: 389.996, l: "D", a: 0}],
[{o: 0.208, f: 10.38, l: "A", a: 0},
{o: 10.38, f: 20.404, l: "F", a: 1},
{o: 20.404, f: 30.764, l: "F", a: 0},
{o: 30.764, f: 40.728, l: "G", a: 1},
{o: 40.728, f: 51.968, l: "F", a: 0},
{o: 51.968, f: 66.804, l: "G", a: 1},
{o: 66.804, f: 75.184, l: "G", a: 0},
{o: 75.184, f: 84.664, l: "G", a: 1},
{o: 84.664, f: 94.236, l: "G", a: 0},
{o: 94.236, f: 114.816, l: "G", a: 1},
{o: 114.816, f: 128.092, l: "G", a: 0},
{o: 128.092, f: 140.212, l: "G", a: 1},
{o: 140.212, f: 151.16, l: "F", a: 0},
{o: 151.16, f: 164.292, l: "F", a: 1},
{o: 164.292, f: 185.468, l: "F", a: 0},
{o: 185.468, f: 198.612, l: "F", a: 1},
{o: 198.612, f: 211.488, l: "F", a: 0},
{o: 211.488, f: 228.424, l: "F", a: 1},
{o: 228.424, f: 239.148, l: "B", a: 0},
{o: 239.148, f: 251.92, l: "B", a: 1},
{o: 251.92, f: 262.88, l: "B", a: 0},
{o: 262.88, f: 282.164, l: "B", a: 1},
{o: 282.164, f: 295.264, l: "B", a: 0},
{o: 295.264, f: 311.692, l: "D", a: 1},
{o: 311.692, f: 326.708, l: "D", a: 0},
{o: 326.708, f: 337.128, l: "C", a: 1},
{o: 337.128, f: 347.548, l: "E", a: 0},
{o: 347.548, f: 358.668, l: "H", a: 1},
{o: 358.668, f: 369.82, l: "I", a: 0},
{o: 369.82, f: 386.388, l: "J", a: 1}],
[{o: 0.208, f: 10.38, l: "G", a: 0},
{o: 10.38, f: 20.404, l: "F", a: 1},
{o: 20.404, f: 30.764, l: "F", a: 0},
{o: 30.764, f: 40.728, l: "H", a: 1},
{o: 40.728, f: 51.968, l: "F", a: 0},
{o: 51.968, f: 66.804, l: "I", a: 1},
{o: 66.804, f: 75.184, l: "J", a: 0},
{o: 75.184, f: 84.664, l: "K", a: 1},
{o: 84.664, f: 94.236, l: "C", a: 0},
{o: 94.236, f: 114.816, l: "C", a: 1},
{o: 114.816, f: 128.092, l: "C", a: 0},
{o: 128.092, f: 140.212, l: "C", a: 1},
{o: 140.212, f: 151.16, l: "D", a: 0},
{o: 151.16, f: 164.292, l: "D", a: 1},
{o: 164.292, f: 185.468, l: "E", a: 0},
{o: 185.468, f: 198.612, l: "E", a: 1},
{o: 198.612, f: 211.488, l: "E", a: 0},
{o: 211.488, f: 228.424, l: "E", a: 1},
{o: 228.424, f: 239.148, l: "B", a: 0},
{o: 239.148, f: 251.92, l: "B", a: 1},
{o: 251.92, f: 262.88, l: "B", a: 0},
{o: 262.88, f: 282.164, l: "A", a: 1},
{o: 282.164, f: 295.264, l: "A", a: 0},
{o: 295.264, f: 311.692, l: "L", a: 1},
{o: 311.692, f: 326.708, l: "M", a: 0},
{o: 326.708, f: 337.128, l: "N", a: 1},
{o: 337.128, f: 347.548, l: "O", a: 0},
{o: 347.548, f: 358.668, l: "P", a: 1},
{o: 358.668, f: 369.82, l: "Q", a: 0},
{o: 369.82, f: 386.388, l: "R", a: 1}],
[{o: 0.307, f: 8.64, l: "4", a: 0},
{o: 8.64, f: 29.227, l: "1", a: 1},
{o: 29.227, f: 40.213, l: "2", a: 0},
{o: 40.213, f: 57.253, l: "1", a: 1},
{o: 57.253, f: 79.413, l: "2", a: 0},
{o: 79.413, f: 84.827, l: "1", a: 1},
{o: 84.827, f: 127.253, l: "2", a: 0},
{o: 127.253, f: 131.733, l: "7", a: 1},
{o: 131.733, f: 139.227, l: "2", a: 0},
{o: 139.227, f: 144.8, l: "6", a: 1},
{o: 144.8, f: 227.6, l: "1", a: 0},
{o: 227.6, f: 315.173, l: "3", a: 1},
{o: 315.173, f: 335.467, l: "1", a: 0},
{o: 335.467, f: 346.693, l: "2", a: 1},
{o: 346.693, f: 367.947, l: "1", a: 0},
{o: 367.947, f: 371.64, l: "2", a: 1},
{o: 371.64, f: 380.133, l: "1", a: 0},
{o: 380.133, f: 385.6, l: "5", a: 1},
{o: 385.6, f: 387.933, l: "8", a: 0}],
[{o: 0, f: 16.39, l: "a", a: 0},
{o: 16.39, f: 50.66, l: "b", a: 1},
{o: 50.66, f: 98.34, l: "c", a: 0},
{o: 98.34, f: 128.885, l: "d", a: 1},
{o: 128.885, f: 172.84, l: "d", a: 0},
{o: 172.84, f: 322.585, l: "e", a: 1},
{o: 322.585, f: 358.345, l: "b", a: 0},
{o: 358.345, f: 388.145, l: "f", a: 1},
{o: 388.145, f: 389.635, l: "g", a: 0}],
[{o: 0, f: 10.739, l: "n1", a: 0},
{o: 10.739, f: 21.072, l: "A", a: 1},
{o: 21.072, f: 30.105, l: "A", a: 0},
{o: 30.105, f: 42.086, l: "n3", a: 1},
{o: 42.086, f: 51.316, l: "A", a: 0},
{o: 51.316, f: 151.882, l: "n4", a: 1},
{o: 151.882, f: 161.541, l: "B", a: 0},
{o: 161.541, f: 196.232, l: "n5", a: 1},
{o: 196.232, f: 205.938, l: "B", a: 0},
{o: 205.938, f: 316.372, l: "n6", a: 1},
{o: 316.372, f: 327.065, l: "A", a: 0},
{o: 327.065, f: 336.376, l: "A", a: 1},
{o: 336.376, f: 348.601, l: "n8", a: 0},
{o: 348.601, f: 357.982, l: "A", a: 1},
{o: 357.982, f: 389.77, l: "n9", a: 0}],
[{o: 0, f: 0.208, l: "G", a: 0},
{o: 0.208, f: 10.704, l: "F", a: 1},
{o: 10.704, f: 51.968, l: "E", a: 0},
{o: 51.968, f: 75.544, l: "F", a: 1},
{o: 75.544, f: 146.352, l: "E", a: 0},
{o: 146.352, f: 166.02, l: "F", a: 1},
{o: 166.02, f: 181.956, l: "E", a: 0},
{o: 181.956, f: 253.996, l: "F", a: 1},
{o: 253.996, f: 386.388, l: "E", a: 0},
{o: 386.388, f: 389.983, l: "G", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000649.ogg";

var artist = "Cannonball Adderley";

var track = "Azule Serape";
