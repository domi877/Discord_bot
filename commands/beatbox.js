module.exports = {
  name: "beatbox",
  description: "Let this bot do some beatbox freestyle",
  execute(message) {
    const split = message.content.split(/ +/);
    message.channel.send(
      "The ting goes skrrrahh, pap pap ka-ka-ka Skidiki-pap-pap, and a puu-puu-poudrrr-boom Skiya, du-du-ku-ku-doom doom Poom poom, you dun now",
      {
        tts: true,
      }
    );
  },
};
