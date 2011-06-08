var data = [
[{o: 0.279, f: 89.404, l: "A", a: 0},
{o: 89.404, f: 130.302, l: "B", a: 1},
{o: 130.302, f: 275.2, l: "C", a: 0},
{o: 275.2, f: 340.497, l: "D", a: 1},
{o: 340.497, f: 523.755, l: "E", a: 0},
{o: 523.755, f: 663.837, l: "F", a: 1},
{o: 663.837, f: 673.894, l: "B'", a: 0},
{o: 673.894, f: 704.583, l: "A'", a: 1}],
[{o: 0.072, f: 15.676, l: "C", a: 0},
{o: 15.676, f: 41.932, l: "C", a: 1},
{o: 41.932, f: 71.22, l: "C", a: 0},
{o: 71.22, f: 88.896, l: "C", a: 1},
{o: 88.896, f: 118.028, l: "C", a: 0},
{o: 118.028, f: 139.376, l: "C", a: 1},
{o: 139.376, f: 155.548, l: "A", a: 0},
{o: 155.548, f: 178.964, l: "C", a: 1},
{o: 178.964, f: 212.548, l: "C", a: 0},
{o: 212.548, f: 239.756, l: "C", a: 1},
{o: 239.756, f: 264.28, l: "C", a: 0},
{o: 264.28, f: 288.9, l: "C", a: 1},
{o: 288.9, f: 327.1, l: "C", a: 0},
{o: 327.1, f: 364.356, l: "C", a: 1},
{o: 364.356, f: 399, l: "C", a: 0},
{o: 399, f: 419.424, l: "C", a: 1},
{o: 419.424, f: 442.852, l: "C", a: 0},
{o: 442.852, f: 467.336, l: "C", a: 1},
{o: 467.336, f: 501.7, l: "C", a: 0},
{o: 501.7, f: 530.176, l: "C", a: 1},
{o: 530.176, f: 554.78, l: "C", a: 0},
{o: 554.78, f: 571.46, l: "C", a: 1},
{o: 571.46, f: 606.888, l: "C", a: 0},
{o: 606.888, f: 631.964, l: "C", a: 1},
{o: 631.964, f: 671.224, l: "C", a: 0},
{o: 671.224, f: 695.904, l: "C", a: 1}],
[{o: 0.072, f: 15.676, l: "C", a: 0},
{o: 15.676, f: 41.932, l: "A", a: 1},
{o: 41.932, f: 71.22, l: "A", a: 0},
{o: 71.22, f: 88.896, l: "A", a: 1},
{o: 88.896, f: 118.028, l: "B", a: 0},
{o: 118.028, f: 139.376, l: "B", a: 1},
{o: 139.376, f: 155.548, l: "D", a: 0},
{o: 155.548, f: 178.964, l: "F", a: 1},
{o: 178.964, f: 212.548, l: "G", a: 0},
{o: 212.548, f: 239.756, l: "B", a: 1},
{o: 239.756, f: 264.28, l: "B", a: 0},
{o: 264.28, f: 288.9, l: "B", a: 1},
{o: 288.9, f: 327.1, l: "B", a: 0},
{o: 327.1, f: 364.356, l: "B", a: 1},
{o: 364.356, f: 399, l: "B", a: 0},
{o: 399, f: 419.424, l: "H", a: 1},
{o: 419.424, f: 442.852, l: "B", a: 0},
{o: 442.852, f: 467.336, l: "A", a: 1},
{o: 467.336, f: 501.7, l: "E", a: 0},
{o: 501.7, f: 530.176, l: "I", a: 1},
{o: 530.176, f: 554.78, l: "J", a: 0},
{o: 554.78, f: 571.46, l: "K", a: 1},
{o: 571.46, f: 606.888, l: "L", a: 0},
{o: 606.888, f: 631.964, l: "A", a: 1},
{o: 631.964, f: 671.224, l: "A", a: 0},
{o: 671.224, f: 695.904, l: "E", a: 1}],
[{o: 0.76, f: 14.387, l: "4", a: 0},
{o: 14.387, f: 35.373, l: "1", a: 1},
{o: 35.373, f: 51.933, l: "7", a: 0},
{o: 51.933, f: 75.32, l: "3", a: 1},
{o: 75.32, f: 87.893, l: "7", a: 0},
{o: 87.893, f: 130.587, l: "2", a: 1},
{o: 130.587, f: 204.72, l: "4", a: 0},
{o: 204.72, f: 313.667, l: "3", a: 1},
{o: 313.667, f: 349.973, l: "2", a: 0},
{o: 349.973, f: 380.933, l: "3", a: 1},
{o: 380.933, f: 391.893, l: "6", a: 0},
{o: 391.893, f: 403.067, l: "3", a: 1},
{o: 403.067, f: 418.6, l: "2", a: 0},
{o: 418.6, f: 429.773, l: "1", a: 1},
{o: 429.773, f: 446.053, l: "6", a: 0},
{o: 446.053, f: 456.987, l: "1", a: 1},
{o: 456.987, f: 468.827, l: "6", a: 0},
{o: 468.827, f: 522.6, l: "2", a: 1},
{o: 522.6, f: 556.747, l: "1", a: 0},
{o: 556.747, f: 573.76, l: "5", a: 1},
{o: 573.76, f: 615.693, l: "1", a: 0},
{o: 615.693, f: 623.76, l: "5", a: 1},
{o: 623.76, f: 646.973, l: "1", a: 0},
{o: 646.973, f: 663.533, l: "5", a: 1},
{o: 663.533, f: 674.187, l: "2", a: 0},
{o: 674.187, f: 688.653, l: "1", a: 1},
{o: 688.653, f: 699.627, l: "4", a: 0},
{o: 699.627, f: 704.387, l: "8", a: 1}],
[{o: 0, f: 35.015, l: "a", a: 0},
{o: 35.015, f: 85.675, l: "b", a: 1},
{o: 85.675, f: 674.97, l: "c", a: 0},
{o: 674.97, f: 705.515, l: "a", a: 1}],
[{o: 0, f: 704.203, l: "A", a: 0},
{o: 0.163, f: 704.447, l: "A", a: 1}],
[{o: 0, f: 0.132, l: "K", a: 0},
{o: 0.132, f: 35.084, l: "I", a: 1},
{o: 35.084, f: 65.304, l: "D", a: 0},
{o: 65.304, f: 71.384, l: "A", a: 1},
{o: 71.384, f: 77.06, l: "D", a: 0},
{o: 77.06, f: 83.904, l: "H", a: 1},
{o: 83.904, f: 96.56, l: "I", a: 0},
{o: 96.56, f: 104.328, l: "D", a: 1},
{o: 104.328, f: 193.328, l: "H", a: 0},
{o: 193.328, f: 272.872, l: "J", a: 1},
{o: 272.872, f: 302.776, l: "A", a: 0},
{o: 302.776, f: 323.88, l: "I", a: 1},
{o: 323.88, f: 328.912, l: "E", a: 0},
{o: 328.912, f: 378.848, l: "J", a: 1},
{o: 378.848, f: 446.08, l: "I", a: 0},
{o: 446.08, f: 451.412, l: "J", a: 1},
{o: 451.412, f: 458.896, l: "I", a: 0},
{o: 458.896, f: 474.944, l: "H", a: 1},
{o: 474.944, f: 479.588, l: "I", a: 0},
{o: 479.588, f: 492.948, l: "H", a: 1},
{o: 492.948, f: 507.64, l: "I", a: 0},
{o: 507.64, f: 523.788, l: "H", a: 1},
{o: 523.788, f: 532.128, l: "B", a: 0},
{o: 532.128, f: 543.288, l: "J", a: 1},
{o: 543.288, f: 564.86, l: "D", a: 0},
{o: 564.86, f: 581.256, l: "I", a: 1},
{o: 581.256, f: 609.332, l: "J", a: 0},
{o: 609.332, f: 617.14, l: "A", a: 1},
{o: 617.14, f: 645.78, l: "C", a: 0},
{o: 645.78, f: 656.44, l: "H", a: 1},
{o: 656.44, f: 668.336, l: "G", a: 0},
{o: 668.336, f: 688.812, l: "H", a: 1},
{o: 688.812, f: 699.988, l: "C", a: 0},
{o: 699.988, f: 700.948, l: "B", a: 1},
{o: 700.948, f: 704.576, l: "K", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000281.ogg";

var artist = "Wayne Shorter";

var track = "Genesis";
