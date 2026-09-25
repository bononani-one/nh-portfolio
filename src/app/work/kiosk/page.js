import Link from 'next/link';
import SubHeader from '@/components/SubHeader';
import CaseHero from '@/components/CaseHero';
import AboutBlock from '@/components/AboutBlock';
import ResultMiniCard from '@/components/ResultMiniCard';

const results = [
  {
    title: '새로운 병원 전자명패',
    env: '안드로이드 모니터 · 직접 개발한 관리자 페이지(HTML5·CSS3·jQuery, PHP, MySQL)',
    point:
      '병실 앞에 고정 설치돼 환자·보호자가 스쳐 지나가며 확인하는 화면이라, 정보를 최소화하고 가독성을 최우선으로 설계',
  },
  {
    title: '부산영산대학교 키오스크',
    env: '스탠드형 DID(PC 타입) · IIS 로컬서버, 키오스크 모드',
    point:
      '학생이 직접 다가와 터치로 조작하는 화면이라, 메뉴 구조와 인터랙션 흐름을 명확히 설계해 원하는 정보까지 쉽게 도달하도록 구성',
  },
  {
    title: '산본시장 홍보 콘텐츠',
    env: '스탠드형 DID(PC 타입) · IIS 로컬서버, 키오스크 모드',
    point:
      '오가는 손님이 걸음을 멈추지 않고도 정보를 확인할 수 있도록, 큰 글씨와 단순한 레이아웃 위주로 구성',
  },
];

const otherIndustries = [
  '경기도연천교육지청',
  '부여문화축제거리',
  '암웨이',
  '기아자동차',
  '서산날씨뉴스',
];

export default function KioskCase() {
  return (
    <main className="p-10">
      <SubHeader />
      <CaseHero
        badge="KIOSK"
        title="키오스크 멀티디바이스 설계"
        summary="병원, 대학, 전통시장, 기업브랜드 등 다양한 업종의 KIOSK를 설치 맥락에 맞춰 각기 다르게 설계했습니다."
      />

      <div className="max-w-[1200px] mx-auto flex flex-col gap-12 pb-20">
        <AboutBlock label="Background">
          <p className="text-body text-text-default max-w-[700px]">
            디지털 사이니지 업체에서 4년간 일하며, 병원·대학·전통시장·기업
            브랜드까지 업종을 넘나드는 설치형 화면을 설계했습니다. 같은 "정보
            전달"이라는 목적이라도, 화면이 놓이는 맥락에 따라 요구되는 게
            완전히 달랐습니다. 병실 앞에서 스쳐 지나가는 보호자, 정류장에서
            버스를 기다리는 사람, 직접 손을 뻗어 조작하는 학생 — 같은 문제를
            다른 방식으로 풀어야 한다는 걸 이 시기에 체감했습니다.
          </p>
        </AboutBlock>

        <AboutBlock label="Constraints">
          <p className="text-body text-text-default max-w-[700px]">
            설치 맥락마다 사용자가 화면과 상호작용하는 방식 자체가 달랐습니다.
          </p>
          <ul className="flex flex-col gap-3">
            <li className="text-body text-text-default">
              <span className="text-point font-bold mr-2">01</span>
              스쳐 지나가는 화면 (병원) — 걸음을 멈추지 않고 확인하는
              상황이라, 정보량을 최소화하고 가독성을 최우선으로
            </li>
            <li className="text-body text-text-default">
              <span className="text-point font-bold mr-2">02</span>
              직접 조작하는 화면 (대학 키오스크) — 손을 뻗어 터치하는
              상황이라, 메뉴 구조와 탐색 흐름 설계가 핵심
            </li>
            <li className="text-body text-text-default">
              <span className="text-point font-bold mr-2">03</span>
              걸으며 훑는 화면 (전통시장) — 걸음을 멈추지 않는 야외 환경이라,
              큰 글씨와 단순한 레이아웃으로 즉각적인 인지가 우선
            </li>
          </ul>
        </AboutBlock>

        <AboutBlock label="Result">
          <div className="flex flex-col gap-8">
            {results.map((item) => (
              <ResultMiniCard key={item.title} {...item} />
            ))}
          </div>

          <div className="mt-8">
            <span className="text-caption text-text-sub">
              More across industries
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mt-3">
              {otherIndustries.map((name) => (
                <div key={name} className="flex flex-col gap-2">
                  <div className="aspect-square bg-gray-100 rounded-lg" />
                  <span className="text-caption text-text-sub text-center">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </AboutBlock>

        <AboutBlock label="Impact">
          <p className="text-body text-text-default">
            4년간 병원·대학·전통시장·교육기관·기업 브랜드 등 8개 이상의 서로
            다른 업종·디바이스 환경에서 설치 맥락에 맞춘 설계 원칙을 반복
            검증했습니다. 이 경험은 이후 홈쇼핑 플랫폼에서 여러 클라이언트에
            하나의 시스템을 공급하는 작업으로 자연스럽게 이어졌습니다.
          </p>
        </AboutBlock>

        <div className="flex justify-center pt-8">
          <Link
            href="/work/design-system"
            className="text-section font-bold text-point"
          >
            Next Project →
          </Link>
        </div>
      </div>
    </main>
  );
}