var data = [
[{o: 0, f: 11.003, l: "A", a: 0},
{o: 11.003, f: 31.958, l: "B", a: 1},
{o: 31.958, f: 52.951, l: "A", a: 0},
{o: 52.951, f: 58.211, l: "D", a: 1},
{o: 58.211, f: 68.591, l: "B", a: 0},
{o: 68.591, f: 89.529, l: "B", a: 1},
{o: 89.529, f: 110.66, l: "A", a: 0},
{o: 110.66, f: 131.541, l: "D", a: 1},
{o: 131.541, f: 152.65, l: "C", a: 0},
{o: 152.65, f: 157.735, l: "D", a: 1},
{o: 157.735, f: 179.678, l: "B", a: 0},
{o: 179.678, f: 191.892, l: "A", a: 1},
{o: 191.892, f: 205.244, l: "Z", a: 0}],
[{o: 0.012, f: 12.296, l: "D", a: 0},
{o: 12.296, f: 21.132, l: "C", a: 1},
{o: 21.132, f: 35.936, l: "C", a: 0},
{o: 35.936, f: 53.628, l: "B", a: 1},
{o: 53.628, f: 70.196, l: "D", a: 0},
{o: 70.196, f: 81.024, l: "B", a: 1},
{o: 81.024, f: 89.176, l: "B", a: 0},
{o: 89.176, f: 108.36, l: "A", a: 1},
{o: 108.36, f: 126.38, l: "A", a: 0},
{o: 126.38, f: 136.232, l: "A", a: 1},
{o: 136.232, f: 149.716, l: "E", a: 0},
{o: 149.716, f: 159.512, l: "F", a: 1},
{o: 159.512, f: 168.804, l: "G", a: 0},
{o: 168.804, f: 178.696, l: "H", a: 1},
{o: 178.696, f: 191.472, l: "I", a: 0},
{o: 191.472, f: 204.924, l: "J", a: 1}],
[{o: 0.012, f: 12.296, l: "C", a: 0},
{o: 12.296, f: 21.132, l: "D", a: 1},
{o: 21.132, f: 35.936, l: "E", a: 0},
{o: 35.936, f: 53.628, l: "B", a: 1},
{o: 53.628, f: 70.196, l: "F", a: 0},
{o: 70.196, f: 81.024, l: "B", a: 1},
{o: 81.024, f: 89.176, l: "B", a: 0},
{o: 89.176, f: 108.36, l: "A", a: 1},
{o: 108.36, f: 126.38, l: "A", a: 0},
{o: 126.38, f: 136.232, l: "A", a: 1},
{o: 136.232, f: 149.716, l: "G", a: 0},
{o: 149.716, f: 159.512, l: "H", a: 1},
{o: 159.512, f: 168.804, l: "I", a: 0},
{o: 168.804, f: 178.696, l: "J", a: 1},
{o: 178.696, f: 191.472, l: "K", a: 0},
{o: 191.472, f: 204.924, l: "L", a: 1}],
[{o: 0.973, f: 10.387, l: "8", a: 0},
{o: 10.387, f: 30.053, l: "3", a: 1},
{o: 30.053, f: 52.373, l: "2", a: 0},
{o: 52.373, f: 66.6, l: "1", a: 1},
{o: 66.6, f: 110.707, l: "2", a: 0},
{o: 110.707, f: 130.973, l: "1", a: 1},
{o: 130.973, f: 146.987, l: "5", a: 0},
{o: 146.987, f: 159.893, l: "1", a: 1},
{o: 159.893, f: 177.44, l: "4", a: 0},
{o: 177.44, f: 190.907, l: "7", a: 1},
{o: 190.907, f: 205.027, l: "6", a: 0}],
[{o: 0, f: 34.27, l: "a", a: 0},
{o: 34.27, f: 65.56, l: "b", a: 1},
{o: 65.56, f: 92.38, l: "c", a: 0},
{o: 92.38, f: 119.945, l: "b", a: 1},
{o: 119.945, f: 155.705, l: "d", a: 0},
{o: 155.705, f: 182.525, l: "c", a: 1},
{o: 182.525, f: 204.875, l: "e", a: 0}],
[{o: 0, f: 22.825, l: "n1", a: 0},
{o: 22.825, f: 32.345, l: "A", a: 1},
{o: 32.345, f: 42.864, l: "B", a: 0},
{o: 42.864, f: 53.348, l: "B", a: 1},
{o: 53.348, f: 69.904, l: "n3", a: 0},
{o: 69.904, f: 80.399, l: "A", a: 1},
{o: 80.399, f: 89.896, l: "A", a: 0},
{o: 89.896, f: 100.461, l: "B", a: 1},
{o: 100.461, f: 110.98, l: "B", a: 0},
{o: 110.98, f: 159.219, l: "n6", a: 1},
{o: 159.219, f: 169.482, l: "A", a: 0},
{o: 169.482, f: 179.734, l: "A", a: 1},
{o: 179.734, f: 205.125, l: "n8", a: 0}],
[{o: 0, f: 0.008, l: "D", a: 0},
{o: 0.008, f: 188.6, l: "C", a: 1},
{o: 188.6, f: 205.092, l: "A", a: 0},
{o: 205.092, f: 205.16, l: "D", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001304.ogg";

var artist = "Makepeace Brothers";

var track = "The Monkey and The Lion";