// import Another from './another';

const msUAService = '';
const noop = function(){};

function getRequestOptions(provider){
  return  = {
    hostname: provider,
    port: 80,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };
}

function createPromisoryRequest(obj){

  obj.onData = obj.onData || noop;
  obj.onError = obj.onError || noop;

  new Promise((resolve, reject) => {
    var request = http.request(getRequestOptions(obj.provider), (response) => {
      response.setEncoding('utf8');
      response.on('data', (chunk) => {
        obj.onData(response, chunk);
        resolve(response);
      });
    });

    request.on('error', function(e) {
      console.log('problem with request: ' + e.message);
      obj.onError(e);
      reject(e);
    });

    request.write(querystring.stringify(obj.query));

    request.end();
  });
}

class WebProfile {
  constructor(options={}) {

  }

  connectProfile(id, provider) {
    return createPromisoryRequest({
      provider: provider,
      query: {
        id: id
      },
      onData: (response, chunk) => {
        this.id = id;
        this.provider = payload.provider;
        this.profile = response; // REPLACE THIS
      },
      onError: (error) => {}
    });
  }

  createProfile(id, payload={}) {
    return createPromisoryRequest({
      provider: payload.provider,
      query: {
        id: id,
        primaryFactor: payload.primaryFactor,
        secondaryFactors: payload.secondaryFactors || []
      },
      onData: (response, chunk) => {
        this.id = id;
        this.provider = payload.provider;
        this.profile = response; // REPLACE THIS
      },
      onError: () => {}
    });
  }

  getProfile(id) {
    return createPromisoryRequest({
      provider: msUAService,
      query: {
        id: id,
        primaryFactor: payload.primaryFactor,
        secondaryFactors: payload.secondaryFactors || []
      },
      onData: function(){},
      onError: function(){}
    });
  }

  addDevice(payload) {
    return createPromisoryRequest({
      provider: this.provider,
      query: {
        id: this.id,
        key: payload.key,
        deviceName: payload.deviceName,
        primaryFactor: payload.primaryFactor
      },
      onData: function(){},
      onError: function(){}
    });
  }

  removeDevice(payload) {
    return createPromisoryRequest({
      provider: this.provider,
      query: {
        id: this.id,
        key: payload.key,
        deviceName: payload.deviceName,
        primaryFactor: payload.primaryFactor
      },
      onData: function(){},
      onError: function(){}
    });
  }

  addRelationship(payload) {
    return createPromisoryRequest({
      provider: this.provider,
      query: {
        id: this.id,
        key: payload.key,
        entity: payload.entity,
        primaryFactor: payload.primaryFactor
      },
      onData: function(){},
      onError: function(){}
    });
  }

  removeRelationship(payload) {
    return createPromisoryRequest({
      provider: this.provider,
      query: {
        id: this.id,
        entity: payload.entity,
        primaryFactor: payload.primaryFactor
      },
      onData: function(){},
      onError: function(){}
    });
  }

  configureProperty(property, payload) {
    return createPromisoryRequest({
      provider: this.provider,
      query: {
        id: this.id,
        property, property,
        encrypt: payload.encrypt,
        value: payload.value
      },
      onData: function(){},
      onError: function(){}
    });
  }

  setProperty(property, value) {
    return createPromisoryRequest({
      provider: this.provider,
      query: {
        id: this.id,
        property, property,
        value: value
      },
      onData: function(){},
      onError: function(){}
    });
  }

  removeProperty(property) {
    return createPromisoryRequest({
      provider: this.provider,
      query: {
        id: this.id,
        property, property
      },
      onData: function(){},
      onError: function(){}
    });
  }

}


export default WebProfile;
