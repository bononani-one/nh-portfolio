import SubHeader from "@/components/SubHeader";
import CaseHero from "@/components/CaseHero";
import AboutBlock from "@/components/AboutBlock";
import Link from "next/link";

export default function TvAppCase(){
    return(
        <main className="p-10">
            <SubHeader />
            <CaseHero 
                badge="TV App"
                title="TV App 멀티클라이언트 플랫폼"
                summary="롯데·신세계·NS·GS SHOP 등 여러 홈쇼핑사에 공급되는 TV App을, 레거시 브라우저와 리모컨 포커스 제약 안에서 5년째 퍼블리싱하고 있습니다. 같은 플랫폼 안에서 Admin 인터랙션까지 직접 구현했습니다."
            />

            <div className="max-w-[1200] mx-auto flex flex-col gap-12 pb-20">
                <AboutBlock label="Background">
                    <p className="text-body text-text-default max-w-[700px]">
                        디지털 사이니지 업체를 거쳐, 홈쇼핑 플랫폼 회사에 TV App
            퍼블리셔로 입사해 5년째 재직 중입니다. 롯데·신세계·NS·GS SHOP 등
            여러 홈쇼핑사에 하나의 플랫폼을 공급하는 구조 안에서, 공통 규칙과
            고객사별 차이를 함께 다루는 감각을 쌓아왔습니다.
                    </p>
                </AboutBlock>
                <AboutBlock label="Constraints">
                <ul className="flex flex-col gap-3">
                    <li className="text-body text-text-default">
                    <span className="text-point font-bold mr-2">01</span>
                    레거시 브라우저 — TV 내장 브라우저(구형 WebKit)라 최신 CSS/JS 문법
                    다수를 쓸 수 없음
                    </li>
                    <li className="text-body text-text-default">
                    <span className="text-point font-bold mr-2">02</span>
                    Remote Focus — 마우스·터치가 아닌 리모컨 방향키로 이동하는 포커스
                    네비게이션
                    </li>
                    <li className="text-body text-text-default">
                    <span className="text-point font-bold mr-2">03</span>
                    멀티 클라이언트 조율 — 하나의 플랫폼 코드베이스 안에서 고객사별
                    브랜드·요구사항 차이를 커스터마이징 레이어로 분리
                    </li>
                    <li className="text-body text-text-default">
                    <span className="text-point font-bold mr-2">04</span>
                    Admin — PC 전용 설계. 운영자가 저장 전에 실제 노출 결과를 실시간으로
                    미리 확인할 수 있어야 함
                    </li>
                    <li className="text-body text-text-default">
                    <span className="text-point font-bold mr-2">05</span>
                    외부 벤더 소스 통합 — 타사 Angular 소스에는 퍼블리싱 소스가 없어,
                    필요한 범위를 직접 판단하고 최소한으로 건드리며 확장
                    </li>
                </ul>
                </AboutBlock>
                <AboutBlock label="Result">
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-6">
                            <h3 className="text-section font-bold text-text-default">TV App 화면</h3>
                            <ul className="flex flex-col gap-3">
                                <li className="text-body text-text-default">
                                <span className="text-point font-bold mr-2">01</span>
                                클래스 기반 구조 설계 — TV App 전반을 클래스 드리븐 구조로
                                전환, 개발자는 데이터 바인딩에만 집중
                                <p className="text-body text-text-sub pl-7 mt-1">
                                    대표 사례 — 레거시 구조 개편: 좌측 탭 메뉴를 상단으로 재배치,
                                    클래스 교체만으로 처리해 개발자가 짧은 공수로 편하게 반영
                                </p>
                                </li>
                                <li className="text-body text-text-default">
                                <span className="text-point font-bold mr-2">02</span>
                                로고 애니메이션 — 렌더링 속도와 레거시 브라우저 CSS 제약을
                                고려해 JS 없이 CSS만으로 구현
                                </li>
                                <li className="text-body text-text-default">
                                <span className="text-point font-bold mr-2">03</span>
                                페이지 구조 통합 — 분산돼 있던 다수 페이지를 하나의 템플릿
                                파일로 통합
                                </li>
                                <li className="text-body text-text-default">
                                <span className="text-point font-bold mr-2">04</span>
                                폰트 서브셋팅 — 셋톱박스 환경에서 폰트 로딩 속도를 최적화하기
                                위해 고객사별 브랜드 폰트를 글리프 단위로 서브셋 처리
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-3">
                        <h3 className="text-section font-bold text-text-default">
                            Admin 인터랙션 구현
                        </h3>
                        <ul className="flex flex-col gap-3">
                            <li className="text-body text-text-default">
                            <span className="text-point font-bold mr-2">01</span>
                            배너 드래그앤드랍(Sortable.js) — 순서 변경 시 카피라이트·가격
                            등을 미리보기 화면에서 실시간 확인
                            </li>
                            <li className="text-body text-text-default">
                            <span className="text-point font-bold mr-2">02</span>
                            방송 일정 관리 캘린더(FullCalendar) 연동, 데이트피커 커스텀
                            스타일링
                            </li>
                            <li className="text-body text-text-default">
                            <span className="text-point font-bold mr-2">03</span>
                            플로팅 알림 3종(종이/택배차량/확성기) — 아이콘을 조각 단위로
                            나눠 애니메이션 구현, 타입 선택 시 실시간 프리뷰
                            </li>
                            <li className="text-body text-text-default">
                            <span className="text-point font-bold mr-2">04</span>
                            배경 컬러피커 연동 — 그라데이션 실시간 프리뷰
                            </li>
                            <li className="text-body text-text-default">
                            <span className="text-point font-bold mr-2">05</span>
                            체크박스·라디오·인풋박스 등 폼 요소를 컴포넌트 단위로 분리,
                            CSS/JS를 각각 분리해 재사용 가능하게 매칭
                            </li>
                        </ul>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h3 className="text-section font-bold text-text-default">
                                외부 벤더 소스 통합 및 레거시 최소 침습 설계
                            </h3>
                            <ul className="flex flex-col gap-3">
                                <li className="text-body text-text-default">
                                <span className="text-point font-bold mr-2">01</span>
                                PM은 전체 재퍼블리싱을 요청했지만, 일정 제약과 개발자 피드백을
                                반영해 범위를 조정
                                </li>
                                <li className="text-body text-text-default">
                                <span className="text-point font-bold mr-2">02</span>
                                스코프 처리된 Angular 소스를 분석해 어떤 클래스가 어떤 화면
                                상태를 트리거하는지 역추적하며 정제
                                </li>
                                <li className="text-body text-text-default">
                                <span className="text-point font-bold mr-2">03</span>
                                팝업으로 띄우는 레이어들을 페이지 하나에 모으고, off 클래스로
                                평소엔 숨겼다가 필요할 때만 노출
                                </li>
                                <li className="text-body text-text-default">
                                <span className="text-point font-bold mr-2">04</span>
                                메인 개편: 탭 위치 이동을 레이아웃 변경만으로 처리, QR 배경
                                슬라이딩 로직을 고려해 마크업 구조 설계
                                </li>
                                <li className="text-body text-text-default">
                                <span className="text-point font-bold mr-2">05</span>
                                검색 개편: 레거시 컴포넌트에 클래스를 추가해 이동 영역에
                                배치, 클래스만으로 UI 변경하며 기존 구조 최대 활용
                                </li>
                            </ul>
                        </div>
                    </div>
                </AboutBlock>

                <AboutBlock label="Impact">
                <p className="text-body text-text-default max-w-[700px]">
                    TV App 전반을 클래스 드리븐 구조로 설계하고, 외부 벤더 소스
                    앞에서도 같은 원칙(최소 침습, 클래스 기반 제어)으로 범위를 스스로
                    판단해 처리한 경험은, 이후 Ui-system-guide로 이어지는 시스템화
                    사고의 뼈대가 됐습니다. 같은 회사 안에서 반응형 웹 프로젝트도
                    함께 맡게 되며, 마크업 중심의 역할에서 점차 확장해 나갔습니다.
                </p>
                </AboutBlock>
                <div className="flex justify-center pt-8">
                    <Link
                        href="/work/responsive-web"
                        className="text-section font-bold text-point">
                            Next Project →
                        </Link>
                </div>
            </div>
        </main>
    );
}