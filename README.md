# Web Profile UA Client

A provider agnostic client User Agent library for working with the blockchain-based Web Profile system

## API

### new WebProfile(*OPTIONS*);

The class used to manipulate the user's Web Profile on their behalf.

#### Parameters
***OPTIONS*** - *Object*: options for the new Web Profile manager class instance


### webprofile.connectProfile(*PROFILE_ID*, *PROVIDER*);

Create a new Web Profile id on the blockchain and generate a Web Profile object on the datastore.

#### Parameters
***PROFILE_ID*** - *String*: the Web Profile id to preorder and register with the blockchain.
***PROVIDER*** - *String*: the UA Service Provider URL string the instance will use for transacting Web Profile activities on the user's behalf.

#### Returns

***Promise*** - *Object*: fulfilled when the UA Service successfully connects to the specified Web Profile. The payload resolved in by the Promise will indicate whether or not the profile already existed.

### webprofile.createProfile(*PROFILE_ID*, *PAYLOAD*);

Create a new Web Profile id on the blockchain and generate a Web Profile object on the datastore.

#### Parameters
***PROFILE_ID*** - *String*: the Web Profile id to preorder and register with the blockchain.
***PAYLOAD*** - *Object*: various preferences for how interaction with the UA service should function.
- **primaryFactor** - *Object*: the primary auth factor that is required to connect entities and devices. Can be a `password`, `pin`, others TBD.
- **secondaryFactors** - *Object*: additional auth factors required to regenerate private key. Must pass at lease one secondary factor, but can add more at user election. Secondary factors can be `password`, `pin`, others TBD.

#### Returns

***Promise*** - *Object*: fulfilled when the UA Service successfully preorders, registers, and creates a Web Profile id and linked datastore object.

### webprofile.getProfile(*PROFILE_ID*);

Retrieve the object associated with a provided Web Profile ID.

#### Parameters
***PROFILE_ID*** - *String*: the Web Profile id the user wants to connect a device to.

#### Returns

***Promise*** - *Object*: fulfilled when the UA Service successfully returns the Web Profile linked to the provided Web Profile ID

### webprofile.addDevice(*PAYLOAD*);

Add a new, trusted device to the user's Web Profile.

#### Parameters
***PAYLOAD*** - *Object*: required fields that allow a device to be added to the user's Web Profile.
- **key** - *String*: the public key of the new device to add to the Connections object.
- **deviceName** - *String*: the friendly name the user gives to the device.
- **primaryFactor** - *Object*: the primary auth factor required to do escalated writes to the user's Web Profile object.

#### Returns

***Promise*** - *Object*: fulfilled when the UA Service successfully adds the device to the Web Profile of the user.

### webprofile.removeDevice(*PAYLOAD*);

Remove a device from being able to issue commands and access privileged aspects of a user's Web Profile.

#### Parameters
***PAYLOAD*** - *Object*: required fields that allow a device to be added to the user's Web Profile.
- **key** - *String*: the public key of the new device to add to the Connections object.
- **primaryFactor** - *Object*: the primary auth factor required to do escalated writes to the user's Web Profile object.

#### Returns

***Promise*** - *Object*: fulfilled when the UA Service successfully adds the device to the Web Profile of the user.

### webprofile.addRelationship(*PAYLOAD*);

Add a new entity relationship to the user's Web Profile.

#### Parameters
***PAYLOAD*** - *Object*: required fields that allow a device to be added to the user's Web Profile
- **key** - *String*: the public key of the new entity
- **entity** - *String*: the Web Profile id of the entity to add
- **primaryFactor** - *Object*: the primary auth factor required to do escalated writes to the user's Web Profile object.

#### Returns

***Promise*** - *Object*: fulfilled when the UA Service successfully adds the device to the Web Profile of the user

### webprofile.removeRelationship(*PAYLOAD*);

Remove an entity from having relationship-granted access to, and presence on, the user's Web Profile.

#### Parameters
***PAYLOAD*** - *Object*: required fields that allow a device to be added to the user's Web Profile
- **entity** - *String*: the Web Profile id of the entity to add
- **primaryFactor** - *Object*: the primary auth factor required to do escalated writes to the user's Web Profile object.

#### Returns

***Promise*** - *Object*: fulfilled when the UA Service successfully adds the device to the Web Profile of the user

### webprofile.configureProperty(*PROPERTY*, *PAYLOAD*);

Configure various options specific to a Web Profile property.

#### Parameters
***PROPERTY*** - *String*: the Web Profile property name to be configured.
***PAYLOAD*** - *Object*: required fields that allow a device to be added to the user's Web Profile
- **encrypt** - *Boolean*: option to encrypt this field when written by the UA Service
- **value** - *Object*: the initial value for the new field

#### Returns

***Promise*** - *Object*: fulfilled when the UA Service successfully configures the property on the user's Web Profile

### webprofile.setProperty(*PROPERTY*, *VALUE*);

Set a property of the user's Web Profile.

#### Parameters
***PROPERTY*** - *String*: the property to be set
***VALUE*** - *String*: the value to assign the property

#### Returns

***Promise*** - *Object*: fulfilled when the UA Service successfully updates the property on the user's Web Profile

### webprofile.removeProperty(*PROPERTY*);

Remove a property from the user's Web Profile.

#### Parameters
***PROPERTY*** - *String*: the property to be removed

#### Returns

***Promise*** - *Object*: fulfilled when the UA Service successfully removes the property from the user's Web Profile
