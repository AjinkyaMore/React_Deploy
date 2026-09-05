
function ReactDay1() {

  return (
    <>
        {/* <h1>ReactDay1 component</h1> */}
        <main className="bg-light min-vh-100 py-5">
      <div className="container">
        {/* Page Header */}
        <header className="text-center mb-5">
          <h1 className="display-5 fw-bold text-dark">
            Introduction to React
          </h1>

          <p className="lead text-secondary mx-auto" style={{ maxWidth: "750px" }}>
            Learn the fundamentals of React, Single Page Applications, and JSX.
          </p>
        </header>

        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-9">
            {/* What is React? */}
            <section className="card border-0 shadow-sm mb-4">
              <div className="card-body p-4 p-md-5">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="bg-primary text-white rounded-3 px-3 py-2 fw-bold">
                    01
                  </div>

                  <h2 className="h3 fw-bold mb-0">What is React?</h2>
                </div>

                <p className="text-secondary fs-5">
                  <strong>React</strong> is a front-end JavaScript library used
                  for building modern and interactive user interfaces (UI).
                </p>

                <ul className="list-group list-group-flush">
                  <li className="list-group-item px-0 py-3">
                    React is a{" "}
                    <strong className="text-primary">
                      front-end JavaScript library
                    </strong>{" "}
                    used for building user interfaces (UI).
                  </li>

                  <li className="list-group-item px-0 py-3">
                    React was developed by{" "}
                    <strong>Jordan Walke</strong>, a Software Engineer at
                    Facebook (now Meta).
                  </li>

                  <li className="list-group-item px-0 py-3">
                    React is commonly used for building{" "}
                    <strong className="text-primary">
                      Single Page Applications (SPA)
                    </strong>
                    .
                  </li>

                  <li className="list-group-item px-0 py-3">
                    React applications are built using{" "}
                    <strong>reusable components</strong>.
                  </li>

                  <li className="list-group-item px-0 py-3">
                    React uses a{" "}
                    <strong className="text-primary">Virtual DOM</strong> to
                    efficiently update the user interface.
                  </li>

                  <li className="list-group-item px-0 py-3">
                    React is also known as{" "}
                    <strong>React.js</strong> or{" "}
                    <strong>ReactJS</strong>.
                  </li>
                </ul>
              </div>
            </section>

            {/* What is SPA? */}
            <section className="card border-0 shadow-sm mb-4">
              <div className="card-body p-4 p-md-5">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="bg-success text-white rounded-3 px-3 py-2 fw-bold">
                    02
                  </div>

                  <h2 className="h3 fw-bold mb-0">
                    What is a Single Page Application (SPA)?
                  </h2>
                </div>

                <div className="alert alert-success border-0 mb-4">
                  <p className="mb-0">
                    A <strong>Single Page Application (SPA)</strong> is a web
                    application that loads a single HTML page and dynamically
                    updates its content without refreshing the browser.
                  </p>
                </div>

                <ul className="list-group list-group-flush">
                  <li className="list-group-item px-0 py-3">
                    <strong>Loads one HTML page.</strong>
                  </li>

                  <li className="list-group-item px-0 py-3">
                    <strong>Updates content dynamically</strong> by rewriting
                    the content of the current page.
                  </li>

                  <li className="list-group-item px-0 py-3">
                    Does <strong className="text-danger">NOT reload</strong> the
                    entire page when navigating between different views or
                    sections.
                  </li>

                  <li className="list-group-item px-0 py-3">
                    Examples:{" "}
                    <span className="badge text-bg-secondary me-1">
                      Facebook
                    </span>
                    <span className="badge text-bg-secondary me-1">
                      Instagram
                    </span>
                    <span className="badge text-bg-secondary me-1">
                      Netflix
                    </span>
                    <span className="badge text-bg-secondary">
                      Gmail
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Features of SPA */}
            <section className="card border-0 shadow-sm mb-4">
              <div className="card-body p-4 p-md-5">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="bg-warning text-dark rounded-3 px-3 py-2 fw-bold">
                    03
                  </div>

                  <h2 className="h3 fw-bold mb-0">
                    Features of Single Page Application (SPA)
                  </h2>
                </div>

                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="border rounded-3 p-4 h-100 bg-light">
                      <h3 className="h5 fw-bold text-primary">
                        Faster Navigation
                      </h3>
                      <p className="text-secondary mb-0">
                        Pages can change without completely reloading the
                        browser.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="border rounded-3 p-4 h-100 bg-light">
                      <h3 className="h5 fw-bold text-primary">
                        Better User Experience
                      </h3>
                      <p className="text-secondary mb-0">
                        Content updates smoothly without unnecessary page
                        refreshes.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="border rounded-3 p-4 h-100 bg-light">
                      <h3 className="h5 fw-bold text-primary">
                        Less Server Load
                      </h3>
                      <p className="text-secondary mb-0">
                        Only the required data is requested instead of
                        reloading the complete page.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="border rounded-3 p-4 h-100 bg-light">
                      <h3 className="h5 fw-bold text-primary">
                        App-like Feel
                      </h3>
                      <p className="text-secondary mb-0">
                        SPAs provide a smooth and interactive experience
                        similar to desktop or mobile applications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* What is JSX? */}
            <section className="card border-0 shadow-sm mb-4">
              <div className="card-body p-4 p-md-5">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="bg-info text-dark rounded-3 px-3 py-2 fw-bold">
                    04
                  </div>

                  <h2 className="h3 fw-bold mb-0">What is JSX?</h2>
                </div>

                <div className="alert alert-info border-0">
                  <h3 className="h5 fw-bold mb-2">
                    JSX = JavaScript XML
                  </h3>

                  <p className="mb-0">
                    JSX allows developers to write{" "}
                    <strong>HTML-like syntax</strong> inside JavaScript while
                    creating React components.
                  </p>
                </div>

                <ul className="list-group list-group-flush">
                  <li className="list-group-item px-0 py-3">
                    <strong>JSX</strong> stands for{" "}
                    <strong>JavaScript XML</strong>.
                  </li>

                  <li className="list-group-item px-0 py-3">
                    JSX is a{" "}
                    <strong className="text-primary">
                      syntax extension to JavaScript
                    </strong>
                    .
                  </li>

                  <li className="list-group-item px-0 py-3">
                    JSX allows us to write{" "}
                    <strong>HTML-like syntax inside JavaScript</strong> while
                    building React components.
                  </li>
                </ul>

                {/* JSX Example */}
                <div className="mt-4">
                  <h3 className="h5 fw-bold mb-3">Example of JSX</h3>

                  <pre className="bg-dark text-light rounded-3 p-4 overflow-auto">
                    <code>{`const element = <h1>Hello, React!</h1>;`}</code>
                  </pre>
                </div>
              </div>
            </section>

            {/* Quick Summary */}
            <section className="card border-0 shadow-sm">
              <div className="card-body p-4 p-md-5">
                <h2 className="h3 fw-bold mb-4">Quick Summary</h2>

                <div className="table-responsive">
                  <table className="table table-hover align-middle mb-0">
                    <thead className="table-dark">
                      <tr>
                        <th>Topic</th>
                        <th>Key Point</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>
                          <strong>React</strong>
                        </td>
                        <td>JavaScript library for building user interfaces.</td>
                      </tr>

                      <tr>
                        <td>
                          <strong>SPA</strong>
                        </td>
                        <td>
                          Loads one HTML page and dynamically updates content.
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <strong>Virtual DOM</strong>
                        </td>
                        <td>
                          Helps React efficiently update the UI.
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <strong>JSX</strong>
                        </td>
                        <td>
                          JavaScript syntax extension used to write
                          HTML-like code.
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <strong>Components</strong>
                        </td>
                        <td>
                          Reusable building blocks of React applications.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
    </>
  )
}

export default ReactDay1;