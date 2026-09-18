
import '../CSS/SpringAi.css';

function SpringAi() {

  return (

   <div className="container py-4 py-lg-5">

  {/* Page Header */}
  <div className="mb-5">

    <h1 className="display-6 fw-bold mb-3">
      Spring AI
    </h1>

    <p className="lead text-secondary">
      Learn how to build AI-powered applications using Java,
      Spring Boot and Spring AI.
    </p>

    <p className="text-secondary">
      Spring AI is useful for Java developers who want to add
      artificial intelligence features to their existing Spring
      applications. This guide starts with the basic concepts and
      gradually introduces more advanced topics.
    </p>

  </div>


  {/* 1 */}
  <section className="mb-5">

    <h2 className="h3 fw-semibold mb-3">
      1. What is Spring AI?
    </h2>

    <p>
      <strong>Spring AI</strong> is a Spring project that helps
      developers integrate Artificial Intelligence capabilities
      into Java applications.
    </p>

      <img src='https://images.ctfassets.net/mnrwi97vnhts/4mda205vy509Dx3vGkMwFr/af520e66dc79fb80cd1bc129a11d6d23/spring-ai-integration-diagram-3.svg'/>

    <p>
      A Spring Boot application can use Spring AI to communicate
      with AI models and use their responses in the application.
      This makes it possible to build features such as chatbots,
      coding assistants, document question-answering systems and
      other AI-based applications.
    </p>

    <div className="alert alert-light border mt-3">
      <strong>In simple words:</strong> Spring AI provides a
      convenient way for a Spring Boot application to communicate
      with AI models.
    </div>

  </section>


  {/* 2 */}
  <section className="mb-5">

    <h2 className="h3 fw-semibold mb-3">
      2. Why do we need Spring AI?
    </h2>

    <p>
      AI providers expose APIs that applications can use to send
      requests and receive responses. If we integrate these APIs
      directly, we have to handle provider-specific request formats,
      responses and configuration.
    </p>

    <p>
      Spring AI provides common abstractions that make this work
      easier for Spring developers. It also provides integrations
      for different AI providers.
    </p>

    <p>
      This means a developer can focus more on the application's
      functionality instead of writing all the integration code
      manually.
    </p>

  </section>


  {/* 3 */}
  <section className="mb-5">

    <h2 className="h3 fw-semibold mb-3">
      3. How does Spring AI work?
    </h2>

    <p>
      A simple Spring AI application can be understood using the
      following flow:
    </p>

    <div className="border rounded p-4 bg-light my-4">

      <div className="text-center fw-semibold">
        Spring Boot Application
      </div>

      <div className="text-center text-secondary my-2">
        ↓
      </div>

      <div className="text-center fw-semibold">
        Spring AI
      </div>

      <div className="text-center text-secondary my-2">
        ↓
      </div>

      <div className="text-center fw-semibold">
        AI Model
      </div>

      <div className="text-center text-secondary my-2">
        ↓
      </div>

      <div className="text-center fw-semibold">
        Response
      </div>

    </div>

    <p>
      For example, a user may ask:
    </p>

    <div className="border rounded p-3 bg-light mb-3">
      <strong>User:</strong> Explain dependency injection in Spring.
    </div>

    <p>
      The application sends the question to an AI model through
      Spring AI. The model processes the request and returns a
      response to the application.
    </p>

  </section>


  {/* 4 */}
  <section className="mb-5">

    <h2 className="h3 fw-semibold mb-3">
      4. What is an AI Model?
    </h2>

    <p>
      An <strong>AI model</strong> is a trained system that can
      process input and generate an output.
    </p>

    <p>
      Language models are commonly used to understand text and
      generate responses. Different providers offer different
      models with different capabilities.
    </p>

    <p>
      Spring AI provides a common programming approach for working
      with supported AI models.
    </p>

    <p>
      Depending on the model and provider, applications can use
      capabilities such as:
    </p>

    <ul>
      <li>Text generation</li>
      <li>Chat</li>
      <li>Image generation</li>
      <li>Audio processing</li>
      <li>Embeddings</li>
    </ul>

  </section>


  {/* 5 */}
  <section className="mb-5">

    <h2 className="h3 fw-semibold mb-3">
      5. What is a Prompt?
    </h2>

    <p>
      A <strong>prompt</strong> is the instruction or question
      given to an AI model.
    </p>

    <p>
      For example:
    </p>

    <pre className="bg-light border rounded p-3">
      <code>
        Explain Java Stream API with a simple example.
      </code>
    </pre>

    <p>
      The AI model uses this instruction to generate an appropriate
      response.
    </p>

    <p>
      A clear prompt generally produces a more useful response.
      In real applications, prompts can contain instructions,
      user information and other context required by the application.
    </p>

  </section>


  {/* 6 */}
  <section className="mb-5">

    <h2 className="h3 fw-semibold mb-3">
      6. Messages in AI Applications
    </h2>

    <p>
      Chat-based AI applications usually work with messages.
      Different messages can provide different types of information
      to the model.
    </p>

    <ul>

      <li className="mb-2">
        <strong>System message:</strong> Provides instructions that
        describe how the AI should behave.
      </li>

      <li>
        <strong>User message:</strong> Contains the question or
        information provided by the user.
      </li>

    </ul>

    <p>
      For example, a system instruction could tell an AI assistant
      to behave as a Java teacher and explain programming concepts
      using simple examples.
    </p>

  </section>


  {/* 7 */}
  <section className="mb-5">

    <h2 className="h3 fw-semibold mb-3">
      7. ChatClient
    </h2>

    <p>
      <strong>ChatClient</strong> is one of the important APIs in
      Spring AI. It provides a convenient way to interact with
      chat-based AI models.
    </p>

    <p>
      A basic example looks like this:
    </p>

    <pre className="bg-dark text-light rounded p-3 overflow-auto">
      <code>{`String response = chatClient
        .prompt("What is Spring Boot?")
        .call()
        .content();`}</code>
    </pre>

    <p>
      The code can be understood step by step:
    </p>

    <ul>

      <li>
        <strong>prompt()</strong> specifies the question or instruction.
      </li>

      <li>
        <strong>call()</strong> sends the request to the model.
      </li>

      <li>
        <strong>content()</strong> obtains the generated content.
      </li>

    </ul>

    <div className="alert alert-info border-0 mt-3">
      <strong>Remember:</strong> ChatClient is the API you will
      commonly use when building a basic Spring AI chat application.
    </div>

  </section>


  {/* 8 */}
  <section className="mb-5">

    <h2 className="h3 fw-semibold mb-3">
      8. Embeddings
    </h2>

    <p>
      An <strong>embedding</strong> is a numerical representation
      of information, such as text.
    </p>

    <p>
      Embeddings are useful when an application needs to compare
      the meaning of different pieces of information rather than
      simply looking for matching words.
    </p>

    <p>
      For example, these two sentences have similar meanings:
    </p>

    <div className="bg-light border rounded p-3 my-3">

      <p className="mb-2">
        Java is a programming language.
      </p>

      <p className="mb-0">
        Java is widely used to develop software applications.
      </p>

    </div>

    <p>
      Their embeddings can be compared to determine how closely
      their meanings are related.
    </p>

  </section>


  {/* 9 */}
  <section className="mb-5">

    <h2 className="h3 fw-semibold mb-3">
      9. Vector Store
    </h2>

    <p>
      A <strong>Vector Store</strong> is used to store embeddings
      and perform similarity searches.
    </p>

    <p>
      Consider an application containing thousands of technical
      documents. A user may ask a question using words that are
      different from the words used in the documents.
    </p>

    <p>
      A vector search can help find information that is
      <strong> semantically similar</strong> to the question.
    </p>

    <p>
      Vector stores are therefore commonly used in
      <strong> semantic search</strong> and
      <strong> RAG applications</strong>.
    </p>

  </section>


  {/* 10 */}
  <section className="mb-5">

    <h2 className="h3 fw-semibold mb-3">
      10. RAG - Retrieval Augmented Generation
    </h2>

    <p>
      <strong>RAG</strong> stands for
      <strong> Retrieval Augmented Generation</strong>.
    </p>

    <p>
      An AI model may not have access to the private or latest
      information stored inside your application. RAG provides a
      way to retrieve relevant information from an external data
      source and give that information to the model as context.
    </p>

    <p>
      A simplified RAG process looks like this:
    </p>

    <ol>

      <li className="mb-2">
        The user asks a question.
      </li>

      <li className="mb-2">
        The application searches for relevant information.
      </li>

      <li className="mb-2">
        Relevant documents or data are retrieved.
      </li>

      <li className="mb-2">
        The question and retrieved information are provided to the
        AI model.
      </li>

      <li>
        The AI model generates the final response.
      </li>

    </ol>

    <div className="alert alert-light border mt-4">

      <strong>Example:</strong>

      <p className="mb-0 mt-2">
        A company stores its employee policies in PDF documents.
        An employee asks, "How many days of leave can I take?"
        A RAG application can retrieve the relevant policy and
        use it as context for generating the answer.
      </p>

    </div>

  </section>


  {/* 11 */}
  <section className="mb-5">

    <h2 className="h3 fw-semibold mb-3">
      11. Tool Calling
    </h2>

    <p>
      Sometimes an AI model needs information or actions that are
      available only inside the application.
    </p>

    <p>
      <strong>Tool Calling</strong> allows an AI model to request
      the application to execute a particular function or tool.
    </p>

    <p>
      For example, an application may have a method:
    </p>

    <pre className="bg-light border rounded p-3">
      <code>{`getWeather(String city)`}</code>
    </pre>

    <p>
      If the user asks,
      <strong> "What is the weather in Pune?"</strong>,
      the AI model can determine that weather information is needed
      and request the application to use the appropriate tool.
    </p>

    <p>
      Tool Calling is useful when AI needs to interact with
      <strong> APIs, databases or application services</strong>.
    </p>

  </section>


  {/* 12 */}
  <section className="mb-5">

    <h2 className="h3 fw-semibold mb-3">
      12. Chat Memory
    </h2>

    <p>
      A conversation usually contains multiple messages. To provide
      meaningful answers, an application may need to maintain
      information from previous messages.
    </p>

    <p>
      <strong>Chat Memory</strong> helps an application maintain
      conversation history or context between interactions.
    </p>

    <div className="bg-light border rounded p-3 my-3">

      <p className="mb-2">
        <strong>User:</strong> I am learning Java.
      </p>

      <p className="mb-2">
        <strong>User:</strong> I have completed collections.
      </p>

      <p className="mb-0">
        <strong>User:</strong> What should I learn next?
      </p>

    </div>

    <p>
      With appropriate conversation memory, the application can
      use previous messages when processing the latest question.
    </p>

  </section>


  {/* 13 */}
  <section className="mb-5">

    <h2 className="h3 fw-semibold mb-3">
      13. Structured Output
    </h2>

    <p>
      AI models commonly return text. However, an application may
      need the response in a specific structure.
    </p>

    <p>
      <strong>Structured Output</strong> allows AI-generated
      information to be converted into a structured format that
      an application can work with more easily.
    </p>

    <p>
      For example, an application may want student information
      represented as:
    </p>

    <pre className="bg-light border rounded p-3">
      <code>{`{
  "name": "Rahul",
  "age": 25,
  "skill": "Java"
}`}</code>
    </pre>

    <p>
      This type of structured information can then be mapped to
      Java objects and used by the application.
    </p>

  </section>


  {/* 14 */}
  <section className="mb-5">

    <h2 className="h3 fw-semibold mb-3">
      14. Advisors
    </h2>

    <p>
      <strong>Advisors</strong> provide a way to add reusable
      processing around an AI interaction.
    </p>

    <p>
      They can be used for tasks such as managing conversation
      context, adding retrieved information to a prompt or applying
      other processing before or after an AI request.
    </p>

    <p>
      Advisors become particularly useful when an application grows
      beyond a simple question-and-answer implementation.
    </p>

  </section>


  {/* 15 */}
  <section className="mb-5">

    <h2 className="h3 fw-semibold mb-3">
      15. Common Spring AI Use Cases
    </h2>

    <p>
      Spring AI can be used to build many different types of
      applications, including:
    </p>

    <ul>

      <li className="mb-2">
        <strong>AI Chatbots</strong> for websites and applications.
      </li>

      <li className="mb-2">
        <strong>Learning Assistants</strong> for students.
      </li>

      <li className="mb-2">
        <strong>Coding Assistants</strong> for developers.
      </li>

      <li className="mb-2">
        <strong>Document Question-Answering</strong> applications.
      </li>

      <li className="mb-2">
        <strong>RAG Applications</strong> that work with private
        or application-specific information.
      </li>

      <li className="mb-2">
        <strong>Content Generation</strong> applications.
      </li>

      <li>
        Applications that connect AI models with
        <strong> business services and APIs</strong>.
      </li>

    </ul>

  </section>


  {/* 16 */}
  <section className="mb-5">

    <h2 className="h3 fw-semibold mb-3">
      16. Spring AI Learning Path
    </h2>

    <p>
      If you are learning Spring AI for the first time, it is
      better to learn the concepts step by step.
    </p>

    <div className="table-responsive">

      <table className="table table-bordered align-middle">

        <thead className="table-light">

          <tr>
            <th>Step</th>
            <th>Topic</th>
            <th>What to Learn</th>
          </tr>

        </thead>

        <tbody>

          <tr>
            <td>1</td>
            <td><strong>AI Basics</strong></td>
            <td>AI, Generative AI, LLMs and AI models</td>
          </tr>

          <tr>
            <td>2</td>
            <td><strong>Spring AI Setup</strong></td>
            <td>Create a Spring Boot project and configure an AI provider</td>
          </tr>

          <tr>
            <td>3</td>
            <td><strong>Prompts</strong></td>
            <td>Send instructions and questions to an AI model</td>
          </tr>

          <tr>
            <td>4</td>
            <td><strong>ChatClient</strong></td>
            <td>Build a basic AI chat application</td>
          </tr>

          <tr>
            <td>5</td>
            <td><strong>Structured Output</strong></td>
            <td>Work with structured AI responses</td>
          </tr>

          <tr>
            <td>6</td>
            <td><strong>Embeddings</strong></td>
            <td>Understand vectors and semantic similarity</td>
          </tr>

          <tr>
            <td>7</td>
            <td><strong>Vector Store</strong></td>
            <td>Store and search embeddings</td>
          </tr>

          <tr>
            <td>8</td>
            <td><strong>RAG</strong></td>
            <td>Build applications using external documents and data</td>
          </tr>

          <tr>
            <td>9</td>
            <td><strong>Tool Calling</strong></td>
            <td>Connect AI models with application functions</td>
          </tr>

          <tr>
            <td>10</td>
            <td><strong>Memory & Advisors</strong></td>
            <td>Build more complete AI applications</td>
          </tr>

        </tbody>

      </table>

    </div>

  </section>


  {/* 17 */}
  <section className="mb-5">

    <h2 className="h3 fw-semibold mb-3">
      17. Simple Real-World Example
    </h2>

    <p>
      Consider a <strong>Java Learning Assistant</strong> built
      using Spring Boot and Spring AI.
    </p>

    <p>
      A student asks:
    </p>

    <div className="border rounded p-3 bg-light mb-3">
      What is the difference between ArrayList and LinkedList?
    </div>

    <p>
      The Spring Boot application sends the question through
      <strong> ChatClient</strong>. The AI model generates the answer,
      and the application displays it to the student.
    </p>

    <p>
      Later, the application could be extended with
      <strong> RAG</strong> so that the assistant can answer questions
      from the institute's own Java notes and study material.
    </p>

    <p>
      <strong>Tool Calling</strong> could also be added if the
      application needs to interact with other services.
    </p>

  </section>


  {/* 18 */}
  <section className="mb-5">

    <h2 className="h3 fw-semibold mb-3">
      18. Key Points to Remember
    </h2>

    <div className="border rounded p-4">

      <ul className="mb-0">

        <li className="mb-2">
          <strong>Spring AI</strong> helps integrate AI capabilities
          into Spring applications.
        </li>

        <li className="mb-2">
          An <strong>AI model</strong> processes input and generates
          an output.
        </li>

        <li className="mb-2">
          A <strong>Prompt</strong> is an instruction or question
          given to the model.
        </li>

        <li className="mb-2">
          <strong>ChatClient</strong> provides a convenient API for
          interacting with chat models.
        </li>

        <li className="mb-2">
          <strong>Embeddings</strong> represent information as vectors.
        </li>

        <li className="mb-2">
          <strong>Vector Stores</strong> are used for storing and
          searching vector data.
        </li>

        <li className="mb-2">
          <strong>RAG</strong> allows an application to provide
          retrieved information as context to an AI model.
        </li>

        <li className="mb-2">
          <strong>Tool Calling</strong> connects AI models with
          application functions and services.
        </li>

        <li>
          <strong>Chat Memory</strong> helps maintain conversation
          context.
        </li>

      </ul>

    </div>

  </section>


  {/* Summary */}
  <div className="bg-light border rounded p-4 p-md-5">

    <h2 className="h4 fw-bold mb-3">
      Conclusion
    </h2>

    <p className="mb-0">
      Spring AI provides a practical way for Java developers to
      add AI capabilities to Spring Boot applications. Start with
      the basics such as <strong>AI models, prompts and ChatClient</strong>.
      Once these concepts are clear, move to
      <strong> structured output, embeddings, vector stores and RAG</strong>,
      and then explore advanced features such as
      <strong> tool calling, memory and advisors</strong>.
    </p>

  </div>

</div>
  )
}

export default SpringAi;
