var data = [
[{o: 0.353, f: 18.856, l: "A", a: 0},
{o: 18.856, f: 30.095, l: "B", a: 1},
{o: 30.095, f: 47.99, l: "A", a: 0},
{o: 47.99, f: 59.614, l: "B", a: 1},
{o: 59.614, f: 77.236, l: "A", a: 0},
{o: 77.236, f: 88.692, l: "B", a: 1},
{o: 88.692, f: 106.373, l: "A", a: 0},
{o: 106.373, f: 117.388, l: "B", a: 1},
{o: 117.388, f: 135.552, l: "A", a: 0},
{o: 135.552, f: 146.627, l: "B", a: 1},
{o: 146.627, f: 164.544, l: "A", a: 0},
{o: 164.544, f: 175.909, l: "B", a: 1},
{o: 175.909, f: 198.558, l: "A", a: 0}],
[{o: 0.2, f: 21.396, l: "D", a: 0},
{o: 21.396, f: 30.38, l: "D", a: 1},
{o: 30.38, f: 47.304, l: "D", a: 0},
{o: 47.304, f: 61.324, l: "D", a: 1},
{o: 61.324, f: 75.332, l: "D", a: 0},
{o: 75.332, f: 88.088, l: "D", a: 1},
{o: 88.088, f: 104.424, l: "D", a: 0},
{o: 104.424, f: 119.736, l: "D", a: 1},
{o: 119.736, f: 135.132, l: "A", a: 0},
{o: 135.132, f: 150.132, l: "D", a: 1},
{o: 150.132, f: 158.304, l: "C", a: 0},
{o: 158.304, f: 178.532, l: "D", a: 1},
{o: 178.532, f: 194.492, l: "C", a: 0}],
[{o: 0.2, f: 21.396, l: "D", a: 0},
{o: 21.396, f: 30.38, l: "D", a: 1},
{o: 30.38, f: 47.304, l: "E", a: 0},
{o: 47.304, f: 61.324, l: "A", a: 1},
{o: 61.324, f: 75.332, l: "D", a: 0},
{o: 75.332, f: 88.088, l: "D", a: 1},
{o: 88.088, f: 104.424, l: "E", a: 0},
{o: 104.424, f: 119.736, l: "A", a: 1},
{o: 119.736, f: 135.132, l: "C", a: 0},
{o: 135.132, f: 150.132, l: "B", a: 1},
{o: 150.132, f: 158.304, l: "F", a: 0},
{o: 158.304, f: 178.532, l: "B", a: 1},
{o: 178.532, f: 194.492, l: "G", a: 0}],
[{o: 0.387, f: 1.547, l: "8", a: 0},
{o: 1.547, f: 12.08, l: "1", a: 1},
{o: 12.08, f: 18, l: "2", a: 0},
{o: 18, f: 29.493, l: "4", a: 1},
{o: 29.493, f: 41.28, l: "1", a: 0},
{o: 41.28, f: 47.613, l: "2", a: 1},
{o: 47.613, f: 58.64, l: "4", a: 0},
{o: 58.64, f: 69.96, l: "1", a: 1},
{o: 69.96, f: 76.707, l: "2", a: 0},
{o: 76.707, f: 87.653, l: "6", a: 1},
{o: 87.653, f: 99.027, l: "1", a: 0},
{o: 99.027, f: 105.84, l: "2", a: 1},
{o: 105.84, f: 116.8, l: "5", a: 0},
{o: 116.8, f: 127.733, l: "1", a: 1},
{o: 127.733, f: 135.387, l: "2", a: 0},
{o: 135.387, f: 145.867, l: "3", a: 1},
{o: 145.867, f: 156.267, l: "1", a: 0},
{o: 156.267, f: 163.507, l: "2", a: 1},
{o: 163.507, f: 174.96, l: "3", a: 0},
{o: 174.96, f: 186.213, l: "1", a: 1},
{o: 186.213, f: 192.253, l: "2", a: 0},
{o: 192.253, f: 198.44, l: "7", a: 1}],
[{o: 0, f: 20.86, l: "a", a: 0},
{o: 20.86, f: 55.875, l: "a", a: 1},
{o: 55.875, f: 78.225, l: "b", a: 0},
{o: 78.225, f: 107.28, l: "b", a: 1},
{o: 107.28, f: 116.965, l: "c", a: 0},
{o: 116.965, f: 137.825, l: "a", a: 1},
{o: 137.825, f: 172.095, l: "a", a: 0},
{o: 172.095, f: 195.935, l: "b", a: 1},
{o: 195.935, f: 198.17, l: "d", a: 0}],
[{o: 0, f: 0.43, l: "n1", a: 0},
{o: 0.43, f: 29.733, l: "A", a: 1},
{o: 29.733, f: 58.897, l: "A", a: 0},
{o: 58.897, f: 87.911, l: "A", a: 1},
{o: 87.911, f: 117.04, l: "A", a: 0},
{o: 117.04, f: 146.135, l: "A", a: 1},
{o: 146.135, f: 175.206, l: "A", a: 0},
{o: 175.206, f: 198.438, l: "n2", a: 1}],
[{o: 0, f: 0.2, l: "D", a: 0},
{o: 0.2, f: 15.628, l: "C", a: 1},
{o: 15.628, f: 29.2, l: "B", a: 0},
{o: 29.2, f: 44.844, l: "C", a: 1},
{o: 44.844, f: 58.364, l: "B", a: 0},
{o: 58.364, f: 73.952, l: "C", a: 1},
{o: 73.952, f: 87.408, l: "B", a: 0},
{o: 87.408, f: 103.064, l: "C", a: 1},
{o: 103.064, f: 116.532, l: "B", a: 0},
{o: 116.532, f: 132.212, l: "C", a: 1},
{o: 132.212, f: 145.6, l: "B", a: 0},
{o: 145.6, f: 161.24, l: "C", a: 1},
{o: 161.24, f: 174.696, l: "B", a: 0},
{o: 174.696, f: 191.768, l: "C", a: 1},
{o: 191.768, f: 194.496, l: "A", a: 0},
{o: 194.496, f: 198.558, l: "D", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000262.ogg";

var artist = "Compilations";

var track = "Krakowiak Z Mucharza";
