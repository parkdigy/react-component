---
name: react-component-orchestrator
description: Coordinate non-trivial changes to this React component library across public API, examples, verification, and review.
---

# React Component Orchestrator

## When to Use

- 새 공개 컴포넌트 추가, 여러 컴포넌트에 걸친 변경, props 계약 변경, 빌드·배포 설정 변경에 사용한다.
- 요구사항과 구현 근거를 다음 작업까지 보존해야 하는 경우 사용한다.
- 한 파일의 명백한 오타나 동작을 바꾸지 않는 작은 수정에는 직접 작업하고 이 흐름을 만들지 않는다.

## Required Inputs

- 사용자 요청과 완료 조건
- 영향받는 컴포넌트, 공개 export, 예제 화면
- 호환성 또는 릴리스 제약

## Workflow

### 1. 범위 고정

- 요청을 코드로 옮기기 전에 영향 경로와 비목표를 정한다.
- 복합 작업만 `_workspace/00_request.md`에 요청, 완료 조건, 영향 경로, 비목표를 기록한다.
- 가장 가까운 기존 컴포넌트를 찾아 구조와 API 관례를 재사용한다.

### 2. 계약 우선 설계

- 구현 전에 props 타입, ref 대상, MUI 기반 타입 상속, children 처리, named/default export를 결정한다.
- 공개 API가 바뀌면 컴포넌트 `index.ts`와 루트 `src/index.ts`까지 같은 계약으로 본다.
- 결정 사항이 여러 파일 또는 다음 세션에 영향을 주면 `_workspace/01_plan.md`에 기록한다.

### 3. 단일 소유 구현

- 한 작업자는 `src/` 구현과 공개 export를 끝까지 소유한다. 같은 checkout에서 겹치는 쓰기를 병렬화하지 않는다.
- 기존 ESLint 제약을 따른다. 특히 `React.FC`, `memo`, `forwardRef`는 사용하지 않는다.
- `dist/`, 루트 `index.html`, `404.html`을 직접 편집하지 않는다.

### 4. 예제 동기화

- 사용자에게 보이는 동작 또는 공개 API가 변하면 대응하는 `examples/src/component` 예제를 갱신한다.
- 새 예제는 해당 카테고리의 barrel export와 `examples/src/layout/DefaultLayout/menu.json` 연결 여부를 확인한다.
- 최소한 기본 상태, 주요 변형, disabled/error 등 의미 있는 경계 상태를 표현한다.

### 5. 검증

- 모든 코드 변경 후 `npm run verify`를 실행한다.
- 패키지 출력, export, 빌드 설정 또는 배포 예제가 바뀌면 `npm run verify:release`도 실행한다.
- 릴리스 검증 뒤 `git diff -- dist index.html 404.html`로 생성물 변경이 의도와 일치하는지 확인한다.
- 시각적·상호작용 변경은 `npm run dev`로 데모를 확인한다. 브라우저 검증이 불가능하면 그 사실을 결과에 남긴다.

### 6. 리뷰와 인계

- 원래 완료 조건과 실제 diff를 함께 읽고 API-구현-예제의 경계를 교차 확인한다.
- 복합 작업은 `_workspace/02_review.md`에 `pass`, `fix`, `redo` 중 하나와 근거를 기록한다.
- `fix`는 한 번 수정 후 재검증한다. 여전히 실패하거나 방향이 틀리면 사용자에게 남은 문제와 선택지를 알린다.

## Outputs

- 요청 범위에 맞는 `src/` 및 필요 시 `examples/` 변경
- 통과한 검증 명령과 수동 확인 결과
- 복합 작업에 한해 `_workspace/00_request.md`, `_workspace/01_plan.md`, `_workspace/02_review.md`

## Failure Policy

- 요구사항이 불완전해도 기존 API와 가장 가까운 패턴으로 안전하게 진행할 수 있으면 가정을 기록하고 계속한다.
- 공개 API를 되돌리기 어렵거나 서로 다른 해석이 큰 결과 차이를 만들면 구현 전에 사용자 결정을 요청한다.
- 기존 실패는 새 변경과 구분해 명령, 오류, 영향 범위를 기록한다. 검증을 생략하거나 성공으로 간주하지 않는다.
- 생성물에 예상 밖의 광범위한 diff가 생기면 릴리스 작업을 중단하고 원인을 먼저 분석한다.

## Validation

- `npm run verify`가 성공한다.
- 공개 컴포넌트는 타입, 로컬 barrel, 루트 barrel이 연결된다.
- 변경된 사용자 동작은 대응 예제 또는 명시적인 수동 검증 근거가 있다.
- 리뷰는 원 요청의 각 완료 조건을 확인하고 미검증 영역을 구분한다.

## References

- 역할, 단계별 산출물, 위임 기준: `../../../docs/harness/react-component/team-spec.md`
- 임시 작업 파일 계약: `../../../_workspace/README.md`
