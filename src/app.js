import {OAuth, DataService} from 'forcejs';

let oauth = OAuth.createInstance();
oauth.login()
    .then(oauthResult => {
        DataService.createInstance(oauthResult);
        loadContacts();
    });

let loadContacts = () => {
    let service = DataService.getInstance();
    service.query('select id, Name from contact LIMIT 50')
        .then(response => {
            let contacts = response.records;
            let html = '';
            contacts.forEach(contact => html = html + `<li>${contact.Name}</li>`);
            document.getElementById("contacts").innerHTML = html;
    });
}