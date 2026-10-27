# React Component Team Spec

## 목표와 구조

이 하네스는 공개 React 컴포넌트 변경을 요구사항부터 API, 구현, 예제, 검증까지 일관되게 연결한다. 기본 패턴은 순차 Pipeline에 마지막 Producer-Reviewer 검사를 결합한 형태다. 이 저장소는 컴포넌트 코드와 공개 export, 예제 타입이 강하게 연결되어 있으므로 기본 구현은 한 명의 소유자가 수행한다.

## 역할

| 역할 | 책임 | 주요 쓰기 영역 |
| --- | --- | --- |
| Coordinator | 요청 해석, 영향 범위, 완료 조건, 최종 승인 | `_workspace/00_request.md`, 최종 요약 |
| Implementer | props 계약, `src/` 구현, export, 예제 동기화 | `src/`, `examples/src/`, `_workspace/01_plan.md` |
| Reviewer | 요구사항 대비 diff, API 경계, 검증 증거 점검 | `_workspace/02_review.md` |

한 에이전트가 세 역할을 순서대로 수행하는 것이 기본이다. 별도 에이전트 위임은 사용자가 요청했거나, 읽기 중심의 독립 검토처럼 명확한 이득이 있을 때만 사용한다.

## 단계와 완료 조건

| 단계 | 입력 | 산출물 | 완료 조건 |
| --- | --- | --- | --- |
| 1. Scope | 사용자 요청, 현재 코드 | 필요 시 `_workspace/00_request.md` | 완료 조건, 영향 경로, 비목표가 명확함 |
| 2. Contract | 가까운 기존 컴포넌트, 타입/export | 필요 시 `_workspace/01_plan.md` | props와 공개 API, 예제 영향이 합의됨 |
| 3. Implement | 계약 | `src/`, 필요 시 `examples/src/` 변경 | 구현과 소비 예제가 같은 API를 사용함 |
| 4. Verify | 전체 diff | 명령 결과, 수동 확인 | 요구 범위에 맞는 검증이 통과함 |
| 5. Review | 원 요청, diff, 검증 결과 | 필요 시 `_workspace/02_review.md` | `pass`, `fix`, `redo` 판단과 근거가 있음 |

## 경계 검토

- props 타입과 컴포넌트 destructuring·전달 속성을 함께 비교한다.
- 컴포넌트 export, 폴더 `index.ts`, 루트 `src/index.ts`를 함께 비교한다.
- 공개 API와 예제 import·control·렌더링을 함께 비교한다.
- peer dependency 선언과 Rollup external 처리 사이의 일관성을 확인한다.
- 생성된 declaration과 실제 공개 API가 일치하는지 릴리스 diff에서 확인한다.

## 위임 정책

- 독립적인 읽기 전용 분석, 접근성 검토, 생성물 diff 검토는 병렬 검토 후보이다.
- 같은 컴포넌트, barrel export, `package.json`, 빌드 설정에 대한 병렬 쓰기는 금지한다.
- 병렬 작업이 필요하면 경로가 겹치지 않게 소유권을 나누거나 별도 checkout을 사용한다.
- Coordinator가 결과를 합치고 최종 완료 조건을 판정한다. 일부 검토가 실패하면 불확실성을 숨기지 않고 해당 범위를 미검증으로 남긴다.
- 위임 깊이는 한 단계로 제한한다. 더 깊은 구조가 필요하면 먼저 작업 범위를 다시 나눈다.

## 실패 및 재검토 정책

- `fix`: 범위가 좁고 방향이 맞을 때 한 번 수정하고 관련 검증 전체를 다시 실행한다.
- `redo`: API 방향 또는 요구사항 해석이 잘못되었을 때 기존 구현을 확장하지 말고 계약 단계로 돌아간다.
- 기존 기준선 실패: 새 변경으로 인한 실패와 분리하여 오류 전문, 재현 명령, 영향 범위를 기록한다.
- 권한, 의존성, 브라우저 등으로 검증할 수 없으면 완료로 꾸미지 않고 정확히 어떤 검증이 남았는지 보고한다.

## 정상 시나리오

새 컴포넌트 요청은 타입과 구현, 두 barrel export, 예제 카테고리와 메뉴를 연결한 뒤 `npm run verify` 및 필요 시 `npm run verify:release`를 통과하고 리뷰에서 `pass`를 받는다.

## 실패 시나리오

예제 빌드는 성공했지만 루트 export가 빠진 경우 리뷰는 `fix`를 기록한다. Implementer는 export를 추가하고 일상 검증과 릴리스 검증을 다시 실행한 후, 생성 declaration에서 export를 확인한다.
