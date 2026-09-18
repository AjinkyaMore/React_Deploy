import "../CSS/Sql.css";

const Sql = () => {
  return (
    <div className="container py-4 py-lg-5 sql-content">

      {/* Header */}
      <header className="mb-5">
        <h1 className="display-5 fw-bold mb-3">SQL</h1>

        <p className="lead text-secondary">
          SQL, or Structured Query Language, is used to communicate with
          relational databases. It allows developers to store, retrieve,
          update, delete, and manage structured data.
        </p>
      </header>

      {/* 1. What is SQL */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">1. What is SQL?</h2>

        <p>
          SQL stands for <strong>Structured Query Language</strong>. It is a
          standard language used to work with relational database systems.
        </p>

        <p>
          Using SQL, we can create databases and tables, insert data, retrieve
          information, update existing records, delete records, and control
          access to data.
        </p>

        <div className="alert alert-light border">
          <strong>Simple definition:</strong> SQL is a language used to
          communicate with a relational database and perform operations on
          stored data.
        </div>
      </section>

      {/* 2. Why SQL */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">2. Why do we use SQL?</h2>

        <p>
          Applications generate and use a large amount of data. Databases
          provide a structured way to store this information, while SQL
          provides a standard way to work with it.
        </p>

        <ul>
          <li>Store application data.</li>
          <li>Retrieve required information.</li>
          <li>Insert new records.</li>
          <li>Update existing records.</li>
          <li>Delete unwanted records.</li>
          <li>Search and filter data.</li>
          <li>Combine data from multiple tables.</li>
          <li>Generate reports and summaries.</li>
          <li>Control access to database objects.</li>
        </ul>
      </section>

      {/* 3. Database */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">3. What is a Database?</h2>

        <p>
          A database is an organized collection of data that can be stored,
          accessed, and managed efficiently.
        </p>

        <p>
          For example, an online shopping application may store information
          about customers, products, orders, and payments.
        </p>

        <div className="border rounded p-3 bg-light">
          <div className="text-center">
            <strong>Database</strong>
            <div className="my-2">↓</div>

            Customers Table
            <div className="my-2">↓</div>

            Products Table
            <div className="my-2">↓</div>

            Orders Table
            <div className="my-2">↓</div>

            Payments Table
          </div>
        </div>
      </section>

      {/* 4. RDBMS */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">
          4. What is a Relational Database?
        </h2>

        <p>
          A relational database stores data in the form of tables. Each table
          contains rows and columns, and relationships can be created between
          tables.
        </p>

        <p>
          Examples of relational database systems include:
        </p>

        <ul>
          <li>MySQL</li>
          <li>PostgreSQL</li>
          <li>Oracle Database</li>
          <li>Microsoft SQL Server</li>
          <li>MariaDB</li>
        </ul>

        <div className="alert alert-light border">
          <strong>Important:</strong> SQL is the language. MySQL, PostgreSQL,
          Oracle Database, and SQL Server are database systems that support SQL,
          with some differences in their specific features and syntax.
        </div>
      </section>

      {/* 5. Table */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">5. What is a Table?</h2>

        <p>
          A table is used to store related data in rows and columns.
        </p>

        <div className="table-responsive">
          <table className="table table-bordered align-middle">
            <thead className="table-light">
              <tr>
                <th>id</th>
                <th>name</th>
                <th>email</th>
                <th>city</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td>Amit</td>
                <td>amit@example.com</td>
                <td>Pune</td>
              </tr>

              <tr>
                <td>2</td>
                <td>Priya</td>
                <td>priya@example.com</td>
                <td>Mumbai</td>
              </tr>

              <tr>
                <td>3</td>
                <td>Rahul</td>
                <td>rahul@example.com</td>
                <td>Nashik</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          A <strong>row</strong> represents one record, while a
          <strong> column</strong> represents a particular attribute of the
          data.
        </p>
      </section>

      {/* 6. SQL Categories */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">6. Categories of SQL Commands</h2>

        <p>
          SQL commands are commonly grouped into different categories based
          on their purpose.
        </p>

        <div className="table-responsive">
          <table className="table table-bordered align-middle">
            <thead className="table-light">
              <tr>
                <th>Category</th>
                <th>Purpose</th>
                <th>Examples</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>DDL</td>
                <td>Define and modify database structures.</td>
                <td>CREATE, ALTER, DROP, TRUNCATE</td>
              </tr>

              <tr>
                <td>DML</td>
                <td>Insert, modify, and delete data.</td>
                <td>INSERT, UPDATE, DELETE</td>
              </tr>

              <tr>
                <td>DQL</td>
                <td>Retrieve data.</td>
                <td>SELECT</td>
              </tr>

              <tr>
                <td>DCL</td>
                <td>Control database permissions.</td>
                <td>GRANT, REVOKE</td>
              </tr>

              <tr>
                <td>TCL</td>
                <td>Manage transactions.</td>
                <td>COMMIT, ROLLBACK, SAVEPOINT</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 7. Create Database */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">7. Creating a Database</h2>

        <p>
          A database can be created using the <code>CREATE DATABASE</code>
          statement in database systems that support this command.
        </p>

        <pre className="bg-dark text-light p-3 rounded">
{`CREATE DATABASE college;`}
        </pre>

        <p>
          After creating the database, we can select it for further operations.
          The exact syntax can vary slightly between database systems.
        </p>
      </section>

      {/* 8. Create Table */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">8. Creating a Table</h2>

        <p>
          The <code>CREATE TABLE</code> statement is used to create a table.
        </p>

        <pre className="bg-dark text-light p-3 rounded">
{`CREATE TABLE student (
    id INT,
    name VARCHAR(100),
    age INT,
    city VARCHAR(50)
);`}
        </pre>
      </section>

      {/* 9. Data Types */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">9. SQL Data Types</h2>

        <p>
          Data types define what kind of values can be stored in a column.
          Exact supported types vary between database systems.
        </p>

        <div className="table-responsive">
          <table className="table table-bordered align-middle">
            <thead className="table-light">
              <tr>
                <th>Category</th>
                <th>Examples</th>
                <th>Typical Usage</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Integer</td>
                <td>INT, BIGINT</td>
                <td>Whole numbers</td>
              </tr>

              <tr>
                <td>Decimal</td>
                <td>DECIMAL, NUMERIC</td>
                <td>Precise numeric values</td>
              </tr>

              <tr>
                <td>Character</td>
                <td>CHAR, VARCHAR</td>
                <td>Text values</td>
              </tr>

              <tr>
                <td>Date and Time</td>
                <td>DATE, TIME, TIMESTAMP</td>
                <td>Date and time information</td>
              </tr>

              <tr>
                <td>Boolean</td>
                <td>BOOLEAN</td>
                <td>True/false values where supported</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 10. Insert */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">10. INSERT Statement</h2>

        <p>
          The <code>INSERT</code> statement is used to add new records to a
          table.
        </p>

        <pre className="bg-dark text-light p-3 rounded">
{`INSERT INTO student (id, name, age, city)
VALUES (1, 'Amit', 22, 'Pune');`}
        </pre>

        <p>
          Multiple rows can also be inserted using syntax supported by the
          database system.
        </p>
      </section>

      {/* 11. Select */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">11. SELECT Statement</h2>

        <p>
          The <code>SELECT</code> statement is used to retrieve data from one
          or more tables.
        </p>

        <pre className="bg-dark text-light p-3 rounded">
{`SELECT * FROM student;`}
        </pre>

        <p>
          Instead of selecting all columns, specific columns can be selected.
        </p>

        <pre className="bg-dark text-light p-3 rounded">
{`SELECT name, city
FROM student;`}
        </pre>
      </section>

      {/* 12. Where */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">12. WHERE Clause</h2>

        <p>
          The <code>WHERE</code> clause is used to filter rows based on a
          condition.
        </p>

        <pre className="bg-dark text-light p-3 rounded">
{`SELECT *
FROM student
WHERE city = 'Pune';`}
        </pre>

        <p>
          Only records satisfying the condition are returned.
        </p>
      </section>

      {/* 13. Operators */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">13. SQL Operators</h2>

        <p>
          Operators are used to create conditions and expressions in SQL
          queries.
        </p>

        <ul>
          <li>Comparison: =, &lt;&gt;, !=, &gt;, &lt;, &gt;=, &lt;=</li>
          <li>Logical: AND, OR, NOT</li>
          <li>Range: BETWEEN</li>
          <li>Set membership: IN</li>
          <li>Pattern matching: LIKE</li>
          <li>Null checking: IS NULL, IS NOT NULL</li>
        </ul>

        <pre className="bg-dark text-light p-3 rounded">
{`SELECT *
FROM student
WHERE age >= 18
AND city = 'Pune';`}
        </pre>
      </section>

      {/* 14. Update */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">14. UPDATE Statement</h2>

        <p>
          The <code>UPDATE</code> statement is used to modify existing records.
        </p>

        <pre className="bg-dark text-light p-3 rounded">
{`UPDATE student
SET city = 'Mumbai'
WHERE id = 1;`}
        </pre>

        <div className="alert alert-warning border">
          <strong>Important:</strong> Always use an appropriate
          <code> WHERE</code> condition when updating specific records.
          Without it, multiple rows may be modified.
        </div>
      </section>

      {/* 15. Delete */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">15. DELETE Statement</h2>

        <p>
          The <code>DELETE</code> statement is used to remove rows from a
          table.
        </p>

        <pre className="bg-dark text-light p-3 rounded">
{`DELETE FROM student
WHERE id = 1;`}
        </pre>

        <p>
          Like <code>UPDATE</code>, the <code>WHERE</code> clause is important
          when only specific records should be deleted.
        </p>
      </section>

      {/* 16. Constraints */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">16. SQL Constraints</h2>

        <p>
          Constraints are rules applied to columns to maintain valid and
          consistent data.
        </p>

        <div className="table-responsive">
          <table className="table table-bordered align-middle">
            <thead className="table-light">
              <tr>
                <th>Constraint</th>
                <th>Purpose</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>PRIMARY KEY</td>
                <td>Uniquely identifies each row.</td>
              </tr>

              <tr>
                <td>FOREIGN KEY</td>
                <td>Defines a relationship with another table.</td>
              </tr>

              <tr>
                <td>NOT NULL</td>
                <td>Prevents a column from containing NULL values.</td>
              </tr>

              <tr>
                <td>UNIQUE</td>
                <td>Ensures uniqueness for the constrained values.</td>
              </tr>

              <tr>
                <td>CHECK</td>
                <td>Restricts values according to a condition.</td>
              </tr>

              <tr>
                <td>DEFAULT</td>
                <td>Provides a default value when one is not supplied.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 17. Primary Key */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">17. Primary Key</h2>

        <p>
          A primary key uniquely identifies each row in a table. A table can
          have one primary key, which can consist of one or more columns.
        </p>

        <pre className="bg-dark text-light p-3 rounded">
{`CREATE TABLE student (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    age INT
);`}
        </pre>
      </section>

      {/* 18. Foreign Key */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">18. Foreign Key</h2>

        <p>
          A foreign key is used to establish a relationship between tables.
        </p>

        <pre className="bg-dark text-light p-3 rounded">
{`CREATE TABLE department (
    id INT PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE employee (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    department_id INT,
    FOREIGN KEY (department_id)
        REFERENCES department(id)
);`}
        </pre>
      </section>

      {/* 19. Sorting */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">19. ORDER BY</h2>

        <p>
          The <code>ORDER BY</code> clause is used to sort query results.
        </p>

        <pre className="bg-dark text-light p-3 rounded">
{`SELECT *
FROM student
ORDER BY age ASC;`}
        </pre>

        <p>
          <code>ASC</code> sorts in ascending order, while
          <code> DESC</code> sorts in descending order.
        </p>
      </section>

      {/* 20. Limit */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">20. Limiting Query Results</h2>

        <p>
          Database systems provide ways to restrict the number of rows returned
          by a query. The syntax differs between database products.
        </p>

        <pre className="bg-dark text-light p-3 rounded">
{`SELECT *
FROM student
LIMIT 5;`}
        </pre>

        <p>
          The above syntax is commonly used in MySQL and PostgreSQL. Other
          database systems may use different syntax.
        </p>
      </section>

      {/* 21. Aggregate */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">21. Aggregate Functions</h2>

        <p>
          Aggregate functions perform calculations on a group of rows and
          return a single result.
        </p>

        <ul>
          <li>COUNT()</li>
          <li>SUM()</li>
          <li>AVG()</li>
          <li>MIN()</li>
          <li>MAX()</li>
        </ul>

        <pre className="bg-dark text-light p-3 rounded">
{`SELECT COUNT(*) AS total_students
FROM student;`}
        </pre>
      </section>

      {/* 22. Group By */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">22. GROUP BY</h2>

        <p>
          The <code>GROUP BY</code> clause groups rows that have the same
          values in selected columns. It is commonly used with aggregate
          functions.
        </p>

        <pre className="bg-dark text-light p-3 rounded">
{`SELECT city, COUNT(*) AS total
FROM student
GROUP BY city;`}
        </pre>
      </section>

      {/* 23. Having */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">23. HAVING</h2>

        <p>
          The <code>HAVING</code> clause filters groups produced by
          <code> GROUP BY</code>.
        </p>

        <pre className="bg-dark text-light p-3 rounded">
{`SELECT city, COUNT(*) AS total
FROM student
GROUP BY city
HAVING COUNT(*) > 2;`}
        </pre>

        <div className="alert alert-light border">
          <strong>Remember:</strong> <code>WHERE</code> filters rows before
          grouping, while <code>HAVING</code> filters groups after grouping.
        </div>
      </section>

      {/* 24. Joins */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">24. SQL Joins</h2>

        <p>
          Joins are used to combine related data from multiple tables.
        </p>

        <p>Common joins include:</p>

        <ul>
          <li>INNER JOIN</li>
          <li>LEFT JOIN</li>
          <li>RIGHT JOIN</li>
          <li>FULL OUTER JOIN</li>
          <li>CROSS JOIN</li>
          <li>SELF JOIN</li>
        </ul>
      </section>

      {/* 25. Inner Join */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">25. INNER JOIN</h2>

        <p>
          An <code>INNER JOIN</code> returns rows where the join condition
          matches in both tables.
        </p>

        <pre className="bg-dark text-light p-3 rounded">
{`SELECT e.name, d.name AS department
FROM employee e
INNER JOIN department d
    ON e.department_id = d.id;`}
        </pre>
      </section>

      {/* 26. Left Join */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">26. LEFT JOIN</h2>

        <p>
          A <code>LEFT JOIN</code> returns all rows from the left table and
          matching rows from the right table. If there is no match, columns
          from the right table can contain NULL.
        </p>

        <pre className="bg-dark text-light p-3 rounded">
{`SELECT e.name, d.name AS department
FROM employee e
LEFT JOIN department d
    ON e.department_id = d.id;`}
        </pre>
      </section>

      {/* 27. Subquery */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">27. Subquery</h2>

        <p>
          A subquery is a query written inside another SQL query.
        </p>

        <pre className="bg-dark text-light p-3 rounded">
{`SELECT name
FROM employee
WHERE salary > (
    SELECT AVG(salary)
    FROM employee
);`}
        </pre>

        <p>
          The inner query calculates the average salary, and the outer query
          uses that result.
        </p>
      </section>

      {/* 28. Views */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">28. Views</h2>

        <p>
          A view is a database object that represents the result of a query.
          It can be used to simplify access to frequently used queries and
          control which columns or rows are exposed.
        </p>

        <pre className="bg-dark text-light p-3 rounded">
{`CREATE VIEW employee_details AS
SELECT name, department_id
FROM employee;`}
        </pre>
      </section>

      {/* 29. Index */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">29. Indexes</h2>

        <p>
          An index is a database structure that can improve the speed of
          certain data retrieval operations.
        </p>

        <pre className="bg-dark text-light p-3 rounded">
{`CREATE INDEX idx_employee_name
ON employee(name);`}
        </pre>

        <div className="alert alert-warning border">
          <strong>Important:</strong> Indexes can improve read performance, but
          they also require storage and can add overhead to data modification
          operations. They should be created based on actual query and workload
          requirements.
        </div>
      </section>

      {/* 30. Transactions */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">30. Transactions</h2>

        <p>
          A transaction is a logical unit of database work. It allows related
          operations to be treated as one unit.
        </p>

        <p>
          Transactions are commonly discussed using the <strong>ACID</strong>
          properties:
        </p>

        <div className="table-responsive">
          <table className="table table-bordered align-middle">
            <thead className="table-light">
              <tr>
                <th>Property</th>
                <th>Meaning</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Atomicity</td>
                <td>A transaction is treated as an all-or-nothing unit.</td>
              </tr>

              <tr>
                <td>Consistency</td>
                <td>A transaction should preserve defined data rules.</td>
              </tr>

              <tr>
                <td>Isolation</td>
                <td>Concurrent transactions are controlled according to isolation rules.</td>
              </tr>

              <tr>
                <td>Durability</td>
                <td>Committed changes are expected to persist.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 31. Commit Rollback */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">31. COMMIT and ROLLBACK</h2>

        <p>
          Transaction commands are used to control changes made during a
          transaction, depending on the database system and transaction mode.
        </p>

        <pre className="bg-dark text-light p-3 rounded">
{`BEGIN;

UPDATE account
SET balance = balance - 1000
WHERE id = 1;

UPDATE account
SET balance = balance + 1000
WHERE id = 2;

COMMIT;`}
        </pre>

        <p>
          If a transaction needs to be cancelled before it is committed,
          <code> ROLLBACK</code> can be used where supported.
        </p>
      </section>

      {/* 32. Normalization */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">32. Database Normalization</h2>

        <p>
          Normalization is a database design technique used to organize data
          and reduce unnecessary duplication.
        </p>

        <p>Common normal forms include:</p>

        <ul>
          <li>First Normal Form (1NF)</li>
          <li>Second Normal Form (2NF)</li>
          <li>Third Normal Form (3NF)</li>
          <li>Boyce-Codd Normal Form (BCNF)</li>
        </ul>

        <p>
          In practice, database design sometimes balances normalization with
          performance and application requirements.
        </p>
      </section>

      {/* 33. Relationships */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">33. Relationships Between Tables</h2>

        <p>
          Relational databases can represent different types of relationships
          between entities.
        </p>

        <ul>
          <li>One-to-One</li>
          <li>One-to-Many</li>
          <li>Many-to-Many</li>
        </ul>

        <p>
          For example, one customer can place many orders. This represents a
          one-to-many relationship between Customer and Order.
        </p>
      </section>

      {/* 34. NULL */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">34. NULL Value</h2>

        <p>
          <code>NULL</code> represents the absence of a value. It is different
          from zero, an empty string, or the text value "NULL".
        </p>

        <p>
          To check for NULL, use <code>IS NULL</code> or
          <code> IS NOT NULL</code>.
        </p>

        <pre className="bg-dark text-light p-3 rounded">
{`SELECT *
FROM employee
WHERE department_id IS NULL;`}
        </pre>
      </section>

      {/* 35. CASE */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">35. CASE Expression</h2>

        <p>
          The <code>CASE</code> expression allows conditional logic inside SQL
          queries.
        </p>

        <pre className="bg-dark text-light p-3 rounded">
{`SELECT name,
       salary,
       CASE
           WHEN salary >= 50000 THEN 'High'
           WHEN salary >= 30000 THEN 'Medium'
           ELSE 'Low'
       END AS salary_level
FROM employee;`}
        </pre>
      </section>

      {/* 36. CTE */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">36. Common Table Expression (CTE)</h2>

        <p>
          A Common Table Expression, or CTE, allows a temporary named result
          set to be defined using the <code>WITH</code> clause. CTEs can make
          complex queries easier to read and maintain.
        </p>

        <pre className="bg-dark text-light p-3 rounded">
{`WITH high_salary AS (
    SELECT *
    FROM employee
    WHERE salary > 50000
)
SELECT *
FROM high_salary;`}
        </pre>
      </section>

      {/* 37. Window Functions */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">37. Window Functions</h2>

        <p>
          Window functions perform calculations across related rows while
          keeping the individual rows in the result.
        </p>

        <p>
          Common examples include <code>ROW_NUMBER()</code>,
          <code> RANK()</code>, <code>DENSE_RANK()</code>,
          <code> LAG()</code>, and <code>LEAD()</code>.
        </p>

        <pre className="bg-dark text-light p-3 rounded">
{`SELECT
    name,
    salary,
    RANK() OVER (ORDER BY salary DESC) AS salary_rank
FROM employee;`}
        </pre>
      </section>

      {/* 38. Stored Procedures */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">38. Stored Procedures</h2>

        <p>
          A stored procedure is a database-side program containing SQL
          statements and, depending on the database system, procedural logic.
        </p>

        <p>
          Stored procedure syntax differs significantly between database
          products, so it is important to learn the syntax of the particular
          database being used.
        </p>
      </section>

      {/* 39. Triggers */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">39. Triggers</h2>

        <p>
          A trigger is database logic that automatically executes in response
          to specified events, such as inserting, updating, or deleting data.
        </p>

        <p>
          Triggers can be useful for specific database requirements, but they
          should be designed carefully because their execution is automatic
          and can make application behavior harder to trace.
        </p>
      </section>

      {/* 40. SQL and Java */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">40. SQL with Java Applications</h2>

        <p>
          Java applications commonly communicate with relational databases
          using technologies such as JDBC and database frameworks.
        </p>

        <div className="border rounded p-3 bg-light">
          <div className="text-center">
            <strong>Java Application</strong>
            <div className="my-2">↓</div>

            JDBC / Database Framework
            <div className="my-2">↓</div>

            Database Driver
            <div className="my-2">↓</div>

            <strong>SQL Database</strong>
          </div>
        </div>

        <p className="mt-3">
          In Spring Boot applications, developers commonly work with SQL
          databases through technologies such as JDBC, Spring Data JPA, and
          Hibernate.
        </p>
      </section>

      {/* 41. SQL in Real World */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">41. SQL in a Real-World Application</h2>

        <p>
          Consider an online shopping application. The database may contain
          tables such as:
        </p>

        <ul>
          <li>Customer</li>
          <li>Product</li>
          <li>Category</li>
          <li>Order</li>
          <li>OrderItem</li>
          <li>Payment</li>
        </ul>

        <p>
          SQL can then be used to find products, create orders, update
          customer information, calculate order totals, generate reports, and
          retrieve related information from multiple tables.
        </p>

        <div className="border rounded p-3 bg-light">
          <div className="text-center">
            <strong>Application</strong>
            <div className="my-2">↓</div>

            SQL Query
            <div className="my-2">↓</div>

            Database
            <div className="my-2">↓</div>

            Tables
            <div className="my-2">↓</div>

            <strong>Result</strong>
          </div>
        </div>
      </section>

      {/* 42. SQL Learning Path */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">42. SQL Learning Path</h2>

        <p>
          SQL can be learned step by step. Start with basic queries and
          gradually move toward database design and advanced querying.
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
                  Database, tables, rows, columns, SQL basics, CREATE, INSERT,
                  SELECT, UPDATE, DELETE
                </td>
              </tr>

              <tr>
                <td>Basic Querying</td>
                <td>
                  WHERE, operators, ORDER BY, DISTINCT, NULL, LIKE, IN,
                  BETWEEN
                </td>
              </tr>

              <tr>
                <td>Intermediate</td>
                <td>
                  Constraints, primary key, foreign key, joins, aggregate
                  functions, GROUP BY, HAVING, subqueries
                </td>
              </tr>

              <tr>
                <td>Database Design</td>
                <td>
                  Relationships, normalization, indexes, views
                </td>
              </tr>

              <tr>
                <td>Advanced SQL</td>
                <td>
                  Transactions, CTEs, window functions, query optimization,
                  stored procedures and triggers
                </td>
              </tr>

              <tr>
                <td>Professional</td>
                <td>
                  JDBC, JPA, Hibernate, Spring Data JPA, database security,
                  performance and production database practices
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 43. Important Points */}
      <section className="mb-5">
        <h2 className="h3 fw-bold">43. Key Points to Remember</h2>

        <ul>
          <li>SQL stands for Structured Query Language.</li>
          <li>SQL is used to communicate with relational databases.</li>
          <li>Tables contain rows and columns.</li>
          <li>SELECT is used to retrieve data.</li>
          <li>INSERT is used to add data.</li>
          <li>UPDATE is used to modify data.</li>
          <li>DELETE is used to remove rows.</li>
          <li>Primary keys uniquely identify records.</li>
          <li>Foreign keys help establish relationships between tables.</li>
          <li>Joins combine related data from multiple tables.</li>
          <li>Aggregate functions perform calculations on groups of rows.</li>
          <li>Transactions help manage related database operations as a unit.</li>
          <li>Indexes can improve query performance when used appropriately.</li>
          <li>SQL syntax can have database-specific differences.</li>
        </ul>
      </section>

      {/* Conclusion */}
      <section className="border-top pt-4">
        <h2 className="h3 fw-bold">Conclusion</h2>

        <p>
          SQL is an essential skill for developers who work with relational
          databases. A strong understanding of SQL helps developers write
          effective queries, design better database structures, and understand
          how application data is stored and retrieved.
        </p>

        <p className="mb-0">
          After learning SQL fundamentals, developers can move toward
          <strong> JDBC, JPA, Hibernate, Spring Data JPA and Spring Boot</strong>
          to build database-driven applications.
        </p>
      </section>

    </div>
  );
};

export default Sql;