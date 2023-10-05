// 최빈값 구하기

// 문제 설명
// 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다.
// 정수 배열 array가 매개변수로 주어질 떄, 최빈값을 return 하도록 solution 함수를 완성해보세요
// 최빈값이 여러 개면 -1을 return합니다.

// 제한사항
// 0 < array의 길이 < 100
// 0 <= array의 원소 < 1000

function solution(array) {
  var count = {}; // 각 숫자의 출현 횟수를 계산
  var maxCount = 0; // 가장 많이 출현한 횟수를 저장하는 변수, 초기값 = 0
  var mode = -1; // 최빈값을 저장하는 변수, 초기값 -1

  // array.forEach()를 사용해서 count 객체에서 현재 숫자의 출현 횟수 체크
  // 현재 숫자의 출현 횟수가 maxCount보다 크면 maxCount, mode 업데이트
  array.forEach(function (num) {
    count[num] = (count[num] || 0) + 1; // count[num] 값을 사용하되 num이 count객체에 없을때 0을 사용 / count[num]의 값을 1 증가
    if (count[num] > maxCount) {
      // 현재 숫자의 출현 횟수가  maxCount보다 큰지 확인
      maxCount = count[num]; // 현재 숫자의 출현 횟수가 크다면 maxCount 는 현재 숫자로 업데이트
      mode = num; // 최빈값은 num
    }
  });

  // 최빈값 유일성 확인
  // 만약 maxCount와 동일한 횟수를 가진 숫자가 있다면 mode를 -1로 설정
  for (var num in count) {
    if (count[num] === maxCount && parseInt(num) !== mode) {
      // 현재 숫자의 출현횟수가 maxCount와 동일한지 확인하고 현재 숫자 이전 최빈값과 다른지 확인
      mode = -1; // 두 조건을 만족하면 최빈값을 -1로 설정
      break;
    }
  }

  return mode;
}

// GPT 추천 로직
// function solution(array) {
//     // 객체를 이용해 각 숫자의 출현 횟수를 저장합니다.
//     var count = {};
//     array.forEach(num => {
//         count[num] = (count[num] || 0) + 1;
//     });

//     // 출현 횟수를 기준으로 배열을 정렬합니다.
//     var sortedNums = Object.keys(count).sort((a, b) => count[b] - count[a]);

//     // 가장 높은 출현 횟수를 저장합니다.
//     var maxCount = count[sortedNums[0]];

//     // 최빈값이 1개인지 확인합니다.
//     // 최빈값이 여러 개면 -1을 반환합니다.
//     var isUniqueMode = sortedNums.length === 1 || count[sortedNums[1]] !== maxCount;
//     if (isUniqueMode) {
//         return parseInt(sortedNums[0]);
//     } else {
//         return -1;
//     }
// }

// 테스트
var testArray = [1, 2, 2, 2, 2, 3, 1, 1];
var result = solution(testArray);

console.log('Result:', result);
