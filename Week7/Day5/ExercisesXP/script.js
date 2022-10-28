class Quotes {
  constructor() {
    this.quotes = [];
    // this.quotes = [ id: {quote: ,author:, likes:} ];
    this.quotesAll = [];
    this.authorsArr = ["All"];
    this.quoteId = document.getElementById("quote");
    this.authorId = document.getElementById("author");
    this.numberId = document.getElementById("number");
    this.amountCharactersId = document.getElementById("amountCharacters");
    this.amountCharactersWithoutSpacesId = document.getElementById(
      "amountCharactersWithoutSpaces"
    );
    this.amountWordsId = document.getElementById("amountWords");
    this.amountLikesId = document.getElementById("amountLikes");
    this.previousQuoted = document.getElementById("previousQuote");
    this.nextQuoteId = document.getElementById("nextQuote");
    this.authorFilterId = document.getElementById("authorFilter");

    this.id = 0;
    this.previousId = 0;
  }
  getRandomQuote() {
    while (this.previousId === this.id && this.idMax != 0) {
      this.id = Math.round(Math.random() * this.idMax);
    }
    this.showQuote();
  }
  previousQuote() {
    if (this.id != 0) this.id -= 1;
    this.showQuote();
  }
  nextQuote() {
    if (this.id < this.idMax) this.id += 1;
    this.showQuote();
  }
  showQuote() {
    this.quoteId.textContent = this.quotes[this.id].quote;
    this.authorId.textContent = this.quotes[this.id].author;
    this.previousId = this.id;
    this.numberId.textContent = `Quote ${this.id + 1} / ${this.idMax + 1}`;
    this.amountCharactersId.textContent = `Amount of characters ${
      this.quotes[this.id].quote.length
    }`;
    this.amountCharactersWithoutSpacesId.textContent = `Amount of characters without spaces ${
      this.quotes[this.id].quote.replaceAll(" ", "").length
    }`;
    this.amountWordsId.textContent = `Amount of words ${
      this.quotes[this.id].quote.split(" ").length
    }`;
    this.amountLikesId.textContent = `Amount of likes ${
      this.quotes[this.id].likes
    }`;
  }
  addQuotes(args) {
    for (let elem of args) {
      if (!elem[0]) {
        alert("Input quote text");
        break;
      }
      if (!elem[1]) elem[1] = "Unknown author";
      this.quotesAll.push({
        quote: elem[0],
        author: elem[1],
        likes: 0,
        isFiltered: true,
      });
      this.authorsArr.push(elem[1]);
      document.getElementById("quoteInput").value = "";
      document.getElementById("authorInput").value = "";
    }
    this.idMax = this.quotesAll.length - 1;
    this.numberId.textContent = `Quote ${this.id + 1} / ${this.idMax + 1}`;
    this.authorsArr = Array.from(new Set(this.authorsArr));
    this.authorFilterId.innerHTML = "";
    for (let author of this.authorsArr) {
      this.optionHTML = document.createElement("option");
      this.optionHTML.value = author;
      this.optionHTML.textContent = author;
      this.authorFilterId.appendChild(this.optionHTML);
    }
    this.applyFilter();
  }

  setLike() {
    this.quotes[this.id].likes += 1;
    this.amountLikesId.textContent = `Amount of likes ${
      this.quotes[this.id].likes
    }`;
  }
  applyFilter() {
    this.quotes = structuredClone(this.quotesAll);
    if (this.authorFilterId.value != "All") {
      this.quotes = this.quotes.filter(
        (value) => value.author === this.authorFilterId.value
      );
      this.id = 0;
    }
    this.idMax = this.quotes.length - 1;
    this.showQuote();
  }
}

const quotes = new Quotes();
quotes.addQuotes([
  [
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "Nelson Mandela",
  ],
  ["The way to get started is to quit talking and begin doing.", "Walt Disney"],
  [
    "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    "Steve Jobs",
  ],
  ["Innovation distinguishes between a leader and a follower.", "Steve Jobs"],
  [
    "Don’t let the noise of others’ opinions drown out your own inner voice.",
    "Steve Jobs",
  ],
  [
    "If life were predictable it would cease to be life, and be without flavor.",
    "Eleanor Roosevelt",
  ],
  [
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    "Oprah Winfrey",
  ],
  [
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    "James Cameron",
  ],
]);
quotes.getRandomQuote();
