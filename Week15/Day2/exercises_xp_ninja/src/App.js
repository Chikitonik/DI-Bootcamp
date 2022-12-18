// import logo from "./logo.svg";
// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

let info = [
  {
    image: "bi bi-building-fill",
    header: "About the company",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    image: "bi bi-globe-asia-australia",
    header: "Our Values",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    image: "bi bi-lightning-fill",
    header: "Our Mission",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

function App() {
  return (
    <div>
      <div
        class="row p-5"
        style={{ color: "white", backgroundColor: "rgb(236, 65, 74)" }}
      >
        <div class="h1 text-center">Company</div>
        <div class="text-center">We specialize in something ...</div>
      </div>
      <div class="row p-5">
        {info.map((element) => {
          return (
            <div class="row p-5">
              <div class="col-sm-3">
                <i
                  class={element.image}
                  style={{ fontSize: "7rem", color: "rgb(236, 65, 74)" }}
                ></i>
              </div>
              <div class="col-sm-9">
                <div class="h2">{element.header}</div>
                <div>{element.description}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div class="row p-5 alert alert-secondary">
        <div class="h3 text-center">Contact us</div>
        <div class="row">
          <div class="col-sm-6">
            <p>Contact us and we will get back to you within 24 hours.</p>
            <p>
              <i class="bi bi-geo-alt-fill"></i> Company Name
            </p>
            <p>
              <i class="bi bi-phone-fill"></i> +256 778 800 900
            </p>
            <p>
              <i class="bi bi-envelope-fill"></i> company.gmail.com
            </p>
          </div>
          <div class="col-sm-6">
            <form>
              Contact
              <br></br>
              <input
                class="w-100"
                type="text"
                placeholder="email address"
              ></input>
              <br></br>
              <br></br>
              <textarea
                class="w-100"
                placeholder="comment"
                rows="4"
                cols="50"
              ></textarea>
              <br></br>
              <input
                class="w-100"
                style={{
                  backgroundColor: "rgb(236, 65, 74)",
                  color: "white",
                  border: "none",
                }}
                type="submit"
                value="Send"
              ></input>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
