var data = [
[{o: 1.871, f: 24.493, l: "A", a: 0},
{o: 24.493, f: 47.282, l: "A", a: 1},
{o: 47.282, f: 79.279, l: "B", a: 0},
{o: 79.279, f: 124.298, l: "B", a: 1}],
[{o: 0.044, f: 4.424, l: "D", a: 0},
{o: 4.424, f: 15.676, l: "D", a: 1},
{o: 15.676, f: 24.652, l: "D", a: 0},
{o: 24.652, f: 34.568, l: "D", a: 1},
{o: 34.568, f: 46.66, l: "D", a: 0},
{o: 46.66, f: 57.564, l: "D", a: 1},
{o: 57.564, f: 67.404, l: "D", a: 0},
{o: 67.404, f: 78.66, l: "D", a: 1},
{o: 78.66, f: 90.796, l: "D", a: 0},
{o: 90.796, f: 99.528, l: "D", a: 1},
{o: 99.528, f: 108.884, l: "A", a: 0},
{o: 108.884, f: 116.228, l: "A", a: 1},
{o: 116.228, f: 124.208, l: "B", a: 0}],
[{o: 0.044, f: 4.424, l: "B", a: 0},
{o: 4.424, f: 15.676, l: "D", a: 1},
{o: 15.676, f: 24.652, l: "C", a: 0},
{o: 24.652, f: 34.568, l: "D", a: 1},
{o: 34.568, f: 46.66, l: "C", a: 0},
{o: 46.66, f: 57.564, l: "A", a: 1},
{o: 57.564, f: 67.404, l: "A", a: 0},
{o: 67.404, f: 78.66, l: "A", a: 1},
{o: 78.66, f: 90.796, l: "A", a: 0},
{o: 90.796, f: 99.528, l: "A", a: 1},
{o: 99.528, f: 108.884, l: "E", a: 0},
{o: 108.884, f: 116.228, l: "F", a: 1},
{o: 116.228, f: 124.208, l: "G", a: 0}],
[{o: 0.493, f: 2.667, l: "8", a: 0},
{o: 2.667, f: 15.853, l: "1", a: 1},
{o: 15.853, f: 27.973, l: "3", a: 0},
{o: 27.973, f: 38.293, l: "1", a: 1},
{o: 38.293, f: 50.907, l: "3", a: 0},
{o: 50.907, f: 59.6, l: "4", a: 1},
{o: 59.6, f: 66.387, l: "2", a: 0},
{o: 66.387, f: 73.76, l: "1", a: 1},
{o: 73.76, f: 78.813, l: "2", a: 0},
{o: 78.813, f: 83.28, l: "7", a: 1},
{o: 83.28, f: 91.427, l: "4", a: 0},
{o: 91.427, f: 99.333, l: "2", a: 1},
{o: 99.333, f: 113.2, l: "5", a: 0},
{o: 113.2, f: 124.2, l: "6", a: 1}],
[{o: 0, f: 8.94, l: "a", a: 0},
{o: 8.94, f: 15.645, l: "a", a: 1},
{o: 15.645, f: 24.585, l: "b", a: 0},
{o: 24.585, f: 31.29, l: "a", a: 1},
{o: 31.29, f: 37.995, l: "a", a: 0},
{o: 37.995, f: 46.935, l: "b", a: 1},
{o: 46.935, f: 55.875, l: "c", a: 0},
{o: 55.875, f: 67.05, l: "d", a: 1},
{o: 67.05, f: 79.715, l: "d", a: 0},
{o: 79.715, f: 96.105, l: "c", a: 1},
{o: 96.105, f: 112.495, l: "d", a: 0},
{o: 112.495, f: 123.67, l: "e", a: 1}],
[{o: 0, f: 2.101, l: "n1", a: 0},
{o: 2.101, f: 24.683, l: "B", a: 1},
{o: 24.683, f: 47.856, l: "B", a: 0},
{o: 47.856, f: 79.842, l: "A", a: 1},
{o: 79.842, f: 111.711, l: "A", a: 0},
{o: 111.711, f: 124.134, l: "n5", a: 1}],
[{o: 0, f: 0.04, l: "F", a: 0},
{o: 0.04, f: 12.484, l: "B", a: 1},
{o: 12.484, f: 22.5, l: "D", a: 0},
{o: 22.5, f: 35.356, l: "B", a: 1},
{o: 35.356, f: 46.776, l: "D", a: 0},
{o: 46.776, f: 55.052, l: "A", a: 1},
{o: 55.052, f: 66.156, l: "E", a: 0},
{o: 66.156, f: 78.968, l: "B", a: 1},
{o: 78.968, f: 86.96, l: "A", a: 0},
{o: 86.96, f: 98.5, l: "E", a: 1},
{o: 98.5, f: 112.08, l: "B", a: 0},
{o: 112.08, f: 124.212, l: "C", a: 1},
{o: 124.212, f: 124.292, l: "F", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001338.ogg";
