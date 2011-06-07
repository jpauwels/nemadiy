var data = [
[{o: 0.58, f: 8.391, l: "A'", a: 0},
{o: 8.391, f: 45.569, l: "A", a: 1},
{o: 45.569, f: 75.051, l: "A", a: 0},
{o: 75.051, f: 92.417, l: "A'", a: 1},
{o: 92.417, f: 125.295, l: "A''", a: 0},
{o: 125.295, f: 159.208, l: "A", a: 1}],
[{o: 0.396, f: 8.92, l: "D", a: 0},
{o: 8.92, f: 23.996, l: "A", a: 1},
{o: 23.996, f: 35.78, l: "C", a: 0},
{o: 35.78, f: 48.612, l: "A", a: 1},
{o: 48.612, f: 57.804, l: "C", a: 0},
{o: 57.804, f: 73.628, l: "C", a: 1},
{o: 73.628, f: 88.436, l: "C", a: 0},
{o: 88.436, f: 101.972, l: "C", a: 1},
{o: 101.972, f: 115.916, l: "D", a: 0},
{o: 115.916, f: 133.788, l: "A", a: 1},
{o: 133.788, f: 147.576, l: "C", a: 0},
{o: 147.576, f: 156.072, l: "A", a: 1}],
[{o: 0.396, f: 8.92, l: "D", a: 0},
{o: 8.92, f: 23.996, l: "A", a: 1},
{o: 23.996, f: 35.78, l: "C", a: 0},
{o: 35.78, f: 48.612, l: "B", a: 1},
{o: 48.612, f: 57.804, l: "C", a: 0},
{o: 57.804, f: 73.628, l: "C", a: 1},
{o: 73.628, f: 88.436, l: "E", a: 0},
{o: 88.436, f: 101.972, l: "C", a: 1},
{o: 101.972, f: 115.916, l: "D", a: 0},
{o: 115.916, f: 133.788, l: "B", a: 1},
{o: 133.788, f: 147.576, l: "F", a: 0},
{o: 147.576, f: 156.072, l: "A", a: 1}],
[{o: 0.573, f: 2.96, l: "8", a: 0},
{o: 2.96, f: 22.68, l: "5", a: 1},
{o: 22.68, f: 30.56, l: "3", a: 0},
{o: 30.56, f: 40.627, l: "1", a: 1},
{o: 40.627, f: 48.627, l: "2", a: 0},
{o: 48.627, f: 55.213, l: "3", a: 1},
{o: 55.213, f: 64.413, l: "1", a: 0},
{o: 64.413, f: 70.413, l: "2", a: 1},
{o: 70.413, f: 81.827, l: "6", a: 0},
{o: 81.827, f: 89.787, l: "4", a: 1},
{o: 89.787, f: 97.72, l: "1", a: 0},
{o: 97.72, f: 107.907, l: "2", a: 1},
{o: 107.907, f: 121.907, l: "1", a: 0},
{o: 121.907, f: 133.16, l: "4", a: 1},
{o: 133.16, f: 145.88, l: "1", a: 0},
{o: 145.88, f: 153.12, l: "3", a: 1},
{o: 153.12, f: 159.107, l: "7", a: 0}],
[{o: 0, f: 8.195, l: "a", a: 0},
{o: 8.195, f: 17.135, l: "b", a: 1},
{o: 17.135, f: 29.055, l: "c", a: 0},
{o: 29.055, f: 41.72, l: "b", a: 1},
{o: 41.72, f: 50.66, l: "b", a: 0},
{o: 50.66, f: 59.6, l: "c", a: 1},
{o: 59.6, f: 73.01, l: "b", a: 0},
{o: 73.01, f: 81.95, l: "b", a: 1},
{o: 81.95, f: 90.89, l: "c", a: 0},
{o: 90.89, f: 105.045, l: "b", a: 1},
{o: 105.045, f: 111.75, l: "d", a: 0},
{o: 111.75, f: 120.69, l: "b", a: 1},
{o: 120.69, f: 129.63, l: "c", a: 0},
{o: 129.63, f: 143.785, l: "b", a: 1},
{o: 143.785, f: 167.625, l: "e", a: 0}],
[{o: 0, f: 1.022, l: "n1", a: 0},
{o: 1.022, f: 14.605, l: "A", a: 1},
{o: 14.605, f: 40.577, l: "n2", a: 0},
{o: 40.577, f: 49.284, l: "A", a: 1},
{o: 49.284, f: 62.218, l: "n3", a: 0},
{o: 62.218, f: 77.172, l: "A", a: 1},
{o: 77.172, f: 94.842, l: "A", a: 0},
{o: 94.842, f: 109.529, l: "A", a: 1},
{o: 109.529, f: 121.266, l: "n6", a: 0},
{o: 121.266, f: 135.07, l: "A", a: 1},
{o: 135.07, f: 159.057, l: "n7", a: 0}],
[{o: 0, f: 0.396, l: "F", a: 0},
{o: 0.396, f: 33.716, l: "E", a: 1},
{o: 33.716, f: 90.032, l: "B", a: 0},
{o: 90.032, f: 117.824, l: "E", a: 1},
{o: 117.824, f: 142.3, l: "B", a: 0},
{o: 142.3, f: 156.072, l: "D", a: 1},
{o: 156.072, f: 159.191, l: "F", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001268.ogg";
