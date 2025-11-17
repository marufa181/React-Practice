import ContactForm from "./component/ContactForm";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Hero from "./component/Hero";



const App = () => {

//4. Example variable for conditional rendering
let MARKS = 90;

// 5.You can change the value of Marks to test different conditions
let Marks = 70;

  return (
    <div>
      {/* //1. Rendering Components */}

      <Header />
      <Hero />
      <ContactForm />
      <Footer />

      {/* //2. Handling Events in React with inline function javascript */}
      <button onClick={() => alert('Button clicked!')}>Click me</button>

      {/* //3. Inline Styling CSS with object */}
      <h1 style={
        { color: 'blue'}

      }>Submit</h1>


     {/*  //4. Conditional Rendering in React */}

      {
      Marks > 80? // Conditional (Ternary) Operator
      <h1>Brillient Result</h1> // True case(If)
      : 
      <h1>Good Result</h1> // False case(Else)
      }



      {/* //5. Conditional Rendering in React using IIFE(Immediately Invoked Function Expression)  */}

      {(() => {

        if (MARKS > 90 && MARKS <= 100) {
          return <h2>Outstanding Result</h2>;
        } else if (MARKS > 75) {
          return <h2>Excellent Result</h2>;
        } else {
          return <h2>Needs Improvement</h2>;
        } 


      })()}

    </div>
  );
};

export default App;