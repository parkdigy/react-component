---
name: npm-package-development
description: 이 저장소의 React·TypeScript npm 라이브러리 구현, 오류 수정, 공개 API, 의존성 및 빌드 변경 절차. 소스·예제·타입·패키징을 함께 점검한다.
---

# npm 패키지 개발

## 적용 범위와 입력

컴포넌트, 공개 타입·export, 의존성 또는 빌드 설정을 변경할 때 사용한다. 요청과 완료 조건, `git status --short`, 관련 코드와 설정을 먼저 확인한다. 저장소 공통 규칙은 [AGENTS.md](../../../AGENTS.md), 구조와 빌드 주의점은 [프로젝트 문서](../../../docs/agents/project.md)를 따른다.

## 분석과 구현

1. 가까운 `src/P*/` 구현과 props, 폴더 `index.ts`, 루트 `src/index.ts`를 확인하고 기존 named/default export와 MUI 조합 방식을 따른다. 변경 범위와 검증 계획을 정한다.
2. 공개 API 또는 사용자 동작 변경은 `examples/src/component/`, 관련 barrel, `examples/src/router/index.tsx`, `examples/src/layout/DefaultLayout/menu.json` 및 README에 미치는 영향을 확인한다. 해당하는 경우 대표 상태와 상호작용을 예제에 반영한다.
3. 의존성을 바꾸면 루트와 예제의 직접 사용처, peer 범위, `.nvmrc`, React 중복 여부를 확인한다. 잠금 파일은 Git 제외 대상이므로 기존 로컬 잠금 파일과 설치 옵션을 확인하고 삭제·덮어쓰기 전에 영향을 살핀다.
4. 여러 세션에 걸치거나 인계가 필요할 때만 [작업 기록 양식](templates/task.md)을 `_workspace/<작업명>/task.md`에 복사한다. 작업명은 경로에 안전한 영문·숫자·하이픈을 사용하고 다른 작업 기록을 덮어쓰지 않는다.

## 검증과 인계

- 일반 코드 변경은 `npm run verify`를 실행한다. 루트와 예제에서 각각 lint 및 TypeScript를 검사하며 테스트는 실행하지 않는다.
- 현재 테스트 파일과 npm `test` 스크립트는 없다. 동작에 맞는 테스트가 유용하면 실행 명령과 필요한 환경을 마련한다. Jest는 Node 환경이며 현재 변환 정규식에 `.tsx`가 없다. 데모에서 대표 상태와 상호작용도 확인하고 불가능한 검증은 보고한다.
- 예제 번들 확인은 `npm --prefix examples run build:rspack`이다. 출력 설정의 `clean`으로 `examples/dist/`를 다시 생성하므로 기존 변경부터 확인한다.
- 패키징·배포 영향이 있으면 `npm run verify:release`를 실행하고 `dist/`, `examples/dist/`, `index.html`, `404.html`의 diff와 공개 declaration을 살핀다. 이 명령은 예제 전체 빌드 및 Watchman 후 Rollup을 실행한다. `npm run build:examples`는 루트 HTML도 덮어쓴다.
- Watchman이 실패하면 `./node_modules/.bin/rollup -c --bundleConfigAsCjs`로 별도 확인할 수 있으나 표준 빌드 통과로 보고하지 않는다. 이 명령도 `dist/*`를 정리한다. 배포 변경 시 실제 소비 환경의 import·require·타입 해석과 peer 외부 처리를 확인한다.
- 실패는 기존 결함, 새 회귀, 환경 문제를 구분하고 명령과 핵심 오류를 기록한다. 검사를 완화해 실패를 숨기지 않는다. 최종 diff에서 기존 변경과 생성물을 확인하고 실행 결과 및 미검증 사항을 한글로 보고한다.
