import React from 'react';
import styled, { css } from 'styled-components';

const HANDLE_SIZE = 24;

const Bar = styled.div`
  margin: 16px 0;
  height: 6px; 
  width: 100%;
  border-radius: 4px;
  background-color: #eeeeee;
  border: 1px solid #ddd;
  position: relative;
`;

const ActiveBar = styled.div`
  height: 6px;
  width: calc(${props => props.position}% - ${HANDLE_SIZE * 0.5}px);
  border-radius: 4px;
  background-color: #af1e66;
  border: 1px solid #af1e66;
  position: absolute;
  top: 0;
  left: 0;
`;

const Handle = styled.div`
  height: ${HANDLE_SIZE}px; 
  width: ${HANDLE_SIZE}px; 
  border-radius: 50%;
  transform: translateY(-50%);
  position: relative;
  top: 4px;
  margin-left: calc(${props => props.position}% - ${HANDLE_SIZE * 0.5}px);
  /* left: ${props => props.position}px; */
  border: 1px solid #00000030;
  background-color: #fff;
  box-shadow: 0 2px 6px #00000030;
  cursor: pointer;

  &:after {
    display: block;
    content: '';
    height: 60%; 
    width: 60%; 
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    background: linear-gradient(0deg, #af1e66 0%, #ed2186 100%);
    transform: translateX(-50%) translateY(-50%);
  }
`;

export const Slider = () => {
  const barRef = React.useRef(null);
  const [dragged, setDragged] = React.useState(false);
  const [position, setPosition] = React.useState(0);
  const handleDragStart = React.useCallback(() => {
    setDragged(true);
  }, []);

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      if (dragged) {
        const barRect = barRef.current.getBoundingClientRect();
        
        const mousePos = e.clientX - barRect.left;
        const posPercentage = mousePos / barRect.width;
        
        setPosition(Math.max(Math.min(posPercentage, 1), 0));
      }
    };
    const handleMouseUp = (e) => {
      setDragged(false);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragged, barRef]);

  return <Bar ref={barRef}>
    <ActiveBar position={position * 100} />
    <Handle position={position * 100} onMouseDown={handleDragStart} />
  </Bar>;
}
