const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];

const passingGrades = grades.filter(function (num) {
  if (num >= 70) {
    return num;
  }
});
console.log("Subset of passing grades:", passingGrades);