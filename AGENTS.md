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
