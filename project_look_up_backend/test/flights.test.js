const chai = require('chai');
const crypto = require('crypto');
const chaiHttp = require('chai-http');
const app = require('..');

chai.use(chaiHttp);
const expect = chai.expect;

describe('/api/flights', () => {
  describe('POST /api/flights', () => {
    let requestBody;

    beforeEach(() => {
      requestBody = {
        origin: 'Lodz',
        destination: 'Boston',
        time: '4:00 PM',
        airplane: 'Embraer E145',
        adultSeatCost: '120',
        childrenSeatCost: '80',
        babiesSeatCost: '0',
        trolleyCost: '50',
      };
    });

    function getStringOfLength(len) {
      return new Array(len + 1).join('*');
    }

    function makeRequest() {
      return chai.request(app).post('/api/flights').send(requestBody);
    }

    it('it should return 400 if origin is not provided in the request body', async () => {
      delete requestBody.origin;

      const response = await makeRequest();

      expect(response).to.have.status(400);
    });

    it('it should return 400 if origin is more than 256 characters', async () => {
      requestBody.origin = getStringOfLength(257);

      const response = await makeRequest();

      expect(response).to.have.status(400);
      expect(response.body)
        .to.have.property('message')
        .to.contain(
          '"Origin" length must be less than or equal to 256 characters long'
        );
    });

    it('should return 400 if destination is not provided in the request body', async () => {
      delete requestBody.destination;

      const response = await makeRequest();

      expect(response).to.have.status(400);
      expect(response.body)
        .to.have.property('message')
        .to.contain('"Destination" is required');
    });

    it('it should return 400 if destination is more than 256 characters', async () => {
      requestBody.destination = getStringOfLength(257);

      const response = await makeRequest();

      expect(response).to.have.status(400);
      expect(response.body)
        .to.have.property('message')
        .to.contain(
          '"Destination" length must be less than or equal to 256 characters long'
        );
    });

    it('should return 400 if time is not provided in the request body', async () => {
      delete requestBody.time;

      const response = await makeRequest();

      expect(response).to.have.status(400);
      expect(response.body)
        .to.have.property('message')
        .contain('"Time" is required');
    });

    it('should return 400 if time is more than 256 characters', async () => {
      requestBody.time = getStringOfLength(257);

      const response = await makeRequest();

      expect(response).to.have.status(400);
      expect(response.body)
        .to.have.property('message')
        .contain(
          '"Time" length must be less than or equal to 256 characters long'
        );
    });

    it('should return 400 if airplane is not provided in the request body', async () => {
      delete requestBody.airplane;

      const response = await makeRequest();

      expect(response).to.have.status(400);
      expect(response.body)
        .to.have.property('message')
        .contain('"Airplane" is required');
    });

    it('should return 400 if airplane is more than 64 characters', async () => {
      requestBody.airplane = getStringOfLength(65);

      const response = await makeRequest();

      expect(response).to.have.status(400);
      expect(response.body)
        .to.have.property('message')
        .contain(
          '"Airplane" length must be less than or equal to 64 characters long'
        );
    });

    it('should return 400 if adultSeatCost is not provided in the request body', async () => {
      delete requestBody.adultSeatCost;

      const response = await makeRequest();

      expect(response).to.have.status(400);
      expect(response.body)
        .to.have.property('message')
        .contain('"Adult Seat Cost" is required');
    });

    it('should return 400 if adultSeatCost is more than 64 characters', async () => {
      requestBody.adultSeatCost = getStringOfLength(17);

      const response = await makeRequest();

      expect(response).to.have.status(400);
      expect(response.body)
        .to.have.property('message')
        .contain(
          '"Adult Seat Cost" length must be less than or equal to 16 characters long'
        );
    });

    it('should return 400 if childrenSeatCost is not provided in the request body', async () => {
      delete requestBody.childrenSeatCost;

      const response = await makeRequest();

      expect(response).to.have.status(400);
      expect(response.body)
        .to.have.property('message')
        .contain('"Children Seat Cost" is required');
    });

    it('should return 400 if childrenSeatCost is more than 64 characters', async () => {
      requestBody.childrenSeatCost = getStringOfLength(17);

      const response = await makeRequest();

      expect(response).to.have.status(400);
      expect(response.body)
        .to.have.property('message')
        .contain(
          '"Children Seat Cost" length must be less than or equal to 16 characters long'
        );
    });

    it('should return 400 if trolleyCost is not provided in the request body', async () => {
      delete requestBody.trolleyCost;

      const response = await makeRequest();

      expect(response).to.have.status(400);
      expect(response.body)
        .to.have.property('message')
        .contain('"Trolley Cost" is required');
    });

    it('should return 400 if childrenSeatCost is more than 64 characters', async () => {
      requestBody.trolleyCost = getStringOfLength(17);

      const response = await makeRequest();

      expect(response).to.have.status(400);
      expect(response.body)
        .to.have.property('message')
        .contain(
          '"Trolley Cost" length must be less than or equal to 16 characters long'
        );
    });

    it('sh');
  });
});
