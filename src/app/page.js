import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import SkillGroup from "@/components/SkillGroup";
import AboutBlock from "@/components/AboutBlock";

const projects = [
  {
    badge:"TV App",
    title:"TV App 멀티클라이언트 플랫폼",
    summary:"레거시 브라우저와 리모컨 포커스 제약 안에서 여러 홈쇼핑사에 공급되는 화면 마크업으로 완성",
  },
  {
    badge:"Responsive Web",
    title:"솔루션 홍보 홈페이지",
    summary:"인터랙션, 게시판 데이터 연동, 문의 메일 처리까지 화면 넘어 로직까지 직접 구현",
  },
  {
    badge:"KIOSK",
    title:"키오스크 멀티디바이스 설계",
    summary:"다양한 업종 키오스크를 설치 맥락에 맞춰 각기 다르게 설계",
  },
  {
    badge:"Design System",
    title:"Ui-system-guide",
    summary:"화면마다 제각각이던 컴포넌트 규칙을 네이밍, 상태 정의부터 체계화한 퍼블리싱 표준문서(진행중)",
  },
];
const skillGroups=[
  {
    label:'화면구현',
    skills:[
      {name:'HTML5'},
      {name:'CSS3'},
      {name:'JavaScript'},
      {name:'jQuery'},
      {name:'Next.js'},
      {name:'반응형 웹'},
    ],
  },
  {
    label:'인터랙션 & 데이터연동',
    skills:[
      { name: 'Sortable.js' },
      { name: 'FullCalendar' },
      { name: 'Swiper' },
      { name: 'AOS' },
      { name: 'API연동' },
      { name: 'PHP' },
      { name: 'MySQL' },
    ],
  },
  {
    label: '디자인 · 시스템화',
    skills: [
      { name: 'Figma' },
      { name: 'BEM 네이밍' },
      { name: '컴포넌트 상태 설계' },
      { name: '접근성 패턴' },
      { name: 'Git' },
    ],
  },
  {
    label: '성능 최적화',
    skills: [{ name: '폰트 서브셋팅' }],
  },
  {
    label: '확장 중',
    skills: [
      { name: 'React', dashed: true },
      { name: 'Tailwind CSS', dashed: true },
    ],
  },
];

export default function Home(){
  return(
   <main className="p-10 flex flex-col gap-16">
      <Nav />
      <Hero />
      <div
        id="work"
        className="max-w-[1200px] mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      > 
      {projects.map((project)=>(
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>  
      <div
        id="skill"
        className="max-w-[1200px] mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skillGroups.map((group)=>(
          <SkillGroup key={group.label} {...group} />
        ))}
      </div>
       <div id="about" className="max-w-[1200px] mx-auto w-full flex flex-col gap-12">
          <h2 className="text-section font-bold text-text-default">ABOUT</h2>
          <AboutBlock label="Bio">
            <p className="text-body text-text-default max-w-[700px]">
              디지털 사이니지 업체에서 4년, 홈쇼핑 플랫폼 회사에서 5년째. 총 9년간 병원·대학·전통시장 같은 오프라인 
설치 화면부터 TV App, 어드민 페이지까지 — 놓이는 맥락이 다르면 화면도 다르게 설계해왔습니다. 
최근에는 화면을 그리는 데서 그치지 않고, 코드로 직접 완성하는 UI 엔지니어로 영역을 넓히고 있습니다.
            </p>
          </AboutBlock>
          <AboutBlock label="Experience">
            <ul className="flex flex-col gap-4">
              <li className="flex flex-col gap-1">
                <p className="text-body text-text-default">
                  <span className=" text-point font-bold mr-2">01</span>
                  홈쇼핑 플랫폼 (재직중, 5년차) 
                </p>
                <p className="text-body text-text-sub pl-7">
                  롯데·신세계·NS·GS SHOP 등 TV App 퍼블리싱, 솔루션 홍보
        홈페이지·Admin 인터랙션 구현
                </p>
              </li>
              <li className="flex flex-col gap-1">
                <p className="text-body text-text-default">
                  <span className="text-point font-bold mr-2">02</span>
                  디지털 사이니지 (4년)
                </p>
                <p className="text-body text-text-sub pl-7">
                  병원·대학·전통시장·기업 브랜드 등 다양한 업종의 키오스크/DID 설계
                </p>
              </li>
              <li className="flex flex-col gap-1">
                <p className="text-body text-text-default">
                  <span className="text-point font-bold mr-2">03</span>
                  개인 프로젝트
                </p>
                <p className="text-body text-text-sub pl-7">
                  Ui-system-guide (진행중)
                </p>
              </li>
            </ul>
          </AboutBlock>
          <AboutBlock label="Approach">
            <p className="text-section font-bold text-text-default">
              Same component, different rules on every screen — I don&apos;t
              let that slide.
            </p>
            <p className="text-caption text-text-sub">
              같은 컴포넌트, 화면마다 다른 규칙 — 그냥 넘기지 않습니다.
            </p>
        </AboutBlock>
      </div>  
      <div className="flex flex-col item-center gap-8 py-24 text-center">
        <div className="flex flex-col items-center gap-2">
          <p className="text-section font-bold text-text-default">
            Let&apos;s build something together.
          </p>
          <p className="text-caption text-text-sub">함깨 일할 준비가 되어있습니다.</p>
        </div>
      </div>
        <a href="mailto:asuka422@naver.com"
        className="text-section font-bold text-point text-center">asuka422@naver.com</a>
      <div className="flex gap-5">
        <a href="https://github.com/bononani-one" className="text-text-sub">GitHub</a>
      </div>
    </main>
  );
}