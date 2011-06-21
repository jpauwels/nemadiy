var data = [
[{o: 0.032, f: 27.905, l: "A", a: 0},
{o: 27.905, f: 65.29, l: "B", a: 1},
{o: 65.29, f: 95.488, l: "C", a: 0},
{o: 95.488, f: 101.638, l: "D", a: 1},
{o: 101.638, f: 138.607, l: "B", a: 0},
{o: 138.607, f: 163.969, l: "C", a: 1},
{o: 163.969, f: 180.678, l: "E", a: 0},
{o: 180.678, f: 186.78, l: "D", a: 1},
{o: 186.78, f: 224.119, l: "B", a: 0},
{o: 224.119, f: 303.621, l: "F", a: 1},
{o: 303.621, f: 336.15, l: "Z", a: 0}],
[{o: 0.012, f: 14, l: "B", a: 0},
{o: 14, f: 27.38, l: "B", a: 1},
{o: 27.38, f: 36.74, l: "B", a: 0},
{o: 36.74, f: 46.484, l: "B", a: 1},
{o: 46.484, f: 58.616, l: "B", a: 0},
{o: 58.616, f: 67.312, l: "B", a: 1},
{o: 67.312, f: 81.144, l: "B", a: 0},
{o: 81.144, f: 94.864, l: "B", a: 1},
{o: 94.864, f: 108.796, l: "B", a: 0},
{o: 108.796, f: 124.964, l: "B", a: 1},
{o: 124.964, f: 136.416, l: "B", a: 0},
{o: 136.416, f: 144.644, l: "B", a: 1},
{o: 144.644, f: 160.676, l: "B", a: 0},
{o: 160.676, f: 170.432, l: "B", a: 1},
{o: 170.432, f: 179.732, l: "B", a: 0},
{o: 179.732, f: 187.856, l: "B", a: 1},
{o: 187.856, f: 199.184, l: "B", a: 0},
{o: 199.184, f: 210.512, l: "B", a: 1},
{o: 210.512, f: 222.1, l: "B", a: 0},
{o: 222.1, f: 236.908, l: "B", a: 1},
{o: 236.908, f: 248.472, l: "B", a: 0},
{o: 248.472, f: 266.864, l: "B", a: 1},
{o: 266.864, f: 273.716, l: "B", a: 0},
{o: 273.716, f: 283.02, l: "B", a: 1},
{o: 283.02, f: 289.604, l: "B", a: 0},
{o: 289.604, f: 300.696, l: "B", a: 1},
{o: 300.696, f: 311.768, l: "B", a: 0},
{o: 311.768, f: 319.496, l: "A", a: 1},
{o: 319.496, f: 326.972, l: "B", a: 0},
{o: 326.972, f: 335.856, l: "B", a: 1}],
[{o: 0.012, f: 14, l: "B", a: 0},
{o: 14, f: 27.38, l: "A", a: 1},
{o: 27.38, f: 36.74, l: "A", a: 0},
{o: 36.74, f: 46.484, l: "A", a: 1},
{o: 46.484, f: 58.616, l: "A", a: 0},
{o: 58.616, f: 67.312, l: "A", a: 1},
{o: 67.312, f: 81.144, l: "A", a: 0},
{o: 81.144, f: 94.864, l: "A", a: 1},
{o: 94.864, f: 108.796, l: "A", a: 0},
{o: 108.796, f: 124.964, l: "A", a: 1},
{o: 124.964, f: 136.416, l: "A", a: 0},
{o: 136.416, f: 144.644, l: "A", a: 1},
{o: 144.644, f: 160.676, l: "A", a: 0},
{o: 160.676, f: 170.432, l: "G", a: 1},
{o: 170.432, f: 179.732, l: "G", a: 0},
{o: 179.732, f: 187.856, l: "A", a: 1},
{o: 187.856, f: 199.184, l: "A", a: 0},
{o: 199.184, f: 210.512, l: "A", a: 1},
{o: 210.512, f: 222.1, l: "A", a: 0},
{o: 222.1, f: 236.908, l: "C", a: 1},
{o: 236.908, f: 248.472, l: "D", a: 0},
{o: 248.472, f: 266.864, l: "E", a: 1},
{o: 266.864, f: 273.716, l: "F", a: 0},
{o: 273.716, f: 283.02, l: "H", a: 1},
{o: 283.02, f: 289.604, l: "I", a: 0},
{o: 289.604, f: 300.696, l: "J", a: 1},
{o: 300.696, f: 311.768, l: "K", a: 0},
{o: 311.768, f: 319.496, l: "L", a: 1},
{o: 319.496, f: 326.972, l: "M", a: 0},
{o: 326.972, f: 335.856, l: "N", a: 1}],
[{o: 0.733, f: 4.187, l: "8", a: 0},
{o: 4.187, f: 13.973, l: "7", a: 1},
{o: 13.973, f: 63.773, l: "1", a: 0},
{o: 63.773, f: 94.507, l: "2", a: 1},
{o: 94.507, f: 136.867, l: "1", a: 0},
{o: 136.867, f: 162.24, l: "2", a: 1},
{o: 162.24, f: 184.427, l: "1", a: 0},
{o: 184.427, f: 215.547, l: "4", a: 1},
{o: 215.547, f: 260.4, l: "1", a: 0},
{o: 260.4, f: 295.653, l: "3", a: 1},
{o: 295.653, f: 308.027, l: "6", a: 0},
{o: 308.027, f: 334.04, l: "5", a: 1}],
[{o: 0, f: 37.995, l: "a", a: 0},
{o: 37.995, f: 111.005, l: "b", a: 1},
{o: 111.005, f: 180.29, l: "b", a: 0},
{o: 180.29, f: 243.615, l: "c", a: 1},
{o: 243.615, f: 267.455, l: "d", a: 0},
{o: 267.455, f: 293.53, l: "d", a: 1},
{o: 293.53, f: 335.995, l: "e", a: 0}],
[{o: 0, f: 20.143, l: "n1", a: 0},
{o: 20.143, f: 35.631, l: "A", a: 1},
{o: 35.631, f: 44.965, l: "n2", a: 0},
{o: 44.965, f: 60.651, l: "A", a: 1},
{o: 60.651, f: 70.136, l: "n3", a: 0},
{o: 70.136, f: 85.914, l: "A", a: 1},
{o: 85.914, f: 99.95, l: "n4", a: 0},
{o: 99.95, f: 118.491, l: "A", a: 1},
{o: 118.491, f: 133.782, l: "A", a: 0},
{o: 133.782, f: 178.979, l: "n6", a: 1},
{o: 178.979, f: 194.583, l: "A", a: 0},
{o: 194.583, f: 222.54, l: "n7", a: 1},
{o: 222.54, f: 238.109, l: "A", a: 0},
{o: 238.109, f: 247.374, l: "n8", a: 1},
{o: 247.374, f: 262.769, l: "A", a: 0},
{o: 262.769, f: 271.859, l: "n9", a: 1},
{o: 271.859, f: 287.3, l: "A", a: 0},
{o: 287.3, f: 335.9, l: "n10", a: 1}],
[{o: 0, f: 0.012, l: "E", a: 0},
{o: 0.012, f: 61.78, l: "D", a: 1},
{o: 61.78, f: 94.464, l: "B", a: 0},
{o: 94.464, f: 139.552, l: "D", a: 1},
{o: 139.552, f: 179.732, l: "B", a: 0},
{o: 179.732, f: 268.776, l: "D", a: 1},
{o: 268.776, f: 297.976, l: "A", a: 0},
{o: 297.976, f: 319.86, l: "B", a: 1},
{o: 319.86, f: 335.856, l: "C", a: 0},
{o: 335.856, f: 336.043, l: "E", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000884.ogg";

var artist = "Will Phalen and the Stereo Addicts";

var track = "Lazy Sundays";
