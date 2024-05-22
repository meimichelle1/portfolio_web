// next image
import Image from 'next/image';

// next link
import Link from 'next/link';

// icons
import { HiArrowDownOnSquare } from 'react-icons/hi2';

const ProjectsBtn = () => {
  return (
    <div className='mx-auto xl:mx-0 z-10'>
      <a
        href="/sde.pdf"
        target="_blank" 
        rel="noopener noreferrer"
        className='relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group'
      >
        <Image
          src={'/r-t.png'}
          width={141}
          height={148}
          alt=''
          className='animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]'
        />
        <HiArrowDownOnSquare className='absolute text-4xl group-hover:translate-y-2 transition-all duration-300' />
      </a>
    </div>
  );
};

export default ProjectsBtn;
