import Link from "next/link";
import SubHeader from "@/components/SubHeader";
import CaseHero from "@/components/CaseHero";
import AboutBlock from "@/components/AboutBlock";

export default function ResponsiveWebCase(){
    return(
        <main className="p-10">
            <SubHeader />
             <CaseHero
                badge="Responsive Web"
                title="솔루션 홍보 홈페이지"
                summary="자사 솔루션을 알리는 홍보 홈페이지에서, 스크롤 인터랙션부터 게시판 데이터 연동, 문의 접수 로직까지 — 정적 마크업 너머의 영역을 직접 구현했습니다."
            />
            <div className="max-w-[1200px] mx-auto flex flex-col gap-12 pb-20">
                <AboutBlock label="Background">
                <p className="text-body text-text-default max-w-[700px]">
                    홈쇼핑 플랫폼 재직 중, 자사 솔루션을 알리는 홍보 홈페이지가
                    필요했습니다. 사이니지 시절부터 화면을 그리는 것 너머의
                    영역(데이터 로직, 서버 처리)을 다뤄왔고, 이 프로젝트에서는 외부
                    라이브러리 연동, API 기반 데이터 흐름까지 범위를 넓혔습니다.
                </p>
                </AboutBlock>

                <AboutBlock label="Constraints">
                <p className="text-body text-text-default max-w-[700px]">
                    정적 마크업을 넘어, 방문자가 화면과 상호작용하는 지점과 데이터를
                    주고받는 지점을 함께 구현했습니다.
                </p>
                <ul className="flex flex-col gap-3">
                    <li className="text-body text-text-default">
                    <span className="text-point font-bold mr-2">01</span>
                    반응형 대응 — PC·태블릿·모바일 등 화면 크기에 따라 레이아웃이
                    깨지지 않도록 브레이크포인트 설계
                    </li>
                    <li className="text-body text-text-default">
                    <span className="text-point font-bold mr-2">02</span>
                    인터랙션 — 스크롤 시 콘텐츠가 나타나는 효과(AOS), 공지사항
                    자동 롤링, 터치로 넘기는 캐러셀(Swiper)
                    </li>
                    <li className="text-body text-text-default">
                    <span className="text-point font-bold mr-2">03</span>
                    데이터 처리 — 게시판 API 연동, 문의 접수 시 폼 데이터를 API로
                    전달받아 PHP에서 처리 후 메일 발송
                    </li>
                </ul>
                </AboutBlock>

                <AboutBlock label="Result">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col items-center gap-2">
                        <div className="w-full aspect-video bg-gray-100 rounded-lg" />
                        <span className="text-caption text-text-sub">[Before]</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                        <div className="w-full aspect-video bg-gray-100 rounded-lg" />
                        <span className="text-caption text-text-sub">After</span>
                        </div>
                    </div>
                </AboutBlock>

                <AboutBlock label="Impact">
                <p className="text-body text-text-default">
                    데이터를 저장하고 화면에 보여주는 감각은 사이니지 시절부터
                    쌓아왔지만, API로 데이터를 받아 JS로 직접 렌더링하는 구조는 이
                    프로젝트에서 처음 다뤘습니다. 이 경험은 이후 Ui-system-guide에서
                    컴포넌트 상태를 체계화하는 작업으로 이어졌습니다.
                </p>
                </AboutBlock>

                <div className="flex justify-center pt-8">
                <Link
                    href="/work/kiosk"
                    className="text-section font-bold text-point"
                >
                    Next Project →
                </Link>
                </div>
            </div>
        </main>
    );
}