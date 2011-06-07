var data = [
[{o: 0.232, f: 18.095, l: "A", a: 0},
{o: 18.095, f: 66.27, l: "B", a: 1},
{o: 66.27, f: 113.113, l: "C", a: 0},
{o: 113.113, f: 145.225, l: "D", a: 1},
{o: 145.225, f: 178.817, l: "B'", a: 0},
{o: 178.817, f: 225.601, l: "C", a: 1},
{o: 225.601, f: 259.186, l: "D", a: 0},
{o: 259.186, f: 294.228, l: "A'", a: 1}],
[{o: 0.176, f: 19.112, l: "B", a: 0},
{o: 19.112, f: 46.852, l: "B", a: 1},
{o: 46.852, f: 65.136, l: "B", a: 0},
{o: 65.136, f: 78.648, l: "B", a: 1},
{o: 78.648, f: 95.824, l: "B", a: 0},
{o: 95.824, f: 108.612, l: "A", a: 1},
{o: 108.612, f: 118.116, l: "A", a: 0},
{o: 118.116, f: 129.44, l: "B", a: 1},
{o: 129.44, f: 148.068, l: "A", a: 0},
{o: 148.068, f: 170.356, l: "B", a: 1},
{o: 170.356, f: 190.792, l: "B", a: 0},
{o: 190.792, f: 206.892, l: "A", a: 1},
{o: 206.892, f: 225.536, l: "B", a: 0},
{o: 225.536, f: 243.812, l: "C", a: 1},
{o: 243.812, f: 256.584, l: "C", a: 0},
{o: 256.584, f: 282.888, l: "D", a: 1},
{o: 282.888, f: 290.928, l: "D", a: 0}],
[{o: 0.176, f: 19.112, l: "E", a: 0},
{o: 19.112, f: 46.852, l: "C", a: 1},
{o: 46.852, f: 65.136, l: "B", a: 0},
{o: 65.136, f: 78.648, l: "C", a: 1},
{o: 78.648, f: 95.824, l: "C", a: 0},
{o: 95.824, f: 108.612, l: "A", a: 1},
{o: 108.612, f: 118.116, l: "D", a: 0},
{o: 118.116, f: 129.44, l: "B", a: 1},
{o: 129.44, f: 148.068, l: "D", a: 0},
{o: 148.068, f: 170.356, l: "C", a: 1},
{o: 170.356, f: 190.792, l: "C", a: 0},
{o: 190.792, f: 206.892, l: "A", a: 1},
{o: 206.892, f: 225.536, l: "C", a: 0},
{o: 225.536, f: 243.812, l: "F", a: 1},
{o: 243.812, f: 256.584, l: "G", a: 0},
{o: 256.584, f: 282.888, l: "H", a: 1},
{o: 282.888, f: 290.928, l: "I", a: 0}],
[{o: 0.44, f: 5.773, l: "6", a: 0},
{o: 5.773, f: 11.613, l: "7", a: 1},
{o: 11.613, f: 40.493, l: "2", a: 0},
{o: 40.493, f: 47.053, l: "1", a: 1},
{o: 47.053, f: 52.533, l: "2", a: 0},
{o: 52.533, f: 62.413, l: "3", a: 1},
{o: 62.413, f: 67.133, l: "5", a: 0},
{o: 67.133, f: 90.52, l: "1", a: 1},
{o: 90.52, f: 95.653, l: "3", a: 0},
{o: 95.653, f: 106.973, l: "1", a: 1},
{o: 106.973, f: 112.813, l: "3", a: 0},
{o: 112.813, f: 118.653, l: "4", a: 1},
{o: 118.653, f: 124.52, l: "2", a: 0},
{o: 124.52, f: 134, l: "1", a: 1},
{o: 134, f: 140.227, l: "3", a: 0},
{o: 140.227, f: 162.133, l: "2", a: 1},
{o: 162.133, f: 167.987, l: "7", a: 0},
{o: 167.987, f: 175.667, l: "4", a: 1},
{o: 175.667, f: 202.333, l: "1", a: 0},
{o: 202.333, f: 208.173, l: "3", a: 1},
{o: 208.173, f: 219.493, l: "1", a: 0},
{o: 219.493, f: 224.987, l: "3", a: 1},
{o: 224.987, f: 230.827, l: "4", a: 0},
{o: 230.827, f: 253.12, l: "5", a: 1},
{o: 253.12, f: 258.96, l: "1", a: 0},
{o: 258.96, f: 278.307, l: "2", a: 1},
{o: 278.307, f: 291.253, l: "6", a: 0},
{o: 291.253, f: 294.093, l: "8", a: 1}],
[{o: 0, f: 32.035, l: "a", a: 0},
{o: 32.035, f: 77.48, l: "b", a: 1},
{o: 77.48, f: 94.615, l: "c", a: 0},
{o: 94.615, f: 118.455, l: "c", a: 1},
{o: 118.455, f: 140.06, l: "d", a: 0},
{o: 140.06, f: 190.72, l: "b", a: 1},
{o: 190.72, f: 207.855, l: "c", a: 0},
{o: 207.855, f: 230.95, l: "c", a: 1},
{o: 230.95, f: 292.04, l: "e", a: 0},
{o: 292.04, f: 293.53, l: "f", a: 1}],
[{o: 0, f: 22.047, l: "n1", a: 0},
{o: 22.047, f: 38.487, l: "A", a: 1},
{o: 38.487, f: 58.584, l: "A", a: 0},
{o: 58.584, f: 68.812, l: "B", a: 1},
{o: 68.812, f: 79.412, l: "D", a: 0},
{o: 79.412, f: 96.955, l: "A", a: 1},
{o: 96.955, f: 113.023, l: "A", a: 0},
{o: 113.023, f: 140.794, l: "n6", a: 1},
{o: 140.794, f: 155.411, l: "C", a: 0},
{o: 155.411, f: 170.388, l: "n7", a: 1},
{o: 170.388, f: 181.348, l: "B", a: 0},
{o: 181.348, f: 191.936, l: "D", a: 1},
{o: 191.936, f: 209.479, l: "A", a: 0},
{o: 209.479, f: 228.101, l: "A", a: 1},
{o: 228.101, f: 239.816, l: "B", a: 0},
{o: 239.816, f: 250.056, l: "B", a: 1},
{o: 250.056, f: 255.152, l: "n13", a: 0},
{o: 255.152, f: 271.221, l: "A", a: 1},
{o: 271.221, f: 285.838, l: "C", a: 0},
{o: 285.838, f: 293.918, l: "n14", a: 1}],
[{o: 0, f: 0.172, l: "E", a: 0},
{o: 0.172, f: 13.612, l: "C", a: 1},
{o: 13.612, f: 224.8, l: "D", a: 0},
{o: 224.8, f: 252.924, l: "B", a: 1},
{o: 252.924, f: 290.928, l: "D", a: 0},
{o: 290.928, f: 294.218, l: "E", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000094.ogg";
