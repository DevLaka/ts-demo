// TS can find obvious Type errors. To add more information to allow TS to detect
// even more issues we can add types to the JS code using the industry standard
// JSDoc syntax. So, we don't have to convert this file to a TS file.

/**
 *
 * @param {number} contactId
 * @returns
 */
async function getContact(contactId) {
  // TS doesn't know jQuery types.
  // Error : Cannot find name '$'. Do you need to install type definitions for jQuery?
  // Try `npm i --save-dev @types/jquery`
  // Fixed -- downloaded open source type definition for jQuery
  // Now, it has auto complete and inline documentation as well.
  const resp = await $.ajax({
    url: `/contacts/${contactId}`,
    dataType: "json",
  });

  return {
    id: +resp.id,
    name: resp.name,
    birthDate: new Date(resp.birthDate),
  };
}

getContact(1).then((contact) => {
  contact.id = "1234"; // obvious type errors
  contact.birthDate = "12/12/1990"; // obvious type errors
});

// Type error found after JSDoc explanation
getContact("2").then((contact) => {
  console.log("Contact: ", JSON.stringify(contact));
});
