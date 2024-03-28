import { useState, useEffect } from "react";
import { FaCalendarAlt } from "react-icons/fa";

function App() {
  const launchDate = new Date("2024-04-04"); // Specify the launch date here
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  function getTimeLeft() {
    const currentDate = new Date();
    const timeDifference = launchDate - currentDate;

    if (timeDifference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  return (
    <>
      <div className="w-full h-full bg-white px-5 md:px-32">
        <h1 className="text-2xl md:text-5xl text-black/70 font-bold text-center my-10 py-10">
          LoadFix Freight Services Pvt Ltd.
        </h1>

        <div className="flex flex-col items-center justify-center">
          <FaCalendarAlt className="text-9xl mb-5 text-red-600" />

          {timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0 ? (
            <h1 className="text-2xl md:text-5xl text-black font-bold">
              Congrats! You have waited enough.
            </h1>
          ) : (
            <h1 className="text-2xl md:text-5xl text-black font-bold">
              {timeLeft.days} Days: {timeLeft.hours} Hours: {timeLeft.minutes} Minutes :
              <span className="text-red-600/90">{timeLeft.seconds}</span>
            </h1>
          )}

          <p className="text-black/90 text-xs md:text-lg text-center my-5">
          Unlock unlimited shipping opportunities! Join our cutting-edge Loadboard System and connect with a vast network of shippers and transporters. Maximize your efficiency and profitability.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;