var data = [
[{o: 0.049, f: 30.538, l: "A", a: 0},
{o: 30.538, f: 60.361, l: "B", a: 1},
{o: 60.361, f: 90.671, l: "B", a: 0},
{o: 90.671, f: 105.826, l: "C", a: 1},
{o: 105.826, f: 135.946, l: "B", a: 0},
{o: 135.946, f: 256.194, l: "D", a: 1},
{o: 256.194, f: 321.053, l: "B", a: 0},
{o: 321.053, f: 352.372, l: "Z", a: 1}],
[{o: 0.044, f: 8.48, l: "A", a: 0},
{o: 8.48, f: 18.06, l: "A", a: 1},
{o: 18.06, f: 28.724, l: "A", a: 0},
{o: 28.724, f: 47.336, l: "A", a: 1},
{o: 47.336, f: 55.748, l: "A", a: 0},
{o: 55.748, f: 73.48, l: "A", a: 1},
{o: 73.48, f: 89.18, l: "A", a: 0},
{o: 89.18, f: 103.892, l: "A", a: 1},
{o: 103.892, f: 121.232, l: "A", a: 0},
{o: 121.232, f: 138.216, l: "A", a: 1},
{o: 138.216, f: 160.212, l: "C", a: 0},
{o: 160.212, f: 172.312, l: "C", a: 1},
{o: 172.312, f: 186.756, l: "C", a: 0},
{o: 186.756, f: 209.336, l: "A", a: 1},
{o: 209.336, f: 225.408, l: "A", a: 0},
{o: 225.408, f: 239.132, l: "A", a: 1},
{o: 239.132, f: 254.156, l: "A", a: 0},
{o: 254.156, f: 271.692, l: "A", a: 1},
{o: 271.692, f: 289.756, l: "A", a: 0},
{o: 289.756, f: 300.224, l: "A", a: 1},
{o: 300.224, f: 312.872, l: "A", a: 0},
{o: 312.872, f: 325.204, l: "A", a: 1},
{o: 325.204, f: 331.684, l: "A", a: 0},
{o: 331.684, f: 342.3, l: "A", a: 1},
{o: 342.3, f: 352.188, l: "A", a: 0}],
[{o: 0.044, f: 8.48, l: "A", a: 0},
{o: 8.48, f: 18.06, l: "D", a: 1},
{o: 18.06, f: 28.724, l: "D", a: 0},
{o: 28.724, f: 47.336, l: "D", a: 1},
{o: 47.336, f: 55.748, l: "D", a: 0},
{o: 55.748, f: 73.48, l: "D", a: 1},
{o: 73.48, f: 89.18, l: "D", a: 0},
{o: 89.18, f: 103.892, l: "D", a: 1},
{o: 103.892, f: 121.232, l: "D", a: 0},
{o: 121.232, f: 138.216, l: "D", a: 1},
{o: 138.216, f: 160.212, l: "C", a: 0},
{o: 160.212, f: 172.312, l: "C", a: 1},
{o: 172.312, f: 186.756, l: "C", a: 0},
{o: 186.756, f: 209.336, l: "B", a: 1},
{o: 209.336, f: 225.408, l: "B", a: 0},
{o: 225.408, f: 239.132, l: "G", a: 1},
{o: 239.132, f: 254.156, l: "H", a: 0},
{o: 254.156, f: 271.692, l: "E", a: 1},
{o: 271.692, f: 289.756, l: "E", a: 0},
{o: 289.756, f: 300.224, l: "I", a: 1},
{o: 300.224, f: 312.872, l: "F", a: 0},
{o: 312.872, f: 325.204, l: "F", a: 1},
{o: 325.204, f: 331.684, l: "J", a: 0},
{o: 331.684, f: 342.3, l: "K", a: 1},
{o: 342.3, f: 352.188, l: "A", a: 0}],
[{o: 1.107, f: 11.44, l: "8", a: 0},
{o: 11.44, f: 30.08, l: "3", a: 1},
{o: 30.08, f: 43.093, l: "1", a: 0},
{o: 43.093, f: 58.027, l: "3", a: 1},
{o: 58.027, f: 72.093, l: "1", a: 0},
{o: 72.093, f: 88.253, l: "3", a: 1},
{o: 88.253, f: 132.507, l: "1", a: 0},
{o: 132.507, f: 154.08, l: "2", a: 1},
{o: 154.08, f: 165.253, l: "7", a: 0},
{o: 165.253, f: 235.827, l: "2", a: 1},
{o: 235.827, f: 254.653, l: "6", a: 0},
{o: 254.653, f: 281.973, l: "1", a: 1},
{o: 281.973, f: 319.293, l: "4", a: 0},
{o: 319.293, f: 351.987, l: "5", a: 1}],
[{o: 0, f: 100.575, l: "a", a: 0},
{o: 100.575, f: 201.15, l: "a", a: 1},
{o: 201.15, f: 231.695, l: "b", a: 0},
{o: 231.695, f: 318.86, l: "a", a: 1},
{o: 318.86, f: 352.385, l: "c", a: 0}],
[{o: 0, f: 15.732, l: "n1", a: 0},
{o: 15.732, f: 37.988, l: "A", a: 1},
{o: 37.988, f: 58.607, l: "A", a: 0},
{o: 58.607, f: 67.93, l: "n3", a: 1},
{o: 67.93, f: 90.128, l: "A", a: 0},
{o: 90.128, f: 107.23, l: "B", a: 1},
{o: 107.23, f: 113.337, l: "n5", a: 0},
{o: 113.337, f: 135.837, l: "A", a: 1},
{o: 135.837, f: 156.479, l: "A", a: 0},
{o: 156.479, f: 173.256, l: "n7", a: 1},
{o: 173.256, f: 193.782, l: "A", a: 0},
{o: 193.782, f: 210.315, l: "n8", a: 1},
{o: 210.315, f: 227.312, l: "B", a: 0},
{o: 227.312, f: 233.465, l: "n9", a: 1},
{o: 233.465, f: 254.177, l: "A", a: 0},
{o: 254.177, f: 271.732, l: "n10", a: 1},
{o: 271.732, f: 293.256, l: "A", a: 0},
{o: 293.256, f: 352.247, l: "n11", a: 1}],
[{o: 0, f: 0.044, l: "F", a: 0},
{o: 0.044, f: 135.34, l: "E", a: 1},
{o: 135.34, f: 239.592, l: "C", a: 0},
{o: 239.592, f: 324.34, l: "E", a: 1},
{o: 324.34, f: 352.188, l: "D", a: 0},
{o: 352.188, f: 352.293, l: "F", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami001181.ogg";