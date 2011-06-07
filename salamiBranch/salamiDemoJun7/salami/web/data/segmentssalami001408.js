var data = [
[{o: 0.511, f: 15.254, l: "A", a: 0},
{o: 15.254, f: 44.326, l: "B", a: 1},
{o: 44.326, f: 96.672, l: "E", a: 0},
{o: 96.672, f: 125.654, l: "B", a: 1},
{o: 125.654, f: 186.646, l: "E", a: 0},
{o: 186.646, f: 218.503, l: "B", a: 1},
{o: 218.503, f: 321.896, l: "E", a: 0},
{o: 321.896, f: 443.413, l: "L", a: 1},
{o: 443.413, f: 663.014, l: "Q", a: 0}],
[{o: 0, f: 663.015, l: "A", a: 0}],
[{o: 0, f: 663.015, l: "A", a: 0}],
[{o: 0.493, f: 20.2, l: "1", a: 0},
{o: 20.2, f: 44.627, l: "2", a: 1},
{o: 44.627, f: 72.733, l: "1", a: 0},
{o: 72.733, f: 82.187, l: "2", a: 1},
{o: 82.187, f: 87.56, l: "3", a: 0},
{o: 87.56, f: 96.813, l: "1", a: 1},
{o: 96.813, f: 101.68, l: "2", a: 0},
{o: 101.68, f: 107.027, l: "5", a: 1},
{o: 107.027, f: 116.12, l: "2", a: 0},
{o: 116.12, f: 122.707, l: "8", a: 1},
{o: 122.707, f: 139.453, l: "1", a: 0},
{o: 139.453, f: 163.96, l: "4", a: 1},
{o: 163.96, f: 218.08, l: "2", a: 0},
{o: 218.08, f: 231.187, l: "5", a: 1},
{o: 231.187, f: 236.2, l: "4", a: 0},
{o: 236.2, f: 257.107, l: "5", a: 1},
{o: 257.107, f: 266.253, l: "2", a: 0},
{o: 266.253, f: 272.6, l: "1", a: 1},
{o: 272.6, f: 285.387, l: "2", a: 0},
{o: 285.387, f: 293.2, l: "7", a: 1},
{o: 293.2, f: 306.067, l: "3", a: 0},
{o: 306.067, f: 312.333, l: "7", a: 1},
{o: 312.333, f: 321.987, l: "1", a: 0},
{o: 321.987, f: 329.547, l: "4", a: 1},
{o: 329.547, f: 336, l: "3", a: 0},
{o: 336, f: 343.32, l: "5", a: 1},
{o: 343.32, f: 411.987, l: "3", a: 0},
{o: 411.987, f: 417.24, l: "8", a: 1},
{o: 417.24, f: 426.253, l: "2", a: 0},
{o: 426.253, f: 443.24, l: "1", a: 1},
{o: 443.24, f: 470.28, l: "2", a: 0},
{o: 470.28, f: 480.973, l: "6", a: 1},
{o: 480.973, f: 495.933, l: "4", a: 0},
{o: 495.933, f: 504.173, l: "5", a: 1},
{o: 504.173, f: 515.12, l: "4", a: 0},
{o: 515.12, f: 578.387, l: "1", a: 1},
{o: 578.387, f: 589.453, l: "2", a: 0},
{o: 589.453, f: 596.44, l: "3", a: 1},
{o: 596.44, f: 644.293, l: "1", a: 0},
{o: 644.293, f: 653.667, l: "6", a: 1}],
[{o: 0, f: 64.815, l: "a", a: 0},
{o: 64.815, f: 146.02, l: "a", a: 1},
{o: 146.02, f: 657.09, l: "b", a: 0},
{o: 657.09, f: 663.795, l: "c", a: 1}],
[{o: 0, f: 8.568, l: "n1", a: 0},
{o: 8.568, f: 18.367, l: "A", a: 1},
{o: 18.367, f: 92.148, l: "n2", a: 0},
{o: 92.148, f: 102.005, l: "B", a: 1},
{o: 102.005, f: 181.638, l: "n3", a: 0},
{o: 181.638, f: 192.412, l: "B", a: 1},
{o: 192.412, f: 397.99, l: "n4", a: 0},
{o: 397.99, f: 409.356, l: "C", a: 1},
{o: 409.356, f: 438.486, l: "n5", a: 0},
{o: 438.486, f: 449.62, l: "B", a: 1},
{o: 449.62, f: 554.504, l: "n6", a: 0},
{o: 554.504, f: 562.979, l: "A", a: 1},
{o: 562.979, f: 591.923, l: "n7", a: 0},
{o: 591.923, f: 605.275, l: "A", a: 1},
{o: 605.275, f: 614.028, l: "C", a: 0},
{o: 614.028, f: 635.008, l: "n9", a: 1},
{o: 635.008, f: 645.248, l: "A", a: 0},
{o: 645.248, f: 662.837, l: "n10", a: 1}],
[{o: 0, f: 0.052, l: "J", a: 0},
{o: 0.052, f: 7.72, l: "C", a: 1},
{o: 7.72, f: 77.216, l: "F", a: 0},
{o: 77.216, f: 115.424, l: "I", a: 1},
{o: 115.424, f: 159.008, l: "H", a: 0},
{o: 159.008, f: 170.008, l: "C", a: 1},
{o: 170.008, f: 178.072, l: "A", a: 0},
{o: 178.072, f: 203.028, l: "F", a: 1},
{o: 203.028, f: 288.82, l: "A", a: 0},
{o: 288.82, f: 328.86, l: "D", a: 1},
{o: 328.86, f: 351.372, l: "C", a: 0},
{o: 351.372, f: 363.18, l: "F", a: 1},
{o: 363.18, f: 378.228, l: "A", a: 0},
{o: 378.228, f: 383.904, l: "F", a: 1},
{o: 383.904, f: 400.44, l: "H", a: 0},
{o: 400.44, f: 497.98, l: "F", a: 1},
{o: 497.98, f: 529.848, l: "A", a: 0},
{o: 529.848, f: 559.116, l: "F", a: 1},
{o: 559.116, f: 589.108, l: "C", a: 0},
{o: 589.108, f: 602.904, l: "H", a: 1},
{o: 602.904, f: 652.268, l: "F", a: 0},
{o: 652.268, f: 663.015, l: "J", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001408.ogg";
