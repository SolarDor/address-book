// Business Logic for AddressBook ---------
function AddressBook() {
  this.contacts = [],
  this.currentId = 0
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts.push(contact);
}

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

AddressBook.prototype.findContact = function(id) {
  for (let i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        return this.contacts[i];
      }
    }
  };
  return false;
}

AddressBook.prototype.deleteContact = function(id) {
  for (let i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        delete this.contacts[i];
        return true;
      }
    }
  };
  return false;
}

// Business Logic for Contacts ---------
function Contact(firstName, lastName, phoneNumber, email1, email2, streetAddress1, city1, state1, zip1, streetAddress2, city2, state2, zip2) {
  this.firstName = firstName,
  this.lastName = lastName,
  this.phoneNumber = phoneNumber,
  this.email1 = email1,
  this.email2 = email2,
  this.streetAddress1 = streetAddress1,
  this.city1 = city1, 
  this.state1 = state1,
  this.zip1 = zip1,
  this.streetAddress2 = streetAddress2
  this.city2 = city2,
  this.state2 = state2,
  this.zip2 = zip2
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

Contact
// User Interface Logic ---------
let addressBook = new AddressBook();

function displayContactDetails(addressBookToDisplay) {
  let contactsList = $("ul#contacts");
  let htmlForContactInfo = "";
  addressBookToDisplay.contacts.forEach(function(contact) {
    htmlForContactInfo += "<li id =" + contact.id + ">" + contact.firstName + " " + contact.lastName + " " + "</li>";
  });
  contactsList.html(htmlForContactInfo); 
};

function showContact(contactId) {
  const contact = addressBook.findContact(contactId);
  // const inputtedEmail1 = $("input#new-email1").val();
  // const inputtedEmail2 = $("input#new-email2").val(); 
  // if (inputtedEmail1 === " ") {
  //   $("p.email1").hide();
  // } else if (inputtedEmail2 === " ") {
  //   $("p.email2").hide();
  // } else {
    $("#show-contact").show();
    $(".first-name").html(contact.firstName);
    $(".last-name").html(contact.lastName);
    $(".phone-number").html(contact.phoneNumber);
    $(".email1").html(contact.email1);
    $(".email2").html(contact.email2);
    $(".streetAddress1").html(contact.streetAddress1);
    $(".city1").html(contact.city1);
    $(".state1").html(contact.state1);
    $(".zip1").html(contact.zip1);
    $(".streetAddress2").html(contact.streetAddress2);
    $(".city2").html(contact.city2);
    $(".state2").html(contact.state2);
    $(".zip2").html(contact.zip2);
    $(".pEmail").html(contact.pEmail);
    $(".wEmail").html(contact.wEmail);
    let buttons = $("#buttons");
    buttons.empty();
    buttons.append("<button class='deleteButton' id=" + + contact.id + ">Delete</button>");
  }
// function hidePersonalEmail(contactId) {
//   const contact = addressBook.findContact(contactId);
//   if (inputtedEmail1 === " ") {
//     $("p.email1").hide();
//   }
// }

// function hideWorkEmail(contactId) {
//   const contact = addressBook.findContact(contactId);
//   if (inputtedEmail2 === " ") {
//     $("p.email2").hide();
//   }
// }

// function hideHomeAddress(contactId) {
//   const  = addressBook.findContact(contactId);
//   if (streetAddress2 === " ")
//   $("homeAddress").show();
//   else if (streetAddress)
//   $().show();
//   address2.hide()
// }

// function hideWorkAddress(contactId) {
  
// }


function attachContactListeners() {
  $("ul#contacts").on("click", "li", function() {
    showContact(this.id);   
  });
  $("#buttons").on("click", ".deleteButton", function() {
    addressBook.deleteContact(this.id);
    $("#show-contact").hide();
    displayContactDetails(addressBook);
  });
};

$(document).ready(function() {
  attachContactListeners();
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    const inputtedFirstName = $("input#new-first-name").val();
    const inputtedLastName = $("input#new-last-name").val();
    const inputtedPhoneNumber = $("input#new-phone-number").val();
    const inputtedEmail1 = $("input#new-email1").val();
    const inputtedEmail2 = $("input#new-email2").val();
    const inputtedStreetAddress1 = $("input#new-streetAddress1").val();
    const inputtedCity1 = $("input#new-city1").val();
    const inputtedState1 = $("input#new-state1").val();
    const inputtedZip1 = $("input#new-zip1").val();
    const inputtedStreetAddress2 = $("input#new-streetAddress2").val();
    const inputtedCity2 = $("input#new-city2").val();
    const inputtedState2 = $("input#new-state2").val();
    const inputtedZip2 = $("input#new-zip2").val();
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-phone-number").val("");
    $("input#new-email1").val("");
    $("input#new-email2").val("");
    $("input#new-streetAddress1").val("");
    $("input#new-city1").val("");
    $("input#new-state1").val("");
    $("input#new-zip1").val("");
    $("input#new-streetAddress2").val("");
    $("input#new-city2").val("");
    $("input#new-state2").val("");
    $("input#new-zip2").val("");
    let newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber, inputtedEmail1, inputtedEmail2, inputtedStreetAddress1, inputtedCity1, inputtedState1, inputtedZip1, inputtedStreetAddress2, inputtedCity2, inputtedState2, inputtedZip2);
    addressBook.addContact(newContact);
    displayContactDetails(addressBook);  
  });
});