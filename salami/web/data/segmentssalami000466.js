var data = [
[{o: 0.046, f: 71.111, l: "D", a: 0},
{o: 71.111, f: 118.33, l: "A", a: 1},
{o: 118.33, f: 142, l: "B'", a: 0},
{o: 142, f: 177.367, l: "A'", a: 1},
{o: 177.367, f: 189.249, l: "C'", a: 0},
{o: 189.249, f: 236.735, l: "A", a: 1},
{o: 236.735, f: 284.313, l: "B", a: 0},
{o: 284.313, f: 379.142, l: "C", a: 1},
{o: 379.142, f: 476.09, l: "B", a: 0}],
[{o: 0.012, f: 7.548, l: "B", a: 0},
{o: 7.548, f: 26.22, l: "B", a: 1},
{o: 26.22, f: 37.944, l: "B", a: 0},
{o: 37.944, f: 49.592, l: "B", a: 1},
{o: 49.592, f: 61.96, l: "B", a: 0},
{o: 61.96, f: 73.684, l: "B", a: 1},
{o: 73.684, f: 85.112, l: "B", a: 0},
{o: 85.112, f: 103.22, l: "B", a: 1},
{o: 103.22, f: 117, l: "B", a: 0},
{o: 117, f: 142.444, l: "B", a: 1},
{o: 142.444, f: 165.48, l: "B", a: 0},
{o: 165.48, f: 184.928, l: "B", a: 1},
{o: 184.928, f: 203.528, l: "B", a: 0},
{o: 203.528, f: 220.948, l: "B", a: 1},
{o: 220.948, f: 235.384, l: "B", a: 0},
{o: 235.384, f: 247.6, l: "B", a: 1},
{o: 247.6, f: 260.712, l: "B", a: 0},
{o: 260.712, f: 271.712, l: "B", a: 1},
{o: 271.712, f: 281.064, l: "B", a: 0},
{o: 281.064, f: 293.892, l: "B", a: 1},
{o: 293.892, f: 305.164, l: "B", a: 0},
{o: 305.164, f: 319.548, l: "B", a: 1},
{o: 319.548, f: 336.292, l: "B", a: 0},
{o: 336.292, f: 355.692, l: "B", a: 1},
{o: 355.692, f: 377.712, l: "C", a: 0},
{o: 377.712, f: 394.24, l: "C", a: 1},
{o: 394.24, f: 402.992, l: "C", a: 0},
{o: 402.992, f: 419.184, l: "C", a: 1},
{o: 419.184, f: 431.932, l: "C", a: 0},
{o: 431.932, f: 440.464, l: "C", a: 1},
{o: 440.464, f: 448.232, l: "C", a: 0},
{o: 448.232, f: 458.404, l: "C", a: 1},
{o: 458.404, f: 466.532, l: "C", a: 0},
{o: 466.532, f: 475.96, l: "C", a: 1}],
[{o: 0.012, f: 7.548, l: "C", a: 0},
{o: 7.548, f: 26.22, l: "G", a: 1},
{o: 26.22, f: 37.944, l: "G", a: 0},
{o: 37.944, f: 49.592, l: "G", a: 1},
{o: 49.592, f: 61.96, l: "G", a: 0},
{o: 61.96, f: 73.684, l: "G", a: 1},
{o: 73.684, f: 85.112, l: "G", a: 0},
{o: 85.112, f: 103.22, l: "G", a: 1},
{o: 103.22, f: 117, l: "G", a: 0},
{o: 117, f: 142.444, l: "G", a: 1},
{o: 142.444, f: 165.48, l: "G", a: 0},
{o: 165.48, f: 184.928, l: "G", a: 1},
{o: 184.928, f: 203.528, l: "G", a: 0},
{o: 203.528, f: 220.948, l: "G", a: 1},
{o: 220.948, f: 235.384, l: "G", a: 0},
{o: 235.384, f: 247.6, l: "G", a: 1},
{o: 247.6, f: 260.712, l: "G", a: 0},
{o: 260.712, f: 271.712, l: "B", a: 1},
{o: 271.712, f: 281.064, l: "B", a: 0},
{o: 281.064, f: 293.892, l: "D", a: 1},
{o: 293.892, f: 305.164, l: "A", a: 0},
{o: 305.164, f: 319.548, l: "D", a: 1},
{o: 319.548, f: 336.292, l: "D", a: 0},
{o: 336.292, f: 355.692, l: "A", a: 1},
{o: 355.692, f: 377.712, l: "E", a: 0},
{o: 377.712, f: 394.24, l: "F", a: 1},
{o: 394.24, f: 402.992, l: "H", a: 0},
{o: 402.992, f: 419.184, l: "I", a: 1},
{o: 419.184, f: 431.932, l: "J", a: 0},
{o: 431.932, f: 440.464, l: "K", a: 1},
{o: 440.464, f: 448.232, l: "L", a: 0},
{o: 448.232, f: 458.404, l: "M", a: 1},
{o: 458.404, f: 466.532, l: "N", a: 0},
{o: 466.532, f: 475.96, l: "O", a: 1}],
[{o: 0.467, f: 8.733, l: "7", a: 0},
{o: 8.733, f: 33.88, l: "1", a: 1},
{o: 33.88, f: 41.133, l: "3", a: 0},
{o: 41.133, f: 46.947, l: "4", a: 1},
{o: 46.947, f: 53.867, l: "3", a: 0},
{o: 53.867, f: 58.173, l: "4", a: 1},
{o: 58.173, f: 65.413, l: "3", a: 0},
{o: 65.413, f: 78.333, l: "1", a: 1},
{o: 78.333, f: 87.88, l: "4", a: 0},
{o: 87.88, f: 123.613, l: "1", a: 1},
{o: 123.613, f: 127.64, l: "2", a: 0},
{o: 127.64, f: 135.453, l: "1", a: 1},
{o: 135.453, f: 139.133, l: "2", a: 0},
{o: 139.133, f: 146.867, l: "1", a: 1},
{o: 146.867, f: 152.333, l: "2", a: 0},
{o: 152.333, f: 164.933, l: "1", a: 1},
{o: 164.933, f: 171.227, l: "3", a: 0},
{o: 171.227, f: 194.227, l: "1", a: 1},
{o: 194.227, f: 200.12, l: "2", a: 0},
{o: 200.12, f: 220.6, l: "1", a: 1},
{o: 220.6, f: 225.053, l: "2", a: 0},
{o: 225.053, f: 242.04, l: "1", a: 1},
{o: 242.04, f: 249.467, l: "2", a: 0},
{o: 249.467, f: 253.933, l: "1", a: 1},
{o: 253.933, f: 257.6, l: "2", a: 0},
{o: 257.6, f: 265.427, l: "1", a: 1},
{o: 265.427, f: 269.88, l: "2", a: 0},
{o: 269.88, f: 322.547, l: "1", a: 1},
{o: 322.547, f: 329.56, l: "6", a: 0},
{o: 329.56, f: 337.48, l: "1", a: 1},
{o: 337.48, f: 343.427, l: "6", a: 0},
{o: 343.427, f: 355.693, l: "1", a: 1},
{o: 355.693, f: 362.6, l: "3", a: 0},
{o: 362.6, f: 396.333, l: "1", a: 1},
{o: 396.333, f: 400.427, l: "2", a: 0},
{o: 400.427, f: 408.6, l: "1", a: 1},
{o: 408.6, f: 425.027, l: "2", a: 0},
{o: 425.027, f: 433.667, l: "8", a: 1},
{o: 433.667, f: 475.88, l: "5", a: 0}],
[{o: 0, f: 47.68, l: "a", a: 0},
{o: 47.68, f: 95.36, l: "a", a: 1},
{o: 95.36, f: 142.295, l: "a", a: 0},
{o: 142.295, f: 190.72, l: "a", a: 1},
{o: 190.72, f: 213.07, l: "b", a: 0},
{o: 213.07, f: 260.005, l: "a", a: 1},
{o: 260.005, f: 308.43, l: "a", a: 0},
{o: 308.43, f: 355.365, l: "a", a: 1},
{o: 355.365, f: 406.025, l: "a", a: 0},
{o: 406.025, f: 427.63, l: "b", a: 1},
{o: 427.63, f: 476.055, l: "c", a: 0}],
[{o: 0, f: 4.017, l: "n1", a: 0},
{o: 4.017, f: 29.954, l: "B", a: 1},
{o: 29.954, f: 39.172, l: "n2", a: 0},
{o: 39.172, f: 64.737, l: "B", a: 1},
{o: 64.737, f: 78.147, l: "A", a: 0},
{o: 78.147, f: 89.931, l: "A", a: 1},
{o: 89.931, f: 101.75, l: "A", a: 0},
{o: 101.75, f: 113.534, l: "A", a: 1},
{o: 113.534, f: 125.295, l: "A", a: 0},
{o: 125.295, f: 137.137, l: "A", a: 1},
{o: 137.137, f: 148.933, l: "A", a: 0},
{o: 148.933, f: 160.694, l: "A", a: 1},
{o: 160.694, f: 171.955, l: "A", a: 0},
{o: 171.955, f: 184.413, l: "A", a: 1},
{o: 184.413, f: 196.301, l: "A", a: 0},
{o: 196.301, f: 207.819, l: "A", a: 1},
{o: 207.819, f: 220.067, l: "A", a: 0},
{o: 220.067, f: 231.549, l: "A", a: 1},
{o: 231.549, f: 243.74, l: "A", a: 0},
{o: 243.74, f: 255.628, l: "A", a: 1},
{o: 255.628, f: 267.494, l: "A", a: 0},
{o: 267.494, f: 279.417, l: "A", a: 1},
{o: 279.417, f: 289.831, l: "A", a: 0},
{o: 289.831, f: 303.578, l: "n21", a: 1},
{o: 303.578, f: 314.967, l: "A", a: 0},
{o: 314.967, f: 326.832, l: "A", a: 1},
{o: 326.832, f: 338.756, l: "A", a: 0},
{o: 338.756, f: 351.121, l: "A", a: 1},
{o: 351.121, f: 362.475, l: "A", a: 0},
{o: 362.475, f: 374.166, l: "A", a: 1},
{o: 374.166, f: 386.159, l: "A", a: 0},
{o: 386.159, f: 398.582, l: "A", a: 1},
{o: 398.582, f: 409.728, l: "A", a: 0},
{o: 409.728, f: 420.13, l: "A", a: 1},
{o: 420.13, f: 475.963, l: "n31", a: 0}],
[{o: 0, f: 0.016, l: "F", a: 0},
{o: 0.016, f: 430.872, l: "E", a: 1},
{o: 430.872, f: 475.96, l: "C", a: 0},
{o: 475.96, f: 476, l: "F", a: 1}]
];

var seriesNames = ["Ground-truth","BV1","BV2","GP7","MHRAF2","MND1","WB1"];

var track_url = "salami000466.ogg";

var artist = "Jarflys";

var track = "Predictable";
