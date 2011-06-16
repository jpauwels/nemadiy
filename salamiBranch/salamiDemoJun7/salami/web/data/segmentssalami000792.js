var data = [
[{o: 0.052, f: 18.021, l: "A", a: 0},
{o: 18.021, f: 34.906, l: "B", a: 1},
{o: 34.906, f: 60.509, l: "C", a: 0},
{o: 60.509, f: 77.298, l: "B", a: 1},
{o: 77.298, f: 102.612, l: "C", a: 0},
{o: 102.612, f: 119.274, l: "D", a: 1},
{o: 119.274, f: 135.853, l: "B", a: 0},
{o: 135.853, f: 160.853, l: "C", a: 1},
{o: 160.853, f: 319.93, l: "E", a: 0},
{o: 319.93, f: 336.092, l: "B", a: 1},
{o: 336.092, f: 360.151, l: "C", a: 0},
{o: 360.151, f: 376.04, l: "D", a: 1},
{o: 376.04, f: 392.224, l: "B", a: 0},
{o: 392.224, f: 440.1, l: "C", a: 1},
{o: 440.1, f: 468.913, l: "D", a: 0},
{o: 468.913, f: 481.402, l: "Z", a: 1}],
[{o: 0.016, f: 16.892, l: "C", a: 0},
{o: 16.892, f: 34.372, l: "C", a: 1},
{o: 34.372, f: 45.596, l: "C", a: 0},
{o: 45.596, f: 59.824, l: "C", a: 1},
{o: 59.824, f: 79.392, l: "C", a: 0},
{o: 79.392, f: 97.836, l: "C", a: 1},
{o: 97.836, f: 116.992, l: "C", a: 0},
{o: 116.992, f: 138.484, l: "C", a: 1},
{o: 138.484, f: 160.252, l: "C", a: 0},
{o: 160.252, f: 175.952, l: "C", a: 1},
{o: 175.952, f: 199.984, l: "C", a: 0},
{o: 199.984, f: 222.768, l: "C", a: 1},
{o: 222.768, f: 240.448, l: "C", a: 0},
{o: 240.448, f: 259.144, l: "B", a: 1},
{o: 259.144, f: 282.388, l: "B", a: 0},
{o: 282.388, f: 298.704, l: "C", a: 1},
{o: 298.704, f: 307.616, l: "F", a: 0},
{o: 307.616, f: 319.476, l: "F", a: 1},
{o: 319.476, f: 339.152, l: "C", a: 0},
{o: 339.152, f: 356.72, l: "B", a: 1},
{o: 356.72, f: 367.012, l: "B", a: 0},
{o: 367.012, f: 374.512, l: "B", a: 1},
{o: 374.512, f: 381.572, l: "F", a: 0},
{o: 381.572, f: 391.192, l: "F", a: 1},
{o: 391.192, f: 410.848, l: "B", a: 0},
{o: 410.848, f: 423.584, l: "B", a: 1},
{o: 423.584, f: 438.608, l: "B", a: 0},
{o: 438.608, f: 455.052, l: "B", a: 1},
{o: 455.052, f: 462.112, l: "B", a: 0},
{o: 462.112, f: 472.184, l: "G", a: 1},
{o: 472.184, f: 481.228, l: "G", a: 0}],
[{o: 0.016, f: 16.892, l: "D", a: 0},
{o: 16.892, f: 34.372, l: "E", a: 1},
{o: 34.372, f: 45.596, l: "E", a: 0},
{o: 45.596, f: 59.824, l: "C", a: 1},
{o: 59.824, f: 79.392, l: "E", a: 0},
{o: 79.392, f: 97.836, l: "C", a: 1},
{o: 97.836, f: 116.992, l: "G", a: 0},
{o: 116.992, f: 138.484, l: "C", a: 1},
{o: 138.484, f: 160.252, l: "C", a: 0},
{o: 160.252, f: 175.952, l: "C", a: 1},
{o: 175.952, f: 199.984, l: "C", a: 0},
{o: 199.984, f: 222.768, l: "C", a: 1},
{o: 222.768, f: 240.448, l: "C", a: 0},
{o: 240.448, f: 259.144, l: "B", a: 1},
{o: 259.144, f: 282.388, l: "B", a: 0},
{o: 282.388, f: 298.704, l: "C", a: 1},
{o: 298.704, f: 307.616, l: "F", a: 0},
{o: 307.616, f: 319.476, l: "F", a: 1},
{o: 319.476, f: 339.152, l: "C", a: 0},
{o: 339.152, f: 356.72, l: "A", a: 1},
{o: 356.72, f: 367.012, l: "H", a: 0},
{o: 367.012, f: 374.512, l: "I", a: 1},
{o: 374.512, f: 381.572, l: "J", a: 0},
{o: 381.572, f: 391.192, l: "K", a: 1},
{o: 391.192, f: 410.848, l: "A", a: 0},
{o: 410.848, f: 423.584, l: "A", a: 1},
{o: 423.584, f: 438.608, l: "A", a: 0},
{o: 438.608, f: 455.052, l: "L", a: 1},
{o: 455.052, f: 462.112, l: "M", a: 0},
{o: 462.112, f: 472.184, l: "N", a: 1},
{o: 472.184, f: 481.228, l: "O", a: 0}],
[{o: 0.493, f: 13.493, l: "8", a: 0},
{o: 13.493, f: 52.8, l: "3", a: 1},
{o: 52.8, f: 59.093, l: "4", a: 0},
{o: 59.093, f: 72.347, l: "3", a: 1},
{o: 72.347, f: 80.64, l: "4", a: 0},
{o: 80.64, f: 116.773, l: "1", a: 1},
{o: 116.773, f: 134.507, l: "3", a: 0},
{o: 134.507, f: 199.733, l: "1", a: 1},
{o: 199.733, f: 208.213, l: "4", a: 0},
{o: 208.213, f: 233.96, l: "1", a: 1},
{o: 233.96, f: 240.427, l: "6", a: 0},
{o: 240.427, f: 279.12, l: "5", a: 1},
{o: 279.12, f: 292.027, l: "1", a: 0},
{o: 292.027, f: 299.947, l: "4", a: 1},
{o: 299.947, f: 320.267, l: "2", a: 0},
{o: 320.267, f: 334.853, l: "1", a: 1},
{o: 334.853, f: 374.8, l: "2", a: 0},
{o: 374.8, f: 388.933, l: "3", a: 1},
{o: 388.933, f: 395.093, l: "4", a: 0},
{o: 395.093, f: 459.587, l: "2", a: 1},
{o: 459.587, f: 467.547, l: "6", a: 0},
{o: 467.547, f: 481.133, l: "7", a: 1}],
[{o: 0, f: 33.525, l: "a", a: 0},
{o: 33.525, f: 57.365, l: "b", a: 1},
{o: 57.365, f: 100.575, l: "c", a: 0},
{o: 100.575, f: 160.175, l: "c", a: 1},
{o: 160.175, f: 295.765, l: "d", a: 0},
{o: 295.765, f: 319.605, l: "b", a: 1},
{o: 319.605, f: 362.815, l: "c", a: 0},
{o: 362.815, f: 415.71, l: "c", a: 1},
{o: 415.71, f: 481.27, l: "e", a: 0}],
[{o: 0, f: 2.078, l: "n1", a: 0},
{o: 2.078, f: 19.029, l: "B", a: 1},
{o: 19.029, f: 29.675, l: "n2", a: 0},
{o: 29.675, f: 59.327, l: "A", a: 1},
{o: 59.327, f: 66.734, l: "n3", a: 0},
{o: 66.734, f: 83.673, l: "C", a: 1},
{o: 83.673, f: 103.607, l: "n4", a: 0},
{o: 103.607, f: 120.128, l: "B", a: 1},
{o: 120.128, f: 130.635, l: "n5", a: 0},
{o: 130.635, f: 159.8, l: "A", a: 1},
{o: 159.8, f: 166.951, l: "n6", a: 0},
{o: 166.951, f: 183.043, l: "C", a: 1},
{o: 183.043, f: 331.14, l: "n7", a: 0},
{o: 331.14, f: 361.14, l: "A", a: 1},
{o: 361.14, f: 377.104, l: "B", a: 0},
{o: 377.104, f: 387.216, l: "n9", a: 1},
{o: 387.216, f: 415.335, l: "A", a: 0},
{o: 415.335, f: 481.164, l: "n10", a: 1}],
[{o: 0, f: 0.044, l: "H", a: 0},
{o: 0.044, f: 25.364, l: "D", a: 1},
{o: 25.364, f: 40.536, l: "C", a: 0},
{o: 40.536, f: 68.256, l: "B", a: 1},
{o: 68.256, f: 82.864, l: "C", a: 0},
{o: 82.864, f: 199.74, l: "B", a: 1},
{o: 199.74, f: 224.256, l: "G", a: 0},
{o: 224.256, f: 236.976, l: "B", a: 1},
{o: 236.976, f: 266.344, l: "G", a: 0},
{o: 266.344, f: 326.576, l: "B", a: 1},
{o: 326.576, f: 343.436, l: "C", a: 0},
{o: 343.436, f: 382.396, l: "B", a: 1},
{o: 382.396, f: 399.864, l: "C", a: 0},
{o: 399.864, f: 462.116, l: "B", a: 1},
{o: 462.116, f: 480.664, l: "G", a: 0},
{o: 480.664, f: 481.22, l: "D", a: 1},
{o: 481.22, f: 481.303, l: "H", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000792.ogg";