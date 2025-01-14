# Level1

## 필수 요구사항

- [x] Storybook 상호 작용 테스트
- [x] 재사용 가능한 Component 작성

## 필수 구현

- [x] 카드 번호를 입력한다.
  - [x] 카드 번호 앞의 8자리는 숫자로 표시된다.
  - [x] 카드 번호 뒤의 8자리는 가려진다.
  - [x] [예외] 숫자는 16개가 입력되어야한다.
  - [x] [예외] 숫자가 아닌 값은 입력할 수 없다.
  - [x] [예외] 빈 값은 입력할 수 없다.
- [x] 만료일(월, 년도)을 입력한다.
  - [x] 월, 년도가 표시된다.
  - [x] [예외] 숫자가 아닌 값은 입력할 수 없다.
  - [x] [예외] 월, 년도는 각각 두자리이다.
  - [x] [예외] 만료월은 1월 ~ 12월 사이로 입력되어야한다.
  - [x] [예외] 만료 년도가 현재 년도 이후로 입력되어야한다.
  - [x] [예외] 현재 월/년 이후로 입력되어야한다.
  - [x] [예외] 빈 값은 입력할 수 없다.
- [x] 카드 소유자 이름을 입력한다.
  - [x] 카드 소유자 이름이 표시된다.
  - [x] 카드 소유자 이름의 길이가 표시된다.
  - [x] [예외] 카드 소유자 이름은 영어만 입력할 수 있다.
  - [x] [예외] 카드 소유자 이름의 길이는 1~30이다.
  - [x] [예외] 빈 값은 입력할 수 없다.
- [x] 보안코드를 입력한다.
  - [x] type이 password이다.
  - [x] [예외] 숫자가 아닌 값은 입력할 수 없다.
  - [x] [예외] 보안 코드는 세자리이다.
  - [x] [예외] 빈 값은 입력할 수 없다.
- [x] 물음표 아이콘에 마우스를 올리면, 보안 카드를 설명하는 텍스트가 표시된다.
- [x] 카드 비밀번호를 입력한다.
  - [x] type이 password이다.
  - [x] [예외] 숫자가 아닌 값은 입력할 수 없다.
  - [x] [예외] 각 비밀번호 input은 1자리까지만 입력할 수 있다.
  - [x] [예외] 빈 값은 입력할 수 없다.
- [x] 다음 버튼을 클릭한다.
- [x] 값이 제대로 채워지지 않은 경우, alert창으로 알려준다.

# Level2

## 필수 요구사항

- [x] Storybook 상호 작용 테스트
- [x] Controlled & Uncontrolled Components에 입각하여 Form 핸들링
- [x] Context API를 활용해 전역 상태 관리 및 계층 재구성

## 필수 구현

- [x] 카드 입력을 모두 정상적으로 끝낸 후, 다음 버튼을 클릭한다.
- [x] 카드추가완료 페이지로 이동한다.
- [x] 카드명을 입력한 후, 확인 버튼을 클릭한다. 잘못입력한 경우(예외), 경고창을 확인할 수 있다.

  - [x] [예외] 카드명이 10자가 넘은 경우
  - [x] [예외] 카드명이 공백인 경우
  - [x] [예외] 카드명이 숫자인 경우
  - [x] [예외] 카드명이 아무것도 입력되지 않은 경우

- [x] 카드 목록 페이지로 이동한다.
- [x] 방금 추가한 카드를 목록에서 확인할 수 있다.
- [x] 카드 추가 버튼(+)을 클릭하면, 카드추가 페이지로 이동한다.

## 심화 요구사항

### level1

- [ ] Storybook 단위 테스트
- [x] 유효성 검증 실패에 대한 UI/UX 추가
- [ ] 가상 키보드
  - [ ] 마스킹 처리된 값 입력시 사용
  - [ ] 숫자를 랜덤으로 배열

### level2

- [ ] 카드사 선택 기능
- [ ] Storybook 스냅샷 테스트
- [ ] 비동기 통신
  - [ ] 다양한 도구를 활용 (예 JSON Server, Strapi 등등)
  - [ ] 등록된 카드 정보를 CRUD 합니다.
- [ ] 나열된 카드 클릭시 카드 추가 확인 화면 재활용
  - [ ] 별칭 수정 가능
