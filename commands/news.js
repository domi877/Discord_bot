const Crawler = require("crawler");
const crawler = require("crawler-request");

var c = new Crawler({
  rateLimit: 1000,
  // This will be called for each crawled page
  callback: function (error, res, done) {
    if (error) {
      console.log(error);
    } else {
      var $ = res.$;
      url = $("a:contains('Pressemitteilung')").attr("href");
    }
    done();
  },
});

// Queue just one URL, with default callback
c.queue(
  "https://www.floersbachtal.de/seite/de/gemeinde/1786/-/Informationen_zum_Corona-Virus.html"
);

module.exports = {
  name: "news",
  description: "Get the latest information about Flörsbachtal",
  execute(message) {
    const split = message.content.split(/ +/);
    const args = split.slice(1);

    crawler(url).then(function (response) {
      // handle response
      let text = response.text
        .split("Zusammenhang mit Covid-19 gestorben.")
        .pop();

      message.channel.send(text, {
        tts: true,
      });
    });
  },
};
