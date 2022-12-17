import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { Button, Card } from 'flowbite-react'
import Nav from './nav'
import Footer from './footer1'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <div className=''>
    <div className=''>
    <Nav></Nav>
    </div>
    <div className=" grid lg:grid-cols-2 my-16 gap-4 ">
        <div className="max-w-x l col-span-">
          <Card imgSrc="https://www.jugantor.com/assets/news_photos/2022/12/17/image-626029-1671276602.jpg">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              জাকিরের সেঞ্চুরির ম্যাচেও পরাজয়ের চোখ রাঙানি
            </h5>
          </Card>
        </div>
        <div className="grid lg:grid-cols-4 gap-2">
          <div className="max-w-xl">
            <Card imgSrc="https://www.jugantor.com/assets/news_photos/2022/12/17/image-626029-1671276602.jpg">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                জাকিরের সেঞ্চুরির ম্যাচেও পরাজয়ের চোখ রাঙানি
              </h5>
            </Card>
          </div>
          <div className="max-w-xl">
            <Card imgSrc="https://www.jugantor.com/assets/news_photos/2022/12/17/image-626029-1671276602.jpg">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                জাকিরের সেঞ্চুরির ম্যাচেও পরাজয়ের চোখ রাঙানি
              </h5>
            </Card>
          </div>
          <div className="max-w-xl">
            <Card imgSrc="https://www.jugantor.com/assets/news_photos/2022/12/17/image-626029-1671276602.jpg">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                জাকিরের সেঞ্চুরির ম্যাচেও পরাজয়ের চোখ রাঙানি
              </h5>
            </Card>
          </div>
          <div className="max-w-xl">
            <Card imgSrc="https://www.jugantor.com/assets/news_photos/2022/12/17/image-626029-1671276602.jpg">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                জাকিরের সেঞ্চুরির ম্যাচেও পরাজয়ের চোখ রাঙানি
              </h5>
            </Card>
          </div>
        </div>
      </div>
      {/* next section  */}
      <div className="grid lg:grid-cols-5 gap-4 my-4">
        <div className="">
          <Card href="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              বারোমাসি কাঁঠালের জীবনরহস্য উন্মোচন
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              শীতকাল শুরু হয়েছে। এই ঋতুতে দেশে খুব বেশি দেশি ফল সাধারণত হয় না।
              বরই, আমলকী, সফেদা, আর কমলা হয় কোথাও কোথাও। জাতীয় ফল কাঁঠালের মুকুল
              আসে জানুয়ারিতে। পরিপক্ব কাঁঠাল আসে আরও দুই-তিন মাস পরে।
            </p>
          </Card>
        </div>
        <div className="">
          <Card href="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              বারোমাসি কাঁঠালের জীবনরহস্য উন্মোচন
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              শীতকাল শুরু হয়েছে। এই ঋতুতে দেশে খুব বেশি দেশি ফল সাধারণত হয় না।
              বরই, আমলকী, সফেদা, আর কমলা হয় কোথাও কোথাও। জাতীয় ফল কাঁঠালের মুকুল
              আসে জানুয়ারিতে। পরিপক্ব কাঁঠাল আসে আরও দুই-তিন মাস পরে।
            </p>
          </Card>
        </div>
        <div className="">
          <Card href="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              বারোমাসি কাঁঠালের জীবনরহস্য উন্মোচন
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              শীতকাল শুরু হয়েছে। এই ঋতুতে দেশে খুব বেশি দেশি ফল সাধারণত হয় না।
              বরই, আমলকী, সফেদা, আর কমলা হয় কোথাও কোথাও। জাতীয় ফল কাঁঠালের মুকুল
              আসে জানুয়ারিতে। পরিপক্ব কাঁঠাল আসে আরও দুই-তিন মাস পরে।
            </p>
          </Card>
        </div>
        <div className="col-span-2 row-span-2 gap-4">
          <Card href="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              বারোমাসি কাঁঠালের জীবনরহস্য উন্মোচন
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              শীতকাল শুরু হয়েছে। এই ঋতুতে দেশে খুব বেশি দেশি ফল সাধারণত হয় না।
              বরই, আমলকী, সফেদা, আর কমলা হয় কোথাও কোথাও। জাতীয় ফল কাঁঠালের মুকুল
              আসে জানুয়ারিতে। পরিপক্ব কাঁঠাল আসে আরও দুই-তিন মাস পরে। কিন্তু বছর
              তিনেক আগে খাগড়াছড়ির রামগড়ের চা–বাগানে বারো মাস ফলন দেয়, এমন এক
              জাতের কাঁঠালের সন্ধান পান বাংলাদেশ কৃষি গবেষণা ইনস্টিটিউটের (বারি)
              বিজ্ঞানীরা। এখন দেশি-বিদেশি বিজ্ঞানীরা এই জাতের কাঁঠালের জীবনরহস্য
              উন্মোচন করেছেন। নতুন জাতের এই কাঁঠালের নাম ‘বারি-৩’ দিয়েছে
              বাংলাদেশ কৃষি গবেষণা ইনস্টিটিউট। এই জাতের কাঁঠালগাছ যাতে সারা দেশে
              হয়, ফল দেয়, সেই লক্ষ্যে বিজ্ঞানীরা গবেষণা করেছেন। গবেষণার ফলাফল
              চলতি মাসে ‘ফ্রন্টিয়ার্স ইন প্ল্যান্ট সায়েন্স’ নামের একটি
              আন্তর্জাতিক বিজ্ঞান সাময়িকীতে প্রকাশিত হয়েছে। গবেষণার পরের ধাপ
              হিসেবে রপ্তানিযোগ্য ও সহজে সংরক্ষণ করা সম্ভব—এমন জাতের কাঁঠাল
              উদ্ভাবনে গবেষকেরা কাজ করছেন।
              শীতকাল শুরু হয়েছে। এই ঋতুতে দেশে খুব বেশি দেশি ফল সাধারণত হয় না।
              বরই, আমলকী, সফেদা, আর কমলা হয় কোথাও কোথাও। জাতীয় ফল কাঁঠালের মুকুল
              আসে জানুয়ারিতে। পরিপক্ব কাঁঠাল আসে আরও দুই-তিন মাস পরে। কিন্তু বছর
              তিনেক আগে খাগড়াছড়ির রামগড়ের চা–বাগানে বারো মাস ফলন দেয়, এমন এক
              জাতের কাঁঠালের সন্ধান পান বাংলাদেশ কৃষি গবেষণা ইনস্টিটিউটের (বারি)
              বিজ্ঞানীরা। এখন দেশি-বিদেশি বিজ্ঞানীরা এই জাতের কাঁঠালের জীবনরহস্য
              উন্মোচন করেছেন। নতুন জাতের এই কাঁঠালের নাম ‘বারি-৩’ দিয়েছে
              বাংলাদেশ কৃষি গবেষণা ইনস্টিটিউট। এই জাতের কাঁঠালগাছ যাতে সারা দেশে
              হয়, ফল দেয়, সেই লক্ষ্যে বিজ্ঞানীরা গবেষণা করেছেন। গবেষণার ফলাফল
              চলতি মাসে ‘ফ্রন্টিয়ার্স ইন প্ল্যান্ট সায়েন্স’ নামের একটি
              আন্তর্জাতিক বিজ্ঞান সাময়িকীতে প্রকাশিত হয়েছে। গবেষণার পরের ধাপ
              হিসেবে রপ্তানিযোগ্য ও সহজে সংরক্ষণ করা সম্ভব—এমন জাতের কাঁঠাল
              উদ্ভাবনে গবেষকেরা কাজ করছেন।
            </p>
          </Card>
        </div>
        <div className="">
          <Card href="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              বারোমাসি কাঁঠালের জীবনরহস্য উন্মোচন
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              শীতকাল শুরু হয়েছে। এই ঋতুতে দেশে খুব বেশি দেশি ফল সাধারণত হয় না।
              বরই, আমলকী, সফেদা, আর কমলা হয় কোথাও কোথাও। জাতীয় ফল কাঁঠালের মুকুল
              আসে জানুয়ারিতে। পরিপক্ব কাঁঠাল আসে আরও দুই-তিন মাস পরে।
            </p>
          </Card>
        </div>
        <div className="">
          <Card href="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              বারোমাসি কাঁঠালের জীবনরহস্য উন্মোচন
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              শীতকাল শুরু হয়েছে। এই ঋতুতে দেশে খুব বেশি দেশি ফল সাধারণত হয় না।
              বরই, আমলকী, সফেদা, আর কমলা হয় কোথাও কোথাও। জাতীয় ফল কাঁঠালের মুকুল
              আসে জানুয়ারিতে। পরিপক্ব কাঁঠাল আসে আরও দুই-তিন মাস পরে।
            </p>
          </Card>
        </div>
        <div className="">
          <Card href="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              বারোমাসি কাঁঠালের জীবনরহস্য উন্মোচন
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              শীতকাল শুরু হয়েছে। এই ঋতুতে দেশে খুব বেশি দেশি ফল সাধারণত হয় না।
              বরই, আমলকী, সফেদা, আর কমলা হয় কোথাও কোথাও। জাতীয় ফল কাঁঠালের মুকুল
              আসে জানুয়ারিতে। পরিপক্ব কাঁঠাল আসে আরও দুই-তিন মাস পরে।
            </p>
          </Card>
        </div>
        <div className="">
          <Card href="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              বারোমাসি কাঁঠালের জীবনরহস্য উন্মোচন
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              শীতকাল শুরু হয়েছে। এই ঋতুতে দেশে খুব বেশি দেশি ফল সাধারণত হয় না।
              বরই, আমলকী, সফেদা, আর কমলা হয় কোথাও কোথাও। জাতীয় ফল কাঁঠালের মুকুল
              আসে জানুয়ারিতে। পরিপক্ব কাঁঠাল আসে আরও দুই-তিন মাস পরে।
            </p>
          </Card>
        </div>
        <div className="">
          <Card href="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              বারোমাসি কাঁঠালের জীবনরহস্য উন্মোচন
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              শীতকাল শুরু হয়েছে। এই ঋতুতে দেশে খুব বেশি দেশি ফল সাধারণত হয় না।
              বরই, আমলকী, সফেদা, আর কমলা হয় কোথাও কোথাও। জাতীয় ফল কাঁঠালের মুকুল
              আসে জানুয়ারিতে। পরিপক্ব কাঁঠাল আসে আরও দুই-তিন মাস পরে।
            </p>
          </Card>
        </div>
        <div className="">
          <Card href="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              বারোমাসি কাঁঠালের জীবনরহস্য উন্মোচন
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              শীতকাল শুরু হয়েছে। এই ঋতুতে দেশে খুব বেশি দেশি ফল সাধারণত হয় না।
              বরই, আমলকী, সফেদা, আর কমলা হয় কোথাও কোথাও। জাতীয় ফল কাঁঠালের মুকুল
              আসে জানুয়ারিতে। পরিপক্ব কাঁঠাল আসে আরও দুই-তিন মাস পরে।
            </p>
          </Card>
        </div>
        <div className="col-span-2 row-span-2">
          <Card href="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              বারোমাসি কাঁঠালের জীবনরহস্য উন্মোচন
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
            শীতকাল শুরু হয়েছে। এই ঋতুতে দেশে খুব বেশি দেশি ফল সাধারণত হয় না।
              বরই, আমলকী, সফেদা, আর কমলা হয় কোথাও কোথাও। জাতীয় ফল কাঁঠালের মুকুল
              আসে জানুয়ারিতে। পরিপক্ব কাঁঠাল আসে আরও দুই-তিন মাস পরে। কিন্তু বছর
              তিনেক আগে খাগড়াছড়ির রামগড়ের চা–বাগানে বারো মাস ফলন দেয়, এমন এক
              জাতের কাঁঠালের সন্ধান পান বাংলাদেশ কৃষি গবেষণা ইনস্টিটিউটের (বারি)
              বিজ্ঞানীরা। এখন দেশি-বিদেশি বিজ্ঞানীরা এই জাতের কাঁঠালের জীবনরহস্য
              উন্মোচন করেছেন। নতুন জাতের এই কাঁঠালের নাম ‘বারি-৩’ দিয়েছে
              বাংলাদেশ কৃষি গবেষণা ইনস্টিটিউট। এই জাতের কাঁঠালগাছ যাতে সারা দেশে
              হয়, ফল দেয়, সেই লক্ষ্যে বিজ্ঞানীরা গবেষণা করেছেন। গবেষণার ফলাফল
              চলতি মাসে ‘ফ্রন্টিয়ার্স ইন প্ল্যান্ট সায়েন্স’ নামের একটি
              আন্তর্জাতিক বিজ্ঞান সাময়িকীতে প্রকাশিত হয়েছে। গবেষণার পরের ধাপ
              হিসেবে রপ্তানিযোগ্য ও সহজে সংরক্ষণ করা সম্ভব—এমন জাতের কাঁঠাল
              উদ্ভাবনে গবেষকেরা কাজ করছেন।
              শীতকাল শুরু হয়েছে। এই ঋতুতে দেশে খুব বেশি দেশি ফল সাধারণত হয় না।
              বরই, আমলকী, সফেদা, আর কমলা হয় কোথাও কোথাও। জাতীয় ফল কাঁঠালের মুকুল
              আসে জানুয়ারিতে। পরিপক্ব কাঁঠাল আসে আরও দুই-তিন মাস পরে। কিন্তু বছর
              তিনেক আগে খাগড়াছড়ির রামগড়ের চা–বাগানে বারো মাস ফলন দেয়, এমন এক
              জাতের কাঁঠালের সন্ধান পান বাংলাদেশ কৃষি গবেষণা ইনস্টিটিউটের (বারি)
              বিজ্ঞানীরা। এখন দেশি-বিদেশি বিজ্ঞানীরা এই জাতের কাঁঠালের জীবনরহস্য
              উন্মোচন করেছেন। নতুন জাতের এই কাঁঠালের নাম ‘বারি-৩’ দিয়েছে
              বাংলাদেশ কৃষি গবেষণা ইনস্টিটিউট। এই জাতের কাঁঠালগাছ যাতে সারা দেশে
              হয়, ফল দেয়, সেই লক্ষ্যে বিজ্ঞানীরা গবেষণা করেছেন। গবেষণার ফলাফল
              চলতি মাসে ‘ফ্রন্টিয়ার্স ইন প্ল্যান্ট সায়েন্স’ নামের একটি
              আন্তর্জাতিক বিজ্ঞান সাময়িকীতে প্রকাশিত হয়েছে। গবেষণার পরের ধাপ
              হিসেবে রপ্তানিযোগ্য ও সহজে সংরক্ষণ করা সম্ভব—এমন জাতের কাঁঠাল
              উদ্ভাবনে গবেষকেরা কাজ করছেন।
            </p>
          </Card>
        </div>
        <div className="">
          <Card href="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              বারোমাসি কাঁঠালের জীবনরহস্য উন্মোচন
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              শীতকাল শুরু হয়েছে। এই ঋতুতে দেশে খুব বেশি দেশি ফল সাধারণত হয় না।
              বরই, আমলকী, সফেদা, আর কমলা হয় কোথাও কোথাও। জাতীয় ফল কাঁঠালের মুকুল
              আসে জানুয়ারিতে। পরিপক্ব কাঁঠাল আসে আরও দুই-তিন মাস পরে।
            </p>
          </Card>
        </div>
        <div className="">
          <Card href="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              বারোমাসি কাঁঠালের জীবনরহস্য উন্মোচন
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              শীতকাল শুরু হয়েছে। এই ঋতুতে দেশে খুব বেশি দেশি ফল সাধারণত হয় না।
              বরই, আমলকী, সফেদা, আর কমলা হয় কোথাও কোথাও। জাতীয় ফল কাঁঠালের মুকুল
              আসে জানুয়ারিতে। পরিপক্ব কাঁঠাল আসে আরও দুই-তিন মাস পরে।
            </p>
          </Card>
        </div>
        <div className="">
          <Card href="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              বারোমাসি কাঁঠালের জীবনরহস্য উন্মোচন
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              শীতকাল শুরু হয়েছে। এই ঋতুতে দেশে খুব বেশি দেশি ফল সাধারণত হয় না।
              বরই, আমলকী, সফেদা, আর কমলা হয় কোথাও কোথাও। জাতীয় ফল কাঁঠালের মুকুল
              আসে জানুয়ারিতে। পরিপক্ব কাঁঠাল আসে আরও দুই-তিন মাস পরে।
            </p>
          </Card>
        </div>
        <div className="">
          <Card href="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              বারোমাসি কাঁঠালের জীবনরহস্য উন্মোচন
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              শীতকাল শুরু হয়েছে। এই ঋতুতে দেশে খুব বেশি দেশি ফল সাধারণত হয় না।
              বরই, আমলকী, সফেদা, আর কমলা হয় কোথাও কোথাও। জাতীয় ফল কাঁঠালের মুকুল
              আসে জানুয়ারিতে। পরিপক্ব কাঁঠাল আসে আরও দুই-তিন মাস পরে।
            </p>
          </Card>
        </div>
        <div className="">
          <Card href="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              বারোমাসি কাঁঠালের জীবনরহস্য উন্মোচন
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              শীতকাল শুরু হয়েছে। এই ঋতুতে দেশে খুব বেশি দেশি ফল সাধারণত হয় না।
              বরই, আমলকী, সফেদা, আর কমলা হয় কোথাও কোথাও। জাতীয় ফল কাঁঠালের মুকুল
              আসে জানুয়ারিতে। পরিপক্ব কাঁঠাল আসে আরও দুই-তিন মাস পরে।
            </p>
          </Card>
        </div>
        <div className="">
          <Card href="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              বারোমাসি কাঁঠালের জীবনরহস্য উন্মোচন
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              শীতকাল শুরু হয়েছে। এই ঋতুতে দেশে খুব বেশি দেশি ফল সাধারণত হয় না।
              বরই, আমলকী, সফেদা, আর কমলা হয় কোথাও কোথাও। জাতীয় ফল কাঁঠালের মুকুল
              আসে জানুয়ারিতে। পরিপক্ব কাঁঠাল আসে আরও দুই-তিন মাস পরে।
            </p>
          </Card>
        </div>
      </div>
   
   <Footer/>
  </div>
  )
}
