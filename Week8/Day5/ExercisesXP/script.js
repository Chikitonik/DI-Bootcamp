class Robot {
  constructor(image, name, email) {
    this.image = image;
    this.name = name;
    this.email = email;
  }
}
class RoboFriends {
  constructor() {
    this.robotArray = [];
    this.robotArrayFiltered = [];
    this.robotList = document.getElementById("robotList");
    this.nameFilterDiv = document.getElementById("nameFilter");
  }
  showRobots() {
    this.robotList.innerHTML = "";
    for (let robot of this.robotArrayFiltered) {
      this.robotList.appendChild(robot);
    }
  }
  filterRobots() {
    this.robotArrayFiltered = this.robotArray.reduce((acc, value) => {
      if (
        value
          .querySelector(".name")
          .textContent.toLowerCase()
          .includes(this.nameFilterDiv.value)
      )
        acc.push(value);
      return acc;
    }, []);
    // if (this.robotArrayFiltered.length < 1)
    //   this.robotArrayFiltered = this.robotArray;
    this.showRobots();
  }
  addToRobotList(robot) {
    this.imageDiv = document.createElement("img");
    this.imageDiv.classList.add("image");
    this.imageDiv.src = robot.image;

    this.nameDiv = document.createElement("div");
    this.nameDiv.classList.add("name");
    this.nameDiv.textContent = robot.name;

    this.emailDiv = document.createElement("div");
    this.emailDiv.classList.add("email");
    this.emailDiv.textContent = robot.email;

    this.cardDiv = document.createElement("div");
    this.cardDiv.classList.add("card");
    this.cardDiv.appendChild(this.imageDiv);
    this.cardDiv.appendChild(this.nameDiv);
    this.cardDiv.appendChild(this.emailDiv);

    this.robotArray.push(this.cardDiv);
    this.filterRobots();
  }
}
const roboFriends = new RoboFriends();
const robots = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    image: "https://robohash.org/1?200x200",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    image: "https://robohash.org/2?200x200",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    image: "https://robohash.org/3?200x200",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    image: "https://robohash.org/4?200x200",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    image: "https://robohash.org/5?200x200",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    image: "https://robohash.org/6?200x200",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    image: "https://robohash.org/7?200x200",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    image: "https://robohash.org/8?200x200",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    image: "https://robohash.org/9?200x200",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    image: "https://robohash.org/10?200x200",
  },
];

for (e of robots) {
  roboFriends.addToRobotList(new Robot(e.image, e.name, e.email));
}
