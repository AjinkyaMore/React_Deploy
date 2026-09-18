
import "../CSS/Java.css";

const Java = () => {
  return (
    <div className="container py-4 py-lg-5 java-content">
      
      {/* Header */}
      <header className="mb-5">
        <h1 className="display-5 fw-bold mb-3">Java</h1>

        <p className="lead text-secondary">
          Java is a popular, object-oriented programming language used to build
          reliable and scalable applications for web, desktop, enterprise,
          mobile, and backend systems.
        </p>
      </header>

      {/* 1. What is Java? */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">1. What is Java?</h2>

        <p>
          Java is a high-level, object-oriented programming language developed
          by Sun Microsystems. It was designed with the idea of writing code
          once and running it on different platforms.
        </p>

        <p>
          Java programs are compiled into <strong>bytecode</strong>. This
          bytecode runs inside the <strong>Java Virtual Machine (JVM)</strong>,
          which makes Java applications platform independent.
        </p>

        <div className="alert alert-light border">
          <strong>Simple definition:</strong> Java is a general-purpose
          programming language mainly used for developing secure, reliable,
          maintainable, and scalable applications.
        </div>
      </section>

      {/* 2. Why Java */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">2. Why do we use Java?</h2>

        <p>
          Java is widely used because it provides a strong programming model,
          automatic memory management, a large standard library, and a mature
          ecosystem.
        </p>

        <ul>
          <li>It supports object-oriented programming.</li>
          <li>It is platform independent through the JVM.</li>
          <li>It provides automatic memory management using Garbage Collection.</li>
          <li>It supports multithreading and concurrent programming.</li>
          <li>It provides strong exception handling mechanisms.</li>
          <li>It has a large collection of libraries and frameworks.</li>
          <li>It is commonly used for enterprise and backend development.</li>
        </ul>
      </section>

      {/* 3. Features */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">3. Important Features of Java</h2>

        <div className="table-responsive">
          <table className="table table-bordered align-middle">
            <thead className="table-light">
              <tr>
                <th>Feature</th>
                <th>Description</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Object-Oriented</td>
                <td>
                  Java programs can be designed using classes and objects.
                </td>
              </tr>

              <tr>
                <td>Platform Independent</td>
                <td>
                  Java bytecode can run on any platform that provides a
                  compatible JVM.
                </td>
              </tr>

              <tr>
                <td>Robust</td>
                <td>
                  Java provides strong type checking, exception handling and
                  automatic memory management.
                </td>
              </tr>

              <tr>
                <td>Secure</td>
                <td>
                  Java provides several language and runtime features that
                  support secure application development.
                </td>
              </tr>

              <tr>
                <td>Multithreaded</td>
                <td>
                  Java supports executing multiple tasks concurrently.
                </td>
              </tr>

              <tr>
                <td>Portable</td>
                <td>
                  Java applications can be moved between supported platforms
                  without changing the compiled bytecode.
                </td>
              </tr>

              <tr>
                <td>High Performance</td>
                <td>
                  JVM technologies such as Just-In-Time compilation improve
                  runtime performance.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. JDK JRE JVM */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">4. JDK, JRE and JVM</h2>

        <p>
          Three important terms that every Java developer should understand are
          <strong> JDK, JRE and JVM</strong>.
        </p>

        <div className="table-responsive">
          <table className="table table-bordered align-middle">
            <thead className="table-light">
              <tr>
                <th>Term</th>
                <th>Meaning</th>
                <th>Purpose</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>JVM</td>
                <td>Java Virtual Machine</td>
                <td>Runs Java bytecode.</td>
              </tr>

              <tr>
                <td>JRE</td>
                <td>Java Runtime Environment</td>
                <td>Provides the environment required to run Java applications.</td>
              </tr>

              <tr>
                <td>JDK</td>
                <td>Java Development Kit</td>
                <td>Provides tools required to develop and run Java applications.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="alert alert-light border">
          <strong>Remember:</strong> A developer normally installs the
          <strong> JDK</strong> to develop Java applications.
        </div>
      </section>

      {/* 5. How Java works */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">5. How does a Java program work?</h2>

        <p>A simple Java program generally follows this process:</p>

        <div className="border rounded p-3 bg-light">
          <div className="text-center">
            <strong>Java Source Code</strong>
            <div className="my-2">↓</div>

            <strong>Java Compiler (javac)</strong>
            <div className="my-2">↓</div>

            <strong>Bytecode (.class file)</strong>
            <div className="my-2">↓</div>

            <strong>JVM</strong>
            <div className="my-2">↓</div>

            <strong>Program Output</strong>
          </div>
        </div>

        <p className="mt-3">
          The Java compiler converts the source code into bytecode. The JVM
          then loads and executes this bytecode.
        </p>
      </section>

      {/* 6. First program */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">6. First Java Program</h2>

        <pre className="bg-dark text-light p-3 rounded">
{`public class HelloWorld {

    public static void main(String[] args) {

        System.out.println("Hello Java");

    }
}`}
        </pre>

        <p>
          The <code>main()</code> method is the entry point of a traditional
          Java application. Program execution starts from this method.
        </p>
      </section>

      {/* 7. Variables */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">7. Variables and Data Types</h2>

        <p>
          A variable is a named memory location used to store a value.
        </p>

        <pre className="bg-dark text-light p-3 rounded">
{`int age = 25;
double salary = 45000.50;
char grade = 'A';
boolean active = true;
String name = "Rahul";`}
        </pre>

        <h3 className="h5 fw-bold mt-4">Primitive Data Types</h3>

        <div className="table-responsive">
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>Type</th>
                <th>Example</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>byte</td>
                <td>byte age = 25;</td>
              </tr>
              <tr>
                <td>short</td>
                <td>short number = 1000;</td>
              </tr>
              <tr>
                <td>int</td>
                <td>int salary = 50000;</td>
              </tr>
              <tr>
                <td>long</td>
                <td>long population = 1000000L;</td>
              </tr>
              <tr>
                <td>float</td>
                <td>float price = 10.5f;</td>
              </tr>
              <tr>
                <td>double</td>
                <td>double percentage = 85.5;</td>
              </tr>
              <tr>
                <td>char</td>
                <td>char grade = 'A';</td>
              </tr>
              <tr>
                <td>boolean</td>
                <td>boolean result = true;</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 8. Operators */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">8. Operators</h2>

        <p>
          Operators are symbols used to perform operations on values and
          variables.
        </p>

        <ul>
          <li>Arithmetic operators: +, -, *, /, %</li>
          <li>Relational operators: &gt;, &lt;, &gt;=, &lt;=, ==, !=</li>
          <li>Logical operators: &amp;&amp;, ||, !</li>
          <li>Assignment operators: =, +=, -=, *=</li>
          <li>Unary operators: ++, --</li>
          <li>Conditional operator: ? :</li>
        </ul>

        <pre className="bg-dark text-light p-3 rounded">
{`int a = 10;
int b = 20;

int result = a + b;

System.out.println(result);`}
        </pre>
      </section>

      {/* 9. Control statements */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">9. Control Statements</h2>

        <p>
          Control statements are used to control the flow of program execution.
        </p>

        <h3 className="h5 fw-bold">Decision Making</h3>

        <ul>
          <li>if</li>
          <li>if-else</li>
          <li>else-if</li>
          <li>switch</li>
        </ul>

        <pre className="bg-dark text-light p-3 rounded">
{`int marks = 75;

if (marks >= 40) {
    System.out.println("Pass");
} else {
    System.out.println("Fail");
}`}
        </pre>

        <h3 className="h5 fw-bold mt-4">Looping</h3>

        <ul>
          <li>for loop</li>
          <li>while loop</li>
          <li>do-while loop</li>
          <li>enhanced for loop</li>
        </ul>
      </section>

      {/* 10. Arrays */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">10. Arrays</h2>

        <p>
          An array is used to store multiple values of the same type in a
          single variable.
        </p>

        <pre className="bg-dark text-light p-3 rounded">
{`int[] numbers = {10, 20, 30, 40, 50};

System.out.println(numbers[0]);`}
        </pre>

        <p>
          Array indexing starts from <strong>0</strong>. Therefore,
          <code>numbers[0]</code> represents the first element.
        </p>
      </section>

      {/* 11. Strings */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">11. Strings</h2>

        <p>
          A String represents a sequence of characters. Java provides the
          <code>String</code> class for working with text.
        </p>

        <pre className="bg-dark text-light p-3 rounded">
{`String name = "Java";

System.out.println(name.length());
System.out.println(name.toUpperCase());
System.out.println(name.charAt(0));`}
        </pre>

        <p>
          Strings are objects and are immutable. This means that once a String
          object is created, its contents cannot be changed.
        </p>
      </section>

      {/* 12. Methods */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">12. Methods</h2>

        <p>
          A method is a block of code designed to perform a specific task.
          Methods improve code reuse and organization.
        </p>

        <pre className="bg-dark text-light p-3 rounded">
{`public static int add(int a, int b) {
    return a + b;
}

public static void main(String[] args) {

    int result = add(10, 20);

    System.out.println(result);
}`}
        </pre>
      </section>

      {/* 13. OOP */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">13. Object-Oriented Programming</h2>

        <p>
          Object-Oriented Programming, commonly called OOP, is one of the most
          important concepts in Java.
        </p>

        <p>The main OOP concepts are:</p>

        <ul>
          <li>Class and Object</li>
          <li>Encapsulation</li>
          <li>Inheritance</li>
          <li>Polymorphism</li>
          <li>Abstraction</li>
        </ul>
      </section>

      {/* 14. Class Object */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">14. Class and Object</h2>

        <p>
          A class is a blueprint or template used to create objects. An object
          represents an actual instance of a class.
        </p>

        <pre className="bg-dark text-light p-3 rounded">
{`class Student {

    String name;
    int age;

    void display() {
        System.out.println(name);
        System.out.println(age);
    }
}

public class Main {

    public static void main(String[] args) {

        Student student = new Student();

        student.name = "Amit";
        student.age = 22;

        student.display();
    }
}`}
        </pre>
      </section>

      {/* 15. Encapsulation */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">15. Encapsulation</h2>

        <p>
          Encapsulation means combining data and methods into a class and
          controlling direct access to the data.
        </p>

        <p>
          In Java, encapsulation is commonly implemented using
          <strong> private fields</strong> and public getter/setter methods.
        </p>

        <pre className="bg-dark text-light p-3 rounded">
{`class Account {

    private double balance;

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }
}`}
        </pre>
      </section>

      {/* 16. Inheritance */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">16. Inheritance</h2>

        <p>
          Inheritance allows one class to acquire properties and behavior from
          another class.
        </p>

        <pre className="bg-dark text-light p-3 rounded">
{`class Animal {

    void eat() {
        System.out.println("Eating");
    }
}

class Dog extends Animal {

    void bark() {
        System.out.println("Barking");
    }
}`}
        </pre>

        <p>
          Here, <code>Dog</code> inherits the <code>eat()</code> method from
          <code>Animal</code>.
        </p>
      </section>

      {/* 17. Polymorphism */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">17. Polymorphism</h2>

        <p>
          Polymorphism means "many forms". It allows the same method or
          interface to behave differently depending on the situation.
        </p>

        <h3 className="h5 fw-bold">Types</h3>

        <ul>
          <li>Compile-time polymorphism – Method Overloading</li>
          <li>Runtime polymorphism – Method Overriding</li>
        </ul>

        <pre className="bg-dark text-light p-3 rounded">
{`class Calculator {

    int add(int a, int b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }
}`}
        </pre>
      </section>

      {/* 18. Abstraction */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">18. Abstraction</h2>

        <p>
          Abstraction means hiding unnecessary implementation details and
          exposing only the required functionality.
        </p>

        <p>
          Java mainly provides abstraction using <strong>abstract classes</strong>
          and <strong>interfaces</strong>.
        </p>

        <pre className="bg-dark text-light p-3 rounded">
{`interface Payment {

    void pay();
}

class UpiPayment implements Payment {

    public void pay() {
        System.out.println("Payment completed");
    }
}`}
        </pre>
      </section>

      {/* 19. Constructor */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">19. Constructors</h2>

        <p>
          A constructor is a special member of a class that is used when an
          object is created. It has the same name as the class and does not
          have a return type.
        </p>

        <pre className="bg-dark text-light p-3 rounded">
{`class Student {

    String name;

    Student(String name) {
        this.name = name;
    }
}`}
        </pre>
      </section>

      {/* 20. this super */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">20. this and super</h2>

        <p>
          The <code>this</code> keyword refers to the current object.
        </p>

        <p>
          The <code>super</code> keyword is used to refer to members of the
          parent class.
        </p>

        <pre className="bg-dark text-light p-3 rounded">
{`class Parent {

    String name = "Parent";
}

class Child extends Parent {

    String name = "Child";

    void display() {
        System.out.println(this.name);
        System.out.println(super.name);
    }
}`}
        </pre>
      </section>

      {/* 21. Access Modifiers */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">21. Packages and Access Modifiers</h2>

        <p>
          Packages are used to organize related classes and interfaces.
        </p>

        <h3 className="h5 fw-bold">Access Modifiers</h3>

        <div className="table-responsive">
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>Modifier</th>
                <th>Visibility</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>public</td>
                <td>Accessible from anywhere.</td>
              </tr>

              <tr>
                <td>protected</td>
                <td>Accessible within the package and through inheritance.</td>
              </tr>

              <tr>
                <td>default</td>
                <td>Accessible within the same package.</td>
              </tr>

              <tr>
                <td>private</td>
                <td>Accessible only within the same class.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 22. Exception */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">22. Exception Handling</h2>

        <p>
          Exceptions are unexpected situations that can occur while a program
          is running. Java provides exception handling mechanisms to handle
          these situations properly.
        </p>

        <p>Important keywords include:</p>

        <ul>
          <li>try</li>
          <li>catch</li>
          <li>finally</li>
          <li>throw</li>
          <li>throws</li>
        </ul>

        <pre className="bg-dark text-light p-3 rounded">
{`try {

    int result = 10 / 0;

} catch (ArithmeticException e) {

    System.out.println("Cannot divide by zero");

}`}
        </pre>
      </section>

      {/* 23. Collections */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">23. Collections Framework</h2>

        <p>
          The Java Collections Framework provides classes and interfaces for
          storing and processing groups of objects.
        </p>

        <p>Important interfaces include:</p>

        <ul>
          <li>List</li>
          <li>Set</li>
          <li>Queue</li>
          <li>Map</li>
        </ul>

        <pre className="bg-dark text-light p-3 rounded">
{`List<String> names = new ArrayList<>();

names.add("Amit");
names.add("Rahul");
names.add("Priya");

System.out.println(names);`}
        </pre>
      </section>

      {/* 24. Generics */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">24. Generics</h2>

        <p>
          Generics allow us to specify the type of objects that a collection or
          class can work with. They provide better type safety.
        </p>

        <pre className="bg-dark text-light p-3 rounded">
{`List<String> names = new ArrayList<>();

names.add("Amit");
names.add("Rahul");`}
        </pre>

        <p>
          Here, the list is restricted to <code>String</code> values.
        </p>
      </section>

      {/* 25. Java 8 */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">25. Important Java 8 Features</h2>

        <p>
          Java 8 introduced several features that changed the way Java
          applications can be written.
        </p>

        <ul>
          <li>Lambda Expressions</li>
          <li>Functional Interfaces</li>
          <li>Method References</li>
          <li>Stream API</li>
          <li>Optional</li>
          <li>Default and Static Methods in Interfaces</li>
          <li>New Date and Time API</li>
        </ul>

        <h3 className="h5 fw-bold mt-4">Lambda Expression</h3>

        <pre className="bg-dark text-light p-3 rounded">
{`List<String> names = List.of("Amit", "Rahul", "Priya");

names.forEach(name -> System.out.println(name));`}
        </pre>
      </section>

      {/* 26. Functional Interface */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">26. Functional Interface</h2>

        <p>
          A functional interface is an interface that contains exactly one
          abstract method. It can be used with lambda expressions.
        </p>

        <pre className="bg-dark text-light p-3 rounded">
{`@FunctionalInterface
interface Calculator {

    int add(int a, int b);
}

Calculator calculator = (a, b) -> a + b;

System.out.println(calculator.add(10, 20));`}
        </pre>
      </section>

      {/* 27. Stream */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">27. Stream API</h2>

        <p>
          The Stream API provides a convenient way to process collections of
          data using operations such as filtering, mapping and collecting.
        </p>

        <pre className="bg-dark text-light p-3 rounded">
{`List<Integer> numbers = List.of(10, 15, 20, 25, 30);

List<Integer> result = numbers.stream()
        .filter(n -> n > 20)
        .toList();

System.out.println(result);`}
        </pre>
      </section>

      {/* 28. Optional */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">28. Optional</h2>

        <p>
          <code>Optional</code> is a container object that may or may not
          contain a value. It can be useful when dealing with potentially
          missing values.
        </p>

        <pre className="bg-dark text-light p-3 rounded">
{`Optional<String> name = Optional.of("Java");

name.ifPresent(value ->
    System.out.println(value)
);`}
        </pre>
      </section>

      {/* 29. Multithreading */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">29. Multithreading</h2>

        <p>
          Multithreading allows a Java application to perform multiple tasks
          concurrently.
        </p>

        <p>Important concepts include:</p>

        <ul>
          <li>Thread</li>
          <li>Thread lifecycle</li>
          <li>Creating threads</li>
          <li>Runnable</li>
          <li>Synchronization</li>
          <li>Inter-thread communication</li>
          <li>Executor Framework</li>
          <li>Concurrency utilities</li>
        </ul>

        <pre className="bg-dark text-light p-3 rounded">
{`class MyTask implements Runnable {

    public void run() {
        System.out.println("Task is running");
    }
}

public class Main {

    public static void main(String[] args) {

        Thread thread = new Thread(new MyTask());

        thread.start();
    }
}`}
        </pre>
      </section>

      {/* 30. File Handling */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">30. File Handling</h2>

        <p>
          Java provides APIs for creating, reading, writing and managing files.
        </p>

        <p>
          Modern Java applications commonly use the <code>java.nio.file</code>
          package for file and path operations.
        </p>

        <pre className="bg-dark text-light p-3 rounded">
{`Path path = Path.of("data.txt");

Files.writeString(path, "Hello Java");

String data = Files.readString(path);

System.out.println(data);`}
        </pre>
      </section>

      {/* 31. JDBC */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">31. JDBC</h2>

        <p>
          JDBC stands for <strong>Java Database Connectivity</strong>. It
          provides APIs that allow Java applications to communicate with
          relational databases.
        </p>

        <p>A typical JDBC flow is:</p>

        <div className="border rounded p-3 bg-light">
          <div className="text-center">
            Java Application
            <div className="my-2">↓</div>
            JDBC API
            <div className="my-2">↓</div>
            JDBC Driver
            <div className="my-2">↓</div>
            Database
          </div>
        </div>
      </section>

      {/* 32. Modern Java */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">32. Modern Java Development</h2>

        <p>
          Modern Java development goes beyond basic syntax and object-oriented
          programming. Developers commonly work with APIs, frameworks, testing
          tools, build systems, databases and cloud-based applications.
        </p>

        <p>Important areas to learn include:</p>

        <ul>
          <li>Modern Java language features</li>
          <li>Collections and Stream API</li>
          <li>Concurrency</li>
          <li>JDBC and database programming</li>
          <li>Unit testing</li>
          <li>Maven or Gradle</li>
          <li>Git and GitHub</li>
          <li>Spring Framework</li>
          <li>Spring Boot</li>
          <li>REST APIs</li>
          <li>Spring Data JPA</li>
          <li>Spring Security</li>
          <li>Microservices</li>
        </ul>
      </section>

      {/* 33. Java application areas */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">33. Where is Java used?</h2>

        <ul>
          <li>Enterprise applications</li>
          <li>Backend development</li>
          <li>Web applications</li>
          <li>REST APIs</li>
          <li>Microservices</li>
          <li>Banking and financial systems</li>
          <li>Large business applications</li>
          <li>Cloud-based applications</li>
          <li>Big data technologies</li>
          <li>Android development historically and in parts of the ecosystem</li>
        </ul>
      </section>

      {/* 34. Java Learning Path */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">34. Java Learning Path</h2>

        <p>
          A beginner can learn Java step by step instead of trying to learn
          everything at once.
        </p>

        <div className="table-responsive">
          <table className="table table-bordered align-middle">
            <thead className="table-light">
              <tr>
                <th>Level</th>
                <th>Topics</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Beginner</td>
                <td>
                  Syntax, variables, data types, operators, conditions, loops,
                  arrays and methods
                </td>
              </tr>

              <tr>
                <td>OOP</td>
                <td>
                  Class, object, constructor, inheritance, polymorphism,
                  abstraction and encapsulation
                </td>
              </tr>

              <tr>
                <td>Intermediate</td>
                <td>
                  Strings, packages, access modifiers, exception handling,
                  collections and generics
                </td>
              </tr>

              <tr>
                <td>Modern Java</td>
                <td>
                  Lambda expressions, functional interfaces, Stream API,
                  Optional and modern language features
                </td>
              </tr>

              <tr>
                <td>Advanced</td>
                <td>
                  Multithreading, concurrency, file handling, JDBC and JVM
                  concepts
                </td>
              </tr>

              <tr>
                <td>Professional</td>
                <td>
                  Maven/Gradle, Git, testing, Spring, Spring Boot, REST APIs,
                  JPA and microservices
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 35. Real world */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">35. Java in a Real-World Application</h2>

        <p>
          Consider an online banking application. Java can be used to build
          different parts of the backend application.
        </p>

        <div className="border rounded p-3 bg-light">
          <div className="text-center">
            <strong>Frontend</strong>
            <div className="my-2">↓</div>

            <strong>REST API</strong>
            <div className="my-2">↓</div>

            <strong>Java / Spring Boot</strong>
            <div className="my-2">↓</div>

            <strong>Service Layer</strong>
            <div className="my-2">↓</div>

            <strong>Database</strong>
          </div>
        </div>

        <p className="mt-3">
          For example, a banking backend may contain Java classes and services
          for customers, accounts, transactions, deposits and withdrawals.
        </p>
      </section>

      {/* 36. Important Points */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">36. Key Points to Remember</h2>

        <ul>
          <li>Java is a high-level, object-oriented programming language.</li>
          <li>Java source code is compiled into bytecode.</li>
          <li>The JVM executes Java bytecode.</li>
          <li>JDK is used to develop Java applications.</li>
          <li>OOP is a fundamental part of Java programming.</li>
          <li>Collections are used to manage groups of objects.</li>
          <li>Generics provide compile-time type safety.</li>
          <li>Java supports functional programming features through lambdas and streams.</li>
          <li>Java provides built-in support for multithreading and concurrency.</li>
          <li>JDBC allows Java applications to communicate with relational databases.</li>
          <li>Java is widely used for backend and enterprise application development.</li>
        </ul>
      </section>

      {/* Conclusion */}
      <section className="border-top pt-4">
        <h2 className="h3 fw-bold">Conclusion</h2>

        <p>
          Java provides a strong foundation for learning programming and
          software development. Starting with basic syntax and gradually
          learning OOP, collections, exception handling, modern Java features,
          databases and frameworks gives a developer a practical understanding
          of Java application development.
        </p>

        <p className="mb-0">
          Once the Java fundamentals are clear, technologies such as
          <strong> Spring, Spring Boot, JPA, REST APIs and Microservices</strong>
          become much easier to understand.
        </p>
      </section>

    </div>
  );
};

export default Java;