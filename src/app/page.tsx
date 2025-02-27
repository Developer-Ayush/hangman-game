'use client';

import { useRouter } from 'next/navigation';
import styled from 'styled-components';

import Button from '@/components/Button';
import UtilButton from '@/components/UtilButton';
import Logo from '@/components/svg/Logo';

const StyledContainer = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 100%;
`;

export default function Home() {
  const router = useRouter();
  return (
    <StyledContainer className='justify-center'>
      <StyledContainer className='relative justify-center min-h-[700px] max-h-[700px] md:min-h-[750px] md:max-h-[750px]'>
        <StyledContainer className='justify-around flex-col rounded-[48px] bg-gradient-to-b from-gradient-lightblue/75 to-gradient-darkblue/75 shadow-s-primary max-w-[592px] min-h-[500px] max-h-[500px]'>
          <div className='top-10 max-h-[126px] max-w-[263px] md:top-0 md:max-h-[180px] md:max-w-[375px] w-full h-full absolute'>
            <Logo />
          </div>
          <div></div>
          <UtilButton
            action={() => router.push('/categories')}
            type='lg-play'
          />
          <Button
            text='HOW TO PLAY'
            action={() => router.push('/howtoplay')}
            type='primary'
          />
        </StyledContainer>
      </StyledContainer>
    </StyledContainer>
  );
}
