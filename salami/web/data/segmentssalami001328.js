var data = [
[{o: 0, f: 0.65, l: "Z", a: 0},
{o: 0.65, f: 5.356, l: "A", a: 1},
{o: 5.356, f: 14.511, l: "B", a: 0},
{o: 14.511, f: 33.874, l: "B", a: 1},
{o: 33.874, f: 53.147, l: "B", a: 0},
{o: 53.147, f: 67.855, l: "C", a: 1},
{o: 67.855, f: 87.226, l: "B", a: 0},
{o: 87.226, f: 106.178, l: "B", a: 1},
{o: 106.178, f: 120.822, l: "C", a: 0},
{o: 120.822, f: 140.137, l: "B", a: 1},
{o: 140.137, f: 152.418, l: "B", a: 0},
{o: 152.418, f: 202.527, l: "Z", a: 1}],
[{o: 0.012, f: 6.024, l: "B", a: 0},
{o: 6.024, f: 19.004, l: "B", a: 1},
{o: 19.004, f: 28.02, l: "B", a: 0},
{o: 28.02, f: 34.304, l: "B", a: 1},
{o: 34.304, f: 40.76, l: "B", a: 0},
{o: 40.76, f: 50.98, l: "B", a: 1},
{o: 50.98, f: 62.588, l: "B", a: 0},
{o: 62.588, f: 74.236, l: "B", a: 1},
{o: 74.236, f: 79.72, l: "B", a: 0},
{o: 79.72, f: 86.36, l: "B", a: 1},
{o: 86.36, f: 92.612, l: "B", a: 0},
{o: 92.612, f: 100.86, l: "B", a: 1},
{o: 100.86, f: 110.128, l: "B", a: 0},
{o: 110.128, f: 116.804, l: "B", a: 1},
{o: 116.804, f: 125.652, l: "B", a: 0},
{o: 125.652, f: 136.756, l: "B", a: 1},
{o: 136.756, f: 145.928, l: "B", a: 0},
{o: 145.928, f: 151.16, l: "B", a: 1},
{o: 151.16, f: 161.892, l: "B", a: 0},
{o: 161.892, f: 172.328, l: "B", a: 1},
{o: 172.328, f: 180.18, l: "B", a: 0},
{o: 180.18, f: 187.7, l: "B", a: 1},
{o: 187.7, f: 193.988, l: "B", a: 0},
{o: 193.988, f: 202.36, l: "A", a: 1}],
[{o: 0.012, f: 6.024, l: "A", a: 0},
{o: 6.024, f: 19.004, l: "D", a: 1},
{o: 19.004, f: 28.02, l: "G", a: 0},
{o: 28.02, f: 34.304, l: "D", a: 1},
{o: 34.304, f: 40.76, l: "D", a: 0},
{o: 40.76, f: 50.98, l: "C", a: 1},
{o: 50.98, f: 62.588, l: "B", a: 0},
{o: 62.588, f: 74.236, l: "D", a: 1},
{o: 74.236, f: 79.72, l: "D", a: 0},
{o: 79.72, f: 86.36, l: "D", a: 1},
{o: 86.36, f: 92.612, l: "B", a: 0},
{o: 92.612, f: 100.86, l: "B", a: 1},
{o: 100.86, f: 110.128, l: "B", a: 0},
{o: 110.128, f: 116.804, l: "D", a: 1},
{o: 116.804, f: 125.652, l: "D", a: 0},
{o: 125.652, f: 136.756, l: "E", a: 1},
{o: 136.756, f: 145.928, l: "E", a: 0},
{o: 145.928, f: 151.16, l: "F", a: 1},
{o: 151.16, f: 161.892, l: "H", a: 0},
{o: 161.892, f: 172.328, l: "C", a: 1},
{o: 172.328, f: 180.18, l: "I", a: 0},
{o: 180.18, f: 187.7, l: "F", a: 1},
{o: 187.7, f: 193.988, l: "J", a: 0},
{o: 193.988, f: 202.36, l: "K", a: 1}],
[{o: 0.493, f: 4.827, l: "8", a: 0},
{o: 4.827, f: 48.893, l: "2", a: 1},
{o: 48.893, f: 65.373, l: "1", a: 0},
{o: 65.373, f: 75.787, l: "2", a: 1},
{o: 75.787, f: 118.987, l: "1", a: 0},
{o: 118.987, f: 128.64, l: "2", a: 1},
{o: 128.64, f: 140.653, l: "1", a: 0},
{o: 140.653, f: 150.68, l: "5", a: 1},
{o: 150.68, f: 162.493, l: "3", a: 0},
{o: 162.493, f: 171.76, l: "6", a: 1},
{o: 171.76, f: 182.36, l: "3", a: 0},
{o: 182.36, f: 194.8, l: "4", a: 1},
{o: 194.8, f: 202.36, l: "7", a: 0}],
[{o: 0, f: 11.175, l: "a", a: 0},
{o: 11.175, f: 31.29, l: "b", a: 1},
{o: 31.29, f: 52.15, l: "b", a: 0},
{o: 52.15, f: 67.05, l: "c", a: 1},
{o: 67.05, f: 87.165, l: "b", a: 0},
{o: 87.165, f: 108.025, l: "b", a: 1},
{o: 108.025, f: 120.69, l: "c", a: 0},
{o: 120.69, f: 140.06, l: "b", a: 1},
{o: 140.06, f: 201.895, l: "d", a: 0}],
[{o: 0, f: 16.684, l: "n1", a: 0},
{o: 16.684, f: 36.003, l: "A", a: 1},
{o: 36.003, f: 55.31, l: "A", a: 0},
{o: 55.31, f: 69.985, l: "B", a: 1},
{o: 69.985, f: 89.397, l: "A", a: 0},
{o: 89.397, f: 108.309, l: "A", a: 1},
{o: 108.309, f: 122.961, l: "B", a: 0},
{o: 122.961, f: 142.176, l: "A", a: 1},
{o: 142.176, f: 202.153, l: "n2", a: 0}],
[{o: 0, f: 0.012, l: "E", a: 0},
{o: 0.012, f: 35.224, l: "B", a: 1},
{o: 35.224, f: 57.4, l: "C", a: 0},
{o: 57.4, f: 69.064, l: "B", a: 1},
{o: 69.064, f: 79.1, l: "C", a: 0},
{o: 79.1, f: 88.756, l: "B", a: 1},
{o: 88.756, f: 110.428, l: "C", a: 0},
{o: 110.428, f: 121.372, l: "B", a: 1},
{o: 121.372, f: 132.248, l: "C", a: 0},
{o: 132.248, f: 152.444, l: "B", a: 1},
{o: 152.444, f: 185.62, l: "A", a: 0},
{o: 185.62, f: 202.36, l: "D", a: 1},
{o: 202.36, f: 202.453, l: "E", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001328.ogg";

var artist = "Kasey Rausch";

var track = "I Dont Want To Spoil the Party";
