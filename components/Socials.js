// links
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';

// icons
import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiMailFill,
  RiPlayFill,
  RiPauseFill,
} from 'react-icons/ri';

const Socials = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Initialize audio in useEffect to ensure it's only done on the client side
    audioRef.current = new Audio('/Night.mp3'); // Adjust the path to your actual file location

    // Optional: Event listeners for play and pause could also be managed here
    return () => {
      // Cleanup audio element if the component unmounts
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = ''; // This helps ensure that the audio stops and releases any held resources
      }
    };
  }, []);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(error => {
          console.error("Error playing audio", error);
          // Handle error (e.g., show error message to user)
        });
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  
  return (
    <div className='flex items-center gap-x-5 text-2xl'>
      <a
        href="https://www.linkedin.com/in/michelle-chen-mc"
        target="_blank" 
        rel="noopener noreferrer"
        className='hover:text-accent transition-all duration-300'
      >
        <RiLinkedinBoxFill />
      </a>
      <a
        href="https://github.com/meimichelle1"
        target="_blank" 
        rel="noopener noreferrer"
        className='hover:text-accent transition-all duration-300'
      >
        <RiGithubFill />
      </a>
      <Link href={'/contact'} className='hover:text-accent transition-all duration-300'>
        <RiMailFill />
      </Link>
      {/* Music play button */}
      <button onClick={togglePlayPause} className='hover:text-accent transition-all duration-300'>
        {isPlaying ? <RiPauseFill /> : <RiPlayFill />}
      </button>
    </div>
  );
};

export default Socials;
