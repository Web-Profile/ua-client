// import Another from './another';

class WebProfile {
  constructor(options={}) {

  }

  connectProfile(id, provider) {
    new Promise((resolve, reject) => {
      var options = {
        hostname: provider,
        port: 80,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      };

      var request = http.request(options, (response) => {
        response.setEncoding('utf8');
        response.on('data', (chunk) => {
          console.log('BODY: ' + chunk);
          this.id = id;
          resolve(response);
        });
      });

      request.on('error', function(e) {
        console.log('problem with request: ' + e.message);
        reject(e);
      });

      request.write(querystring.stringify({
        'id' : id
      }));

      request.end();
    })
  }

  createProfile(id, payload={}) {

  }
}


export default WebProfile;
