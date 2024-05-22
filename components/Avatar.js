// next image
import Image from 'next/image';

const Avatar = () => {
  return (
    <div className='hidden xl:flex xl:max-w-none'>
      <Image
        src={'/mc-a.png'}
        width={737}
        height={678}
        alt=''
        className='ml-20 translate-z-0 w-full h-full'
      />
    </div>
  );
};

export default Avatar;
