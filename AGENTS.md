# 저장소 에이전트 가이드

## 프로젝트와 경계

- `@pdg/react-component`는 React 19, TypeScript, MUI 기반 npm 라이브러리다. 공개 구현과 타입은 `src/`, 루트 export는 `src/index.ts`에 있다.
- `examples/`는 라이브러리 소스를 직접 가져오는 별도 Rspack 데모다. 공개 API와 예제의 사용 방식은 함께 확인한다.
- `dist/`, `examples/dist/`, 루트 `index.html`, `404.html`은 추적되는 생성물이다. 직접 편집하지 않으며 빌드가 기존 파일을 덮어쓰기 전에 상태를 확인한다.
- 라이브러리의 peer dependency는 번들에 포함하지 않는다. React와 React DOM의 호환성과 예제에서의 단일 인스턴스를 유지한다.

## 작업과 검증

- 시작할 때 `git status --short`와 관련 코드·설정을 확인하고 기존 변경을 보존한다. 문서와 작업 결과는 한글로 작성한다.
- `.nvmrc`의 Node를 사용한다. 일반 코드 변경은 `npm run verify`로 루트와 예제의 lint·타입을 확인한다. 이 명령은 테스트를 실행하지 않는다.
- 패키징·배포에 영향이 있으면 `npm run verify:release`와 생성물 diff를 확인한다. 이 명령은 예제 산출물과 루트 HTML을 덮어쓰고, 라이브러리 빌드에서 Watchman을 사용한다.
- 현재 테스트 파일과 npm `test` 스크립트는 없다. 동작 변경에는 적합한 실행 가능한 테스트를 마련하거나 데모의 대표 동작을 확인하고 미검증 범위를 보고한다.
- 공개 API 변경은 컴포넌트의 타입·barrel과 `src/index.ts`, 예제 화면·라우터·메뉴, README 및 배포 타입에 미치는 영향을 확인한다.
- 커밋·푸시·npm 게시는 요청된 경우에만 수행한다. `npm run pub`는 실제 게시 명령이다.
- 상세 절차는 [npm 패키지 개발 스킬](.agents/skills/npm-package-development/SKILL.md), 복합 변경은 [오케스트레이터](.agents/skills/react-component-orchestrator/SKILL.md), 구조와 명령 설명은 [프로젝트 문서](docs/agents/project.md)를 참고한다. 인계가 필요할 때만 [_workspace 계약](_workspace/README.md)을 사용한다.
