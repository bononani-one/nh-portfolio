import Chip from '@/components/Chip';
import CodeMockup from './CodeMockup';

export default function Hero(){
    return(
    <section id='hero' className='max-w-[1200px] mx-auto w-full flex flex-col lg:flex-row gap-6 py-10'>
        {/*왼쪽 텍스트 컬럼*/}
        <div className='flex flex-col gap-6 lg:w-[620px] shrink-0'>
            <Chip tone='accent' data-aos="fade-up">Design-to-code</Chip>
            <h1 className='text-head font-bold text-text-default leading-snug'
             data-aos="fade-up" 
             data-aos-delay="100">
                키오스크부터 어드민까지,
                <br/>
                화면을 설계하고 코드로 완성합니다.
            </h1>
            <p className='text-body text-text-sub'
            data-aos="fade-up"
            data-aos-delay="200"
            >
                디자인과 개발 사이에서, 플랫폼마다 다른 제약을 9년째 풀어왔습니다.
            </p>
            <div className='flex gap-2'
             data-aos="fade-up"
             data-aos-delay="300"
            >
                <Chip tone='muted'>Figma</Chip>
                <Chip tone='muted'>HTML5</Chip>
                <Chip tone='muted'>Tailwind CSS</Chip>
                <Chip tone='muted' dashed>React</Chip>
            </div>
        </div>
        {/*오른쪽 비주얼 영역*/}
        <div className="relative flex-1 rounded-xl overflow-hidden min-h-[320px] border border-border"
        data-aos="fade-left"
        data-aos-delay="200"
        >
            {/*여기 나중에 실제 목업 이미지 들어갈 자리*/}
            <CodeMockup />
            {/*스탯 카드-이미지 위 우하단에 겹침*/}
             <div className="absolute bottom-6 right-6 bg-bg-sub rounded-xl p-5 flex gap-6 overflow-visible">
                <div className="flex flex-col">
                    <span className="text-section font-bold text-text-default">
                    9+
                    </span>
                    <span className="text-caption text-text-sub">Years</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-section font-bold text-text-default">
                    10+
                    </span>
                    <span className="text-caption text-text-sub">Clients</span>
                </div>
                <div className="flex flex-col relative group">
                    <span className="text-section font-bold text-text-default">
                    3
                    </span>
                    <span className="text-caption text-text-sub">Platforms</span>
                    <div className='absolute -bottom-full right-0 mb-2 w-max opacity-0 group-hover:opacity-100 transition-opacity bg-bg-sub border border-border rounded-lg px-3 py-2 pointer-events-none'>
                        <p className='text-caption text-text-default'>TV App · KIOSK · Responsive Web</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}