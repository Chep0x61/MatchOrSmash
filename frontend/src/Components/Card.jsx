import React, { useState, useMemo, useRef } from 'react';
import TinderCard from 'react-tinder-card'
import ModalButton from './ModalButton';
import Modal from './Modal';
import db from '../db/db'

const Card = () => {
  const [currentIndex, setCurrentIndex] = useState(db.length - 1)
  const [lastDirection, setLastDirection] = useState()
  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex)

  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  )

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }

  const canGoBack = currentIndex < db.length - 1

  const canSwipe = currentIndex >= 0

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction)
    updateCurrentIndex(index - 1)
  }

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  }

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < db.length) {
      await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
    }
  }

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return
    const newIndex = currentIndex + 1
    updateCurrentIndex(newIndex)
    await childRefs[newIndex].current.restoreCard()
  }

  return (
    <div className=''>
      <div className='cardContainer'>
      {db.map((character, index) => (
          <Modal id={character.id} title={character.name} description={character.description}/>
        ))}
        {db.map((character, index) => (
          <TinderCard ref={childRefs[index]} className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name, index)} onCardLeftScreen={() => outOfFrame(character.name, index)}>
            <div className="card w-96 bg-base-100 shadow-xl top-[15%]">
              <figure><img src={character.path} alt="jhero"/></figure>
              <h3>{character.name}</h3>
              <ModalButton id={character.id}/>
            </div>
          </TinderCard>
        ))}
      </div>
      <div className='fixed top-[74%] lg:top-[68%] left-[0%] right-0'>
      <div className='flex justify-center gap-8 pt-8 '>
          <button className="btn bg-[#ce0d15] border-[#ce0d15] hover:bg-[#ce0d15] hover:border-[#ce0d15] text-white" onClick={() => swipe('left')}>Smash!</button>
          <button className="btn btn-warning text-white" onClick={() => goBack()}>Undo Last Swipe!</button>
          <button className="btn bg-[#0076c0] border-[#0076c0] hover:bg-[#0076c0] hover:border-[#0076c0] text-white" onClick={() => swipe('right')}>Match!</button>
        </div>
        {lastDirection ? (
          <h2 key={lastDirection} className='flex justify-center text-2xl text-white pt-4'>
            You swiped {lastDirection}
          </h2>
        ) : (
          <h2 className='flex justify-center text-2xl text-white pt-4'>
            Swipe a card or press a button !
          </h2>
        )}
        </div>
      </div>
    )
  }

export default Card;
