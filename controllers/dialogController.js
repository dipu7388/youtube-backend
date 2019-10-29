/* eslint-disable quote-props */
/* eslint-disable no-console */
const request = require('request');
const http = require('https');
const testAgent = require("../functions/test.function");
const contactUs = require("../functions/contactus");
const initializeFun = require("../functions/initialize");
const welcomeFun = require("../functions/welcome");
const serviceFun = require("../functions/service");
const triggerConFun = require("../functions/trigger-contactus");
const fallbackFun = require("../functions/fallback");

function dialogController(Dialog) {
  function post(request, response) {
    console.log('BODY');
    response.setHeader('Content-Type', 'application/json');
    try {

      let intentMap = new Map();
      intentMap.set('test', testAgent);
      intentMap.set('lsnetx.contact-us', contactUs);
      intentMap.set('initialize', initializeFun);
      intentMap.set('welcome', welcomeFun);
      intentMap.set('services', serviceFun);
      intentMap.set("lsnetx.retail", serviceFun);
      intentMap.set("lsnetx.website",serviceFun);
      intentMap.set("services - yes", triggerConFun);
      intentMap.set("lsnetx.retail - yes", triggerConFun);
      intentMap.set("lsnetx.website - yes", triggerConFun);
      intentMap.set('Default Fallback Intent', fallbackFun);
     

    } catch (error) {
      console.log("ERROR", error);
    }
  }

  function get(request, response) {

    response.send(buildChatResponse(`I'm sorry, Method Not Implemented`));
  }
  return {
    post,
    get
  };
}


function buildChatResponse(chat) {
  return JSON.stringify({
    speech: chat,
    displayText: chat
  });
}



module.exports = dialogController;