var data = [
[{o: 0.073, f: 49.143, l: "A", a: 0},
{o: 49.143, f: 65.263, l: "B", a: 1},
{o: 65.263, f: 98.349, l: "C", a: 0},
{o: 98.349, f: 116.084, l: "D", a: 1},
{o: 116.084, f: 124.909, l: "B", a: 0},
{o: 124.909, f: 157.857, l: "C", a: 1},
{o: 157.857, f: 175.158, l: "D", a: 0},
{o: 175.158, f: 225.19, l: "E", a: 1},
{o: 225.19, f: 279.665, l: "F", a: 0},
{o: 279.665, f: 280.764, l: "Z", a: 1}],
[{o: 0.088, f: 8.344, l: "A", a: 0},
{o: 8.344, f: 25.18, l: "B", a: 1},
{o: 25.18, f: 35.308, l: "B", a: 0},
{o: 35.308, f: 48.736, l: "B", a: 1},
{o: 48.736, f: 65.06, l: "B", a: 0},
{o: 65.06, f: 76.568, l: "B", a: 1},
{o: 76.568, f: 94.608, l: "B", a: 0},
{o: 94.608, f: 114.008, l: "B", a: 1},
{o: 114.008, f: 127.356, l: "B", a: 0},
{o: 127.356, f: 140.88, l: "B", a: 1},
{o: 140.88, f: 148.504, l: "B", a: 0},
{o: 148.504, f: 160.828, l: "B", a: 1},
{o: 160.828, f: 175.792, l: "B", a: 0},
{o: 175.792, f: 199.508, l: "B", a: 1},
{o: 199.508, f: 207.472, l: "B", a: 0},
{o: 207.472, f: 224.724, l: "B", a: 1},
{o: 224.724, f: 245.744, l: "B", a: 0},
{o: 245.744, f: 255.46, l: "B", a: 1},
{o: 255.46, f: 269.764, l: "B", a: 0},
{o: 269.764, f: 280.576, l: "B", a: 1}],
[{o: 0.088, f: 8.344, l: "G", a: 0},
{o: 8.344, f: 25.18, l: "B", a: 1},
{o: 25.18, f: 35.308, l: "B", a: 0},
{o: 35.308, f: 48.736, l: "C", a: 1},
{o: 48.736, f: 65.06, l: "C", a: 0},
{o: 65.06, f: 76.568, l: "A", a: 1},
{o: 76.568, f: 94.608, l: "A", a: 0},
{o: 94.608, f: 114.008, l: "E", a: 1},
{o: 114.008, f: 127.356, l: "C", a: 0},
{o: 127.356, f: 140.88, l: "H", a: 1},
{o: 140.88, f: 148.504, l: "E", a: 0},
{o: 148.504, f: 160.828, l: "E", a: 1},
{o: 160.828, f: 175.792, l: "E", a: 0},
{o: 175.792, f: 199.508, l: "F", a: 1},
{o: 199.508, f: 207.472, l: "D", a: 0},
{o: 207.472, f: 224.724, l: "D", a: 1},
{o: 224.724, f: 245.744, l: "F", a: 0},
{o: 245.744, f: 255.46, l: "E", a: 1},
{o: 255.46, f: 269.764, l: "E", a: 0},
{o: 269.764, f: 280.576, l: "I", a: 1}],
[{o: 0.6, f: 10.64, l: "7", a: 0},
{o: 10.64, f: 34.56, l: "5", a: 1},
{o: 34.56, f: 49.253, l: "6", a: 0},
{o: 49.253, f: 98.027, l: "1", a: 1},
{o: 98.027, f: 116.453, l: "2", a: 0},
{o: 116.453, f: 159.573, l: "1", a: 1},
{o: 159.573, f: 175.307, l: "2", a: 0},
{o: 175.307, f: 223.227, l: "1", a: 1},
{o: 223.227, f: 233.92, l: "4", a: 0},
{o: 233.92, f: 243.227, l: "3", a: 1},
{o: 243.227, f: 255.387, l: "4", a: 0},
{o: 255.387, f: 273.24, l: "3", a: 1},
{o: 273.24, f: 280.573, l: "8", a: 0}],
[{o: 0, f: 32.035, l: "a", a: 0},
{o: 32.035, f: 74.5, l: "a", a: 1},
{o: 74.5, f: 98.34, l: "b", a: 0},
{o: 98.34, f: 116.22, l: "c", a: 1},
{o: 116.22, f: 134.845, l: "b", a: 0},
{o: 134.845, f: 157.94, l: "b", a: 1},
{o: 157.94, f: 175.82, l: "c", a: 0},
{o: 175.82, f: 194.445, l: "b", a: 1},
{o: 194.445, f: 206.365, l: "d", a: 0},
{o: 206.365, f: 233.93, l: "a", a: 1},
{o: 233.93, f: 280.12, l: "e", a: 0}],
[{o: 0, f: 20.445, l: "n1", a: 0},
{o: 20.445, f: 38.371, l: "A", a: 1},
{o: 38.371, f: 48.53, l: "n2", a: 0},
{o: 48.53, f: 66.862, l: "A", a: 1},
{o: 66.862, f: 77.09, l: "n3", a: 0},
{o: 77.09, f: 95.666, l: "A", a: 1},
{o: 95.666, f: 101.912, l: "n4", a: 0},
{o: 101.912, f: 124.331, l: "C", a: 1},
{o: 124.331, f: 142.71, l: "A", a: 0},
{o: 142.71, f: 161.39, l: "n6", a: 1},
{o: 161.39, f: 179.63, l: "C", a: 0},
{o: 179.63, f: 197.985, l: "A", a: 1},
{o: 197.985, f: 204.173, l: "n7", a: 0},
{o: 204.173, f: 223.028, l: "A", a: 1},
{o: 223.028, f: 242.997, l: "B", a: 0},
{o: 242.997, f: 263.152, l: "B", a: 1},
{o: 263.152, f: 280.543, l: "n9", a: 0}],
[{o: 0, f: 0.088, l: "G", a: 0},
{o: 0.088, f: 50.276, l: "F", a: 1},
{o: 50.276, f: 96.952, l: "B", a: 0},
{o: 96.952, f: 113.752, l: "A", a: 1},
{o: 113.752, f: 157.684, l: "B", a: 0},
{o: 157.684, f: 170.84, l: "A", a: 1},
{o: 170.84, f: 229.52, l: "B", a: 0},
{o: 229.52, f: 272.348, l: "E", a: 1},
{o: 272.348, f: 280.576, l: "F", a: 0},
{o: 280.576, f: 280.683, l: "G", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000866.ogg";
