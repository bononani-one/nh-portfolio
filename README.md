# Portfolio 2026

기획 → 디자인 → 개발까지 전체 과정을 직접 다루는 걸 보여주기 위한 개인 포트폴리오 사이트. Next.js(App Router)로 만들고 있다.

## 커리어 방향

웹퍼블리셔 → UI 엔지니어 → 프론트엔드 개발로 이어지는 전환을 보여주는 게 이 사이트의 목적이다. 기존 포트폴리오 사이트는 그대로 유지하고, 이 사이트에서 "더 많은 작업물 보기" 링크로 연결한다.

## 진행 상황

- **기획/구조(IA)** — 완료
- **Figma 와이어프레임 + 디자인 시안** — 완료
- **React 코드화** — 진행 예정 (다음 단계)

## 플래그십 케이스스터디

### B2B 어드민 재설계 — 배너 스케줄 관리

홈쇼핑 MD(운영자)가 여러 프로모션 배너를 스케줄에 맞춰 등록·관리할 때 겪는 문제(상태 파악 어려움, 순서 변경 불편, 빈 상태 기준 없음)를 처음부터 새로 설계한 개인 프로젝트. 실제 재직 중인 회사의 화면이 아니라 그 경험에서 얻은 문제의식을 바탕으로 새로 만든 것이다.

문제 정의 → 정보구조(IA) → 와이어프레임 → Figma 디자인 시안까지 진행했고, 다음 단계로 React 코드화를 진행한다.

전체 과정 기록: [`docs/case-studies/b2b-admin-redesign.md`](./docs/case-studies/b2b-admin-redesign.md)

### 그 외 후보

- Figma 디자인 시스템 작업 (T-Admin, 컴포넌트 구조: Badge/Toggle/Checkbox/Table Row 등)
- 웹폰트 서브셋팅 워크플로우 (Spoqa Han Sans Neo, `local()` 네이밍 트러블슈팅 경험 포함)

## 개발 환경 실행

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000)에서 확인.

## 기술 스택

- **프레임워크**: Next.js (App Router)
- **스타일링**: Tailwind CSS
- **배포**: Vercel

자세한 기획 내용은 [`PLANNING.md`](./PLANNING.md) 참고.
