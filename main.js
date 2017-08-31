const AlfrescoApi = require("alfresco-js-api");

var api = new AlfrescoApi ({ provinder: "ALL", hostEcm: "http://192.168.0.20:8080"});
api.login("admin", "admin").then((data) => {
    console.log(data)
}, (err) => {
    console.error(err);
});

api.nodes.createFolder("Hello-JS", "LoadTest/Sub1/Sub2/Sub3").then((data) => {
    console.log(data);
}, (err) => {
    console.error(err);
});

