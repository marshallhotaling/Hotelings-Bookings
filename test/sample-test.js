import chai from 'chai';
const expect = chai.expect;

import {
  hasRoomNumber,
  hasUser,
  seperateName,
  seperateNumber
} from "../src/sharedFunctions"
import {
  basUserObject,
  customerSampleData,
  goodUserName,
  goodUserObject,
  bookingsMockData, bookingsExpectedData
} from '../src/data/customers-sample-data.js'

describe('See if the tests are running', function() {
  it('should return true', function() {
    expect(true).to.equal(true);
  });
});

// Happy Path username parsing.
describe('Check if number is seperated from username', function() {
  it('should return true', function() {
    expect(seperateNumber(goodUserName)).to.equal('8');
  });
});

describe('Check if customer name is seperated from username', function() {
  it('should return true', function() {
    expect(seperateName(goodUserName, '8')).to.equal('Era Hand');
  });
});

describe('Check full username parse flow', function() {
  it('should return true', function() {
    expect(seperateNumber(goodUserName)).to.equal('8');
    let userid = seperateNumber(goodUserName)
    expect(seperateName(goodUserName, userid)).to.equal('Era Hand');
  });
});

// Happy Path user path
describe('Check if we can find the user', function() {
  it('should return data if the user exists', function() {
    let testUser = goodUserObject.name + goodUserObject.id
    let userid = seperateNumber(testUser)
    let username = seperateName(testUser, userid)
    expect(hasUser(customerSampleData, username)).to.deep.equal([goodUserObject]);
  });
});

// Non Happy User Path
describe('Check if we can find the user', function() {
  it('should return false when the user does not exist', function() {
    let testUser = basUserObject.name + goodUserObject.id
    let userid = seperateNumber(testUser)
    let username = seperateName(testUser, userid)
    expect(hasUser(customerSampleData, username)).to.equal(false);
  });
});


// Happy Path find users bookings
describe('Check if we have any bookings', function() {
  it('should return data if there are any bookings for user', function() {
    expect(hasRoomNumber(bookingsMockData, goodUserObject)).to.deep.equal(bookingsExpectedData);
  });
});

// Un happy Path find users bookings
describe('Check if we have any bookings', function() {
  it('should return data false if no bookings for the user', function() {
    expect(hasRoomNumber(bookingsMockData, basUserObject)).to.equal(false);
  });
});