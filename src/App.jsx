import ContactForm from "./component/ContactForm";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Hero from "./component/Hero";



const App = () => {

let MARKS = 90;

  return (
    <div>
      <Header />
      <Hero />
      <ContactForm />
      <Footer />

      <button onClick={() => alert('Button clicked!')}>Click me</button>

      <h1 style={
        { color: 'blue'}

      }>Submit</h1>



      {
      MARKS > 80? // Conditional (Ternary) Operator
      <h1>Brillient Result</h1> // True case(If)
      : 
      <h1>Good Result</h1> // False case(Else)
      }

    </div>
  );
};

export default App;