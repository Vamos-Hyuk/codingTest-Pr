// 겹치는 선분의 길이

// 문제설명
// 선분 3개가 평행하게 놓여 있습니다. 세 선분의 시작과 끝 좌표가[[start, end], [start, end], [start, end]]
// 형태로 들어있는 2차원 배열 lines가 매개변수로 주어질 때, 두 개 이상의 선분이 겹치는 부분의 길이를 return 하도록
// solution 함수를 완성해보세요.

// 제한사항
// lines의 길이는 = 3
// lines의 원소의 길이 = 2
// 모든 선분은 길이가 1 이상
// lines의 원소는 [a, b]형태이고 a, b는 각각 선분의 양 끝점
// -100 <= a < b <= 100

function solution(lines) {
  // 겹치는 선분의 총 길이를 저장하는 변수입니다.
  let overlapLength = 0;

  // 두 선분씩 비교하기 위한 이중 for 루프를 사용
  for (let i = 0; i < lines.length; i++) {
    for (let j = i + 1; j < lines.length; j++) {
      // lines[i]와 lines[j] 선분의 시작점과 끝점을 각각 a1, b1, a2, b2로 정의
      const [a1, b1] = lines[i];
      const [a2, b2] = lines[j];

      // 두 선분이 겹치는지 확인
      // 겹친다는 것은 각 선분의 시작점이 다른 선분의 끝점보다 작거나 같고, 반대로 다른 선분의 시작점이 이 선분의 끝점보다 작거나 같은 경우
      if (a1 <= b2 && a2 <= b1) {
        // 겹치는 두 선분의 시작점 중 큰 값을 시작점, 끝점 중 작은 값을 끝점으로
        const overlapStart = Math.max(a1, a2);
        const overlapEnd = Math.min(b1, b2);

        // 겹치는 선분의 길이를 overlapLength에 더하기
        overlapLength += overlapEnd - overlapStart;
      }
    }
  }

  // 세 선분의 시작점과 끝점을 정의
  const [a1, b1] = lines[0];
  const [a2, b2] = lines[1];
  const [a3, b3] = lines[2];

  // 세 선분이 모두 겹치는 영역의 시작점과 끝점을 계산
  const allOverlapStart = Math.max(a1, a2, a3);
  const allOverlapEnd = Math.min(b1, b2, b3);

  // 세 선분이 모두 겹치는 영역이 있다면, 영역의 길이를 overlapLength에서 두 번 빼기
  // 앞에서 모든 겹치는 영역을 더해줬기 때문에, 세 선분이 모두 겹치는 영역은 중복이라서
  if (allOverlapStart < allOverlapEnd) {
    overlapLength -= 2 * (allOverlapEnd - allOverlapStart);
  }

  // 최종적 계산된 겹치는 선분의 총 길이 반환
  return overlapLength;
}

// GPT가 짜준 거
// function solution(lines) {
//   // points 배열을 생성하여 모든 시작점과 끝점을 저장합니다.
//   let points = [];
//   for (let i = 0; i < lines.length; i++) {
//     points.push([lines[i][0], 1]); // 시작점을 추가하고, 카운트를 1로 표시합니다.
//     points.push([lines[i][1], -1]); // 끝점을 추가하고, 카운트를 -1로 표시합니다.
//   }

//   // points 배열을 x 좌표에 대해 정렬합니다.
//   // x 좌표가 같은 경우 시작점이 끝점보다 앞에 오도록 합니다.
//   points.sort((a, b) => {
//     if (a[0] === b[0]) return b[1] - a[1];
//     return a[0] - b[0];
//   });

//   let overlapLength = 0; // 겹치는 길이를 저장하는 변수입니다.
//   let count = 0; // 현재 겹치고 있는 선분의 수를 저장하는 변수입니다.
//   let prevX = points[0][0]; // 이전 x 좌표를 저장하는 변수입니다.

//   // points를 스캔하며 겹치는 부분을 찾습니다.
//   for (let [x, delta] of points) {
//     // 현재 x 좌표가 이전 x 좌표와 다르고,
//     // 겹치고 있는 선분이 2개 이상이라면 겹치는 길이를 더합니다.
//     if (x !== prevX && count >= 2) {
//       overlapLength += x - prevX;
//     }
//     // 현재 x 좌표에서의 선분의 시작 또는 끝을 count에 반영하고,
//     // prevX를 업데이트합니다.
//     count += delta;
//     prevX = x;
//   }

//   // 최종적으로 계산된 겹치는 선분의 길이를 반환합니다.
//   return overlapLength;
// }

// test
var testLines = [
  [0, 5],
  [3, 9],
  [1, 10],
];
var result = solution(testLines);

console.log('Result:', result);
