import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filter";
import Link from "next/link";

export default function Home() {
  const questions = [
    {
      _id: "1",
      title: "Cascading Delet On SQLAlchemy?",
      topics: [
        { _id: "1", name: "Database" },
        { _id: "2", name: "SQL" },
      ],
      author: {
        _id: "1",
        name: "Jhon Doe",
        picture: "/assets/images/profile.png",
      },
      upvotes: 10,
      views: 100,
      answers: [],
      createdAt: new Date("2022-03-14T09:30:00.000Z"),
    },
    {
      _id: "2",
      title: "Cascading Delet On SQLAlchemy?",
      topics: [
        { _id: "1", name: "Database" },
        { _id: "2", name: "SQL" },
      ],
      author: {
        _id: "1",
        name: "Jhon Doe",
        picture: "/assets/images/profile1.png",
      },
      upvotes: 10,
      views: 100,
      answers: [],
      createdAt: new Date("2022-03-14T09:30:00.000Z"),
    },
    {
      _id: "3",
      title: "How center a div in CSS?",
      topics: [
        { _id: "1", name: "CSS" },
        { _id: "2", name: "Tailwind" },
      ],
      author: {
        _id: "1",
        name: "Jhon Doe",
        picture: "/assets/images/profile3.png",
      },
      upvotes: 10,
      views: 200,
      answers: [],
      createdAt: new Date("2022-03-14T09:30:00.000Z"),
    },
  ];

  return (
    <>
      <div className=' flex  w-full flex-col-reverse px-4 py-3  justify-between gap-4 sm:flex-row sm:items-center'>
        <h1 className='text-4xl font-bold'>All Questions</h1>
        <Link href='/ask_question' className='flex justify-end max-sm:w-full'>
          <Button className='bg-black rounded-full text-white px-8 py-3 min-h-[56px] '>
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className='mt-4 flex justify-between gap-3 max-sm:flex-col sm:items-center px-4'>
        <LocalSearchBar
          route='/'
          iconPosition='left'
          imgSrc='/assets/search.svg'
          placeholder='Search for question'
          otherClasses='flex-1'
        />{" "}
        <Filter
          filters={HomePageFilters}
          otherClasses='min-h-[50px] sm:min-w-[170px] rounded-full '
          containerClasses='hidden max-md:flex'
        />
      </div>
      <HomeFilters />
      <div className='mt-4 flex w-full flex-col gap-6 px-4'>
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              topics={question.topics}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There's no question to show"
            description='Be the first break the silence! 🚀 Ask A Question and kickstart the
        discussion. our query could be the next big thing others lern from. Get
        Involved!'
            link='/ask_question'
            linkTitle='Ask a Qusetion'
          />
        )}
      </div>
    </>
  );
}
