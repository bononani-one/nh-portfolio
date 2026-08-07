# 포트폴리오 사이트 프로젝트 기획

## 목표
- 기획 + 디자인 + 개발 풀사이클 능력을 보여주는 포폴사이트
- 커리어 방향: 웹퍼블리셔 → UI 엔지니어 → 프론트엔드 개발 전환
- 기존 포폴사이트는 그대로 유지, 새 사이트에서 "더 많은 작업물 보기" 링크로 새 창 연결 (개별 프로젝트 단위 링크 아님, 사이트 대 사이트 링크)

## 기술 스택
- **프레임워크**: Next.js (App Router, Turbopack)
- **스타일링**: Tailwind CSS (반응형은 `sm:` `md:` `lg:` 브레이크포인트 유틸리티로 처리)
- **애니메이션(선택)**: Framer Motion
- **DB**: 사용 안 함 — 콘텐츠는 코드 내 마크다운/JSON으로 관리 (정적 콘텐츠 위주라 불필요)
- **폼**: Formspree 등 외부 서비스로 연락처 폼 처리 (DB 없이 이메일 수신)
- **폰트**: 기존에 서브셋 작업해둔 Spoqa Han Sans Neo 셀프 호스팅
- **배포**: Vercel (GitHub 연동 → push 시 자동 배포)
- **버전관리**: Git + GitHub (개인 계정)

## 톤앤매너 (미정 - 후보)
1. 미니멀 & 타이포 중심 — 무난하지만 임팩트는 약함
2. 다크모드 + 글래스모피즘 — UI 엔지니어/풀스택 개발자 포지션과 결이 잘 맞음 (추천)
3. 벤토 그리드 — 성격 다른 프로젝트(TV앱/Admin/Figma 시스템)를 카드로 나눠 보여주기 좋음

## 사이트맵 / 페이지 구조

```
/ (홈 - 원페이지 스크롤형)
 ├─ Hero: 이름 / 타이틀("기획→디자인→개발" 풀사이클 강조) / 한 줄 소개
 ├─ About: 커리어 요약 (퍼블리셔 → UI엔지니어 지향)
 ├─ Flagship 프로젝트 미리보기 카드 2~3개
 │    → 클릭 시 각 케이스스터디 상세 페이지로 이동
 ├─ Skills/Tools 섹션 (Figma, 퍼블리싱, AI 워크플로우 등)
 ├─ "더 많은 작업물 보기" → 기존 포폴사이트 새창 링크
 └─ Contact (폼)

/projects/[slug] (케이스스터디 상세, 프로젝트마다 1페이지)
 ├─ 배경/문제
 ├─ 과정 (의사결정, 트러블슈팅)
 └─ 결과
```

## 케이스스터디로 다룰 플래그십 프로젝트 후보
- Figma 디자인 시스템 작업 (T-Admin, 컴포넌트 구조: Badge/Toggle/Checkbox/Table Row 등)
- 웹폰트 서브셋팅 워크플로우 (Spoqa Han Sans Neo, `local()` 네이밍 트러블슈팅 경험 포함)
- (추가 후보 검토 필요 시 여기 채우기)

각 케이스스터디는 "배경/문제 → 과정(의사결정·트러블슈팅) → 결과" 구조로 작성.

## 레포 이름 (미확정 - 후보)
- 심플형: `portfolio`, `portfolio-2026`, `dev-portfolio`
- 컨셉형: `full-cycle`, `concept-to-code`, `craftflow`, `end-to-end`
- 브랜드 연장형: `bononani-folio`

## Next.js 프로젝트 생성 (터미널 실행)

```bash
npx create-next-app@latest
```

선택 옵션:
```
TypeScript?         No (처음엔 JS로 시작, 익숙해지면 전환)
ESLint?             Yes
Tailwind CSS?       Yes
src/ directory?     Yes
App Router?         Yes
Turbopack?          Yes
Import alias 커스텀?  No
```

## 폴더 구조 목표

```
src/app/
 ├─ page.js          ← 홈 (원페이지)
 ├─ layout.js         ← 공통 레이아웃(헤더/폰트 등)
 ├─ globals.css
 └─ projects/
     └─ [slug]/
         └─ page.js   ← 케이스스터디 상세 (동적 라우팅)
```

## 로컬 실행 확인

```bash
cd [프로젝트폴더명]
npm run dev
# http://localhost:3000 접속 확인
```

## Git / GitHub 연결

```bash
git init
git add .
git commit -m "init: Next.js + Tailwind 프로젝트 생성"

# GitHub에 새 레포 생성 후 (이름 확정)
git remote add origin https://github.com/[계정명]/[레포명].git
git branch -M main
git push -u origin main
```

이후 Vercel에서 GitHub 레포 연동 → push마다 자동 배포.

## 다음 단계 (미완료)
- [ ] 톤앤매너 최종 확정
- [ ] 레포 이름 최종 확정
- [ ] 홈 화면 섹션별 카피(문구) 초안 작성 (Hero 타이틀, About 요약 등)
- [ ] 플래그십 프로젝트 2~3개 최종 확정
- [ ] Next.js 프로젝트 생성 및 로컬 실행 확인
- [ ] Git/GitHub 연결
- [ ] Vercel 배포 연동
- [ ] 케이스스터디 콘텐츠 작성 (배경/과정/결과)
- [ ] 기존 포폴사이트 링크 배치 위치 결정 (헤더/푸터/별도 섹션)
