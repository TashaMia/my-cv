"use client";
import { MapPin, MapPinLine } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col-reverse sm:gap-20 gap-4 lg:flex-row min-h-screen lg:items-start items-center justify-between p-20">
      <div className="lg:w-[40%] flex flex-col items-center lg:items-start gap-6 justify-start  font-mono text-sm lg:flex">
        <div className="flex flex-col ">
          <div className="hidden lg:flex lg:flex-col bg-stone-900 text-white w-[100%] rounded-xl gap-12 p-4 ">
            <h1 className="text-3xl font-bold">
              С вас идея,
              <br /> с меня реализация
            </h1>
            <div className="flex justify-end">
              <button className="bg-violet-700 rounded-2xl w-32 p-2 font-medium">
                <a href="https://t.me/TashaMias"> Найми меня👋</a>
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-4 m-4 ">
            <div className="flex gap-8 justify-center">
              <div className="flex justify-center items-center w-14 h-14 rounded-full bg-emerald-400 font-semibold p-4">
                HTML5
              </div>
              <div className="flex justify-center items-center w-14 h-14 rounded-full bg-yellow-500 font-semibold p-4">
                CSS
              </div>
              <div className="flex justify-center items-center w-14 h-14 rounded-full bg-rose-400 font-semibold p-4">
                JS
              </div>
              <div className="flex justify-center items-center w-14 h-14 rounded-full bg-sky-500 font-semibold p-4">
                NextJS
              </div>
            </div>
            <div className="flex gap-8 justify-center ">
              <div className="flex justify-center items-center w-14 h-14 rounded-full bg-sky-500  font-semibold p-4">
                Jotai
              </div>
              <div className="flex justify-center items-center w-14 h-14 rounded-full bg-emerald-400 font-semibold p-4">
                Redax
              </div>
              <div className="flex justify-center items-center w-14 h-14 rounded-full bg-yellow-500 font-semibold p-4">
                SWR
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center lg:h-[100%] w-[100%] lg:w-[100%]  gap-4 rounded-xl p-4 text-white  ">
          <h2 className="text-lg ">Портфолио</h2>
          <div className="flex flex-col  justify-center items-center gap-4 lg:gap-4 xl:gap-4">
            <div className=" lg:w-62 2xl:w-60  w-[100%]  rounded-xl">
              <Link
                href="https://next-js-social-network-steel.vercel.app/"
                className=" lg:w-56 2xl:w-62   w-[100%] h-full rounded-xl"
              >
                <Image
                  src="/blog.png"
                  alt="blog"
                  width={600}
                  height={320}
                ></Image>{" "}
              </Link>
            </div>
            <div className=" lg:w-62 2xl:w-62  w-[100%] rounded-xl">
              <Link
                href="https://pets-vercel.vercel.app/"
                className=" lg:w-56 2xl:w-60   w-[100%] h-full rounded-xl"
              >
                <Image
                  src="/pets.png"
                  alt="blog"
                  width={600}
                  height={320}
                ></Image>{" "}
              </Link>
            </div>
            <button className="bg-violet-700 rounded-2xl w-[100%] p-2 font-medium text-white">
              <a href="https://github.com/TashaMia">
                Также можно ознакомиться с GitHub
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col xl:gap-0   gap-8 sm:w-[90%] lg:gap-8  justify-start">
        <div className="flex flex-col lg:flex-row gap-4 lg:h-[50%]">
          <div className="lg:hidden  bg-stone-900 text-white w-[100%] flex flex-col gap-4 rounded-xl lg:gap-12 p-4 ">
            <h1 className="text-3xl font-bold">
              С вас идея,
              <br /> с меня реализация
            </h1>
            <div className="flex justify-end">
              <button className="bg-violet-700 rounded-2xl w-36 cursor-pointer p-2 font-medium">
                <a href="https://t.me/TashaMias"> Найми меня👋</a>
              </button>
            </div>
          </div>
          <div className="flex justify-end h-72 ">
            <Image
              src="/owner.jpg"
              className="rounded-xl"
              alt="owner CV"
              width={260}
              height={180}
            ></Image>{" "}
          </div>

          <div className="flex flex-col gap-4 lg:w-[60%]">
            <div className=" flex justify-between rounded-xl p-4 text-gray-300 bg-stone-900  items-center h-10">
              <p className=" font-light text-sm">Имя</p>
              <p>Зайцева Татьяна</p>
            </div>

            <div className="flex flex-col  justify-start items-start rounded-xl p-4 text-gray-300  bg-stone-900  h-60">
              <div className="flex justify-between w-[100%] items-start ">
                <p className="font-light text-sm">Локация</p>
                <p>Кыргызстан</p>
              </div>
              <div>
                <MapPin
                  className="relative top-10 left-14 lg:top-16 lg:left-20 text-violet-500 hover:animate-bounce"
                  height={40}
                  width={40}
                />

                <Image
                  src="./kyrgyzstan.svg"
                  alt="kyrgyzstan"
                  width={300}
                  height={120}
                ></Image>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between items-start rounded-xl p-4 text-gray-300  bg-stone-900 ">
          <h2 className="text-lg ">Обо мне</h2>
          <p className="text-sm">
            Я занимаюсь веб разработкой 2 года. За это время изучила HTML, CSS,
            JS, React, Redux, Next JS, Jotai, SWR. Мои плюсы, как специалиста -
            это ответственность, усидчивость и любовь к разработке. Если
            говорить о минусах - это неуверенность в своих действиях. Моя цель -
            работать над развитием Vue.ru и развивать данный продукт. Буду рада
            принести пользу этому проекту.{" "}
          </p>
        </div>
      </div>
    </main>
  );
}
