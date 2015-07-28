# Web Profile UA Client

A provider agnostic client User Agent library for working with the blockchain-based Web Profile system

## API

### webprofile.setProvider(***ENDPOINT***);

### webprofile.createProfile(***PROFILE_ID***, ***PAYLOAD***);

Create a new Web Profile id on the blockchain and generate a Web Profile object on the datastore.

#### Parameters
***PROFILE_ID*** - *String*: the Web Profile id to preorder and register with the blockchain.
***PAYLOAD*** - *Object*: various preferences for how interaction with the UA service should function
- **factors** - *Object*: the auth factors to require for client-based invocation of Web Profile actions. Minimum of two factors must be provided can be `password`, `pin`, others TBD.

#### Returns

***Promise*** - *Object*: fulfilled when the UA Service successfully preorders, registers, and creates a Web Profile id and linked datastore object

### webprofile.getProfile(***PROFILE_ID***);
***PROFILE_ID*** - *String*: the Web Profile id the user wants to connect a device to.

#### Returns

***Promise*** - *Object*: fulfilled when the UA Service successfully returns the Web Profile linked to the provided Web Profile ID

### webprofile.addDevice(***PROFILE_ID***, ***PAYLOAD***);
***PROFILE_ID*** - *String*: the Web Profile id the user wants to connect a device to.
***PAYLOAD*** - *Object*: required fields that allow a device to be added to the user's Web Profile.
- **key** - *String*: the public key of the new device to add to the Connections object.
- **deviceName** - *String*: the friendly name the user gives to the device.
- **primaryFactor** - *Object*: the primary auth factor required to do escalated writes to the user's Web Profile object.

#### Returns

***Promise*** - *Object*: fulfilled when the UA Service successfully adds the device to the Web Profile of the user.

### webprofile.addRelationship(***PROFILE_ID***, ***PAYLOAD***);
***PROFILE_ID*** - *String*: the Web Profile id the user wants to add to its Connections object
***PAYLOAD*** - *Object*: required fields that allow a device to be added to the user's Web Profile
- **key** - *String*: the public key of the new entity
- **profile** - *String*: the Web Profile id of the entity to add
- **primaryFactor** - *Object*: the primary auth factor required to do escalated writes to the user's Web Profile object.

#### Returns

***Promise*** - *Object*: fulfilled when the UA Service successfully adds the device to the Web Profile of the user

### webprofile.configureProperty(***PROFILE_ID***, ***PAYLOAD***);
***PROFILE_ID*** - *String*: the Web Profile id the user wants to connect a device to
***PAYLOAD*** - *Object*: required fields that allow a device to be added to the user's Web Profile
- **encrypt** - *Boolean*: option to encrypt this field when written by the UA Service
- **value** - *Object*: the initial value for the new field

#### Returns

***Promise*** - *Object*: fulfilled when the UA Service successfully configures the property on the user's Web Profile

### webprofile.setProperty(***PROFILE_ID***, ***PROPERTY***, ***VALUE***);
***PROFILE_ID*** - *String*: the Web Profile id the user wants to connect a device to
***PROPERTY*** - *String*: the property to be set
***VALUE*** - *String*: the value to assign the property

#### Returns

***Promise*** - *Object*: fulfilled when the UA Service successfully updates the property on the user's Web Profile

### webprofile.removeProperty(***PROFILE_ID***, ***PROPERTY***);
***PROFILE_ID*** - *String*: the Web Profile id the user wants to connect a device to
***PROPERTY*** - *String*: the property to be removed

#### Returns

***Promise*** - *Object*: fulfilled when the UA Service successfully removes the property from the user's Web Profile
