import Card from "@/components/card";
import {
  dataExercise,
  dataPlay,
  dataSelf,
  dataSocial,
  dataStudy,
  dataWork,
} from "@/components/data";
import Image from "next/image";
import Photo from "../public/images/image-jeremy.png";
import { useState } from "react";

export default function Home() {
  const [currentTab, setCurrentTab] = useState("daily");

  const setTab = (dataTab) => {
    setCurrentTab(dataTab);
  };

  const data = {
    daily: {
      work: { hour: "5hrs", totalHour: "Yesterday - 7hrs" },
      play: { hour: "1hr", totalHour: "Yesterday - 8hrs" },
      study: { hour: "0hrs", totalHour: "Yesterday - 1rs" },
      exercise: { hour: "1hr", totalHour: "Yesterday - 1hr" },
      social: { hour: "1hr", totalHour: "Yesterday - 3hrs" },
      self: { hour: "0hrs", totalHour: "Yesterday - 1hr" },
    },
    weekly: {
      work: { hour: "32hrs", totalHour: "Last Week - 36hrs" },
      play: { hour: "10hrs", totalHour: "Last Week - 8hrs" },
      study: { hour: "4hrs", totalHour: "Last Week - 7hrs" },
      exercise: { hour: "4hrs", totalHour: "Last Week - 5hrs" },
      social: { hour: "5hrs", totalHour: "Last Week - 10hrs" },
      self: { hour: "2hrs", totalHour: "Last Week - 2hrs" },
    },
    monthly: {
      work: { hour: "103hrs", totalHour: "Last Month - 128hrs" },
      play: { hour: "23hrs", totalHour: "Last Month - 29hrs" },
      study: { hour: "13hrs", totalHour: "Last Month - 19hrs" },
      exercise: { hour: "11hrs", totalHour: "Last Month - 18hrs" },
      social: { hour: "21hrs", totalHour: "Last Month - 23hrs" },
      self: { hour: "7hrs", totalHour: "Last Month - 11hrs" },
    },
  };

  return (
    <div>
      <div className="flex flex-col gap-4 sm:gap-6 sm:flex-row">
        <div className="bg-[#1c1f4a] rounded-xl sm:pb-8">
          <div className="flex flex-row sm:flex-col bg-[#5746ea] rounded-xl pt-8 pl-6 pr-20 sm:h-64 h-36 ">
            <Image
              className="size-20 sm:size-16  border-2 border-white rounded-full"
              src={Photo}
            />
            <div className="flex-row pt-2 pl-4 sm:pl-1">
            <span className="text-sm text-[#9f98ff] mt-4">Report for</span>
            <div className="sm:grid ">
            <span className="text-[34px] font-light text-[#fbfcff] pr-2">
              Jeremy
            </span>
            <span className="text-[34px] font-light text-[#fbfcff] ">
              Robson
            </span>
            </div>
            </div>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-1 gap-4 sm:p-6 p-2 sm:text-left text-center text-sm cursor-pointer">
            {["daily", "weekly", "monthly"].map((tab) => (
              <div
                key={tab}
                className={`cursor-pointer duration-300 px-4 py-2 rounded-md ${
                  currentTab === tab
                    ? "text-[#fbfcff]"
                    : "text-[#9f98ff] hover:text-[#fbfcff]"
                }`}
                onClick={() => setCurrentTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-8 text-white">
          <Card
            color={"bg-[#f18c65]"}
            icon={"bg-[url(/images/icon-work.svg)]"}
            title={dataWork.title}
            hour={data[currentTab].work.hour}
            week={data[currentTab].work.totalHour}
          />
          <Card
            color={"bg-[#56c2e6]"}
            icon={"bg-[url(/images/icon-play.svg)]"}
            title={dataPlay.title}
            hour={data[currentTab].play.hour}
            week={data[currentTab].play.totalHour}
          />
          <Card
            color={"bg-[#ff5e7d]"}
            icon={"bg-[url(/images/icon-study.svg)]"}
            title={dataStudy.title}
            hour={data[currentTab].study.hour}
            week={data[currentTab].study.totalHour}
          />
          <Card
            color={"bg-[#4bce82]"}
            icon={"bg-[url(/images/icon-exercise.svg)]"}
            title={dataExercise.title}
            hour={data[currentTab].exercise.hour}
            week={data[currentTab].exercise.totalHour}
          />
          <Card
            color={"bg-[#7235d1]"}
            icon={"bg-[url(/images/icon-social.svg)]"}
            title={dataSocial.title}
            hour={data[currentTab].social.hour}
            week={data[currentTab].social.totalHour}
          />
          <Card
            color={"bg-[#f1c75b]"}
            icon={"bg-[url(/images/icon-self-care.svg)]"}
            title={dataSelf.title}
            hour={data[currentTab].self.hour}
            week={data[currentTab].self.totalHour}
          />
        </div>
      </div>
    </div>
  );
}
