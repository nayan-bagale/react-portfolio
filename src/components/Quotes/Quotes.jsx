import { useEffect, useState } from "react";
import Child from "../Animation/Child";
import Quote from "./Quote";

const quotes_data = [
  {
    quote:
      "Give someone a program; you frustrate them for a day; teach them how to program, and you frustrate them for a lifetime",
    author: "David Leinweber",
  },
  {
    quote: "Don’t comment bad code – rewrite it",
    author: "Brian Kernighan",
  },
  {
    quote:
      "No one in the brief history of computing has ever written a piece of perfect software. It’s unlikely that you’ll be the first",
    author: "Andy Hunt",
  },
  {
    quote:
      "A programming language is for thinking about programs, not for expressing programs you’ve already thought of. It should be a pencil, not a pen",
    author: "Paul Graham",
  },
  {
    quote:
      "Sometimes it pays to stay in bed on Monday rather than spending the rest of the week debugging Monday’s code",
    author: "Dan Salomon",
  },
  {
    quote:
      "Bad programmers worry about the code. Good programmers worry about data structures and their relationships",
    author: "Linus Torvalds",
  },
  {
    quote:
      "Debugging becomes significantly easier if you first admit that you are the problem",
    author: "William Laeder",
  },
  {
    quote:
      "It's better to wait for a productive programmer to become available than it is to wait for the first available programmer to become productive",
    author: "Steve McConnell",
  },
  {
    quote:
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand",
    author: "Martin Fowler",
  },
  {
    quote:
      "One of my most productive days was throwing away 1000 lines of code",
    author: "Ken Thompson",
  },
  {
    quote:
      "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it",
    author: "Rajanand",
  },
  {
    quote:
      "Everyday life is like programming, I guess. If you love something, you can put beauty into it",
    author: "Donald Knuth",
  },
  {
    quote:
      "Everybody in this country should learn to program a computer because it teaches you how to think",
    author: "Steve Jobs",
  },
  {
    quote: "System programmers are the high priests of a low cult",
    author: "Robert S. Barton",
  },
  {
    quote:
      "A good programmer is someone who always looks both ways before crossing a one-way street",
    author: "Doug Linder",
  },
  {
    quote:
      "I don’t care if it works on your machine! We are not shipping your machine",
    author: "Vidiu Platon",
  },
  {
    quote: "Fix the cause, not the symptom",
    author: "Steve Maguire",
  },
  {
    quote:
      "Measuring programming progress by lines of code is like measuring aircraft building progress by weight",
    author: "Bill Gates",
  },
  {
    quote:
      "In programming, the hard part isn’t solving problems but deciding what problems to solve",
    author: "Paul Graham",
  },
  {
    quote:
      "If debugging is the process of removing software bugs, then programming must be the process of putting them in",
    author: "Edsger W. Dijkstra",
  },
  {
    quote: "First, solve the problem. Then write the code",
    author: "John Johnson",
  },
  {
    quote: "The computer was born to solve problems that did not exist before",
    author: "Bill Gates",
  },
  {
    quote: "Make it work, make it right, make it fast",
    author: "Kent Beck",
  },
  {
    quote:
      "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live",
    author: "Rick Osborne",
  },
  {
    quote:
      "People don’t care about what you say, they care about what you build",
    author: "Mark Zuckerberg",
  },
  {
    quote:
      "As a programmer, it is your job to put yourself out of business. What you do today can be automated tomorrow",
    author: "Doug McIlroy",
  },
  {
    quote:
      "We have to stop optimizing for programmers and start optimizing for users",
    author: "Jeff Atwood",
  },
  {
    quote:
      "There is a big difference between making a simple product & making a product simple",
    author: "Des Traynor",
  },
  {
    quote:
      "If the code and the comments do not match, possibly both are incorrect",
    author: "Norm Schryer",
  },
  {
    quote: "Before software can be reusable it first has to be usable",
    author: "Ralph Johnson",
  },
  {
    quote: "If you optimize everything, you will always be unhappy",
    author: "Donald Knuth",
  },
  {
    quote:
      "Your mind is programmable – if you’re not programming your mind, else will program it for you",
    author: "Jeremy Hammond",
  },
  {
    quote: "Experience is the name everyone gives to their mistakes",
    author: "Oscar Wilde",
  },
  {
    quote:
      "The trouble with programmers is that you can never tell what a programmer is doing until it’s too late",
    author: "Seymour Cray",
  },
  {
    quote: "Testing can only prove the presence of bugs, not their absence",
    author: "Edsger W. Dijkstra",
  },
  {
    quote: "Talk is cheap. Show me the code",
    author: "Linus Torvalds",
  },
  {
    quote:
      "The function of a good software is to make the complex appear to be simple",
    author: "Grady Booch",
  },
  {
    quote: "Your most unhappy customers are your greatest source of learning",
    author: "Bill Gates",
  },
  {
    quote:
      "Small minds are concerned with the extraordinary, great minds with the ordinary",
    author: "Blaise Pascal",
  },
  {
    quote:
      "Active programming consists of the design of new programs rather than the contemplation of old programs",
    author: "Niklaus Wirth",
  },
  {
    quote:
      "Making code does what it’s supposed to do is the easy part. Handling the myriad ways it can go wrong is the real work",
    author: "Aaron Lozier",
  },
  {
    quote:
      "Most good programmers do programming not because they expect to get paid or get adulation by the public but because it is fun to program",
    author: "Linus Torvalds",
  },
  {
    quote:
      "It is far, far easier to make a correct program fast than to make a fast program correct",
    author: "Herb Sutter",
  },
  {
    quote:
      "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it",
    author: "Patrick McKenzie",
  },
  {
    quote:
      "If debugging is the process of removing software bugs, then programming must be the process of putting them in",
    author: "Edsger Dijkstra",
  },
  {
    quote:
      "C makes it easy to shoot yourself in the foot; C++ makes it harder, but when you do, it blows away your whole leg",
    author: "Bjarne Stroustrup",
  },
  {
    quote: "Before software can be reusable it first has to be usable",
    author: "Ralph Johnson",
  },
  {
    quote:
      "Programs must be written for people to read, and only incidentally for machines to execute",
    author: "Harold Abelson",
  },
  {
    quote:
      "In programming, if someone tells you you’re overcomplicating it, they’re either 10 steps behind you or 10 steps ahead of you",
    author: "Andrew Clark",
  },
  {
    quote: "Truth can only be found in one place: the code",
    author: "Robert C. Martin",
  },
];

const Quotes = () => {
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const [quote, setQuote] = useState(
    quotes_data[getRandomNumber(0, quotes_data.length - 1)]
  );

  useEffect(() => {
    const newQuote = () =>
      setQuote(quotes_data[getRandomNumber(0, quotes_data.length - 1)]);
    const interval = setInterval(newQuote, 10000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section
      className="relative flex flex-col items-center min-h-[60vh] justify-center md:w-4/5 w-11/12 m-auto"
      id="quotes-section"
    >
      <div className=" md:w-4/5 w-11/12 m-auto flex flex-col items-center">
        <Child>
          <Quote quote={quote} />
        </Child>
      </div>
    </section>
  );
};

export default Quotes;
