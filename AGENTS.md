# Repository Agents Guide

## What

- 이 저장소는 React 19, TypeScript, MUI 기반의 `@pdg/react-component` 라이브러리다.
- 배포 소스는 `src/`, 브라우저 데모와 사용 예시는 `examples/`, 생성 산출물은 `dist/`, `index.html`, `404.html`에 있다.
- 각 공개 컴포넌트는 보통 `src/PName/PName.tsx`, `PName.types.ts`, `index.ts`로 구성되며 루트 `src/index.ts`에서 다시 export한다.

## Why

- 컴포넌트 구현, 공개 타입/export, 예제 화면은 하나의 사용 계약이므로 함께 확인한다.
- `dist/`와 데모 정적 파일은 추적되지만 생성물이므로 직접 편집하지 않고 릴리스 검증으로 재생성한다.
- 라이브러리의 peer dependency를 runtime dependency처럼 번들에 포함하지 않는다.

## How

- 기존 컴포넌트의 파일명, named/default export, props 확장 방식, MUI 조합 방식을 가까운 사례에서 먼저 확인한다.
- 일상 검증은 `npm run verify`로 수행한다.
- 패키징 또는 릴리스 영향이 있으면 `npm run verify:release`를 추가로 수행하고 생성 파일 diff를 검토한다.
- 새 컴포넌트나 공개 API 변경은 `src/index.ts`와 해당 `index.ts`, 관련 `examples/src/component` 화면 및 메뉴 연결을 함께 점검한다.
- 테스트 체계가 없으므로 동작 변경은 데모 앱에서 대표 상태와 상호작용을 확인하고, 검증하지 못한 부분을 명시한다.
- 복합 작업은 `.agents/skills/react-component-orchestrator/SKILL.md`를 따르고, 역할·실패 정책은 `docs/harness/react-component/team-spec.md`를 참고한다.
- 지속 가능한 작업 기록이 필요할 때만 `_workspace/` 계약을 사용한다. 일반적인 작은 수정에는 빈 산출물을 만들지 않는다.

# 에이전트 코딩 가이드

## 프로젝트

`@pdg/react-component`는 React 컴포넌트를 제공하는 TypeScript npm 패키지다. `src/index.ts`는 공개 컴포넌트를 내보내며 `examples/`는 라이브러리 소스를 직접 가져오는 별도 Rspack React 애플리케이션이다.

- 구현과 공개 API: `src/`, `src/index.ts`
- 예제: `examples/src/`, `examples/package.json`
- 예제 레이아웃: `examples/src/layout/DefaultLayout/` (`@pdg/react-admin-layout`, MUI, Emotion, React Router, SimpleBar 사용)
- 예제 번들·개발 서버: `examples/rspack.config.js` (기본 포트 9806)
- Jest 설정: `jest.config.ts`, `tsconfig.test.json` (현재 테스트 파일과 `test` npm 스크립트 없음)
- 빌드 결과: `dist/`, `examples/dist/` (직접 수정하지 않음)
- 프로젝트 분석과 설정상 주의점: [구조 문서](docs/agents/project.md)
- 반복 코딩 절차: [코딩 스킬](.agents/skills/npm-package-development/SKILL.md)

## 작업 원칙

1. 시작할 때 `git status --short`와 관련 소스·설정을 읽고 기존 변경을 보존한다.
2. 요청에 필요한 범위만 수정한다. 공개 API 변경은 진입점, 타입 선언, 테스트, README와 예제에 미치는 영향을 확인한다.
3. 문서와 작업 결과는 한글로 작성한다. 식별자와 명령은 원래 표기를 사용한다.
4. React와 React DOM은 패키지의 peer dependency다. 예제의 React와 React DOM이 서로 호환되고 React 인스턴스가 중복되지 않는지 확인한다.
5. 배포 경로와 모듈 형식의 관계를 확인한다. 배포 관련 변경 시 실제 소비 환경에서 import, require와 타입 해석을 검증한다.
6. 커밋·푸시·npm 게시 명령은 해당 작업이 요청됐을 때만 실행한다. 특히 `npm run pub`는 실제 게시를 수행한다.
7. 의존성 변경 시 양쪽 `package.json`의 사용처와 peer dependency, `.nvmrc`와의 호환성을 확인한다. 예제의 `@pdg/react-admin-layout`이 요구하는 MUI·Emotion 등 peer도 유지한다. 최신 버전이 호환되지 않으면 원인을 확인하고 결과에 명시한다.

## 검증

`.nvmrc`의 Node 버전과 npm을 사용한다. 필요하면 루트와 `examples/`에서 각각 의존성을 설치한다. 잠금 파일은 `.gitignore` 대상이므로 기존 로컬 잠금 파일이 현재 선언과 다를 수 있다. 설치·감사 결과를 해석할 때 실제 사용한 잠금 파일과 옵션을 확인하고, 기존 파일을 삭제하거나 덮어쓰기 전에 영향을 확인한다.

```sh
npm run tsc
npm run lint
cd examples && npm run tsc && npm run lint
```

현재 테스트 파일과 npm `test` 스크립트가 없다. 동작 변경 시 적절한 테스트를 추가하고 실제 실행 가능한 검증 명령을 마련한다. Jest 설정은 있으나 현재 변환 패턴은 `.tsx`를 포함하지 않으며 테스트 환경은 Node다. React 컴포넌트 테스트에서는 필요한 환경과 변환 설정을 확인한다.

라이브러리 빌드 변경 시 `npm run build`를 실행한다. 이 명령은 Watchman 감시 재등록 후 Rollup을 실행하며 테스트는 실행하지 않는다. Watchman이 없거나 접근 오류가 있으면 `./node_modules/.bin/rollup -c --bundleConfigAsCjs`로 번들을 별도 확인하고 표준 빌드 전체가 통과했다고 보고하지 않는다. 예제 변경 시 `cd examples && npm run build:rspack`으로 번들을 확인한다. 예제의 `npm run build`는 추가로 루트의 `index.html`과 `404.html`을 덮어쓴다.

예제 개발 서버는 `npm run dev`로 실행한다. 파일 감시 한도나 권한 문제로 실패하면 오류를 기록하고 환경에 맞는 폴링으로 재확인할 수 있다. 서버 응답만으로 브라우저 렌더링이나 HMR이 검증된 것으로 간주하지 않는다.

문서만 수정할 때는 링크·경로·명령이 실제 설정과 일치하는지 확인한다. 완료 보고에는 변경 내용, 실행한 검증과 결과, 미확인 사항을 남긴다.
