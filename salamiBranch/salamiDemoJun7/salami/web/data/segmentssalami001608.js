var data = [
[{o: 0.02, f: 3.389, l: "A", a: 0},
{o: 3.389, f: 6.771, l: "A", a: 1},
{o: 6.771, f: 21.864, l: "B", a: 0},
{o: 21.864, f: 36.58, l: "B", a: 1},
{o: 36.58, f: 52.501, l: "C", a: 0},
{o: 52.501, f: 60.09, l: "D", a: 1}],
[{o: 0.004, f: 5.636, l: "C", a: 0},
{o: 5.636, f: 15.22, l: "B", a: 1},
{o: 15.22, f: 20.708, l: "B", a: 0},
{o: 20.708, f: 29.008, l: "C", a: 1},
{o: 29.008, f: 35.22, l: "B", a: 0},
{o: 35.22, f: 40.46, l: "B", a: 1},
{o: 40.46, f: 46.284, l: "A", a: 0},
{o: 46.284, f: 52.712, l: "A", a: 1},
{o: 52.712, f: 59.988, l: "D", a: 0}],
[{o: 0.004, f: 5.636, l: "A", a: 0},
{o: 5.636, f: 15.22, l: "B", a: 1},
{o: 15.22, f: 20.708, l: "B", a: 0},
{o: 20.708, f: 29.008, l: "C", a: 1},
{o: 29.008, f: 35.22, l: "B", a: 0},
{o: 35.22, f: 40.46, l: "B", a: 1},
{o: 40.46, f: 46.284, l: "D", a: 0},
{o: 46.284, f: 52.712, l: "E", a: 1},
{o: 52.712, f: 59.988, l: "F", a: 0}],
[{o: 0.813, f: 6.413, l: "6", a: 0},
{o: 6.413, f: 14.827, l: "4", a: 1},
{o: 14.827, f: 21.12, l: "5", a: 0},
{o: 21.12, f: 35.933, l: "2", a: 1},
{o: 35.933, f: 51.76, l: "1", a: 0},
{o: 51.76, f: 59.987, l: "3", a: 1}],
[{o: 0, f: 18.625, l: "a", a: 0},
{o: 18.625, f: 24.585, l: "b", a: 1},
{o: 24.585, f: 32.78, l: "b", a: 0},
{o: 32.78, f: 37.25, l: "c", a: 1},
{o: 37.25, f: 42.465, l: "d", a: 0},
{o: 42.465, f: 50.66, l: "e", a: 1},
{o: 50.66, f: 58.855, l: "d", a: 0}],
[{o: 0, f: 59.942, l: "A", a: 0},
{o: 0.023, f: 59.861, l: "A", a: 1}],
[{o: 0, f: 0.008, l: "H", a: 0},
{o: 0.008, f: 9.672, l: "G", a: 1},
{o: 9.672, f: 24.156, l: "F", a: 0},
{o: 24.156, f: 40.484, l: "D", a: 1},
{o: 40.484, f: 50.376, l: "E", a: 0},
{o: 50.376, f: 59.908, l: "C", a: 1},
{o: 59.908, f: 60.083, l: "H", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001608.ogg";
