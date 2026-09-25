import Link from 'next/link';
import SubHeader from '@/components/SubHeader';
import CaseHero from '@/components/CaseHero';
import AboutBlock from '@/components/AboutBlock';

export default function DesignSystemCase() {
  return (
    <main className="p-10">
      <SubHeader />
      <CaseHero
        badge="Design System"
        title="Ui-system-guide"
        summary="화면마다 제각각이던 컴포넌트 규칙을, 네이밍·상태 정의부터 체계화한 퍼블리싱 표준 문서입니다."
      />

      <div className="max-w-[1200px] mx-auto flex flex-col gap-12 pb-20">
        <AboutBlock label="Background">
          <p className="text-body text-text-default max-w-[700px]">
            TV App, 어드민, 반응형 웹을 오가며 작업하는 동안, 같은
            컴포넌트인데 화면마다 규칙이 제각각이면 결국 같은 문제가
            반복된다는 걸 체감했습니다. 디자이너와 퍼블리셔 사이에서 스펙이
            따로 노는 걸 그냥 넘기지 않고, 개인적으로 표준을 만들기
            시작했습니다.
          </p>
        </AboutBlock>

        <AboutBlock label="Constraints">
          <ul className="flex flex-col gap-3">
            <li className="text-body text-text-default">
              <span className="text-point font-bold mr-2">01</span>
              디자인-퍼블리싱 번역 문제 — Figma 레이어명과 실제 퍼블리싱
              클래스명이 따로 놀아, 디자이너가 부르는 이름과 퍼블리셔가
              마크업에 쓰는 이름이 서로 다른 상황
            </li>
            <li className="text-body text-text-default">
              <span className="text-point font-bold mr-2">02</span>
              플랫폼별 규칙 차이 — TV App(포커스 기반 내비게이션, 셋톱박스
              CSS 렌더링 제약), Admin, 웹 앱 각각 다른 기술 제약을 하나의
              체계 안에 담아야 함
            </li>
          </ul>
          <p className="text-body text-text-default max-w-[700px] mt-2">
            최근에는 이 체계가 AI 협업 도구에도 명확한 기준으로 참조될 수
            있어야 한다는 요구까지 추가됐습니다.
          </p>
        </AboutBlock>

        <AboutBlock label="Result">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <h3 className="text-section font-bold text-text-default">
                시스템 구축
              </h3>
              <ul className="flex flex-col gap-3">
                <li className="text-body text-text-default">
                  <span className="text-point font-bold mr-2">01</span>
                  Figma 컴포넌트 시스템 구축 — 레이어명을 CSS 클래스명과
                  1:1 매핑되도록 설계
                </li>
                <li className="text-body text-text-default">
                  <span className="text-point font-bold mr-2">02</span>
                  UI System & Markup Guide 작성 — 원래 PPTX였던 걸
                  마크다운으로 전환, TV App/Admin/Web App 퍼블리싱 표준을
                  한 문서로 통합 (BEM 네이밍, .foc/.sel/.disabled 등
                  focus·state 클래스 관리, 셋톱박스 CSS 렌더링 제약,
                  접근성 패턴 포함)
                </li>
                <li className="text-body text-text-default">
                  <span className="text-point font-bold mr-2">03</span>
                  가이드 기반 실제 컴포넌트 구현 — 네비게이션 탭, Badge,
                  Toggle, Checkbox, Table Row 등 Admin 컴포넌트를 연습
                  대상으로 제작
                </li>
                <li className="text-body text-text-default">
                  <span className="text-point font-bold mr-2">04</span>
                  GitHub 프라이빗 레포(Ui-system-guide)로 버전 관리 —
                  guide/ 디렉토리에 확정된 네이밍 규칙, 로그 구조로 일일
                  작업 기록
                </li>
                <li className="text-body text-text-default">
                  <span className="text-point font-bold mr-2">05</span>
                  사내 &quot;AI 활용 Best Practice 구현 Promotion&quot;에
                  자발적으로 신청 — AI 전문가 코칭이 연계된 프로그램으로,
                  &quot;Figma 기반 UI 컴포넌트 시스템 설계 및 AI 활용
                  마크업 워크플로우 구축&quot; 사례로 참여
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-section font-bold text-text-default">
                AI 협업 확장
              </h3>
              <p className="text-body text-text-default">
                가이드 체계를 AI 협업 도구가 참고할 수 있는 명확한
                기준(prompt.md 형태)으로 다듬는 작업 진행 중
              </p>
            </div>
          </div>
        </AboutBlock>

        <AboutBlock label="Impact">
          <p className="text-body text-text-default">
            TV App에서 실천했던 클래스 드리븐 설계, 반응형 웹에서 다룬
            로직과 데이터 흐름, 사이니지 시절 체감한 &quot;맥락마다 다르게
            풀어야 한다&quot;는 감각 — 이 모든 걸 하나의 체계로 묶는
            작업입니다. &quot;같은 컴포넌트, 화면마다 다른 규칙 — 그냥
            넘기지 않는다&quot;는 원칙을, 이제는 방법론으로 만들어가고
            있습니다.
          </p>
        </AboutBlock>

        <div className="flex justify-center pt-8">
          <Link
            href="/work/tv-app"
            className="text-section font-bold text-point"
          >
            Next Project →
          </Link>
        </div>
      </div>
    </main>
  );
}