var data = [
[{o: 0.308, f: 8.5, l: "I", a: 0},
{o: 8.5, f: 40.444, l: "V", a: 1},
{o: 40.444, f: 56.412, l: "C", a: 0},
{o: 56.412, f: 64.38, l: "T", a: 1},
{o: 64.38, f: 80.036, l: "V", a: 0},
{o: 80.036, f: 95.884, l: "C", a: 1},
{o: 95.884, f: 127.492, l: "V", a: 0},
{o: 127.492, f: 143.164, l: "C", a: 1},
{o: 143.164, f: 158.717, l: "U", a: 0},
{o: 158.717, f: 182.34, l: "V", a: 1},
{o: 182.34, f: 191.053, l: "W", a: 0},
{o: 191.053, f: 212.369, l: "O", a: 1}],
[{o: 0.156, f: 7.928, l: "B", a: 0},
{o: 7.928, f: 16.66, l: "C", a: 1},
{o: 16.66, f: 26.896, l: "C", a: 0},
{o: 26.896, f: 38.84, l: "C", a: 1},
{o: 38.84, f: 55.932, l: "C", a: 0},
{o: 55.932, f: 63.208, l: "C", a: 1},
{o: 63.208, f: 71.388, l: "C", a: 0},
{o: 71.388, f: 80.956, l: "C", a: 1},
{o: 80.956, f: 95.488, l: "C", a: 0},
{o: 95.488, f: 102.864, l: "C", a: 1},
{o: 102.864, f: 115.02, l: "C", a: 0},
{o: 115.02, f: 129.368, l: "C", a: 1},
{o: 129.368, f: 143.076, l: "C", a: 0},
{o: 143.076, f: 158.428, l: "A", a: 1},
{o: 158.428, f: 174.644, l: "A", a: 0},
{o: 174.644, f: 189.532, l: "A", a: 1},
{o: 189.532, f: 200.08, l: "D", a: 0},
{o: 200.08, f: 209.524, l: "D", a: 1}],
[{o: 0.156, f: 7.928, l: "D", a: 0},
{o: 7.928, f: 16.66, l: "C", a: 1},
{o: 16.66, f: 26.896, l: "C", a: 0},
{o: 26.896, f: 38.84, l: "C", a: 1},
{o: 38.84, f: 55.932, l: "A", a: 0},
{o: 55.932, f: 63.208, l: "E", a: 1},
{o: 63.208, f: 71.388, l: "C", a: 0},
{o: 71.388, f: 80.956, l: "C", a: 1},
{o: 80.956, f: 95.488, l: "A", a: 0},
{o: 95.488, f: 102.864, l: "B", a: 1},
{o: 102.864, f: 115.02, l: "B", a: 0},
{o: 115.02, f: 129.368, l: "B", a: 1},
{o: 129.368, f: 143.076, l: "A", a: 0},
{o: 143.076, f: 158.428, l: "F", a: 1},
{o: 158.428, f: 174.644, l: "G", a: 0},
{o: 174.644, f: 189.532, l: "H", a: 1},
{o: 189.532, f: 200.08, l: "I", a: 0},
{o: 200.08, f: 209.524, l: "J", a: 1}],
[{o: 0.413, f: 7.653, l: "7", a: 0},
{o: 7.653, f: 40.56, l: "1", a: 1},
{o: 40.56, f: 55.547, l: "2", a: 0},
{o: 55.547, f: 64.92, l: "6", a: 1},
{o: 64.92, f: 79.707, l: "1", a: 0},
{o: 79.707, f: 95.453, l: "2", a: 1},
{o: 95.453, f: 126.12, l: "1", a: 0},
{o: 126.12, f: 138.493, l: "2", a: 1},
{o: 138.493, f: 159.4, l: "3", a: 0},
{o: 159.4, f: 180.267, l: "1", a: 1},
{o: 180.267, f: 194, l: "4", a: 0},
{o: 194, f: 204.107, l: "5", a: 1},
{o: 204.107, f: 210.013, l: "8", a: 0}],
[{o: 0, f: 13.41, l: "a", a: 0},
{o: 13.41, f: 138.57, l: "b", a: 1},
{o: 138.57, f: 149.745, l: "a", a: 0},
{o: 149.745, f: 186.995, l: "c", a: 1},
{o: 186.995, f: 194.445, l: "a", a: 0},
{o: 194.445, f: 211.58, l: "d", a: 1}],
[{o: 0, f: 211.952, l: "A", a: 0},
{o: 0.023, f: 212.184, l: "A", a: 1}],
[{o: 0, f: 0.156, l: "E", a: 0},
{o: 0.156, f: 22.892, l: "B", a: 1},
{o: 22.892, f: 144.512, l: "A", a: 0},
{o: 144.512, f: 158.9, l: "B", a: 1},
{o: 158.9, f: 193.696, l: "A", a: 0},
{o: 193.696, f: 209.532, l: "D", a: 1},
{o: 209.532, f: 212.324, l: "E", a: 0}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000332.ogg";
