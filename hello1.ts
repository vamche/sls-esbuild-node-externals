import * as _ from 'lodash';
import * as openpgp from 'openpgp';

// modern module syntax
export const handler = async (event, context, callback) => {

  // dependencies work as expected
  console.log(_.VERSION);

  // async/await also works out of the box
  await new Promise((resolve) => setTimeout(resolve, 500));

  const message = await openpgp.createMessage({ binary: new Uint8Array([0x01, 0x01, 0x01]) });
  const encrypted = await openpgp.encrypt({
    message, // input as Message object
    passwords: ['secret stuff'], // multiple passwords possible
    armor: false // don't ASCII armor (for Uint8Array output)
  });

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      encryptedMessage: encrypted,
      input: event,
    }),
  };

  callback(null, response);
};
