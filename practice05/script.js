'use strict';

let scoreSubjects = {id:"学籍番号", name: "氏名", math1: "数学Ⅰ", mathA: "数学A", chemistry: "化学", physics:"物理"}

let studentExamScores =
   [{ id:"001", name: "富山 陽茉莉", math1: 72, mathA: 96, chemistry: 35, physics: 88
}, {  id:"002", name: "今西 琴音",   math1: 58, mathA: 66, chemistry: 11, physics: 70
}, {  id:"003", name: "永野 公平",   math1: 40, mathA: 23, chemistry: 25, physics: 64
}, {  id:"004", name: "野崎 日奈",   math1: 87, mathA: 54, chemistry: 18, physics: 61
}, {  id:"005", name: "柴田 友彦",   math1: 65, mathA: 58, chemistry: 32, physics: 68
}, {  id:"006", name: "稲村 和",     math1: 24, mathA: 36, chemistry: 10, physics: 20
}, {  id:"007", name: "下山 博一",   math1: 56, mathA: 63, chemistry: 29, physics: 78
}, {  id:"008", name: "守屋 珠希",   math1: 89, mathA: 75, chemistry: 24, physics: 58
}, {  id:"009", name: "北条 新太郎", math1: 67, mathA: 64, chemistry: 14, physics: 25
}, {  id:"010", name: "荒川 匠",     math1: 25, mathA: 36, chemistry: 3, physics: 12
}];

//　昇順

const NOMALLIST = studentExamScores.slice();
const TABLE = document.createElement(`table`);
const TBODY = document.createElement('tbody');
TBODY.setAttribute('id', 'tbody');

scoreSubjects.sumScore = `合計点`;
scoreSubjects.averageScore = `平均点`;
studentExamScores.forEach(function(item, index) {
   item.sumScore = item.math1 + item.mathA + item.chemistry + item.physics;
   item.averageScore = (item.math1 + item.mathA + item.chemistry + item.physics) / 4;
});

const ROW = document.createElement(`tr`);
for (let data in scoreSubjects) {
   const TH = document.createElement(`th`);
   TH.setAttribute('id', `name-${data}`);
   TH.setAttribute('class', `list`);
   const PRITH = ROW.appendChild(TH);
   PRITH.insertAdjacentHTML('afterbegin', scoreSubjects[data] + `▼`);
}

function newELE(scoreData) {
   scoreData = studentExamScores;
   TABLE.appendChild(ROW);

   for (let data in studentExamScores) {
      const ROW2 = document.createElement(`tr`);
      for (let data2 in studentExamScores[0]) {
         const TD = document.createElement(`td`);
         ROW2.appendChild(TD);
         TD.appendChild(document.createTextNode(scoreData[data][data2]));
      }
      TBODY.appendChild(ROW2);
      TABLE.appendChild(TBODY);
   }
   newSort();
   document.body.appendChild(TABLE);
}

function newSort() {
document.addEventListener('DOMContentLoaded', function () {
   let lists = document.querySelectorAll('.list');
   let lists2 = [];
   for (let i = 0; i < lists.length; i++) {
      lists2[i] = scoreSort(lists[i].id.slice(5))
   lists[i].addEventListener('click', function() {
      remove();
         lists2[i]();
   }, false);
   }
}, false);
}

function scoreSort(id) {
   let acending = true;
   return function () {
      let def = 1;
      let xfk1 = -1;
      if(acending) {
         def = 1;
         xfk1 = -1;
      } else {
         def = -1;
         xfk1 = 1;
      }
      console.log(acending)
   let newSortList = studentExamScores.sort(function (a, b) {
      if(a[id] < b[id]) {
         return def;
      } else {
         return xfk1;
      }
   });
   acending = !acending;
   console.log(newSortList);
   newELE(newSortList);

}
}
// function scoreUpSort(id) {
//    let upSortList = studentExamScores.sort(function (a, b) {
//       if(a[id] < b[id]) {
//          return -1;
//       } else {
//          return 1;
//       }
//    });
//    newELE(upSortList);
// }

function remove() {
   let removeList = document.getElementById('tbody');
    while (removeList.lastChild) {
      removeList.removeChild(removeList.lastChild);
    }
}

newELE();