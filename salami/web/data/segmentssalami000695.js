var data = [
[{o: 0.116, f: 8.405, l: "H", a: 0},
{o: 8.405, f: 76.913, l: "A", a: 1},
{o: 76.913, f: 137.827, l: "A", a: 0},
{o: 137.827, f: 172.365, l: "C", a: 1},
{o: 172.365, f: 208.077, l: "A", a: 0}],
[{o: 0.124, f: 12.684, l: "A", a: 0},
{o: 12.684, f: 26.368, l: "B", a: 1},
{o: 26.368, f: 35.292, l: "B", a: 0},
{o: 35.292, f: 50.132, l: "B", a: 1},
{o: 50.132, f: 59.804, l: "B", a: 0},
{o: 59.804, f: 77.428, l: "A", a: 1},
{o: 77.428, f: 88.792, l: "B", a: 0},
{o: 88.792, f: 111.572, l: "B", a: 1},
{o: 111.572, f: 124.084, l: "B", a: 0},
{o: 124.084, f: 137.792, l: "C", a: 1},
{o: 137.792, f: 154.568, l: "B", a: 0},
{o: 154.568, f: 163.768, l: "D", a: 1},
{o: 163.768, f: 172.908, l: "E", a: 0},
{o: 172.908, f: 182.516, l: "B", a: 1},
{o: 182.516, f: 194.568, l: "F", a: 0},
{o: 194.568, f: 203.32, l: "G", a: 1}],
[{o: 0.124, f: 12.684, l: "A", a: 0},
{o: 12.684, f: 26.368, l: "B", a: 1},
{o: 26.368, f: 35.292, l: "C", a: 0},
{o: 35.292, f: 50.132, l: "B", a: 1},
{o: 50.132, f: 59.804, l: "D", a: 0},
{o: 59.804, f: 77.428, l: "A", a: 1},
{o: 77.428, f: 88.792, l: "B", a: 0},
{o: 88.792, f: 111.572, l: "B", a: 1},
{o: 111.572, f: 124.084, l: "B", a: 0},
{o: 124.084, f: 137.792, l: "E", a: 1},
{o: 137.792, f: 154.568, l: "F", a: 0},
{o: 154.568, f: 163.768, l: "G", a: 1},
{o: 163.768, f: 172.908, l: "H", a: 0},
{o: 172.908, f: 182.516, l: "B", a: 1},
{o: 182.516, f: 194.568, l: "I", a: 0},
{o: 194.568, f: 203.32, l: "J", a: 1}],
[{o: 0.493, f: 8.227, l: "7", a: 0},
{o: 8.227, f: 13.48, l: "8", a: 1},
{o: 13.48, f: 23, l: "1", a: 0},
{o: 23, f: 35.013, l: "3", a: 1},
{o: 35.013, f: 47.733, l: "2", a: 0},
{o: 47.733, f: 59.547, l: "1", a: 1},
{o: 59.547, f: 83.72, l: "2", a: 0},
{o: 83.72, f: 91.827, l: "1", a: 1},
{o: 91.827, f: 103.2, l: "3", a: 0},
{o: 103.2, f: 116.733, l: "2", a: 1},
{o: 116.733, f: 127.133, l: "1", a: 0},
{o: 127.133, f: 137.027, l: "2", a: 1},
{o: 137.027, f: 144.587, l: "1", a: 0},
{o: 144.587, f: 161.893, l: "3", a: 1},
{o: 161.893, f: 171.04, l: "5", a: 0},
{o: 171.04, f: 188.333, l: "1", a: 1},
{o: 188.333, f: 199.64, l: "4", a: 0},
{o: 199.64, f: 207.88, l: "6", a: 1}],
[{o: 0, f: 11.175, l: "a", a: 0},
{o: 11.175, f: 26.075, l: "b", a: 1},
{o: 26.075, f: 68.54, l: "c", a: 0},
{o: 68.54, f: 79.715, l: "a", a: 1},
{o: 79.715, f: 94.615, l: "b", a: 0},
{o: 94.615, f: 175.075, l: "d", a: 1},
{o: 175.075, f: 188.485, l: "b", a: 0},
{o: 188.485, f: 207.11, l: "e", a: 1}],
[{o: 0, f: 111.99, l: "n1", a: 0},
{o: 111.99, f: 121.649, l: "A", a: 1},
{o: 121.649, f: 172.791, l: "n2", a: 0},
{o: 172.791, f: 182.764, l: "A", a: 1},
{o: 182.764, f: 207.726, l: "n3", a: 0}],
[{o: 0, f: 0.124, l: "H", a: 0},
{o: 0.124, f: 35.292, l: "C", a: 1},
{o: 35.292, f: 68.912, l: "B", a: 0},
{o: 68.912, f: 102.872, l: "E", a: 1},
{o: 102.872, f: 135.592, l: "G", a: 0},
{o: 135.592, f: 170.724, l: "F", a: 1},
{o: 170.724, f: 203.32, l: "A", a: 0},
{o: 203.32, f: 208.014, l: "H", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000695.ogg";

var artist = "Compilations";

var track = "Gloomy Sunday";
