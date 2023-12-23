import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Clock = () => {
  const [days, setDays] = useState()
  const [hours, setHours] = useState()
  const [minutes, setMinutes] = useState()
  const [seconds, setSeconds] = useState()

  let interval

  const countDown = () => {
    const destination = new Date('Jan 10 2024')
    interval = setInterval(() => {
      const now = new Date().getTime()
      const different = destination - now

      const days = Math.floor(different / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (different % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      )
      const minutes = Math.floor((different % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((different % (1000 * 60)) / 1000)

      if (destination < 0) clearInterval(interval.current)
      else {
        setDays(days)
        setHours(hours)
        setMinutes(minutes)
        setSeconds(seconds)
      }
    })
  }

  useEffect(() => {
    countDown()
  }, [])

  return (
    <div className="d-flex gap-3">
      <div className="text-center">
        <h1>{days} :</h1>
        <h5>Days</h5>
      </div>
      <div className="text-center">
        <h1>{hours} :</h1>
        <h5>Hours</h5>
      </div>
      <div className="text-center">
        <h1>{minutes} :</h1>
        <h5>Minuts</h5>
      </div>
      <div className="text-center">
        <h1>{seconds}</h1>
        <h5>Seconds</h5>
      </div>
    </div>
  )
}

export default Clock
