import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filter";
import { getQuestions } from "@/lib/actions/question.actions";
import Link from "next/link";

export default async function Home() {
  const result = await getQuestions({});

  return (
    <>
      <div className=' flex  w-full flex-col-reverse px-4 py-2  justify-between gap-4 sm:flex-row sm:items-center'>
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
        {result.questions.length > 0 ? (
          result.questions.map((question) => (
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
