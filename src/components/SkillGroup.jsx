import Chip from '@/components/Chip';

export default function SkillGroup({label,skills}){
    return(
        <div className='bg-bg-sub border border-border rounded-xl p-5 flex flex-col gap-3'>
            <span className='text-label text-text-sub'>{label}</span>
            <div className='flex flex-wrap gap-2'>
                {skills.map((skill)=>(
                    <Chip key={skill.name} tone='muted' dashed={skill.dashed}>
                        {skill.name}
                    </Chip>
                ))}
            </div>
        </div>
    );
}